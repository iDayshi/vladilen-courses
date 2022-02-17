const GET_URL = 'https://jsonplaceholder.typicode.com/posts';
const GET_URL_COMMENT = 'https://jsonplaceholder.typicode.com/comments';

function toggleLoader() {
  const loaderElem = document.querySelector('#loader');
  const isHidden = loaderElem.hasAttribute('hidden');
  if (isHidden) {
    loaderElem.removeAttribute('hidden');
  } else {
    loaderElem.setAttribute('hidden', '');
  }
}

{
  /* <div id="post" class="post">
    <h1 class="post__title">Название Поста</h1>
    <p class="post__text">Текст Поста</p>
    <b class="post__comments-text">Комментарии</b>
    <div class="post__comments">
        <div class="post-comment">
            <span class="post-comment__author">
                maxim@gmail.com
            </span>
            <span class="post-comment__text">
                laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo
                necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium
            </span>
        </div>
    </div>
 </div> */
}

function addComment(user, comment) {
  const scriptElem = document.querySelector('script');
  const bodyElem = document.querySelector('body');
  const divElement = document.createElement('div');
  const divId = divElement;
  divId.className = 'post';
  divId.id = 'post';
  const divElemComments = document.createElement('div');
  divElemComments.className = 'post__comments';
  const tittlePost = document.createElement('h1');
  tittlePost.className = 'post__title';
  tittlePost.innerText = user.title;
  const bodyPost = document.createElement('p');
  bodyPost.className = 'post__text';
  bodyPost.innerText = user.body;
  const commentPost = document.createElement('b');
  commentPost.className = 'post__comments-text';
  commentPost.innerText = 'Коментарии';
  bodyElem.insertBefore(divId, scriptElem);
  divId.append(tittlePost);
  divId.append(bodyPost);
  divId.append(commentPost);
  divId.append(divElemComments);
  comment.forEach((element) => {
    const divComment = document.createElement('div');
    divComment.className = 'post-comment';
    const spanAuthor = document.createElement('span');
    spanAuthor.className = 'post-comment__author';
    spanAuthor.innerText = element.email;
    const spanComment = document.createElement('span');
    spanComment.className = 'post-comment__text';
    spanComment.innerText = element.body;
    divElemComments.append(divComment);
    divComment.append(spanAuthor);
    divComment.append(spanComment);
  });
}

const renderPost = async (id) => {
  try {
    const response = await fetch(`${GET_URL}/${id}`);
    const dataUser = await response.json();
    console.log(dataUser);
    const responseComment = await fetch(`${GET_URL_COMMENT}?postId=${id}`);
    const dataComment = await responseComment.json();
    console.log(dataComment);
    addComment(dataUser, dataComment);
  } catch (error) {
    console.error(error);
  } finally {
    toggleLoader();
  }
};

renderPost(1);
