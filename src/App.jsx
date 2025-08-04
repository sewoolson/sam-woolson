import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './Layout';
import { MyRush } from './pages/myrush';
import { RushRefresh } from './pages/rushrefresh';
import { Cw } from './pages/cw';
import { Ches } from './pages/ches';
import './App.css'


function App() {

  return (
    
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/myrush" element={<MyRush/>}></Route>
        <Route path="/rushrefresh" element={<RushRefresh/>}></Route>
        <Route path="/cw" element={<Cw/>}></Route>
        <Route path="/ches" element={<Ches/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
