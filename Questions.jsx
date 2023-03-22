import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions, isActive, activeQuestion}) => {
  return <section className='container'>
    <h1>Questions</h1>
    {questions.map(question => {
      return (
        <SingleQuestion
          key={question.id}
          {...question}
          isActive={isActive}
          activeQuestion={activeQuestion}
        />
      );
    })}
  </section>
}

export default Questions