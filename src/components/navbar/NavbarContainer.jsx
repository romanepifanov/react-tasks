import Navbar from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.navbarPage
    }
}

const mapDispatchToProps = {}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer; 