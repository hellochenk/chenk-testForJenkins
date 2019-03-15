import axios from 'axios';

export const AddNewOne = params => {
    console.log('params', params)

    return axios({
        url: '/api/createGame',
        method: 'post',
        data: params
    }).then(res => {
        if(res) {
            return res.data
        } else {
            return {
                type: false
            }
        }
    })
}