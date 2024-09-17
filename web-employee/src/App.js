import './App.css';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Header from "./pages/header/header";
import NoMatch from './pages/nomatch/nomatch';
import PostUser from './pages/employee/postUser';
import UpdateUser from './pages/employee/updateUser';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/employee' element={<PostUser/>} />
      <Route path='/employee/:id' element={<UpdateUser/>} />
      <Route path='*' element={<NoMatch/>} />
    </Routes>
    </>
  );
}

export default App;
