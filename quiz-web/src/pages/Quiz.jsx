import React from 'react'
import ButtonAppBar from '../components/appbar/AppBar'
import { QuizActionBar } from '../components/quizactionbar/QuizActionBar'
import { QuizWrapper } from '../components/quizwrapper/QuizWrapper'
export const Quiz = () => {
  
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <QuizWrapper/>
      <QuizActionBar/>
    </div>
  )
}
