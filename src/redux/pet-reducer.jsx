const UPDATE_NEW_PET_COMMENT = 'UPDATE_NEW_PET_COMMENT';
const ADD_PET_COMMENT = 'ADD_PET_COMMENT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    petsInfo: [
        {id: 1, name:'Barsik', img:'https://cdn.fishki.net/upload/post/2017/02/14/2218367/4665606c66d252e994438a589b9.jpg', age:'4',
            stylization:'true',
            description:'It\'s very good cat. Loves affection. Accustomed to the tray. Loves children. Not aggressive to other animals',
            follow: true },
        {id: 2, name:'Mars', img:'https://zooclub.ru/attach/10000/10091.jpg', age:'7', stylization:'false', description:'The dog can run fast and jump high. The dog has sharp teeth, they easily gnaw bones', follow: false },
        {id: 3, name:'Chelsy', age:'11', stylization:'true', description:'It\'s trained dog. Loves children. Looking for a new family' },
        {id: 4, name:'Oleg', img:'https://www.tapetus.pl/obrazki/n/226116_papuga-ara-galaz.jpg', age:'8', stylization:'false', description:'Cool dude!!! Can dance and sing!', follow: false },
        {id: 5, name:'Myrka', img:'https://postila.ru/data/0c/26/76/f6/0c2676f677b4bc239377bb9a2ec701b32531daf75a63f436c92fd74310124eaa.jpg', age:'3.5', stylization:'false', description:'Good cat. Found in poor condition. It requires attention to itself.', follow: true }
    ],
    commentsInfoPet: [
        {id: '1', comment: 'I\'m like this pet', likeCount: '3'},
        {id: '2', comment: 'WOW goood dog', likeCount: '5'},
    ],
    newCommentPet: ""
}

export const changeValuePetCreate = (textPetComment) => ({type: UPDATE_NEW_PET_COMMENT, newText: textPetComment});
export const addPostPetCreate = () => ({type: ADD_PET_COMMENT});

export const followCreator = (petId) => ({type: FOLLOW, petId: petId});
export const unfollowCreator = (petId) => ({type: UNFOLLOW, petId: petId});

export const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PET_COMMENT: {
            let newCommentPetObj = {
                id: 3,
                comment: state.newCommentPet,
                likeCount: 0
            }
            let stateCopy = {
                commentsInfoPet: [...state.commentsInfoPet, newCommentPetObj],
                newCommentPet: ""
            };
            return stateCopy
        }
        case UPDATE_NEW_PET_COMMENT:
            return {
                ...state,
                newCommentPet: action.newText
            }



        case FOLLOW: {

            let stateCopy = {
                ...state,
                //petsInfo: [...state.petsInfo] //копирование объекта, если не нужно изменения

                //копирование объекта, если нужно поменять значение (делаем через map):
                petsInfo: state.petsInfo.map(pi => {
                    if(pi.id === action.petId) {
                        return  {...pi, follow: false}
                    }
                    return pi
                })

            }
            return stateCopy
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                //petsInfo: [...state.petsInfo]
                petsInfo: state.petsInfo.map(pi => {
                    if(pi.id === action.petId) {
                        return  {...pi, follow: true}
                    }
                    return pi
                })

            }
            return stateCopy
        }
        default:
            return state
    }
}
