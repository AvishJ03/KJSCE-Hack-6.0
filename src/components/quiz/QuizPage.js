import React from 'react'
import './QuizPage.css'
import Header from '../../MyComponents/Header';
import Footer from '../../MyComponents/Footer';
import { BrowserRouter, Route, NavLink, Link, useNavigate } from "react-router-dom";

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
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><button className="btn btn-primary btn-hetvi" onClick={handleclickquiz}>Take Test</button>
                    </div>
                    <div className="card-footer text-muted">Last updated 5 min ago</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default QuizPage