export const decrease = ({state}) => {
    state.set('count', state.get('count') - 1);
}

export const increase = ({state}) => {
    state.set('count', state.get('count') + 1);
}

