import { Routes,Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';

function App() {
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/reservations' element={<BookingPage />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
