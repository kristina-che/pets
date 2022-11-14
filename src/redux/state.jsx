import {blogReducer} from './blog-reducer';
import {petReducer} from './pet-reducer';


const UPDATE_NEW_COMMENT = 'UPDATE_NEW_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_NEW_PET_COMMENT = 'UPDATE_NEW_PET_COMMENT';
const ADD_PET_COMMENT = 'ADD_PET_COMMENT';

let store = {
    _state: {
        blogPage: {
            blogInfo: [
                {id: 1, theme: 'Other', title:'Astronomy Binoculars A Great Alternative', img:'https://funart.pro/uploads/posts/2021-07/1627618897_12-funart-pro-p-naglaya-morda-kota-zhivotnie-krasivo-foto-18.jpg', date:'12.05.2021', views:'25', commentsCount:'2', text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.' },
                {id: 2, theme: 'News', title:'We have new things for our pets', img:'https://novostipmr.com/sites/default/files/filefield_paths/20221018-img_8405.jpg', date:'12.09.2020', views:'225', commentsCount:'2', text:'Latest stories on wildlife, conservation efforts and pets. ... Farmer Friedrich Stapel said while he knows what extensive damage wild boars can cause, he can’t bring himself to chase the animal away' },
                {id: 3, theme: 'Donation', title:'2000$ donation for our pets!', img:'https://магиямосква.рф/wp-content/uploads/2020/09/75-2.jpg', date:'12.05.2021', views:'25', commentsCount:'0', text:'A donation is a gift for charity, humanitarian aid, or to benefit a cause. A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.' },
                {id: 3, theme: 'History of salvation', title:'The Night Sky', img:'https://image2.thematicnews.com/uploads/images/68/22/64/02017/07/23/cef1e0fbc5.jpg', date:'03.05.2021', views:'65', commentsCount:'3', text:'Have you been part of a rescue story? Any first responder will tell you that there is nothing quite like ... Today, we’re going to look at some of the most incredible rescue stories eve' },
            ],
            commentsInfo: [
                {id: '1', comment: 'Good news!', likeCount: '3'},
                {id: '2', comment: 'It\'s real peaty dogs. I want it.', likeCount: '1'},
            ],
            newComment: ""
        },
        petPage: {
            petsInfo: [
                {id: 1, name:'Barsik', img:'https://cdn.fishki.net/upload/post/2017/02/14/2218367/4665606c66d252e994438a589b9.jpg', age:'4', stylization:'true', description:'It\'s very good cat. Loves affection. Accustomed to the tray. Loves children. Not aggressive to other animals' },
                {id: 2, name:'Mars', img:'https://zooclub.ru/attach/10000/10091.jpg', age:'7', stylization:'false', description:'The dog can run fast and jump high. The dog has sharp teeth, they easily gnaw bones' },
                {id: 3, name:'Chelsy', age:'11', stylization:'true', description:'It\'s trained dog. Loves children. Looking for a new family' },
                {id: 4, name:'Oleg', img:'https://www.tapetus.pl/obrazki/n/226116_papuga-ara-galaz.jpg', age:'8', stylization:'false', description:'Cool dude!!! Can dance and sing!' },
                {id: 5, name:'Myrka', img:'https://postila.ru/data/0c/26/76/f6/0c2676f677b4bc239377bb9a2ec701b32531daf75a63f436c92fd74310124eaa.jpg', age:'3.5', stylization:'false', description:'Good cat. Found in poor condition. It requires attention to itself.' }
            ],
            commentsInfoPet: [
                {id: '1', comment: 'I\'m like this pet', likeCount: '3'},
                {id: '2', comment: 'WOW goood dog', likeCount: '5'},
            ],
            newCommentPet: ""
        },
    },

    getState(){
        return this._state
    },

    _renderApp() {},

    subscribe(observer) {
        this._renderApp = observer;
    },

    dispatch(action) {
        this._state.blogPage = blogReducer(this._state.blogPage, action);
        this._state.petPage = petReducer(this._state.petPage, action);
        this._renderApp(this._state);
    }
}

export const changeValueCreate = (text) => ({type: UPDATE_NEW_COMMENT, newText: text});
export const addPostCreate = () => ({type: ADD_COMMENT});

export const changeValuePetCreate = (textPetComment) => ({type: UPDATE_NEW_PET_COMMENT, newText: textPetComment});
export const addPostPetCreate = () => ({type: ADD_PET_COMMENT});

export default store;

