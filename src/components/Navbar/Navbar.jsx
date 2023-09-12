import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Search from "@mui/icons-material/SearchOutlined";
import courses from "../../data/courses";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { ToastContainer, toast } from "react-toastify";
import { Avatar } from "@mui/material";
const Navbar = ({ user, role }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openMenu, setopenMenu] = useState(false);
  const [search, setsearch] = useState("");
  const [searchResults, setsearchResults] = useState(false);
  const [modal, setModal] = useState(false);
  const showResults = (e) => {
    setsearch(e.target.value);
    setsearchResults(true);
  };
  const logoutModal = () => {
    setAnchorEl(null);
    setModal(true);
  };
  const logoutHandeler = async () => {
    setModal(false);
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: localStorage.getItem("refresh_token") }),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    const data = await response.json();
    toast.success(data.status);
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="container-nav">
        <nav className="navbar">
          <div className="left">
            <Link to="/">
              <img className="brand" src="./images/f663ae_cf8b3693ac7a4ed6b5198a0d2e94a24b_mv2.webp"></img>
            </Link>
          </div>

          {/* <div>
            <SearchBar fetchData={fetchData} setResult={setResult} suggestionKey="title" />
            {result && <Result {...result} />}
          </div> */}
          <div className="searchBar">
            <input type="text" placeholder="search..." className="searchInput" onChange={(e) => showResults(e)} />
            <span className="searchIcon">
              {" "}
              <Search />
            </span>
          </div>
          {searchResults && (
            <div className={localStorage.getItem("token") ? "search_result_wrapper_login" : "search_result_wrapper"}>
              <div className="results">
                {courses
                  .filter((item) => {
                    return item.course_name.toLowerCase().includes(search.toLowerCase());
                  })
                  .map((item) => {
                    if (search.length > 0) {
                      return (
                        <Link to={`/courses/${item.course_name}`} key={item.course_name} onClick={() => setsearchResults(false)}>
                          <div className="search_result">
                            <img src={item.img} alt="" />
                            <h4>{item.course_name.slice(0, 20)}...</h4>
                          </div>
                        </Link>
                      );
                    }
                  })}
              </div>
              {search.length < 1 && setsearchResults(false)}
              <div className="result_empty">
                <h4 style={{ marginTop: "20px", marginLeft: "60px" }}> No Results Found... </h4>
              </div>
            </div>
          )}

          <div className={`${openMenu ? " active right" : "right close"} `}>
            <ul className="navbar-ul">
              <li onClick={() => setopenMenu(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/courses">Courses</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/events">Events</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/corporate">Corporate Training</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/careers">Careers</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/contact">Contact</Link>
              </li>
              {/* {!localStorage.getItem("token") ? (
                <div className="login_signup_wrapper">
                  <div className="login" onClick={() => setopenMenu(false)}>
                    <Link to="/login"> Login </Link>
                  </div>
                  <div className="signup" onClick={() => setopenMenu(false)}>
                    <Link to="/signup"> Sign Up </Link>
                  </div>
                </div>
              ) : ( */}
              <div>
                <Button id="fade-button" aria-controls={open ? "fade-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                  <Avatar sx={{ width: 40, height: 40 }} style={{ backgroundColor: "#047aed" }}>
                    {user.slice(0, 1) || "U"}
                    {}
                  </Avatar>
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <Link to={"/mycourses"} s>
                    <MenuItem onClick={handleClose}> My Courses </MenuItem>
                  </Link>
                  <Link to={"/addnewcourse"} s>
                    <MenuItem onClick={handleClose}> Add Course </MenuItem>
                  </Link>

                  {/* {role === "admin" && (
                      <Link to={"/addnewcourse"} s>
                        <MenuItem onClick={handleClose}> Add Course </MenuItem>
                      </Link>
                    )} */}

                  <MenuItem onClick={logoutModal}>Logout</MenuItem>
                </Menu>
              </div>
              {/* )} */}
            </ul>
          </div>
        </nav>
        <div className="menu">
          {openMenu ? (
            <span className="close-menu" onClick={() => setopenMenu(!openMenu)}>
              <CloseIcon />
            </span>
          ) : (
            <span className="open-menu" onClick={() => setopenMenu(!openMenu)}>
              <MenuIcon />
            </span>
          )}
        </div>
      </div>
      <div className={modal ? "logout_modal modal_active" : "logout_modal"}>
        <p>Are You Sure You want to logout?</p>
        <button style={{ backgroundColor: "red", marginRight: "20px" }} onClick={logoutHandeler}>
          Logout
        </button>
        <button onClick={() => setModal(false)}>Cancel</button>
      </div>
      {/* {openSaved && <Saved toggleSaved={toggleSaved} saved={saved} setsaved={setsaved} />} */}
    </>
  );
};

export default Navbar;
