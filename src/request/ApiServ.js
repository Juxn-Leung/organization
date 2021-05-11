import request from './api'

export const getLogin = (params) => {
    return request({
        url: `/getLogin`,
        data: params,
        method: 'get',
        headers: {
            'app': '1'
        }
    })
}
