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

console.log(posts);
return (
    <>
    <h1>Posts</h1>
    {posts.map((post, i) => <h3><Link key={i} to={post.slug}>{post.title}</Link></h3>)}
    </>
)

}

export default Posts