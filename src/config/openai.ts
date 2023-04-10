import { Configuration, OpenAIApi } from "openai";

/**
 * Configuration object for OpenAI API.
 * @type {Configuration}
 */
export const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Set the API key from environment variable
});

/**
 * OpenAI API instance.
 * @type {OpenAIApi}
 */
const openai = new OpenAIApi(configuration);

export default openai;
