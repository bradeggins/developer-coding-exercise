import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './Posts'

const App = () => {
  return (
    <Route path='/' component={ Posts} />
  )
}

export default App