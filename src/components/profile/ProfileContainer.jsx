import { onAddPost, onChangePost, onLoadProfile } from './../../redux/reducers/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileAPIContainer from './ProfileAPIContainer';

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = {
    onLoadProfile,
    onAddPost,
    onChangePost
}
const ComponentWithRouterData = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ComponentWithRouterData);

export default ProfileContainer;