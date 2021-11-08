import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onNewAnswer}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => { 
        return (
          <QuestionItem key= {question.id} question={question} onDeleteQuestion={onDeleteQuestion} onNewAnswer={onNewAnswer}/>
        )
      })}
      </ul>
    </section>
  );
}

export default QuestionList;
