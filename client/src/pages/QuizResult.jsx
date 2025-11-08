import React from 'react'
import { useParams } from 'react-router-dom'

export default function QuizResult() {
  const { quizId } = useParams()

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Results for quiz ID: {quizId || 'unknown'} (placeholder)</p>
    </div>
  )
}
