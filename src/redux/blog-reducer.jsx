const UPDATE_NEW_COMMENT = 'UPDATE_NEW_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

let initialState = {
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
}

export const changeValueCreate = (text) => ({type: UPDATE_NEW_COMMENT, newText: text});
export const addPostCreate = () => ({type: ADD_COMMENT});

export const blogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_COMMENT: {
            let newComment = {
                id: 2,
                comment: state.newComment,
                likeCount: 0
            }

            let stateCopy = {
                ...state,
                commentsInfo: [...state.commentsInfo, newComment],
                newComment: ''
            }

            return stateCopy
        }
        case UPDATE_NEW_COMMENT: {
            return {
                ...state,
                newComment: action.newText
            }
        }
        default:
            return state
    }

}