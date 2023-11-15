import { NavLink } from 'react-router-dom';
import '../Home.css';
import spaceweekImage from '../img/Spaceweek.png';
import AiHelpdesk from '../img/AiHelpdesk.png';
import CRUDImage from '../img/CRUDicons.png';

function MobileView() {
  const data = [
    { to: '/spaceweek', text: 'Out of space', url: spaceweekImage, color: { color: 'white' } },
    { to: '/CRUD', text: 'CRUD', url: CRUDImage, color: { color: 'white' } },
    { to: '/Discover', text: 'Discover', url: AiHelpdesk, color: { color: 'white' } },
    { to: '/Define', text: 'Define', url: AiHelpdesk, color: { color: 'white' } },
    { to: '/Develop', text: 'Develop', url: AiHelpdesk, color: { color: 'white' } },
  ];
  return (
    <div className='containerPhoneScreen'>
      <div className='containerContent'>
        {data.map((link, index) => (
          <NavLink key={index} to={link.to}>
            <div className='contentItem'>
              <img
                src={link.url}
                alt={link.text}
              />
              <p style={link.color}>{link.text}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MobileView;
