import { useState } from "react"

//components
import { CounterScreen } from "./CounterScreen";
import { CounterControls } from "./CounterControls";

//css
import s from './Counter.module.css';


export const Counter = () => {

	const LIMIT_VALUE = 5;
	const INITIAL_VALUE = 0;

	const [counter, setCounter] = useState<number>(INITIAL_VALUE);

	const handleIncrementCounter = () => () => {
		if (counter < LIMIT_VALUE) {
			setCounter(counter + 1);
		}
	}

	const handleResetCounter = () => {
		setCounter(0);
	}

	return (
		<div className={s.counterWrapper}>
			<div className={s.counterContainer}>
				<CounterScreen counter={counter} upperLimit={LIMIT_VALUE} />
				<CounterControls
					counter={counter}
					upperLimit={LIMIT_VALUE}
					lowLimit={INITIAL_VALUE}
					onIncrementCounter={handleIncrementCounter()}
					onResetCounter={handleResetCounter}
				/>
			</div>
		</div>
	)
}