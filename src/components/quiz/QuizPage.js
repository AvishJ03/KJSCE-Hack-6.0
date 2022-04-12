import React from 'react'
import './QuizPage.css'
import Header from '../../MyComponents/Header';
import Footer from '../../MyComponents/Footer';
import { useNavigate } from "react-router-dom";

function QuizPage() {
    const navigate=useNavigate()
    function handleclickquiz(){
        navigate('/quiz')
    }
  return (
    <div className='quiz-page-wrapper'>
        <Header />
        <h1 className='quiz-page-title headingclass' >Quizzes</h1>
        <div className='row'>
            <div className="col-md-6 col-lg-3 cutomclasshetvi">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Sorting Algorithms</h5>
                        <p className="card-text">Practice Sorting Algorithms MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Easy</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Stacks</h5>
                        <p className="card-text">Practice Stacks MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Easy</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Queues</h5>
                        <p className="card-text">Practice Queues MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Medium</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Trees</h5>
                        <p className="card-text">Practice Trees MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Medium</div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Graph</h5>
                        <p className="card-text">Practice Graph MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Difficult</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Hash</h5>
                        <p className="card-text">Practice Hash MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Difficult</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Searching Algorithms</h5>
                        <p className="card-text">Practice Searching Algorithms MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Difficult</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Miscellaneuous</h5>
                        <p className="card-text">Practice Miscellaneuous MCQs here on VLearn which will help you to clear your concepts and also to prepare for technical rounds, interviews, competitive exams etc.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Difficult</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default QuizPage