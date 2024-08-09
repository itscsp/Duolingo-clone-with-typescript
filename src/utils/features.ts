import axios from "axios";
import _ from "lodash";
import { generate } from "random-words";

const generateMCQ = (
  meaning: {
    Text: string;
  }[],
  index: number
): string[] => {
  const correctAnswer: string = meaning[index].Text;
  //An Array with all words except fro correct answer
  const allMeaningExceptForCorrect = meaning.filter(
    (i) => i.Text !== correctAnswer
  );

  // Randomly generating 3 elements from incorrectArray
  const incorrectOptions: string[] = _.sampleSize(
    allMeaningExceptForCorrect,
    3
  ).map((i) => i.Text);

  const mcqOptions = _.shuffle([...incorrectOptions, correctAnswer]);

  return mcqOptions;
};

export const translateWords = async (params: LangType): Promise<WordType[]> => {
  const key = import.meta.env.VITE_TRANSLATION_KEY;


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
          key,
          "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const receive: FeatchedDataType[] = response.data;

    const arr: WordType[] = receive.map((i, index) => {
      const options: string[] = generateMCQ(words, index);

      return {
        word: i.translations[0].text,
        meaning: words[index].Text,
        options: options,
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Some Error");
  }
};

export const countMatchElements = (arr1: string[], arr2: string[]): number => {
  if (arr1.length !== arr2.length) throw new Error("Array are not equal");

  let matchingCount = 0;

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] === arr2[index]) matchingCount++;
  }
  return matchingCount;
};

export const fetchAudio = async (
  text: string,
  language: LangType
): Promise<string> => {
  const key = import.meta.env.VITE_TEXT_TO_SPEECH_API;
  const rapidKey = import.meta.env.VITE_RAPID_API;

  const encodedParams = new URLSearchParams({
    src: text,
    hl: language,
    r: "0",
    c: "mp3",
    f: "8khz_8bit_mono",
    b64: "true",
  });

  if (language === "ta") encodedParams.set("hl", "ta-IN");
  else if (language === "ml") encodedParams.set("hl", "ml-IN");
  else if (language === "te") encodedParams.set("hl", "te-IN");
  else encodedParams.set("hl", "hi-IN");
  

  const { data }: { data: string } = await axios.post(
    "https://voicerss-text-to-speech.p.rapidapi.com/",
    encodedParams,
    {
      params: {
        key,
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": rapidKey,
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
    }
  );

  return data;
};
