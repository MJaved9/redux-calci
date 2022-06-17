import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import {add,substract,multiply,divide} from "./store/action"

function App() {
  const dispatch=useDispatch();
  const count=useSelector(state=>(state.count));
  return (
    <div className="App">
      <div >{count}</div>
    <button onClick={()=>dispatch(add(10))}>add</button>
    <button onClick={()=>dispatch(substract(5))}>substract</button>
    <button onClick={()=>dispatch(multiply(5))}>Mul</button>
    <button onClick={()=>dispatch(divide(2))}>Div</button>
    </div>

  );
}

export default App;
