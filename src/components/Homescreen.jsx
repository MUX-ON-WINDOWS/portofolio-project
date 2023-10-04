import { Routes, Route, NavLink } from 'react-router-dom';
import '../Home.css';
import Spaceweek from '../content/Spaceweek';
import CRUD from '../content/CRUD.jsx';
import Home from '../components/Homewindow';

function App() {
  return (
    <div className='containerPhoneScreen'>
      <div className='containerContent'>
        <NavLink to="/spaceweek">
          <div className='contentItem'>
            <img src='https://plus.unsplash.com/premium_photo-1683910718710-2ec6b444d456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
            <p>Space week</p>
          </div>
        </NavLink>
        <NavLink to="/sprint1">
          <div className='contentItem'>
            <img src='https://plus.unsplash.com/premium_photo-1683910718710-2ec6b444d456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
            <p>Sprint 1</p>
          </div>
        </NavLink>
        <NavLink to="/sprint2">
          <div className='contentItem'>
            <img src='https://plus.unsplash.com/premium_photo-1683910718710-2ec6b444d456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
            <p>Sprint 2</p>
          </div>
        </NavLink>
        <NavLink to="/sprint3">
          <div className='contentItem'>
            <img src='https://plus.unsplash.com/premium_photo-1683910718710-2ec6b444d456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
            <p>Sprint 3</p>
          </div>
        </NavLink>
        <NavLink to="/CRUD">
          <div className='contentItem'>
            <img src='https://plus.unsplash.com/premium_photo-1683910718710-2ec6b444d456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
            <p>CRUD (eigen project)</p>
          </div>
        </NavLink>
      </div>
      <Routes>
        <Route path="/spaceweek" element={<Spaceweek />} />
        <Route path="/CRUD" element={<CRUD />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
