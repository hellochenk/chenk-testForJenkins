import axios from 'axios';

export const getGame = (params) => {
    return axios({
        url: '/api/getGame',
        method: 'get',
        params
    }).then(res => {
        if(res) {
            return res.data
        }
    })
}

export const testGame = (params) => {
    return axios({
        url: '/api/testGame',
        method: 'post',
        params
    })
}
