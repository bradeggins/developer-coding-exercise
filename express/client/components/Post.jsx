import React, { useEffect, useState } from 'react';
import { getPostDetails } from '../api'

const Post = (props) => {
  const [ post, setPost ] = useState('')

  useEffect(() => {
    const slug = props.match.params.slug
    getPostDetails(slug)
    .then(data => {
        setPost(data)
    })
  }, [])

    return (
        <h1>{props.match.params.slug}</h1>
    )
}

export default Post