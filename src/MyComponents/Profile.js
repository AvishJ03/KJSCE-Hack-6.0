import Header from "./Header";
import Footer from "./Footer";
import "./Profile.css";
import profile from "../images/pfp.png";
import { useAuth } from "../contexts/AuthContext";
import { db, auth } from "../utils/init-firebase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function Profile() {
  // const color1 = ["#92A3FD", "#9DCEFF"];
  // const color2 = ["#C58BF2", "#EEA4CE"];
  // const barColors = ["#92A3FD", "#C58BF2"];
  // const data = [];
  const data = [
    {
      name: "Quiz 1",
      Score: 3,
    },
    {
      name: "Quiz 2",
      Score: 3,
    },
    {
      name: "Quiz 3",
      Score: 2,
    },
    {
      name: "Quiz 4",
      Score: 1,
    },
    {
      name: "Quiz 5",
      Score: 1,
    },
    {
      name: "Quiz 6",
      Score: 1,
    },
    {
      name: "Quiz 7",
      Score: 2,
    },
  ];
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  var score = [];
  const uid = currentUser?.uid;
  const [total, setTotal] = useState(0);
  var t = 0;
  const color1 = ["#92A3FD", "#9DCEFF"];
  const color2 = ["#C58BF2", "#EEA4CE"];
  const barColors = ["#92A3FD", "#C58BF2"];

  useEffect(() => {
    const getTotal = (arr) => {
      arr.forEach((element) => {
        t = t + element;
      });
    };
    // const getData = (arr) => {
    //   arr.forEach((element, index) => {
    //     data.push({
    //       Quiz: `Quiz ${index + 1}`,
    //       Score: element,
    //     });
    //   });
    // };
    const getUser = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "users", userID);
        const docSnap = await getDoc(userDoc);
        // console.log(docSnap.data().name);
        setName(docSnap.data().name);
        score = docSnap.data().score;
        console.log(score);
        getTotal(score);
        // getData();
        setTotal(t);
        console.log(total);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [name, total]);

  return (
    <div>
      <Header />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center mb-4">
                    <img
                      className="mr-3"
                      src={profile}
                      width="80"
                      height="80"
                      alt=""
                    />
                    <div className="media-body">
                      <h3 className="mb-0">{name}</h3>
                      <p className="text-muted mb-0">Mumbai, India</p>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col">
                      <div className="card card-profile text-center">
                        <span className="mb-1 text-primary">
                          <i className="icon-people"></i>
                        </span>
                        <h3 className="mb-0">280</h3>
                        <p className="text-muted px-4">Following</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-profile text-center">
                        <h3 className="mb-0">240</h3>
                        <p className="text-muted">Followers</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-profile text-center">
                        <h3 className="mb-0">{total}</h3>
                        <p className="text-muted">Score</p>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-danger px-5">
                        Follow Now
                      </button>
                    </div>
                  </div>

                  <h4>About Me</h4>
                  <p className="text-muted">
                    Hi, I'm {name}. Working as a developer
                  </p>
                  <ul className="card-profile__info">
                    <li className="mb-1">
                      <strong className="text-dark mr-4">Mobile</strong>{" "}
                      <span>+91 9867466628</span>
                    </li>
                    <li>
                      <strong className="text-dark mr-4">Email</strong>{" "}
                      <span>avish@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <form action="#" className="form-profile">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="2"
                        placeholder="Tell us something about yourself"
                      ></textarea>
                    </div>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-primary px-3 ml-4">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-0">
                    <h4 class="card-title px-4 mb-3">Todo</h4>
                    <div class="todo-list">
                      <div class="tdl-holder">
                        <div class="tdl-content">
                          <ul id="todo_list">
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Revise Insertion Sort</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Kruskal's Algorithm</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Classify Data Structures</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Implement DEQueue</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div class="px-4">
                          <input
                            type="text"
                            class="tdl-new form-control"
                            placeholder="Write new item and hit 'Enter'..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chartss">
              <BarChart
                width={700}
                height={300}
                data={data}
                barCategoryGap={15}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                padding={{
                  right: 30,
                  left: 20,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0" stopColor="#C58BF2" />
                    <stop offset="1" stopColor="#EEA4CE" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis dataKey="Score" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Score"
                  /*fill="url(#colorUv)"*/ radius={[20, 20, 20, 20]}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
          <div class="row hetviclasshetvi">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="active-member">
                    <div class="table-responsive">
                      <table class="table table-xs mb-0">
                        <thead>
                          <tr>
                            <th>Courses</th>
                            <th>Quiz</th>
                            <th>Difficulty</th>
                            <th>Status</th>
                            <th>Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sorting Algorithms</td>
                            <td>2/4</td>
                            <td>
                              <span>Easy</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Trees</td>
                            <td>3/4</td>
                            <td>
                              <span>Easy</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">50 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Queues</td>
                            <td>Not Attempted</td>
                            <td>
                              <span>Medium</span>
                            </td>
                            <td>Incompleted</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Graph</td>
                            <td>4/4</td>
                            <td>
                              <span>Medium</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Stacks</td>
                            <td>2/4</td>
                            <td>
                              <span>Difficult</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Hash</td>
                            <td>Not Attempted</td>
                            <td>
                              <span>Difficult</span>
                            </td>
                            <td>Incompleted</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classname="footerrrrrrrrrr" style={{transform: 'translate(0%, -270%)'}}>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
