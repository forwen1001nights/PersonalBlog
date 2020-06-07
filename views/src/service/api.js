import axios from 'axios'
import config from '../../config/client'

const api = axios.create({
    baseURL: `http://${config.host}:${config.port}`
})

export function find(condition) {
    return api.get('/api/blog/findAll', {
        params: {
            condition
        }
    })
}

export function login(data) {
    return api.post('/api/admin/login', data)        
}

export function addBlog(data) {
    return api.post('/api/blog/add', data)
}

export function editBlog(data) {
    return api.put('/api/blog/update', data)
}

export function deleteBlog(condition) {
    return api.delete('/api/blog/delete', {data: condition})
}