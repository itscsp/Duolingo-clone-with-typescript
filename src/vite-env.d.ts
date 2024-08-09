/// <reference types="vite/client" />

type LangType = 'kn'|'ta'|'te'|'ml';

type WordType = {
    word: string;
    meaning: string;
    options: string[];
  };
  
  interface StateType {
    loading: boolean;
    result: string[];
    words: WordType[];
    error?: string;
  }
  

  type FeatchedDataType = {
    translations: {
      text:string
    }[]
  }