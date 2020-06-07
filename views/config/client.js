export default {
    host: process.env.NODE_ENV === 'development' ? 'localhost': '47.98.243.74',
    port: 3000,
    api: {
        admin: '/api/admin',
        blog: '/api/blog'
    },
}
