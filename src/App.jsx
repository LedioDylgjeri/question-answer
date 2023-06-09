import { useState } from "react";
import Questions from "../Questions";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [isActive, setIsActive] = useState(null)

  const activeQuestion = (id) => {
    const newActiveQuestion = id === isActive ? null : id
    setIsActive(newActiveQuestion)
  }
  
  return <main>
    <Questions questions={questions} isActive={isActive} activeQuestion={activeQuestion}/>
  </main>
};
export default App;
