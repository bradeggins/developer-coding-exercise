const express = require('express')
const { getTopWords } = require('./utils/tags')
const { getPostNames, formatSlugPostName, formatPostContents } = require('./utils/posts')
const app = express()
const rootPostDir = './server/assets/posts'


app.use(express.json())
app.use(express.static('public'))

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get('/post/:slug', function (req, res) {

  const { slug } = req.params
  const post = {
    content: formatPostContents(slug)
  }
  res.json({post})
})

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ]
 */
app.get('/posts', function (req, res) {
    const postNames = getPostNames()
    const posts = formatSlugPostName(postNames)
  res.json(posts) 
})

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!')
})
