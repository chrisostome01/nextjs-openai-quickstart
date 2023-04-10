import openai from "@/config/openai";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string;
};

/**
 * Handles the API request and generates text completion using OpenAI's Davinci model.
 *
 * @function
 * @async
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse<Data>} res - The Next.js API response object.
 * @returns {Promise<void>}
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  /**
   * Use OpenAI's createCompletion method to generate text completion
   * @date 4/10/2023 - 3:55:15 PM
   *
   * @type {*}
   */

  /**
   * model: You can use [ text-curie-001, text-babbage-001, text-ada-001, text-davinci-002, davinci,... ]
   * prompt: Pass the prompt message here.
   * max_tokens: Set the maximum number of tokens for the completion.
   * temperature: Set the temperature for text generation
   * @date 4/10/2023 - 3:57:17 PM
   *
   * @type {{ model: string; prompt: any; max_tokens: any; temperature: any; }}
   */

  const response = await openai.createCompletion({
    model: "text-curie-001", // Use the Davinci model for text completion text-curie-001 
    prompt: req.body.prompt ?? "OpenAPI could help developers", // Use the request body for the prompt
    max_tokens: Number(req.body.maxTokens ?? 50), // Set the maximum number of tokens for the completion
    temperature: Number(req.body.temperature ?? 0), // Set the temperature for text generation
  });

  // Send the generated text as the API response
  res.status(200).json({ response: response.data.choices[0].text as string });
}
