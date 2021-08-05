import { Route, Switch } from "react-router-dom";

import "./App.css";

import { AuthContextProvider } from "./store/auth-ctx";

import LoginSignup from "./pages/LoginSignup/LoginSignup";
import AddBook from "./pages/AddBook/AddBook";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyBooks from "./pages/MyBooks/MyBooks";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Switch>
          <Route path="/my-books">
            <MyBooks />
          </Route>
          <Route path="/login">
            <LoginSignup login={true} />
          </Route>
          <Route path="/signup">
            <LoginSignup login={false} />
          </Route>
          <Route path="/add-book">
            <AddBook />
          </Route>
        </Switch>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
