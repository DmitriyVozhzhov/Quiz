import React from "react";
import {questions} from "./Questions";

export const Quiz = ({step, question, onClickVariant}) => {

	const persentage = Math.round((step / questions.length) * 100);

  return (
    <div className="quiz">
			<div style={{width: `${persentage}%`}} className="quiz__inner">
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((text, index) => <li onClick={()=> onClickVariant(index)} key={text}>{text}</li>)}
			</ul>
    </div>
  );
};
