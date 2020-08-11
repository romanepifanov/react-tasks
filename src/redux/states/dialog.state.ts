import { Message } from '../../models/message.model';
import { Dialog } from '../../models/dialog.model';

export interface DialogState {
    dialogs: Array<Dialog>,
    messages: Array<Message>
}