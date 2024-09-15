import { Provider } from "react-redux";
import { store } from './store/store';
import { Counter } from "./components";

const App = () => {

  return (
    <Provider store={ store }>
      <section>
        <Counter />
      </section>
    </Provider>
  )
}

export default App;
