const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$('#post').on('click', function () {
  const $inputTwit = $('input').val()
  if ($inputTwit) {
    renderer.renderPosts(tweeter.addPost($inputTwit))
    $('input').val('') 
  } else { 
    $('#input').attr('placeholder', "WRITE SMTH!")
    $('#input').addClass('emptyInput') 

    $('#input').on('focus', function () { 
      $('#input').removeClass('emptyInput') 
      $('#input').attr('placeholder', "What's on your mind?")
    })
  } 
}
)

$('#posts').on('click', '.deleteTweetBTN', function () {
  const postId = $(this).closest('.post').data('id')
  renderer.renderPosts(tweeter.removePost(postId))
})

$('#posts').on('click', '.addCommentBTN', function () {
  const commentText = $(this).siblings('.addComment').val()
  if (commentText) {
    const postId = $(this).closest('.post').data('id')
    renderer.renderPosts(tweeter.addComment(commentText, postId))
    $(this).siblings('.addComment').val('') 
  } else {
    $(this).siblings('.addComment').attr('placeholder', "WRITE SMTH!")
    $(this).siblings('.addComment').addClass('emptyInput') 

    $(this).siblings('.addComment').on('focus', () => { 
      $(this).siblings('.addComment').removeClass('emptyInput') 
      $(this).siblings('.addComment').attr('placeholder', "Got something to say?") 
    })
  }
})

$('#posts').on('click', '.deleteComment', function () {
  const commentId = $(this).closest('.comments').data('id')
  const postId = $(this).closest('.post').data('id')
  renderer.renderPosts(tweeter.removeComment(postId, commentId))
})

