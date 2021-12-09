
import './App.css';
import Navbar from './component/Navbar'
import Search from './component/Search'
import AllMovies from './component/AllMovies'


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
          <Route exact path="/movies/:title" element={<AllMovies />}>
          </Route>
        </Routes>
      </>
    </Router>



  );
}

export default App;
