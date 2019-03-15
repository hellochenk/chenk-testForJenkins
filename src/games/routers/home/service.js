import axios from 'axios';

export const getGame = (params) => {
    return axios({
        url: '/api/getGame',
        method: 'get',
        params
    })
}

// export const getList = (params) => {
//     return axios({
//         url: '/api/getgame',
//         method: 'get',
//         params
//     })
// }

// export const getList = (params) => {
//     return axios({
//         url: '/api/getgame',
//         method: 'get',
//         params
//     })
// }

// export const getList = (params) => {
//     return axios({
//         url: '/api/getgame',
//         method: 'get',
//         params
//     })
// }

