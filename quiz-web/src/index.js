import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { CreateQuiz } from "./pages/CreateQuiz";
import { Result } from "./pages/Result";
import { Report } from "./pages/Report";
import { ShareId } from "./pages/ShareId";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/create-quiz" element={<CreateQuiz />}></Route>
        <Route path="/share-id" element={<ShareId />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
