import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {showInfo ? (
          <button
            className="question-btn"
            onClick={() => setShowInfo(!showInfo)}
          >
            <AiOutlineMinus />
          </button>
        ) : (
          <button
            className="question-btn"
            onClick={() => setShowInfo(!showInfo)}
          >
            <AiOutlinePlus />
          </button>
        )}
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion