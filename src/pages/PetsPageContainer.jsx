import React from 'react';
import {connect} from 'react-redux';
import PetsPage from './PetsPage';
import {followCreator, unfollowCreator} from '../redux/pet-reducer';

let mapStateToProps = (state) => {
    return {
        state: state.petPage.petsInfo
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followCreator: (petId) => {
            dispatch(followCreator(petId))
        },
        unfollowCreator: (petId) => {
            dispatch(unfollowCreator(petId))
        }
    }

}

export const PetsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PetsPage);

export default PetsPageContainer;