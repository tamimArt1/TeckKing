import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'jotai';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
