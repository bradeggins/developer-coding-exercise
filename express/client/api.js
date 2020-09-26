import request from 'superagent'

export const getPosts = () => {
    return request
      .get('/posts')
      .then(res => res.body)
}