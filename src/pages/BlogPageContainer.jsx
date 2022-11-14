import React from 'react';
import {connect} from 'react-redux';
import {changeValueCreate, addPostCreate} from '../redux/blog-reducer';
import BlogPage from './BlogPage';


let mapStateToProps = (state) => {
    return {
        state: state.blogPage
    }
}


const BlogPageContainer = connect(mapStateToProps)(BlogPage);

export default BlogPageContainer;