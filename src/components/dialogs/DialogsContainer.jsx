import Dialogs from './Dialogs';
import { sendMessageAction, updateNewMessageTextAction } from '../../redux/reducers/dialogs-reducer';
import { connect } from 'react-redux';
import { AuthComponent } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageAction());
        },
        onChangeText: (event) => {
            dispatch(updateNewMessageTextAction(event.target.value));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthComponent
)(Dialogs)
