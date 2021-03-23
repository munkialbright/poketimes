const initState = {
    posts: [
        {id: '1', title: 'Lorem ipsum dolor sit', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eos perspiciatis, nam eligendi quidem officiis repellendus voluptate voluptas laborum. Tempore adipisci ipsa possimus non pariatur minus dolorum excepturi quia recusandae?'},
        {id: '2', title: 'Sint eos perspiciatis', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eos perspiciatis, nam eligendi quidem officiis repellendus voluptate voluptas laborum. Tempore adipisci ipsa possimus non pariatur minus dolorum excepturi quia recusandae?'},
        {id: '3', title: 'Tempore adipisci ipsa possimus', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eos perspiciatis, nam eligendi quidem officiis repellendus voluptate voluptas laborum. Tempore adipisci ipsa possimus non pariatur minus dolorum excepturi quia recusandae?'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts: newPosts
        }
    }

    if (action.type === 'ADD_POST') {
        let newPosts = [...state.posts, action.post];

        return {
            ...state,
            posts: newPosts
        }
    }

    if (action.type === 'UPDATE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.post.id !== post.id
        });

        return {
            ...state,
            posts: [...newPosts, action.post]
        }
    }

    return state;
}

export default rootReducer;