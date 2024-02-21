import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrum } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header'>
      <h4 className='sub-title'>A freeCodeCamp Project</h4>
      <h2 className='title'>
        <FontAwesomeIcon icon={faDrum} /> Drum Machine
      </h2>
    </div>
  );
};

export default Header;
