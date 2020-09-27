import request from 'superagent'

export const getPosts = () => {
    return request
      .get('/posts')
      .then(res => res.body)
}

export const getPostDetails = (slug) => {
    return request
     .get(`/post/${slug}`)
     .then(res => res.body)
}