import React, { Component } from 'react'
import axios from 'axios'
import Rainbow from '../hoc/Rainbow'


class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    post: res.data
                })
            })
    }

    render() {
        const post = this.state.post ? (
            < div className="post" >
                <h3 className="center">{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
            </div >
        ) : (
                <div className="center">
                    Post loading ...
                </div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Rainbow(Post)