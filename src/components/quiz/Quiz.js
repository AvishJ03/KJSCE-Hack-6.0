import React, { useState } from 'react';
import './Quiz.css'

const Quiz = () => {
    const questions = [
		{
			questionText: 'Which of the following is not a stable sorting algorithm in its typical implementation.',
			answerOptions: [
				{ answerText: 'Insertion Sort', isCorrect: false },
				{ answerText: 'Merge Sort', isCorrect: false },
				{ answerText: 'Quick Sort', isCorrect: true },
				{ answerText: 'Bubble Sort', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following sorting algorithms in its typical implementation gives best performance when applied on an array which is sorted or almost sorted',
			answerOptions: [
				{ answerText: 'Quick sort', isCorrect: false },
				{ answerText: 'Insertion sort', isCorrect: true },
				{ answerText: 'Heap sort', isCorrect: false },
				{ answerText: 'Merge sort', isCorrect: false },
			],
		},
		{
			questionText: 'Given an unsorted array. The array has this property that every element in array is at most k distance from its position in sorted array where k is a positive integer smaller than size of array. Which sorting algorithm can be easily modified for sorting this array and what is the obtainable time complexity?',
			answerOptions: [
				{ answerText: 'Heap Sort with time complexity O(nLogk)', isCorrect: true },
				{ answerText: 'Insertion Sort with time complexity O(kn)', isCorrect: false },
				{ answerText: 'Quick Sort with time complexity O(kLogk)', isCorrect: false },
				{ answerText: 'Merge Sort with time complexity O(kLogk)', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not true about comparison based sorting algorithms?',
			answerOptions: [
				{ answerText: 'The minimum possible time complexity of a comparison based sorting algorithm is O(nLogn) for a random input array', isCorrect: false },
				{ answerText: '	Any comparison based sorting algorithm can be made stable by using position as a criteria when two elements are compared', isCorrect: false },
				{ answerText: 'Counting Sort is not a comparison based sorting algorithm', isCorrect: false },
				{ answerText: 'Heap Sort is not a comparison based sorting algorithm.', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <div className='quiz-app' >{showScore ? (
        <div className='score-section'>
            You scored {score} out of {questions.length}
        </div>
    ) : (
        <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </>
    )}</div>
  )
}

export default Quiz