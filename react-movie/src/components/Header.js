import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTicket as fasTicket} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div style={{
      // textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <FontAwesomeIcon style={{}}icon={fasTicket} size="4x" color='#f00' />
      <h1 style={{
        display: 'inline-block',
        marginLeft: 10,
        fontSize: '4em',
        margin: 0
      }}>Movie List</h1>
    </div>
    );
}

export default Header;