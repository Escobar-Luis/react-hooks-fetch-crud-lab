import React from "react";

function QuestionItem({ question, onDeleteQuestion, onNewAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick () {
    fetch(`http://localhost:4000/questions/${id}`, {
      method : "DELETE"
    })
    .then(r=>r.json())
    .then(() => onDeleteQuestion(question))
  }

  function handleCorrectAnswerChange (e) {
    const newAnswerIndex = e.target.value
    console.log(newAnswerIndex)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      Headers:
      { "Content-Type": "application/json" },
      Body: JSON.stringify(
        {"correctIndex": newAnswerIndex}
      )
    })
    .then(r=>r.json())
    .then((updatedQuestion) => onNewAnswer(updatedQuestion))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
        defaultValue={correctIndex}
        onChange={handleCorrectAnswerChange}
        >{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
