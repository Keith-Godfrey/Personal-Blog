
document.getElementById('backBtn').addEventListener('click', function(){
  document.getElementById('formLink').click();
});


const posts = JSON.parse(localStorage.getItem('posts'));//pulls the user data from local storage
const entries = document.getElementById('entries');
entries.innerHTML = '';//identifies the entries as having no content
posts.forEach(post => {
  //creates a new article element
  const articleEl = document.createElement('article');
  //creates new h3 element
  const h3El = document.createElement('h3');
  //pushes the content from the title section of the array to the h3 element
  h3El.textContent = post.title;
  //pushes the h3 element into the article element that was created before
  articleEl.appendChild(h3El);
  const pEl = document.createElement('p');
  pEl.textContent = post.content;
  articleEl.appendChild(pEl);
  const h5El = document.createElement('h5');
  h5El.textContent = 'Written By: '+post.username;
  articleEl.appendChild(h5El);
  entries.appendChild(articleEl); // Puts the text in the article inside of the element with the 'entries' id.

});