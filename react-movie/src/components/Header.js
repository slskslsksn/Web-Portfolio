import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTicket as fasTicket, faTicketAlt, faTicketSimple} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <FontAwesomeIcon icon={fasTicket} size="4x" color='#f00' />
      <span style={{
        marginLeft: 10,
        fontSize: '4em'
      }}>Movie List</span>
    </div>
    );
}

export default Header;