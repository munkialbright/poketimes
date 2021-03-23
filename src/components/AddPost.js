import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class AddPost extends Component {
    handleSubmit = (e) => {
        this.props.createPost("'" + (this.props.posts.length + 1) + "'", e.target.title.value, e.target.body.value);
        return this.props.history.push("/'" + (this.props.posts.length + 1) + "'");
    }

    render() {
        return (
            <div className="container">
                <h4 className="center">Create New Post</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" placeholder="Post Title here" />
                    <br />
                    <label>Content:</label>
                    <input type="text" name="body" placeholder="Post Content here" />
                    <input type="submit" className="btn grey" value="Create"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (id, title, body) => {
            dispatch(createPost(id, title, body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);