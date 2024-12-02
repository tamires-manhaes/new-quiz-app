import { shuffleArray } from "@/utils/shuffleArray";
import { Difficulty, Question, QuestionsState } from "./types";

export const fetchQuizCategories = async () => {
  const data = (await fetch("https://opentdb.com/api_category.php")).json();

  return data;
};

export const fetchQuiz = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const data = await (
    await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    )
  ).json();

  const result = data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
  return result;
};
