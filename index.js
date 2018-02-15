import {render, Component} from 'inferno';

class MyComponent extends Component {
    state = {
        counter: 0
    };

    render() {
        return (
            <div>
                <h1>Header!</h1>
                <span>Counter is at: { this.state.counter }</span>
            </div>
        );
    }
}

render
(
    <MyComponent />,
    document.getElementById('app')
);
