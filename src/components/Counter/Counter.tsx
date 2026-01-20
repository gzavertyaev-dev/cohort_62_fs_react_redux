import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counterSlice/counterSlice"

import Button from "components/Button/Button"

import "./styles.css"

function Counter() {
  // хук useAppDispatch - не принимает в себя аргументов, он просто возвращает нам функцию dispatch,
  // которая будет передавать actions в redux store. Потом на переданный action запускается нужный нам reducer
  const dispatch = useAppDispatch()

  // Забираем данные из redux store, затем передаем эти данные в нужные места в JSX,
  // таким образом подписываемся на изменения в redux store
  const count = useAppSelector(counterSliceSelectors.count)

  const onMinus = () => {
    console.log(counterSliceActions.minus())
    dispatch(counterSliceActions.minus())
  }

  const onPlus = () => {
    // counterSliceActions.plus() - это action creator, при вызове которого мы получаем action
    const action = counterSliceActions.plus()
    console.log(action)
    dispatch(action)
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="/" onClick={onDivide} />
      </div>
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
      <div className="button_control">
        <Button name="*" onClick={onMultiply} />
      </div>
    </div>
  )
}

export default Counter
