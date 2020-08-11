import { sendMessage } from '../../redux/reducers/dialogs-reducer';
import { connect } from 'react-redux';
import { AuthComponent } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import DialogsAPIContainer from './DialogsAPIContainer';

const mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsPage
    }
}

const mapDispatchToProps = {
    sendMessage
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthComponent
)(DialogsAPIContainer)
