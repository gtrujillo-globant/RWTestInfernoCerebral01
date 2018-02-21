import { render } from 'inferno';
import { Container } from '@cerebral/inferno';
import controller from './controller';
import App from './components/app';

render(
    <Container controller={ controller }>
        <App />
    </Container>,
    document.getElementById('app')
);

