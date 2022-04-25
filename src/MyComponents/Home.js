import "./Home.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import banner_img from "../images/title-img.png";
import news from "../images/news.png";
import logo_concept from "../images/logo-no-bg.png";
import gif from "../images/imageedit_2_4114114697.gif";
import Chatbot from "../components/Chatbot/Chatbot";
import { ethers } from "ethers";

function Home() {
  const [amount, setAmount] = useState(0.01);
  const [destinationAddress, setDestinationAddress] = useState(
    "0x6bf235032fc4a7C05092059A5e92A5f80316237d"
  );
  const startPayment = async (event) => {
    console.log(amount, destinationAddress);

    event.preventDefault();

    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(destinationAddress);
      const transactionResponse = await signer.sendTransaction({
        to: destinationAddress,
        value: ethers.utils.parseEther(amount.toString()),
      });
      console.log({ transactionResponse });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <Header />
{/*       <div className="chatbot">
        <Chatbot />
      </div> */}
      <div className="wrapper">
        <section className="banner bg-1" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-8 align-self-center">
                <div className="content-block">
                  <h1 className="home-text">
                    <span>V</span>
                    <span>L</span>
                    <span>e</span>
                    <span>a</span>
                    <span>r</span>
                    <span>n</span>
                  </h1>
                  <h5>"Discover the new way of learning"</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="image-block">
                  <img
                    className="img-fluid phone-thumb"
                    src={gif}
                    alt="iphone-banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section bg-2" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center text-center">
                <div className="image-block">
                  <img
                    className="phone-thumb-md img-fluid"
                    src={banner_img}
                    alt="iphone-feature"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
                <div className="about-block">
                  <div className="about-item">
                    <div className="content">
                      <h5>Designed to deliver results</h5>
                      <p>
                        The expert teacher explains and teaches topics in-depth
                        ensuring conceptual clarity. The second teacher
                        facilitates a class of 20 and pays attention to
                        individual student’s needs making the sessions
                        interactive and engaging
                      </p>
                    </div>
                  </div>
                  <div className="about-item active">
                    <div className="content">
                      <h5>Structured to learn-practice-revise</h5>
                      <p>
                        The expert teacher teaches concepts using strong visuals
                        and storytelling. The second teacher solves doubts
                        instantly, conducts tests and assigns homework
                      </p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="content">
                      <h5>Individual Knowledge Graph</h5>
                      <p>
                        Every class is carefully designed by experts with
                        methods that are proven to give results. Classes are
                        structured to help students not just learn concepts but
                        also practice and revise them
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section feature" id="feature">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Website Features</h2>
                  <p>
                    VLearn is on a mission to nurture the future of the next
                    generation and AI plays a major role in it
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-elipse">
              <div className="col-lg-4 align-self-center text-center text-lg-right">
                <div className="feature-item">
                  <div className="content">
                    <h5>Homework</h5>
                    <p>
                      Worksheets, class notes and practice through VLearn's -
                      The Learning App
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="content">
                    <h5>Testing</h5>
                    <p>
                      Monthly subjective and objective tests covering the full
                      syllabus and test discussions
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="feature-item mb-0">
                  <div className="content">
                    <h5>Reporting</h5>
                    <p>Monthly report cards and completion rates</p>
                  </div>
                </div>
                <div className="app-screen">
                  <img
                    className="img-fluid"
                    src={logo_concept}
                    alt="app-screen"
                  />
                </div>
                <div className="feature-item">
                  <div className="content">
                    <h5>Parent Teacher Meetings</h5>
                    <p>Mentor feedback and guidance through PTMs</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-left align-self-center">
                <div className="feature-item">
                  <div className="content">
                    <h5>Quizzes</h5>
                    <p>
                      Tests, quizzes and worksheets for better practice and
                      retention.{" "}
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="content">
                    <h5>Visual Learning </h5>
                    <p>
                      Learn from engaging & interactive video lessons on app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing section bg-shape" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title mb-4">
                  <h2
                    className="mb-3"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Choose Your Subscription Plan
                  </h2>
                  <p style={{ color: "white" }}>
                    Get yourself access to the various services we provide, to
                    build your future with the power of AI.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table text-center">
                  <div className="title">
                    <h5>Free</h5>
                  </div>
                  <div className="price">
                    <p>
                      $0<span>/month</span>
                    </p>
                  </div>
                  <ul className="feature-list">
                    <li>Free Lectures</li>
                    <li>Free Quizzes</li>
                    <li>No Mock Interviews</li>
                    <li>No Access to symbl.ai</li>
                  </ul>
                  <div className="action-button">
                    <button
                      className="btn btn-main-rounded"
                      style={{ color: "white", fontWeight: "bolder" }}
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table featured text-center">
                  <div className="title">
                    <h5>Basic</h5>
                  </div>
                  <div className="price">
                    <p>
                      $19<span>/month</span>
                    </p>
                  </div>
                  <ul className="feature-list">
                    <li>Free Lectures</li>
                    <li>Free Quizzes</li>
                    <li>Limited Mock Interviews</li>
                    <li>Limited Access to symbl.ai</li>
                  </ul>
                  <div className="action-button">
                    <button
                      className="btn btn-main-rounded"
                      onClick={startPayment}
                      style={{ color: "white", fontWeight: "bolder" }}
                    >
                      Pay with MetaMask 
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-md-auto">
                <div className="pricing-table text-center">
                  <div className="title">
                    <h5>Advance</h5>
                  </div>
                  <div className="price">
                    <p>
                      $99<span>/month</span>
                    </p>
                  </div>
                  <ul className="feature-list">
                    <li>Free Lectures</li>
                    <li>Free Quizzes</li>
                    <li>Unlimited Mock Interviews</li>
                    <li>Unlimited Access to symbl.ai</li>
                  </ul>
                  <div className="action-button">
                    <button
                      className="btn btn-main-rounded"
                      onClick={startPayment}
                      style={{ color: "white", fontWeight: "bolder" }}
                    >
                      Pay with MetaMask
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section counter bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="29">
                      400
                    </span>
                    +
                  </h3>
                  <p>Courses</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="200">
                      2
                    </span>
                    k+
                  </h3>
                  <p>Active Users</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="60">
                      200
                    </span>
                    +
                  </h3>
                  <p>Tutors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="300">
                      8
                    </span>
                    k+
                  </h3>
                  <p>Enrolled Students</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-subscribe" id="contact">
          <div className="container">
            <div className="row bg-elipse-red">
              <div className="col-lg-4">
                <div className="image">
                  <img className="phone-thumb" src={news} alt="iphone-app" />
                </div>
              </div>
              <div className="col-lg-8 align-self-center">
                <div className="content">
                  <div className="mb-4">
                    <h2>Subscribe To Our Newsletter</h2>
                  </div>
                  <div className="description">
                    <p>
                      Follow our socials and subscribe to our newsletter to stay
                      updated and fetch every information in the world.
                    </p>
                  </div>
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
