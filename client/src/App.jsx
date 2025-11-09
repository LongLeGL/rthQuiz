import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import ExaminerDashboard from "./pages/ExaminerDashboard";
import CreateQuiz from "./pages/CreateQuiz";
import ExaminerResults from "./pages/ExaminerResults";
import ExamineeRegister from "./pages/ExamineeRegister";
import Login from "./pages/Login";
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";
import QuizResult from "./pages/QuizResult";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ConditionalNav />

        <main style={{ padding: 12, flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examiner" element={<ExaminerDashboard />} />
            <Route path="/examiner/create" element={<CreateQuiz />} />
            <Route path="/examiner/results" element={<ExaminerResults />} />
            <Route path="/register" element={<ExamineeRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quizzes/:quizId/take" element={<TakeQuiz />} />
            <Route path="/quizzes/:quizId/result" element={<QuizResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function ConditionalNav() {
  // show nav on all pages except login, register and the take-quiz page
  const { pathname } = useLocation();

  const hideFor = ["/login", "/register"];
  const isTakeQuiz =
    /^\/quizzes\/[^^/]+\/take$/.test(pathname) ||
    /^\/quizzes\/[^/]+\/take$/.test(pathname);

  if (hideFor.includes(pathname) || isTakeQuiz) return null;
  return <NavigationBar />;
}
