import React from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';
import {followCreator, unfollowCreator} from '../redux/pet-reducer';


let mapStateToProps = (state) => {
    return {
        state: state.petPage.petsInfo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followCreator: (text) => {
            dispatch(followCreator(text))
        },
        unfollowCreator: () => {
            dispatch(unfollowCreator())
        }
    }

}


const PetsPageItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default PetsPageItemContainer;