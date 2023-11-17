import React, {useState, useEffect} from 'react';
import '../styles/Mode.css';
import '../styles/Game.css';
import Header from '../components/Header';

export const NormalGame: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [quizData, setQuizData] = useState<any | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        fetch('./mockup.json')
            .then((response) => response.json())
            .then((data) => setQuizData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        // If an answer is selected, set a timeout to go to the next question after 30 seconds
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (selectedButton !== null) {
            timer = setTimeout(() => {
                handleNextQuestion();
            }, 3000);
        }
        return () => {
            if (timer) clearTimeout(timer); // Clear the timeout if the component is unmounted
        };
    }, [selectedButton]);

    const handleClick = (buttonId: string) => {
        setSelectedButton(buttonId);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % quizData.questions.length);
        setSelectedButton(null);
    };

    if (!quizData || !quizData.questions) {
        return <div>Loading...</div>;
    }

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isAnswerCorrect = (answer: any) => selectedButton === answer.letter && answer.is_correct;

    return (
        <div className="game-container">
            <Header/>
            <div className="game-main">
                <h1>{currentQuestion.question}</h1>
                <div className="mode-buttons">
                    {[...Array(2).keys()].map(row => (
                        <div key={row} className="button-row">
                            {currentQuestion.answers.slice(row * 2, (row + 1) * 2).map((answer: any) => (
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
                                        <span className={isAnswerCorrect(answer) ? "checkmark" : "mark"}>
                                                {isAnswerCorrect(answer) ? '✓' : '✗'}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="score-time">
                    <p>Score: {"120"}</p>
                    <p>Time left: {"0.55"}</p>
                </div>
            </div>
        </div>
    );
};

export default NormalGame;
