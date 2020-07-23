import { onAddPost, onChangePost, onLoadProfile } from './../../redux/reducers/profile-reducer'
import { connect } from 'react-redux';
import ProfileAPiContainer from './ProfileAPiContainer';

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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPiContainer);

export default ProfileContainer;