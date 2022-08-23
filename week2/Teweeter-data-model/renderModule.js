const TweeterRender  = function(){

    const renderPosts = function(posts){
        $("#posts").empty()

        for(let post of posts){
            let postDiv = createPostElement(post)
            $("#posts").append(postDiv)
        }
    }



    return {
        renderPosts: renderPosts 
    }
}

const createPostElement = function(post){

    let deletePost = `<div class=deletePost>X</div>`
    let postHeader = `<h1 class=postHeader> ${post.text} </h1>`
    let comments = createCommentElements(post.comments)
    let commentsContainerDiv = `<div class=commentsContainer>${comments}</div>`
    
    let commentInput = `<input type="text" id="commentInput" placeholder="write something nice!"></input> `
    let commentBtn = `<button>comment</button> `
  
    let postDiv = `<div class=post> ${deletePost}${postHeader}${commentsContainerDiv}${commentInput}${commentBtn} </div>`

    return postDiv
}

const createCommentElements = function(commentsArray){

    let concatedLines=``

    for(let comment of commentsArray){

        let concatedComment = `<div class=delete>X</div>`
        concatedComment += `<div class=comment>${comment.text}</div>`

        concatedLines += `<div class=commentLine>${concatedComment}</div>`

    }

    return concatedLines
}

//  <input type="text" id="my-input" placeholder="Some Text!"></input>
// <button>Click Me!</button>

/*
            {
                text: str,
                id: postIdMechanism(),
                comments: []
        } 

*/