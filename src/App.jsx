import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./componenet/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
