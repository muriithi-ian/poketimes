import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati provident, reprehenderit, dolorem odio minima at laboriosam repudiandae sequi debitis aperiam! Quisquam, beatae voluptates? Obcaecati animi eius suscipit minima consectetur!</p>
        </div>
    )
}

export default Rainbow(About)