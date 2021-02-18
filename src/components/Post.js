import React, { Component } from 'react'
// import axios from 'axios'
// import Rainbow from '../hoc/Rainbow'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import { deletePost } from "../actions/PostActions";

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/posts')
    }

    render() {
        const post = this.props.post ? (
            < div className="post card" >
                <img src={Pokeball} alt="A pokeball" />
                <h3 className="center">{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div >
        ) : (
                <div className="center">
                    Post loading ...
                </div>
            )
        return (
            <div className="container home">

                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return ({
        post: state.posts.find(post => post.id === id)
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(
                deletePost(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)