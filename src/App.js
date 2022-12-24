import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import "./styles.css";
import { ToasterProvider } from "./ui/ToasterContext";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BookDetails from "./components/BookDetails";

function App() {
  // const [toasts, setToasts] = useState([]);

  return (
    <Router>
      <ToasterProvider>
        <div className='App'>
          <h1>
            <Link to='/'>CIT도서대출 프로그래밍!!!(리액트 겁나어렵)</Link>
          </h1>
          <Switch>
            <Route exact path='/'>
              <BookList />
            </Route>

            <Route path='/book/:id'>
              <BookDetails />
            </Route>
          </Switch>
        </div>
      </ToasterProvider>
    </Router>
  );
}

export default App;
