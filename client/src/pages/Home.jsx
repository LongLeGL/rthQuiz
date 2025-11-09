import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Container maxWidth="md" className="pt-8">
        <Box className="mb-6">
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to rthQuiz
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" className="mb-4">
            Create, share and take quizzes quickly. Choose your role and get started.
          </Typography>
          <div className="flex gap-3">
            <Button component={RouterLink} to="/quizzes" variant="contained" color="primary">
              Browse Quizzes
            </Button>
            <Button component={RouterLink} to="/register" variant="outlined">
              Register as Examinee
            </Button>
          </div>
        </Box>

        <Card className="mt-6">
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              For Examiners
            </Typography>
            <Typography variant="body2" color="text.secondary" className="mb-3">
              Examiners can create quizzes and review results. Use the Examiner dashboard to manage your tests.
            </Typography>
            <Button component={RouterLink} to="/examiner" variant="outlined">
              Go to Examiner Dashboard
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
