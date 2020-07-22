import Dialogs from './Dialogs';
import { sendMessageAction, updateNewMessageTextAction } from '../../redux/reducers/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;