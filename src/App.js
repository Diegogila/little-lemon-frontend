import './App.css';
import { BookingPage } from './components/BookingPage/BookingPage';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking/*' element={<BookingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
