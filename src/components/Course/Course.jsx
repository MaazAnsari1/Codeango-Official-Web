import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Courses from "../../data/courses";
import CloseIcon from "@mui/icons-material/Close";
import { add } from "../../Store/myCoursesSlice";
import "./Course.css";
import { useDispatch, useSelector } from "react-redux";
const Course = () => {
  const dispatch = useDispatch();
  const mycourses = useSelector((state) => state.myCourses);

  const navigate = useNavigate();
  const { keyword } = useParams();

  const searchParam = useSearchParams()[0];

  const [modal, setModal] = useState(false);
  const [enrolledCourses, setenrolledCourses] = useState(localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : []);
  const [enrollModal, setenrollModal] = useState(false);

  const enrollModalHandler = () => {
    setenrollModal(true);
    setModal(true);
  };
  const demoModalHandler = () => {
    setenrollModal(false);
    setModal(true);
  };
  const enrollHandler = async (item) => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: item.price }),
    });
    const data = await response.json();

    const { order } = data;
    const getKey = await fetch("/api/getkey", {
      method: "GET",
    });
    const keyData = await getKey.json();

    const options = {
      key: keyData.key,
      amount: order.amount,
      currency: "INR",
      name: "Rehan",
      description: "Test RazorPay",
      image: "https://static.wixstatic.com/media/f663ae_cf8b3693ac7a4ed6b5198a0d2e94a24b~mv2.png/v1/crop/x_0,y_152,w_500,h_295/fill/w_175,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f663ae_cf8b3693ac7a4ed6b5198a0d2e94a24b~mv2.png",
      order_id: order.id,
      callback_url: "http://localhost:5000/paymentverification",
      prefill: {
        name: "Rehan Mohammed",
        email: "rehan@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#047aed",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();

    // const success = await fetch("/paymentverification", {
    //   method: "POST",
    // });
    // const successData = await success.json();
    setenrolledCourses([...enrolledCourses, item]);
    localStorage.setItem("courses", JSON.stringify(enrolledCourses));
  };

  return (
    <>
      {Courses.map((item) => {
        return (
          keyword === item.course_name && (
            <div className="course" key={item.course_name}>
              <section className="home" id="home">
                <div className="aboutbg">
                  <p className="coursename">{item.course_name}</p>
                  <div className="providing">
                    <ol>
                      <li>
                        <p>Lifetime Job and Placement Support</p>
                      </li>
                      <li>
                        <p>{item.duration * 9} Hours of Live Classes</p>
                      </li>
                      <li>
                        <p>Mentors from Top Global Product companies</p>
                      </li>
                      <li>
                        <p>A Portfolio of Real-World Projects</p>
                      </li>
                      <li>
                        <p>Totally Project based Training</p>
                      </li>
                      {/* <li>
                        <p>Build 16 Projects in 16 Weeks</p>
                      </li> */}
                      <br />
                    </ol>

                    <div className="duration">
                      <p>Weekdays and Weekends Classes | Morning and Evening Session</p>
                    </div>
                  </div>
                </div>
                <div className="course_img">
                  <img src={item.img} alt="" />
                </div>
                {/* <div className="formbg" function="form">
                  <form name={`enroll-${item.course_name}`} method="POST" data-netlify="true">
                    <ul className="course_form">
                      <li>
                        <p>I'm Interested in this Program</p>
                      </li>
                      <li>
                        <label>
                          Full Name <span className="required">*</span>
                        </label>
                        <input required type="text" name="firstname" className="field-divided" placeholder="First" /> <input required type="text" name="lastname" className="field-divided" placeholder="Last" />
                      </li>
                      <li>
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input required type="email" name="email" className="field-long" placeholder="abc123@gmail.com" />
                      </li>
                      <li>
                        <label>
                          Phone Number <span className="required">*</span>
                        </label>
                        <input required type="number" name="phone" className="field-long" placeholder="+91 1234567890" pattern="[+]{1}[0-9]{11,14}" />
                      </li>
                      <li>
                        <label>
                          Educational Qualification <span className="required">*</span>
                        </label>
                        <select className="field-select" name="qualification[]" required>
                          <option value="defaultValue">Select</option>
                          <option value="B.A / M.A">B.A / M.A</option>
                          <option value="B.B.A / M.B.A">B.B.A / M.B.A</option>
                          <option value="B.Com / M.Com">B.Com / M.Com</option>
                          <option value="DIPLOMA / ITI">DIPLOMA / ITI</option>
                          <option value="Higher Secondary">Higher Secondary</option>
                          <option value="B.E / BTech Computer Science">B.E / BTech Computer Science</option>
                          <option value="M.E / MTech Computer Science">M.E / MTech Computer Science</option>
                          <option value="B.E / BTech Information Technology">B.E / BTech Information Technology</option>
                          <option value="M.E / MTech Information Technology">M.E / MTech Information Technology</option>
                          <option value="B.E / BTech Mechanical Engineering">B.E / BTech Mechanical Engineering</option>
                          <option value="M.E / MTech Mechanical Engineering">M.E / MTech Mechanical Engineering</option>
                          <option value="B.E / BTech Civil Engineering">B.E / BTech Civil Engineering</option>
                          <option value="M.E / MTech Civil Engineering">M.E / MTech Civil Engineering</option>
                          <option value="B.E / BTech Chemical Engineering">B.E / BTech Chemical Engineering</option>
                          <option value="M.E / MTech Chemical Engineering">M.E / MTech Chemical Engineering</option>
                          <option value="B.E / BTech ECE">B.E / BTech ECE</option>
                          <option value="M.E / MTech ECE">M.E / MTech ECE</option>
                          <option value="B.E / BTech EEE">B.E / BTech EEE</option>
                          <option value="M.E / MTech EEE">M.E / MTech EEE</option>
                          <option value="B.E / BTech (oters)">B.E / BTech (oters)</option>
                          <option value="M.E / MTech (oters)">M.E / MTech (oters)</option>
                          <option value="Others">Others</option>
                        </select>
                      </li>
                      <li>
                        <label>
                          Current Profile <span className="required">*</span>
                        </label>
                        <select name="profile[]" className="field-select" required>
                          <option value="defaultValue">Select</option>
                          <option value="Student">Student</option>
                          <option value="Loking for a career in the IT industry">Loking for a career in the IT industry</option>
                          <option value="Working in the IT industry">Working in the IT industry</option>
                          <option value="Working in Non IT industry">Working in Non IT industry</option>
                        </select>
                      </li>
                      <li>
                        <label>
                          Choose Time Slot <span className="required">*</span>
                        </label>
                        <select name="timeslot[]" className="field-select" required>
                          <option value="defaultValue">Select</option>
                          <option value="Weekdays | 07:00 AM to 09:00 AM">Weekdays | 07:00 AM to 09:00 AM</option>
                          <option value="Weekends | 08:00 PM to 11:00 PM">Weekends | 08:00 PM to 10:00 PM</option>
                        </select>
                      </li>
                      <li>
                        <label>Do you have a coupon code?</label>

                        <input type="text" id="coupon" name="Coupon" className="coupon field-long" placeholder="If yes! please enter it here" />
                      </li>
                      <li>
                        <input type="submit" value="Submit" />
                      </li>
                    </ul>
                  </form>
                </div> */}
              </section>

              <section className="feature" id="feature">
                <div className="cenf-text">
                  <h2>Our Features</h2>
                </div>
                <div className="feature-content">
                  <div className="mbox">
                    <div className="boxf">
                      <img src="../images/live classes.png" />
                      <h4>Live Classes</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/recording session icon.png" />
                      <h4>Recording of each Sessions</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/Support icon.png" />
                      <h4>Life-Time Support</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/Certificate.png" />
                      <h4>Certificate of Completion</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/Study materials.png" />
                      <h4>Study Materials</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/interview.webp" />
                      <h4>Interview Preparation</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/placement granteed.png" />
                      <h4>Placement Guranteed</h4>
                    </div>

                    <div className="boxf">
                      <img src="../images/Study materials.png" />
                      <h4>Lifetime Access</h4>
                    </div>
                  </div>
                </div>
              </section>

              <section className="coursedes" id="coursedes">
                <div className="course-img">
                  <img src="../images/home.png" />
                </div>

                <div className="course-descrip">
                  <h2>CODEANGO LEARNING | {item.course_name} Course Description</h2>
                  <p>
                    Unveil a program that features the perfect mix of theory, live virtual classes, case studies, work on live projects, and extensive Hands-on practice to prepare you for a fast-growing field that bridges the gap between software developers and operations.
                    Throughout the Full Stack Web Development program, you will learn the main characteristics of Full Stack Web Development processes, tools, and people involved during the lifecycle.
                  </p>
                </div>
              </section>
              {item.certicates.length > 0 && (
                <section className="tech" id="tech">
                  <div className="cen_tech">
                    <h2>Technologies Covered</h2>
                  </div>

                  <div className="tech_content">
                    <div className="techbox">
                      <div className="tmbox">
                        <img src="../images/html.png" />
                        <h4>HTML</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/css.png" />
                        <h4>CSS</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/javascript.png" />
                        <h4>JavaScript</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/mongodb  .png" />
                        <h4>MongoDB</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/DevOps.png" />
                        <h4>DevOps</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/node js.png" />
                        <h4>Node.js</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/angular js.png" />
                        <h4>Angular.js</h4>
                      </div>

                      <div className="tmbox">
                        <img src="../images/react js.png" />
                        <h4>React.js</h4>
                      </div>
                      <div className="tmbox">
                        <img src="../images/bootstrap.png" />
                        <h4>Bootstrap</h4>
                      </div>
                      <div className="tmbox">
                        <img style={{ width: "60px" }} src="../images/python.jpeg" />
                        <h4>Python</h4>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              <section className="y2l">
                <div className="y2lh">
                  <h2>Why to learn {item.course_name}</h2>
                  <br />
                  <p>
                    {item.description}
                    <br />
                    <br />
                    <h3 style={{ color: "#333" }}>Who Should Learn</h3>

                    <br />
                    {item.who_should_learn}
                    <br />
                    <br />
                    {item.desc3}
                  </p>
                </div>

                <div className="course-role">
                  <div className="role-box">
                    <img src="../images/search role.webp" />
                    <h3>Most Popular Roles</h3>
                    <ol>
                      <li>
                        <p>{item.popular_roles[0]}</p>
                      </li>
                      <li>
                        <p>{item.popular_roles[1]}</p>
                      </li>{" "}
                      <li>
                        <p>{item.popular_roles[2]}</p>
                      </li>{" "}
                      <li>
                        <p>{item.popular_roles[3]}</p>
                      </li>{" "}
                      <li>
                        <p>{item.popular_roles[4]}</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              <section className="fee">
                <div className="eli-content">
                  <h2>
                    Program Fee &nbsp;<span style={{ textDecoration: "line-through" }}>₹44,999</span>&nbsp; <span> ₹{item.price} </span>
                  </h2>
                  <span>Lowest price since launch</span>
                  <p>Start learning today! Get maximum flexibility to learn at your own pace.</p>

                  <div className="curriculum_btn">
                    {/* <a href="#home">Book Now</a> */}
                    <input type="button" value="Book Demo Class" onClick={demoModalHandler} />
                    <h3>OR</h3>
                    <input type="button" value="Enroll Now" onClick={localStorage.getItem("token") ? () => enrollHandler(item) : () => navigate("/login")} />
                  </div>

                  <p>Hurry up. Limited seats only!</p>
                </div>
                <div className={modal ? "course_form_modal modal_active" : "course_form_modal"}>
                  <div className="close_modal" style={{ textAlign: "end", marginRight: "10px", cursor: "pointer" }}>
                    <CloseIcon onClick={() => setModal(false)} />
                  </div>
                  <div className="formbg" function="form">
                    <form name={`enroll-${item.course_name}`} method="post">
                      <input type="hidden" name="form-name" value={`enroll-${item.course_name}`} />
                      <ul className="course_form">
                        <li>
                          <li>{enrollModal ? <p> Enroll Now</p> : <p> Book Demo Class</p>}</li>
                        </li>
                        <li>
                          <label>
                            Full Name <span className="required">*</span>
                          </label>
                          <input required type="text" name="firstname" className="field-divided" placeholder="First" /> <input required type="text" name="lastname" className="field-divided" placeholder="Last" />
                        </li>
                        <li>
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input required type="email" name="email" className="field-long" placeholder="abc123@gmail.com" />
                        </li>
                        <li>
                          <label>
                            Phone Number <span className="required">*</span>
                          </label>
                          <input required type="number" name="phone" className="field-long" placeholder="+91 1234567890" pattern="[+]{1}[0-9]{11,14}" />
                        </li>
                        {/* <li>
                          <label>
                            Educational Qualification <span className="required">*</span>
                          </label>
                          <select className="field-select" name="qualification[]" required>
                            <option value="defaultValue">Select</option>
                            <option value="B.A / M.A">B.A / M.A</option>
                            <option value="B.B.A / M.B.A">B.B.A / M.B.A</option>
                            <option value="B.Com / M.Com">B.Com / M.Com</option>
                            <option value="DIPLOMA / ITI">DIPLOMA / ITI</option>
                            <option value="Higher Secondary">Higher Secondary</option>
                            <option value="B.E / BTech Computer Science">B.E / BTech Computer Science</option>
                            <option value="M.E / MTech Computer Science">M.E / MTech Computer Science</option>
                            <option value="B.E / BTech Information Technology">B.E / BTech Information Technology</option>
                            <option value="M.E / MTech Information Technology">M.E / MTech Information Technology</option>
                            <option value="B.E / BTech Mechanical Engineering">B.E / BTech Mechanical Engineering</option>
                            <option value="M.E / MTech Mechanical Engineering">M.E / MTech Mechanical Engineering</option>
                            <option value="B.E / BTech Civil Engineering">B.E / BTech Civil Engineering</option>
                            <option value="M.E / MTech Civil Engineering">M.E / MTech Civil Engineering</option>
                            <option value="B.E / BTech Chemical Engineering">B.E / BTech Chemical Engineering</option>
                            <option value="M.E / MTech Chemical Engineering">M.E / MTech Chemical Engineering</option>
                            <option value="B.E / BTech ECE">B.E / BTech ECE</option>
                            <option value="M.E / MTech ECE">M.E / MTech ECE</option>
                            <option value="B.E / BTech EEE">B.E / BTech EEE</option>
                            <option value="M.E / MTech EEE">M.E / MTech EEE</option>
                            <option value="B.E / BTech (oters)">B.E / BTech (oters)</option>
                            <option value="M.E / MTech (oters)">M.E / MTech (oters)</option>
                            <option value="Others">Others</option>
                          </select>
                        </li> */}
                        <li>
                          <label>
                            Current Profile <span className="required">*</span>
                          </label>
                          <select name="profile[]" className="field-select" required>
                            <option value="defaultValue">Select</option>
                            <option value="Student">Student</option>
                            <option value="Loking for a career in the IT industry">Loking for a career in the IT industry</option>
                            <option value="Working in the IT industry">Working in the IT industry</option>
                            <option value="Working in Non IT industry">Working in Non IT industry</option>
                          </select>
                        </li>
                        <li>
                          <label>
                            Choose Time Slot <span className="required">*</span>
                          </label>
                          <select name="timeslot[]" className="field-select" required>
                            <option value="defaultValue">Select</option>
                            <option value="Weekdays | 07:00 AM to 09:00 AM">Weekdays | 07:00 AM to 09:00 AM</option>
                            <option value="Weekends | 08:00 PM to 11:00 PM">Weekends | 08:00 PM to 10:00 PM</option>
                          </select>
                        </li>
                        <li>
                          <label>Do you have a coupon code?</label>

                          <input type="text" id="coupon" name="Coupon" className="coupon field-long" placeholder="If yes! please enter it here" />
                        </li>
                        <li>
                          <input type="submit" value="Submit" />
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </section>

              <section className="curriculum" id="curriculum">
                <div className="curriculum_overlay">
                  <div className="curriculum-tital">
                    <h2>Course Curriculum</h2>
                  </div>
                  <div className="curriculum_btn">
                    <a target={"_blank"} href={item.syllabus}>
                      Download Now
                    </a>
                  </div>
                </div>
              </section>
              {item.certicates.length > 0 && (
                <section className="certy" id="certy">
                  <div className="certy-text">
                    <h1>Take 10 Certificates After Completion of Course</h1>
                  </div>

                  <div className="main_certybox">
                    <div className="main_cmbox">
                      <img src="../images/FSWD certy.png" />
                    </div>
                    <h4>Full Stack Web Developer Expert</h4>
                  </div>
                  <div className="certy-content">
                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/HTML certy.png" />
                      </div>
                      <h4>Advanced HTML Developer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/CSS certy.png" />
                      </div>
                      <h4>Advanced CSS Developer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/JavaScript certy.png" />
                      </div>
                      <h4>Advanced JavaScript Developer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/Angular.js certy.png" />
                      </div>
                      <h4>Angular JS Developer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/React.js certy.png" />
                      </div>
                      <h4>React JS Developer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/Node.js certy.png" />
                      </div>
                      <h4>Node JS Developer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/Python certy.png" />
                      </div>
                      <h4>Python Programming Expert</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/DevOps certy.png" />
                      </div>
                      <h4>DevOps Engineer</h4>
                    </div>

                    <div className="certybox">
                      <div className="cmbox">
                        <img src="../images/MongoDB certy.png" />
                      </div>
                      <h4>MongoDB Database Developer</h4>
                    </div>
                  </div>
                </section>
              )}

              <section className="cta">
                <div className="center-text">
                  <h5>Trusted By</h5>
                  <h2>500+ Leading Universities And Companies</h2>
                </div>

                <div className="cta-content">
                  <div className="cta-img">
                    <img src="../images/cta1.png" />
                  </div>

                  <div className="cta-img">
                    <img src="../images/cta2.png" />
                  </div>

                  <div className="cta-img">
                    <img src="../images/cta3.png" />
                  </div>

                  <div className="cta-img">
                    <img src="../images/cta4.png" />
                  </div>

                  <div className="cta-img">
                    <img src="../images/cta5.png" />
                  </div>

                  <div className="cta-img">
                    <img src="../images/cta6.png" />
                  </div>
                </div>
              </section>

              <section className="about_" id="about_">
                <div className="about-img">
                  <img src="../images/about.png" />
                </div>

                <div className="about-text">
                  <h2>Want to share your knowledge? Join us a Mentor.</h2>
                  <p>High-defination video is video of higher resolution and quality than standard-defination. while there is no standardized meaning for high-defination, generally any video.</p>
                  <h4>Best Courses</h4>
                  <h5>Top Rated Instructors</h5>
                  <Link to="/about" className="btn">
                    Read More
                  </Link>
                </div>
              </section>
            </div>
          )
        );
      })}
    </>
  );
};

export default Course;
