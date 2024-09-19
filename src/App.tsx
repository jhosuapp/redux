import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Counter } from "./components";

const App = () => {

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <section>
          <Counter />
        </section>
      </PersistGate>
    </Provider>
  )
}

export default App;
