// import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
    /* state = {
        posts : [ ]
    } */

    /* componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data.slice(0, 10)
                })
            })
    } */

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.reverse().map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}><span className="card-title red-text">{post.title}</span></Link>
                            <p className="card-body">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No post yet!</div>
        )

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);