import React, { useState } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import AnswerFeedback from "./AnswerFeedback";
import "../App.css";

const QuizApp = () => {
    const quizData = [
        {
            question: "What is the capital of Ebonyi State?",
            options: ["Abakaliki", "Afikpo", "Ishielu", "Izzi"],
            correct: "Abakaliki",
        },
        {
            question: "What is the capital of Kwara Sate?",
            options: ["Ilorin", "Jebba", "Patigi", "Lafiaji"],
            correct: "Ilorin",
        },
        {
            question: "What is the capital of Taraba State?",
            options: ["Takum", "Wukari", "Jalingo", "Gembu"],
            correct: "Jalingo",
        },
        {
            question: "What is the capital of Abia State?",
            options: ["Arochukwu", "Umuahia", "Abiriba", "Isiala Ngwa"],
            correct: "Umuahia",
        },
        {
            question: "What is the capital of Rivers State?",
            options: ["Ikere Ekiti", "Ikole Ekiti", "Ilawe Ekiti", "Ado Ekiti"],
            correct: "Ado Ekiti",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [quizEnded, setQuizEnded] = useState(false);

    const handleAnswer = (selected) => {
        const correctAnswer = quizData[currentQuestion].correct;
        if (selected === correctAnswer) {
            setScore(score + 1);
            setFeedback("Correct!");
        } else {
            setFeedback(`Wrong! Correct answer: ${correctAnswer}`);
        }

        setTimeout(() => {
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
                setFeedback("");
            } else {
                setQuizEnded(true);
            }
        }, 1200);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setFeedback("");
        setQuizEnded(false);
    };

    return (
        <div className="quiz-container">
            <h1>Nigerian States Quiz</h1>
            <ScoreBoard score={score} total={quizData.length} />

            {!quizEnded ? (
                <>
                    <Question
                        data={quizData[currentQuestion]}
                        number={currentQuestion + 1}
                        total={quizData.length}
                        onAnswer={handleAnswer}
                    />
                    <AnswerFeedback feedback={feedback} />
                </>
            ) : (
                <div className="quiz-end">
                    <h2>Quiz Completed</h2>
                    <p>
                        Final Score: <strong>{score}</strong> / {quizData.length}
                    </p>
                    <button className="restart-btn" onClick={restartQuiz}>
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizApp;