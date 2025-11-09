import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

export default function CavigationBar() {
  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ top: 0 }}>
      <Toolbar className="max-w-100vw mx-auto w-full">
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          rthQuiz
        </Typography>

        <Button component={RouterLink} to="/quizzes" color="inherit">Quizzes</Button>
        <Button component={RouterLink} to="/examiner" color="inherit">Examiner</Button>
        <Button component={RouterLink} to="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
