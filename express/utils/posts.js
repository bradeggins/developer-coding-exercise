const path = require('path')
const fs = require('fs')

function getPostNames(){
    const folder = path.join(__dirname, '../../assets/posts')
    return fs.readdirSync(folder)
}

function getPost(filename){
    const folder = path.join(__dirname, '../../assets/posts/')
    return fs.readFileSync(folder + filename, 'utf-8')
}

function formatSlugPostName(postNames){
    return postNames.map(postName => {
        const post = getPost(postName)
        const headerTitle = post.split('\n')[1]
        const title = headerTitle.split(': ')[1]
        const slugTitle = post.split('\n')[3]
        const slug = slugTitle.split(': ')[1]
        return {
          slug, title
        }
    })
}

function formatPostContents(slug){
    const fileName = `${slug}.md`
    const post = getPost(fileName)
    const paragraphs = post.split('\n')
    return paragraphs
}

module.exports = {
    getPostNames,
    formatSlugPostName,
    formatPostContents
}