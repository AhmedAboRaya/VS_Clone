
import ReactDOM from 'react-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
