import React, { Component } from 'react'
import axios from 'axios'
import Rainbow from '../hoc/Rainbow'


class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 20)
                })
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
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
            <div>
                <h4 className="center">Posts</h4>
                {postList}
            </div>
        )
    }
}

export default Rainbow(Posts)