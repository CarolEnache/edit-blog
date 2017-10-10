import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h1>Content here!</h1>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(null, {fetchPosts})(PostIndex);