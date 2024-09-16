import './App.css';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Header from "./pages/header/header";
import NoMatch from './pages/nomatch/nomatch';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='*' element={<NoMatch/>} />
    </Routes>
    </>
  );
}

export default App;
