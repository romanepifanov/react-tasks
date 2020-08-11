import Dialogs from './Dialogs';
import React from 'react'

class DialogsAPIContainer extends React.Component {
    onSubmit = formData => {
        this.props.sendMessage(formData.content);
    }

    render () {
        return <Dialogs {...this.props} onSubmit={this.onSubmit}/>
    }
}

export default DialogsAPIContainer;
