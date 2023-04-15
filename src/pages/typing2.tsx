// pages/typing-game.tsx
import React, { useState, useEffect, useRef, ReactElement } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Transition } from "@headlessui/react";

const sentences = [
  { en: "It was a beautiful day.", jp: "いいお天気でした。" },
  { en: "It was a calm day today.", jp: "今日は穏やかな一日でした。" },
  { en: "Not a cloud in the sky.", jp: "雲ひとつない空です。" },
  { en: "It was a bit cloud.", jp: "ちょっと曇り空でした。" },
  { en: "It's getting cloud.", jp: "曇ってきました。" },
];

const EnglishStudy = () => {
  const [currentPair, setCurrentPair] = useState(sentences[0]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null as boolean | null);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(isCorrect);

  useEffect(() => {
    setCurrentPair(getRandomPair());
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function getRandomPair() {
    return sentences[Math.floor(Math.random() * sentences.length)];
  }

  function removePunctuation(text: string): string {
    return text.replace(/[.!?']/g, "");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const inputValue = inputRef.current?.value || "";

      const isAnswerCorrect =
        removePunctuation(inputValue.toLowerCase()) ===
        removePunctuation(currentPair.en.toLowerCase());
      setIsCorrect(isAnswerCorrect);

      if (isAnswerCorrect) {
        inputRef.current!.value = "";
        setShowCorrectAnswer(false);
        setCurrentPair(getRandomPair());
      } else {
        setShowCorrectAnswer(true);
      }

      setTimeout(() => {
        if (isCorrect === true) {
          setIsCorrect(null);
        }
      }, 2000);
    } else if (e.key === "u" && e.ctrlKey) {
      e.preventDefault();
      inputRef.current!.value = "";
      inputRef.current!.focus();
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>English Study</title>
      </Head>
      <div className="w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold">English Study</h1>
        <p className="mb-4 text-sm text-gray-500">
          Translate the following sentence (Press Enter to check):
        </p>
        <p className="mb-2 text-lg font-semibold">{currentPair.jp}</p>
        {showCorrectAnswer && (
          <p className="text-sm text-gray-600">{currentPair.en}</p>
        )}
        <div className="mt-4 mb-4">
          <input
            ref={inputRef}
            type="text"
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Type the English sentence here..."
            onKeyDown={handleKeyDown}
          />
        </div>
        <Transition
          show={isCorrect !== null}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-0"
          leaveFrom="opacity-0"
          leaveTo="opacity-0"
        >
          <p
            className={`mb-4 text-lg font-semibold ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect ? "Correct!" : "Incorrect. Please try again."}
          </p>
        </Transition>
      </div>
    </div>
  );
};

export default EnglishStudy;

EnglishStudy.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="EnglishStudy">{page}</Layout>;
};
