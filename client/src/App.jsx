import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ExaminerDashboard from './pages/ExaminerDashboard'
import CreateQuiz from './pages/CreateQuiz'
import ExaminerResults from './pages/ExaminerResults'
import ExamineeRegister from './pages/ExamineeRegister'
import QuizList from './pages/QuizList'
import TakeQuiz from './pages/TakeQuiz'
import QuizResult from './pages/QuizResult'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <header style={{padding:12, borderBottom:'1px solid #ddd'}}>
        <nav style={{display:'flex', gap:12}}>
          <Link to="/">Home</Link>
          <Link to="/examiner">Examiner</Link>
          <Link to="/examiner/create">Create Quiz</Link>
          <Link to="/examiner/results">Examiner Results</Link>
          <Link to="/register">Register</Link>
          <Link to="/quizzes">Quizzes</Link>
        </nav>
      </header>

      <main style={{padding:12}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examiner" element={<ExaminerDashboard />} />
          <Route path="/examiner/create" element={<CreateQuiz />} />
          <Route path="/examiner/results" element={<ExaminerResults />} />
          <Route path="/register" element={<ExamineeRegister />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quizzes/:quizId/take" element={<TakeQuiz />} />
          <Route path="/quizzes/:quizId/result" element={<QuizResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
