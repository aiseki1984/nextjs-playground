// pages/typing-game.tsx
import React, { useState, useEffect, useRef, ReactElement } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

const sentences = [
  "It was a beautiful day.",
  "It was a calm day today.",
  "Not a cloud in the sky.",
  "It was a bit cloud.",
  "It's getting cloud.",
  "We have had a cloudy week.",
  "The weather was overcast.",
  "A Rainy day makes me depressed.",
  "It looks like rain.",
  "It has been raining a lot lately.",
];

const TypingGame = () => {
  const [currentSentence, setCurrentSentence] = useState("");
  const [typedText, setTypedText] = useState("");
  const [completedSentences, setCompletedSentences] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentSentence(getRandomSentence());
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setTypedText(inputValue);

    if (inputValue.toLowerCase() === currentSentence.toLowerCase()) {
      setTypedText("");
      setCurrentSentence(getRandomSentence());
      setCompletedSentences(completedSentences + 1);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Typing Game</title>
      </Head>
      <div className="w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold">Typing Game</h1>
        <p className="mb-4 text-sm text-gray-500">
          Type the following sentence:
        </p>
        <p className="mb-4 text-lg font-semibold">{currentSentence}</p>
        <input
          ref={inputRef}
          type="text"
          value={typedText}
          onChange={handleInputChange}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
        <p className="text-sm text-gray-500">
          Completed Sentences: {completedSentences}
        </p>
      </div>
    </div>
  );
};

export default TypingGame;

TypingGame.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="TypingGame">{page}</Layout>;
};
