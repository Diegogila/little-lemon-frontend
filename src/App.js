import './App.css';
import { BookingPage } from './components/BookingPage/BookingPage';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollTop } from './utils/ScrollTop';


function App() {
  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking/*' element={<BookingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
