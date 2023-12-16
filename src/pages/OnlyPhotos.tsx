import React, {useState, useEffect} from 'react';
import { Question, Answer } from '../interfaces/Question';
import { shufleArray } from '../utils/shuffleArr';
import { Button } from '@mui/material';


const BASE_API_URL = import.meta.env.VITE_API_URL;
const QUESTION_ENDPOINTS: string[] = [
    `${BASE_API_URL}/Questions/randomPersonImage`
]

export const OnlyPhotos: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
    const [hasAnswered, setHasAnswered] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>('');

    const fetchQuestions = async (): Promise<void> => {
        setIsLoading(true);
        setSelectedAnswer(null);
        setAnswers([]);
        setImageUrl('');
        setHasAnswered(false);
        const randomPosition = Math.floor(Math.random() * QUESTION_ENDPOINTS.length);
        console.log(`random pos is ${randomPosition}`)
        const randomEndpoint = QUESTION_ENDPOINTS[randomPosition];
        try {
            const response = await fetch(randomEndpoint, {
                method: 'POST'
            });
            if(!response.ok) {
                throw new Error("ups");
            }
            const data: Question = await response.json();
            const allAnswers: Answer[] = [];
            setImageUrl(data.summary);
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
            shufleArray(allAnswers);
            setAnswers(allAnswers)
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
            
        }
        setTimeout(() => {
            fetchQuestions();
        }, 2000);
    }

    if(isLoading) {
        return <h1>is loading..</h1>
    }


    const renderAnswers = (answers: Answer[]) => {
        return answers.map((answer, index) => {
            let style = {}; 
            if(hasAnswered) {
                if(answer.isCorrect) {
                    style = {backgroundColor: 'green', color: 'white'}; 
                }else {
                    style=  {backgroundColor: 'red', color: 'white'}; 
                }
            }
            return (
                <Button 
                    key={index}
                    onClick={() => handleAnswer(answer)}
                    style={style}
                    variant='contained'
                    disabled={hasAnswered}
                >
                    {answer.answer}
                </Button>
            )
        });
    };
    

    return (
        <div>
            {currentQuestion && (
                <>
                    {imageUrl && <img src={imageUrl} alt={currentQuestion.name}/>}
                    {!imageUrl && <h2>{currentQuestion.summary}</h2>}
                    <div>{renderAnswers(answers)}</div>
                </>
            )}
        </div>
    )
};

export default OnlyPhotos;