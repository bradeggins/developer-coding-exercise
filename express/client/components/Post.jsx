import React, { useEffect, useState } from 'react';
import { getPostDetails } from '../api'

const Post = (props) => {
    const [ post, setPost ] = useState([])

    useEffect(() => {
        const slug = props.match.params.slug
        getPostDetails(slug)
        .then(data => {
            setPost(data.post.content)
        })
    }, [])

    console.log(post);
    return (
        <>
        {(!post) ? null : post.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </>
    )
}

export default Post  