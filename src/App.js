import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Course from "./components/Course/Course";
import Login from "./components/Login and SignUp/Login";
import Signup from "./components/Login and SignUp/Signup";
import Home from "./Pages/Home";
import Chatbot from "./components/Chatbot/Chatbot";
import Corporate from "./components/Corporate/Corporate_form";
import Event from "./components/Event/Event";
import EventsPage from "./Pages/EventsPage";
import { useState } from "react";
import Careers from "./Pages/Careers";
import AddNewCourse from "./components/Add New Course/AddNewCourse";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import ScrollToTop from "./components/ScrollToTop";
import MyCourses from "./Pages/MyCourses";
import { Provider } from "react-redux";
import store from "./Store/store";
// import courses_data from "./data/courses";

function App() {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const userData = async () => {
    const response = await fetch("/api/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await response.json();
    setUser(data.name);
    setRole(data.role);
  };
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar user={user} role={role} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login userData={userData} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/addnewcourse" element={<AddNewCourse />} />
            {/* {role === "admin" && <Route path="/addnewcourse" element={<AddNewCourse />} />} */}
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/courses/:keyword" element={<Course />} />
            <Route path="/events/:keyword" element={<Event />} />
          </Routes>
          {/* {courses_data.map((item) => {
          return (
            <div>
              {" "}
              <img src={item.img} alt="" />{" "}
            </div>
          );
        })} */}
          <Chatbot />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
