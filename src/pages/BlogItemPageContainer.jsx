import React from 'react';
import {connect} from 'react-redux';
import {changeValueCreate, addPostCreate} from '../redux/blog-reducer';
import BlogItemPage from './BlogItemPage';


let mapStateToProps = (state) => {
    return {
        state: state.blogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeValueContainer: (text) => {
            dispatch(changeValueCreate(text))
        },
        addPost: () => {
            dispatch(addPostCreate())
        }
    }
}


const BlogItemPageContainer = connect(mapStateToProps, mapDispatchToProps)(BlogItemPage);

export default BlogItemPageContainer;