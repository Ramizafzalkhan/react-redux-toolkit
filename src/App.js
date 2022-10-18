
import './App.css';
import { useSelector, useDispatch } from "react-redux";


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INC' });

  }
  const decrement = () => {
    dispatch()
  }



  return (

    <div className="App">

      Counter App using redux
      <h2>
        {counter}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

      </h2>
    </div>

  );
}

export default App;
