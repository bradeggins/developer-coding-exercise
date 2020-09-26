import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getPosts } from '../api'

const Posts = (props) => {

const [ posts, setPosts ] = useState([])
useEffect(() => {
    getPosts()
    .then(data =>
        setPosts(data))
}, [])


return (
    <>
    <h1>Posts</h1>
    {posts.map((post, i) => <h3 key={i}><Link to={`/post/${post.slug}`}>{post.title}</Link></h3>)}
    </>
)

}

export default Posts