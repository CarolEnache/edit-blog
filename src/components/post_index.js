import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h1>Posts</h1>
                        <ul>
                            {this.renderPosts()}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);