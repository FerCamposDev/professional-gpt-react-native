import { Configuration, OpenAIApi } from "openai";

import useAlert from "./useAlert";

const getConfig = (apiKey: string) => {
  return new Configuration({
    // organization: "org-xEOeLYSO4RCES9CnD878jziJ",
    apiKey,
  });
};

const useOpenAI = (apiKey: string) => {
  const alert = useAlert();
  const openai = new OpenAIApi(getConfig(apiKey));

  const createChat = async (message: string) => {
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
      });
      console.log("response :>> ", response.data);
      response.data.choices.map((res) => {
        console.log("AI: ", res.message);
      });
      return response.data.choices.map((res) => res.message);
    } catch (error) {
      alert.unknownError(error);
      console.error("### create completion error :>> ", error);
    }
  };

  return {
    createChat,
  };
};

export default useOpenAI;
