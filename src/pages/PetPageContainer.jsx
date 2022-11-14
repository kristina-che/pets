import React from 'react';
import {connect} from 'react-redux';
import {changeValuePetCreate, addPostPetCreate} from '../redux/pet-reducer';
import PetPage from './PetPage';


let mapStateToProps = (state) => {
    return {
        state: state.petPage,
        //newCommentPet: state.newCommentPet

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeValueContainer: (text) => {
            dispatch(changeValuePetCreate(text))
        },
        addPost: () => {
            dispatch(addPostPetCreate())
        }
    }
}


const PetPageContainer = connect(mapStateToProps, mapDispatchToProps)(PetPage);

export default PetPageContainer;