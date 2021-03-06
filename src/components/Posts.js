import React, { Component } from 'react'
import axios from 'axios'
import Rainbow from '../hoc/Rainbow'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'



class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    render() {
        const { posts } = this.state;
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

export default Rainbow(Posts)