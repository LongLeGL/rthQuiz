import React from 'react'
import { useParams } from 'react-router-dom'

export default function TakeQuiz() {
  const { quizId } = useParams()

  return (
    <div>
      <h2>Take Quiz</h2>
      <p>Taking quiz ID: {quizId || 'unknown'} (placeholder)</p>
    </div>
  )
}
