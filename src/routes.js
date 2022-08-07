import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home/Home';

const MyRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes