import React, { Component } from 'react';

import { connect } from "react-redux";

class ResultsPosts extends Component {

    renderPosts() {

        const posts = this.props.posts.map((post, index) => {
            return (
                <Post type="recent" key={index} {...post}/>
            )
        }) 

        return posts;
    }

    render() {
        return (
            <div className="results-posts">
                <div className="results-posts-wrapper">
                    <ul className="results-posts-posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.ResultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts)