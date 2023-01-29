import { Quiz } from "./components/Quiz/Quiz";
import { Result } from "./components/Result/Result";
import { questions } from "./components/Quiz/Questions";
import {useState} from "react";

function App() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step];
    const onClickVariant = (index) => {
        setStep(step+1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
  return (
  <div className="App">
			{
				 step !== questions.length ? <Quiz step={step} question={question}  onClickVariant={onClickVariant}  /> : <Result correct={correct}  />

			}

	</div>
  );
}

export default App;
