import React, { Component } from 'react'
// import Rainbow from '../hoc/Rainbow'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'



class Posts extends Component {

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (

                    <div className="post card" id={post.id} key={post.id} >
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>

                )
            })
        ) : (
                <div className="center">
                    No Posts Yet
                </div>
            )
        return (
            <div className="container home">
                <h4 className="center">Posts</h4>
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

export default connect(mapStateToProps)(Posts)