const posts = [
  {
    text: 'First post!',
    id: 'p1',
    comments: [
      { id: 'c1', text: 'First comment on first post!' },
      { id: 'c2', text: 'Second comment on first post!!' },
      { id: 'c3', text: 'Third comment on first post!!!' }
    ]
  },
  {
    text: 'Aw man, I wanted to be first',
    id: 'p2',
    comments: [
      { id: 'c4', text: "Don't wory second poster, you'll be first one day." },
      { id: 'c5', text: 'Yeah, believe in yourself!' },
      { id: 'c6', text: 'Haha second place what a joke.' }
    ]
  }
]
let postIdCounter = posts.length + 1

let commentIdCounter = 0
for (let i = 0; i < posts.length; i++) {
  commentIdCounter += posts[i].comments.length
}

function getPosts () {
  return posts
}

function addPost (text) {
  const newPost = {}
  newPost.text = text
  newPost.id = `p${postIdCounter}`
  newPost.comments = []
  posts.push(newPost)
  postIdCounter++
  return posts
}

function removePost (postID) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === postID) {
      posts.splice(i, 1)
    }
  }
  return posts
}
// addPost("Hello")
// addPost("My own post")
// addPost('nika pika')

// removePost('p1')
// console.log(posts)

function addComment (text, postID) {
  const newComment = {}
  commentIdCounter++
  newComment.id = 'c' + commentIdCounter
  newComment.text = text
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === postID) {
      posts[i].comments.push(newComment)
    }
  }
  return posts
}

function removeComment (postID, commentID) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === postID) {
      for (let j = 0; j < posts[i].comments.length; j++) {
        if (posts[i].comments[j].id === commentID) {
          posts[i].comments.splice(j, 1)
        }
      }
    }
  }
  return posts
}

// eslint-disable-next-line no-unused-vars
function Tweeter () {
  return {
    addPost,
    removePost,
    addComment,
    removeComment,
    getPosts
  }
}



































































// ///////////////////////////////////////////////////////////
// function addComment2 (text, postID) {
//   const comment = {
//     id: 'c' + commentIdCounter++,
//     text: text
//   }
//   const post = posts.find(post => post.id === postID)
//   post.push(comment)
//   return post
// }

// // addComment("gahsjshag", 'p3')
// // console.log(posts)

// function removeComment2 (postID, commentID) {
//   const post = posts.find(post => post.id === postID)
//   const comment = post.comments.find(comment => comment.id === commentID)
//   const commentIdx = post.comments.indexOf(comment)
//   post.comments.splice(commentIdx, 1)
//   return posts
// }


// function addPost2 (text) {
//   const newPost = {
//     text,
//     id: `p${postIdCounter++}`,
//     comments: []
//   }
//   posts.push(newPost)
//   return posts
// }
// // removeComment("p2", "c6")
// // console.log(posts)

//////////////////////////////////////////////////////////////



