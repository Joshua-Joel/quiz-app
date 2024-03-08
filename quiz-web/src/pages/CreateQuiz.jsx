import React from 'react'
import ButtonAppBar from '../components/appbar/AppBar'
import { CreateQuizWrapper } from '../components/createquizwrapper/CreateQuizWrapper'

export const CreateQuiz = () => {
  return (
    <div>
        <ButtonAppBar></ButtonAppBar>
        <CreateQuizWrapper></CreateQuizWrapper>
    </div>    
  )
}
