import Profile from './Profile';
import { addPostAction, updateNewPostTextAction } from './../../redux/reducers/profile-reducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostAction(1));
        },
        onChangePost: (event) => {
            dispatch(updateNewPostTextAction(event.target.value));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;