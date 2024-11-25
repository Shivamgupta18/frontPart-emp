import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/headers/Header';
import Dashboard from './pages/dashboard/Dashboard';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='*' element={<noMatch/>}/>
    <Route path='/employee' element={<PostUser/>}/>
    <Route path='/employee/:id' element={<UpdateUser/>}/>
   </Routes>
   </>
  );
}

export default App;
