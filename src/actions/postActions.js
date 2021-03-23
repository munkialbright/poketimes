export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const createPost = (id, title, body) => {
    return {
        type: 'ADD_POST',
        post: {id: id, title: title, body: body}
    }
}

export const updatePost = (id, title, body) => {
    return {
        type: 'UPDATE_POST',
        post: {id: id, title: title, body: body}
    }
}