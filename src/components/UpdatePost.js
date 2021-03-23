import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updatePost } from "../actions/postActions";

class AddPost extends Component {
    handleSubmit = (e) => {
        this.props.updatePost(this.props.post.id, e.target.title.value, e.target.body.value);
        return this.props.history.push("/" + this.props.post.id);
    }

    render() {
        const post = this.props.post ? (
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" placeholder={this.props.post.title} />
                <br />
                <label>Content:</label>
                <input type="text" name="body" placeholder={this.props.post.body} />
                
                <div className="center">
                    <input type="submit" className="btn grey left" value="Update"/>
                    <Link to={'/' + this.props.post.id} className="btn red right" onClick={this.handleUpdate}>Cancel</Link>
                </div>
            </form>
        ) : (
            <div className="center">Loading page...</div>
        )

        return (
            <div className="container">
                <h4 className="center">Update Post</h4>
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;

    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (id, title, body) => {
            dispatch(updatePost(id, title, body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);