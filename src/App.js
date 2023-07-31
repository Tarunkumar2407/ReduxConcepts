import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
// import store from "./redux/Store";

// import IceCreamContainer from "./component/IceCreamContainer";
import PayLoad from "./component/PayLoad";
import { store } from "./reduxPayload/redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
        <PayLoad />
      </div>
    </Provider>
  );
}

export default App;
