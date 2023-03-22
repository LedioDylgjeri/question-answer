import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({id, title, info, isActive, activeQuestion}) => {
  const singleQuestion = id === isActive

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button 
          className='question-btn' 
          onClick={()=> activeQuestion(id)}>
            {singleQuestion ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {singleQuestion && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion