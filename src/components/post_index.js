import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                    
                </li>
            )
        })
    }

    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <div className="containerr">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className='text-xs-right'>
                                <Link className='btn btn-primary' to='/posts/new'>
                                    Add a Post
                            </Link>
                            </div>
                            <h1>Posts</h1>
                            <ul>
                                {this.renderPosts()}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);