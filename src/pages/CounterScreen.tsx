
import classNames from 'classnames';

//css 
import s from './Counter.module.css';

type CounterDisplayPropsType = {
	upperLimit: number;
	counter: number;
}

export const CounterScreen = ({ counter, upperLimit }: CounterDisplayPropsType) => {
	return (
		<div className={classNames(s.counterScreen, { [s.counterScreenLimit]: counter === upperLimit })}>{counter}</div>
	)
}