


//components
import { Button } from "../elements/ui/Button";
import classNames from 'classnames';

//css 
import s from './Counter.module.css';

type CounterControlsPropsType = {
	counter: number;
	upperLimit: number;
	lowLimit: number;
	onIncrementCounter: () => void;
	onResetCounter: () => void;
}

export const CounterControls = (props: CounterControlsPropsType) => {
	const {
		counter,
		upperLimit,
		lowLimit,
		onIncrementCounter,
		onResetCounter
	} = props;

	const isIncrementBtnDisabled = counter === upperLimit;
	const isResetBtnDisabled = counter === lowLimit;
	return (
		<div className={s.buttonsGroup}>
			<Button
				title={'inc'}
				className={classNames(s.button, { [s.buttonDisabled]: isIncrementBtnDisabled })}
				onClick={onIncrementCounter}
				isDisabled={isIncrementBtnDisabled}
			/>
			<Button
				title={'reset'}
				className={classNames(s.button, { [s.buttonDisabled]: isResetBtnDisabled })}
				onClick={onResetCounter}
				isDisabled={isResetBtnDisabled}
			/>
		</div>
	)
}