import React, {useState, useEffect} from 'react';
import { Question, Answer } from '../interfaces/Question';
import { shufleArray } from '../utils/shuffleArr';


const BASE_API_URL = import.meta.env.VITE_API_URL;
const QUESTION_ENDPOINTS: string[] = [
    `${BASE_API_URL}/Questions/randomPersonSumary`, 
    `${BASE_API_URL}/Questions/randomPersonImage`
]

export const PracticeGame: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
    const [hasAnswered, setHasAnswered] = useState<boolean>(false);

    const fetchQuestions = async (): Promise<void> => {
        setIsLoading(true);
        setSelectedAnswer(null);
        setAnswers([]);
       //const randomEndpoint = QUESTION_ENDPOINTS[Math.floor(Math.random() * QUESTION_ENDPOINTS.length)];
       const randomEndpoint = QUESTION_ENDPOINTS[0];
        try {
            const response = await fetch(randomEndpoint, {
                method: 'POST'
            });
            if(!response.ok) {
                throw new Error("ups");
            }
            const data: Question = await response.json();
            const allAnswers: Answer[] = [];
            allAnswers.push({
                answer: data.name, 
                isCorrect: true
            })
            data.otherPeople.forEach((otherPerson) => {
                allAnswers.push({
                    answer: otherPerson, 
                    isCorrect: false
                })
            })
            setCurrentQuestion(data);
            setAnswers(allAnswers)
            shufleArray(allAnswers);
            console.log(allAnswers);
            console.log(data);
        } catch(error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleAnswer = (answer: Answer): void => {
        setSelectedAnswer(answer);
        setHasAnswered(true);
        if(answer.isCorrect) {
            console.log('bravo');
        }
        else {
            console.log('no');
            return;
        }
        setTimeout(() => {
            fetchQuestions();
        }, 1000);
    }

    if(isLoading) {
        return <h1>is loading..</h1>
    }


    const renderAnswers = (answers: Answer[]) => {
        answers = shufleArray(answers);
        return answers.map((answer, index) => (
            <button
                key={index}
                onClick={() => handleAnswer(answer)}
            >
                {answer.answer}
            </button>
        ));
    };
    

    return (
        <div>
            {currentQuestion && (
                <>
                    <h2>{currentQuestion.summary}</h2>
                    <div>{renderAnswers(answers)}</div>
                </>
            )}
        </div>
    )
};

export default PracticeGame;
