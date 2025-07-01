import type { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { streamText } from "ai"; // if you want to stream the response (optional)

const GEMINI_KEY = process.env.GOOGLE_API_KEY!; // ensure it exists (or add fallback)

const google = new GoogleGenAI({
  apiKey: GEMINI_KEY,
});

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log("response data", res);

  const query: String = res.query;

  const relevantData: String =
    "I'm a recent graduate from hunter college. I have a bachelors in computer science with a minor in math. I'm currently working with TipTop technologies as\
a software engineer. I'm a full stack egnineer with a focus in Natual language processing and sentiment analsysis. Some of the technologies I use are react, flask, fastpai, nextjs, golang, docker and aws\
 I'm currently working on a passion project as well called csphere to help people stay ontop of their bookmarks and have them \
actually revisit them rather then pilling them up. I gym, run, like to explore coffee chops around nyc. Kinda of a coffee adict so if you lvoe coffee we'll get along just fine.\
My inetrest align in development and ai as I've always been fascinated by ai when I was growing up. I'm open to any jobs within the tech sector and would love to \
have a quick chat to see if a potential role aligns with my career intrests. For now I'm just going with the flow, making myself 1 percent better day by day until I become the\
engineer that I know I can become. Some of my favorite shows include one piece, suits, and any drama show ou can imagine";

  const prompt = `You are a smart agent. A question would be asked to you and relevant information would be provided.\
    Your task is to answer the question and use the information provided. Question - ${query}. Relevant Information about crosve lucero - ${relevantData}. You may also use \
    any addional information you may find on the web to help you answer the question as well. Also answer the questions(s) like it were any regular conversation and sounds enthustiastic as well \
        Don't start off by saying 'based on the info provided' or anything like that.`;
  console.log("prompting llm");
  const response = await google.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: prompt,
  });
  console.log("reponse: ", response);
  const text: String | undefined = response.text;
  console.log("repsonse form llm: ", text);

  return Response.json({ text: text });
}
