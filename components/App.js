import { connect } from '@cerebral/inferno';
import {state, signal, string} from 'cerebral/tags';

const Main = ({ onIncrease, onDecrease, count }) => {
  return (
   <div>
    <button onClick={() => onIncrease()}>+</button>
    {count}
    <button onClick={() => onDecrease()}>-</button>
  </div>
  )
};

const App = connect({
  count: state`count`,
  onIncrease: signal`onIncrease`,
  onDecrease: signal`onDecrease`
},
Main);

export default App;
