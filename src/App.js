import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Registration from "./modules/registration"
import List from "./modules/list"
import Context from "./context"

function App() {
  let list = React.useState([]);

  return (
    <Context.Provider value={list}>
          <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  
  );
}

export default App;
