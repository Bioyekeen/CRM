import React, {lazy} from 'react';
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import("./Pages/Home"))
const Login = lazy(() => import("./Pages/Login"))
const Signup = lazy(() => import("./Pages/Signup"))
const Dashboard = lazy(() => import("./layouts/FullLayout"))
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard/:text' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
