import React, { Component } from 'react'
import axios from 'axios'
import Rainbow from '../hoc/Rainbow'
import Pokeball from '../pokeball.png'


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
            < div className="post card" >
                <img src={Pokeball} alt="A pokeball" />
                <h3 className="center">{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
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

export default Rainbow(Post)