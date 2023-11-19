import Answer from "./Answer.ts";

interface Question {
    question: string;
    answers: Answer[];
}

interface QuizData {
    questions: Question[];
}

export default QuizData;
