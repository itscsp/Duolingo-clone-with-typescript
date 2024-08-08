/// <reference types="vite/client" />

type LangType = 'kn'|'hi'|'es'|'fr';

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
  