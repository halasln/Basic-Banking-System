import "./App.scss";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Customers from "../Customers/Customers";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contacts from "../Contacts/Contacts";


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>

          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Home />} />

          <Route exact path='/viewcustomers' element={<Customers />} />
          <Route exact path='/contact' element={<Contacts />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;


