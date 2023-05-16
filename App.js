
import './App.css';
import HomePage from './Pages/HomePage';
import {Routes,Route} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
function App() {
  return (
   <>
   <ToastContainer/>
   <Routes>
   <Route exact path='/' element={ <HomePage/>}/>
    <Route exact path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
