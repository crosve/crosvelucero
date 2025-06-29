// import { Pinecone } from "@pinecone-database/pinecone";

// // You need to provide an embedding function

// const pc = new Pinecone({
//   apiKey: process.env.PINECONE_API_KEY!,
//   maxRetries: 5,
// });

// const index = pc.index("portfolio");

// async function embedText(text: string): Promise<number[]> {
//   const res = await openai.embeddings.create({
//     model: "text-embedding-3-small", // or "text-embedding-ada-002"
//     input: text,
//   });
//   return res.data[0].embedding;
// }

// export async function getContextForQuery(query: string): Promise<string> {
//   // Step 1: Embed the query using your preferred model (OpenAI, HuggingFace, etc.)
//   const embeddedQuery: number[] = await embedText(query);

//   // Step 2: Query Pinecone with the embedded vector
//   const queryResponse = await index.query({
//     topK: 10,
//     vector: embeddedQuery,
//     includeMetadata: true,
//   });

//   // Step 3: (Optional) Apply your own reranker logic here
//   // For now, we’ll just use the top 4 results directly
//   const content: string[] = [];

//   queryResponse.matches.slice(0, 4).forEach((match) => {
//     const chunk = match.metadata?.chunk_text;
//     const id = match.id;
//     const score = match.score?.toFixed(4);

//     if (chunk) content.push(chunk);

//     console.log(`id: ${id}, score: ${score}, text: ${chunk}\n`);
//   });

//   return content.join("\n---\n");
// }
