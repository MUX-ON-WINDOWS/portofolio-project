import React from 'react';
import '../Home.css';
// images import
import spaceweekImage from '../img/Spaceweek.png';
import AiHelpdeskImages from '../img/AiHelpdesk.png';
import CRUDImage from '../img/CRUDicons.png';
import { NavLink } from 'react-router-dom';

function App() {
  const backgroundColor = { background: '#20176A' };
  const TextColor = { color: 'white' };
  const data = [
    { to: '/spaceweek', text: 'Out of space', url: spaceweekImage, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/CRUD', text: 'CRUD', url: CRUDImage, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/Discover', text: 'Discover', url: AiHelpdeskImages, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/Define', text: 'Define', url: AiHelpdeskImages, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/Develop', text: 'Develop', url: AiHelpdeskImages, color: { color: TextColor }, background: { background: backgroundColor } },
  ];

  return (
    <div className='containerWindow'>
      <h1 className='name'>MAX ARNOUTS</h1>
      <div className='containerCards'>
        {data.map((item, index) => (
          <div className='card' style={item.background}>
            <NavLink to={item.to}>
              <img src={item.url} alt={item.text} />
              <h1 style={item.color}>{item.text}</h1>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
