function Renderer () {
  return {
    renderPosts
  }
}

function renderPosts (posts) {
  $('#posts').empty()
  for (const post of posts) {
    const $post = $(`<div class="post"><p class="post-text">${post.text}</p></div>`).data('id', `${post.id}`)
    $('#posts').append($post)

    const $deletePost = $(`<button class='deleteTweetBTN'>Delete Tweet</button>`)
    $post.append($deletePost)
  
    const $commentsEl = $(`<div class='comments'></div>`)
    $post.append($commentsEl)
  
    for (const com of post.comments) {
      const $commentText = $(`<div class="comments">${com.text}</div>`).data('id', `${com.id}`)
      $commentsEl.append($commentText)
      const deleteComment = $(`<div class='deleteComment'> X </div>`)
      $commentText.append(deleteComment)
    } 
     

    const $addComment = $(`<input class='addComment' placeholder="Got something to say?"></input>`)
    $commentsEl.append($addComment)

    const $addCommentBTN = $(`<button class='addCommentBTN'>Comment</button>`)
    $commentsEl.append($addCommentBTN)

  } 
}

