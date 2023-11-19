import React, {useState, useEffect} from 'react';
import '../styles/Mode.css';
import '../styles/Game.css';
import Header from '../components/Header';
import QuizData from '../interfaces/QuizData';
import Answer from '../interfaces/Answer';


export const PracticeGame: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        fetch('./mockup.json')
            .then((response) => response.json())
            .then((data: QuizData) => setQuizData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (selectedButton !== null) {
            timer = setTimeout(() => {
                handleNextQuestion();
            }, 3000);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [selectedButton]);

    const handleClick = (buttonId: string) => {
        setSelectedButton(buttonId);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % (quizData?.questions.length || 0));
        setSelectedButton(null);
    };

    if (!quizData || !quizData.questions) {
        return <div>Loading...</div>;
    }

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isAnswerCorrect = (answer: Answer) =>
        selectedButton === answer.letter && answer.is_correct;

    return (
        <div className="game-container">
            <Header/>
            <div className="game-main">
                <h1>{currentQuestion.question}</h1>
                <div className="mode-buttons">
                    {[...Array(2).keys()].map((row) => (
                        <div key={row} className="button-row">
                            {currentQuestion.answers.slice(row * 2, (row + 1) * 2).map((answer: Answer) => (
                                <button
                                    key={answer.letter}
                                    className={`mode-button ${
                                        selectedButton === answer.letter
                                            ? isAnswerCorrect(answer) ? 'selected-right' : 'selected-wrong'
                                            : ''
                                    }`}
                                    onClick={() => handleClick(answer.letter)}
                                    disabled={selectedButton !== null}>
                                    {`${answer.letter || ''}${answer.text || ''}`}
                                    {selectedButton === answer.letter && (
                                        <span className={isAnswerCorrect(answer) ? 'checkmark' : 'mark'}>
                                            {isAnswerCorrect(answer) ? '✓' : '✗'}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PracticeGame;
