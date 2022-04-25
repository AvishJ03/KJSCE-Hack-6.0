import Header from "../../MyComponents/Header";
import Footer from "../../MyComponents/Footer";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../utils/init-firebase";

import React, { useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const Quiz = () => {
  const navigate = useNavigate();

  const questions = [
    {
      questionText:
        "Which of the following is not a stable sorting algorithm in its typical implementation.",
      answerOptions: [
        { answerText: "Insertion Sort", isCorrect: false },
        { answerText: "Merge Sort", isCorrect: false },
        { answerText: "Quick Sort", isCorrect: true },
        { answerText: "Bubble Sort", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following sorting algorithms in its typical implementation gives best performance when applied on an array which is sorted or almost sorted",
      answerOptions: [
        { answerText: "Quick sort", isCorrect: false },
        { answerText: "Insertion sort", isCorrect: true },
        { answerText: "Heap sort", isCorrect: false },
        { answerText: "Merge sort", isCorrect: false },
      ],
    },
    {
      questionText:
        "Given an unsorted array. The array has this property that every element in array is at most k distance from its position in sorted array where k is a positive integer smaller than size of array. Which sorting algorithm can be easily modified for sorting this array and what is the obtainable time complexity?",
      answerOptions: [
        {
          answerText: "Heap Sort with time complexity O(nLogk)",
          isCorrect: true,
        },
        {
          answerText: "Insertion Sort with time complexity O(kn)",
          isCorrect: false,
        },
        {
          answerText: "Quick Sort with time complexity O(kLogk)",
          isCorrect: false,
        },
        {
          answerText: "Merge Sort with time complexity O(kLogk)",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which of the following is not true about comparison based sorting algorithms?",
      answerOptions: [
        {
          answerText:
            "The minimum possible time complexity of a comparison based sorting algorithm is O(nLogn) for a random input array",
          isCorrect: false,
        },
        {
          answerText:
            "	Any comparison based sorting algorithm can be made stable by using position as a criteria when two elements are compared",
          isCorrect: false,
        },
        {
          answerText:
            "Counting Sort is not a comparison based sorting algorithm",
          isCorrect: false,
        },
        {
          answerText: "Heap Sort is not a comparison based sorting algorithm.",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scoree, setScore] = useState(0);
  var arr = [];
  const { currentUser } = useAuth();
  const uid = currentUser?.uid;

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(scoree + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const AddScore = async () => {
    const getUser = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "users", userID);
        const docSnap = await getDoc(userDoc);
        let temp = docSnap.data().score;
        temp.push(scoree);
        // console.log(temp);
        arr = temp;
        console.log(arr);
      } catch (error) {
        console.log(error);
      }
    };
    const updateLevel = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "users", userID);
        const newField = { score: arr };
        console.log(newField);
        await updateDoc(userDoc, newField);
      } catch (error) {
        console.log(error);
      }
    };
    await getUser();
    await updateLevel();
  };
  function handleHome(e) {
    e.preventDefault();
    AddScore();
    navigate("/quizlets");
  }
  return (
    <div>
      <Header />
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            You scored {scoree} out of {questions.length}
            <button className="go-back" onClick={handleHome}>
              Go Back
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="option-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnswerOptionClick(answerOption.isCorrect);
                  }}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
