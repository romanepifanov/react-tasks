const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postForm: {
        content: ''
    },
    posts: [{
            id: 1,
            likesCount: 4,
            content: "Hello there!"
        },
        {
            id: 1,
            likesCount: 2,
            content: "I am okay, how are you?"
        },
        {
            id: 1,
            likesCount: 4,
            content: "I have new car"
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: action.userId,
                likesCount: 0,
                content: state.postForm.content
            };

            state.posts.push(newPost);
            state.postForm.content = '';
        }
        break;
    case UPDATE_NEW_POST_TEXT: {
        state.postForm.content = action.content;
    }
    break;
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

export default profileReducer;