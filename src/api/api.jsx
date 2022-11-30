import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e4b6dc91-689f-4850-912e-990b5f59efb4"
    }
})


export const userApi = {
    getUsers(currentPage, pageCountUsers) {
        return instance.get(`users?page=${currentPage}&count=${pageCountUsers}`).then(response => response.data)
    },
    getPaginator(page, pageCountUsers) {
        return instance.get(`users?page=${page}&count=${pageCountUsers}`).then(response => response.data)
    },

    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    postFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
}

export const profileApi = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`).then(response => response.data)
    },
}

export const authApi = {
    getLogin() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}
