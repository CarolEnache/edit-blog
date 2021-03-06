import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost} from '../actions';
import { Link} from 'react-router-dom';
import NavBarMenu from './navbar';
import Header from './header';
import Footer from './footer';




class PostsShow extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, () =>{
            this.props.history.push('/');
        });
    }


    render(){

        const { post } = this.props;

        if(!post){
            return <div>Loading...</div>
        }

        return (
            <div>
                <NavBarMenu />
                <Header />
                <div className='container'>
                    <Link to='/' className='btn btn-primary'>Back to Index</Link>
                    <button
                        className='btn btn-danger pull-xs-rigth'
                        onClick={this.onDeleteClick.bind(this)}

                    >
                        Delete Post
                 </button>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect( mapStateToProps, {fetchPost, deletePost})(PostsShow);