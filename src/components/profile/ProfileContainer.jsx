import { onAddPost, onChangePost, getProfile } from './../../redux/reducers/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileAPIContainer from './ProfileAPIContainer';
import { AuthComponent } from '../../hoc/AuthRedirect';

const mapStateToProps = (state) => {
    return {
        profileState: state.profilePage,
        authState: state.authState
    }
}

const mapDispatchToProps = {
    getProfile,
    onAddPost,
    onChangePost
}

const ComponentWithRouterData = withRouter(AuthComponent(ProfileAPIContainer));

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ComponentWithRouterData);

export default ProfileContainer;