
import { questions } from '../Quiz/Questions'
export const Result = ({correct}) => {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt='result-img' />
			<h2>Вы отгадали {correct}  ответа из {questions.length}</h2>
			<a href='/Quiz'><button>Попробовать снова</button></a>

		</div>
	)
}
