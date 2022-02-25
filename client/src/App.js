import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import Home from "./components/home/home";
import Users from "./components/users/users";

function App() {

  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/products/*' element={<Products/>} />
        <Route exact path='/users/*' element={<Users/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
