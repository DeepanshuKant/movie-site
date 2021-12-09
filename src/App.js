
import './App.css';
import Navbar from './component/Navbar'
import Search from './component/Search'
import AllMovies from './component/AllMovies'
import SingleMovie from './component/SingleMovie'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (

    <Router>
      <>
        <Navbar />
        <Search />
        <Routes>
          <Route exact path="/movies/:title" element={<AllMovies />} ></Route>
          <Route exact path="/byid/:id" element={<SingleMovie />} ></Route>
        </Routes>
      </>
    </Router>



  );
}

export default App;
