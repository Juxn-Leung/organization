
import Axios from './request'
const BASE = process.env.NODE_ENV === 'development' ? '/api/v1' : ''

export default function request(config) {
    if (config.method === 'GET' || config.method === 'get') {
        return Axios.get(BASE + config.url, {
            params: config.data,
            ...config
        })
    } else if (config.method === 'DELETE' || config.method === 'delete') {
        return Axios.delete(BASE + config.url, {
            params: config.data,
            ...config
        })
    } else if (config.method === 'POST' || config.method === 'post') {
        return Axios.post(BASE + config.url, config.data, { ...config })
    } else if (config.method === 'PUT' || config.method === 'put') {
        return Axios.put(BASE + config.url, config.data, { ...config })
    } else if (config.method === 'PATCH' || config.method === 'patch') {
        return Axios.patch(BASE + config.url, config.data, { ...config })
    }
}

