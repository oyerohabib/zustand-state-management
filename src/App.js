import React from "react";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Zustand2 from "./components/Zustand2";
import Register from "./components/Register";


const Home = () => {

  return (
    <>
      <div className="main-container dark">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          My Course List
        </h1>
        <CourseForm />
        <CourseList />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zustand2" element={<Zustand2 />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
