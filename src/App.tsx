import { Provider } from "react-redux";
import { store } from './store/store';

const App = () => {

  return (
    <Provider store={ store }>
      <p>
        Hola
      </p>
    </Provider>
  )
}

export default App;
