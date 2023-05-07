import './App.css';
import Nav from './Nav';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path ="/" element= {<Login/>}></Route>
        {/* <Route path ="/cart" element= {<div>Helllos</div>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
