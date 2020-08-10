import { onAddPost, onChangePost, getProfile, updateProfileStatus } from './../../redux/reducers/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileAPIContainer from './ProfileAPIContainer';
import { AuthComponent } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        profileState: state.profilePage
    }
}

const mapDispatchToProps = {
    getProfile,
    onAddPost,
    onChangePost,
    updateProfileStatus,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    AuthComponent
)(ProfileAPIContainer)