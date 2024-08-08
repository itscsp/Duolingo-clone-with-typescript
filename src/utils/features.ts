import axios from "axios";
import { generate } from "random-words";

export const translateWords = async (params: LangType) => {
  try {
    const words = generate(8).map((i) => ({
      Text: i,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
            "Content-Type": "application/json",
          "x-rapidapi-key":
            "426c8d86fcmshc5184fbe8e10759p1b1698jsn98c016490877",
          "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
    throw new Error("Some Error");
  }
};
