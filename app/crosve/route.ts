// import { Pinecone } from "@pinecone-database/pinecone";
// // import OpenAI from "openai"; // No longer needed
// import { streamText } from "ai";
// import { google } from "@ai-sdk/google";

// // 1. Pinecone setup
// const pinecone = new Pinecone({
//   apiKey: process.env.PINECONE_API_KEY!,
// });
// const index = pinecone.index("portfolio");

// // No longer need OpenAI setup
// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY!,
// // });

// // 3. Embed query using Google's Generative AI API
// async function embedText(text: string): Promise<number[]> {
//   const apiKey = process.env.GOOGLE_API_KEY!; // Ensure your Google API Key is set
//   const modelName = "text-embedding-004"; // Using a modern Google embedding model

//   try {
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:embedContent?key=${apiKey}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           content: {
//             parts: [{ text: text }],
//           },
//         }),
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(
//         `Google Embeddings API error: ${response.status} - ${errorData.error.message}`
//       );
//     }

//     const data = await response.json();
//     console.log("Raw Google Embeddings API response data:", data); // Log the raw response for debugging

//     let embedding: number[] | undefined;
//     console.log("hereee");

//     // Try to extract embedding from common response structures
//     if (data.embedding && data.embedding.value) {
//       embedding = data.embedding.value;
//     } else if (
//       data.embeddings &&
//       Array.isArray(data.embeddings) &&
//       data.embeddings.length > 0 &&
//       data.embeddings[0].value
//     ) {
//       // This is sometimes the structure for batch embeddings, but worth checking
//       embedding = data.embeddings[0].value;
//     }

//     if (embedding) {
//       return embedding;
//     } else {
//       throw new Error(
//         "Unexpected response structure from Google Embeddings API: No 'embedding.value' or 'embeddings[0].value' found."
//       );
//     }
//   } catch (error) {
//     console.error("Error embedding text with Google API:", error);
//     throw error; // Re-throw to be handled by the caller
//   }
// }

// // 4. Retrieve context from Pinecone
// async function getContextForQuery(query: string): Promise<string> {
//   const embedded = await embedText(query);

//   const results = await index.query({
//     topK: 10,
//     vector: embedded,
//     includeMetadata: true,
//   });

//   const contextChunks = results.matches
//     .slice(0, 4)
//     .map((match) => match.metadata?.chunk_text || "");
//   return contextChunks.join("\n---\n");
// }

// // 5. POST /api/chat
// export async function POST(req: Request) {
//   const { query } = await req.json();

//   if (!query) {
//     return new Response(JSON.stringify({ error: "Missing query" }), {
//       status: 400,
//     });
//   }

//   try {
//     const context = await getContextForQuery(query);

//     const prompt = `
// You are a helpful assistant. Use the following context to answer the question.

// Context:
// ${context}

// Question:
// ${query}
// `;

//     const { textStream } = await streamText({
//       model: google("models/gemini-2.0-flash"),
//       prompt,
//     });

//     for await (const textPart of textStream) {
//       process.stdout.write(textPart);
//     }
//   } catch (err: any) {
//     console.error("Error:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }
