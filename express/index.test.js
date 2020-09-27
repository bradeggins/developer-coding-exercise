import request from 'supertest'
import server from './index'
import {getPostnames, formatSlugPostName } from './utils/posts'

jest.mock('./utils/posts', () => ({
    getPostnames: Promise.resolve('Post name'),
    formatSlugPostName: Promise.resolve('Formatted slug and postname')
}))

test('Test setup working', () => {
    expect(true).toBe(true)
})


// TODO separate index into index and server/routes for testing
// describe('GET /posts', () => {
//     test('Returns 200', () => {
//         expect.assertions(2)
//         return request(server)
//          .get('/posts')
//          .then(res => {
//              expect(res.status).toBe(200)
//          })   
//     })
// })