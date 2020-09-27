import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './Posts'
import Post from './Post'

const App = () => {
  return (
    <>
    <h1>Blog</h1>
    <Route exact path='/' component={ Posts} />
    <Route exact path='/post/:slug' component= { Post } />
    </>
  )
}

export default App