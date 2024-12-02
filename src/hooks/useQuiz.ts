import { fetchQuiz } from "@/services";
import { Difficulty, QuestionsState } from "@/services/types";
import { useState } from "react";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export const useQuiz = () => {
  const TOTAL_QUESTIONS = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return {
    loading,
    setLoading,
    userAnswers,
    setUserAnswers,
    score,
    setScore,
    startQuiz,
    checkAnswer,
    nextQuestion,
  };
};
