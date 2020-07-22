const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: action.userId,
                likesCount: 0,
                content: state.postForm.content
            };
        
            state.posts.push(newPost);
            state.postForm.content = '';
        } break;
        case UPDATE_NEW_POST_TEXT: {
            state.postForm.content = action.content;
        } break;
    }

    return state;
}


export const addPostActionCreator = (userId) => {
    return {
        type: ADD_POST,
        usrId: userId
    }
}

export const updateNewPostTextActionCreator = (content) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        content: content
    }
}

export default  profileReducer;
