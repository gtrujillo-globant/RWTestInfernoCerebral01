import { render } from 'inferno';
import { Module, Controller } from 'cerebral';
import { Container, connect } from '@cerebral/inferno';
import { set } from 'cerebral/operators';
import {state, signal, string} from 'cerebral/tags';
import Devtools from 'cerebral/devtools'

const decrease = ({state}) => {
    state.set('count', state.get('count') - 1);
}

const increase = ({state}) => {
    state.set('count', state.get('count') + 1);
}

const rootModule = Module({
    state: {
        count: 0
    },
    signals: {
        onIncrease: [increase],
        onDecrease: [decrease]
    } 
});

const controller = Controller(rootModule, {
  devtools: process.env.NODE_ENV === 'production' ? null : Devtools({
    host: 'localhost:8085'
  })
});

const App = ({ onIncrease, onDecrease, count }) => {
  return (
   <div>
    <button onClick={() => onIncrease()}>+</button>
    {count}
    <button onClick={() => onDecrease()}>-</button>
  </div>
  )
};

const Main = connect({
  count: state`count`,
  onIncrease: signal`onIncrease`,
  onDecrease: signal`onDecrease`
},
App);

render(
    <Container controller={ controller }>
        <Main />
    </Container>,
    document.getElementById('app')
);

