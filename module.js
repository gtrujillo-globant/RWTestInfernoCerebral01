import { Module } from 'cerebral';
import * as actions from './actions';

const rootModule = Module({
    state: {
        count: 0
    },
    signals: {
        onIncrease: [actions.increase],
        onDecrease: [actions.decrease]
    } 
});

export default rootModule;

