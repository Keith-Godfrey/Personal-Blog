//Creating variables based on the id's used in the form html
const userNameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitPost = document.querySelector("form");

//Add event listener to perform a task when the submit button is clicked
submitPost.addEventListener("submit", function (event) {
    event.preventDefault();

  
    const username=userNameInput.value.trim()
    const title=titleInput.value.trim()
    const content=contentInput.value.trim()

  if(!username ||!title || !content) { 
    document.querySelector('#error').textContent='please fill out the whole form'
    setTimeout(() => {
      document.querySelector('#error').textContent=''  
    }, 3000);
    return;
  }
  const entries = JSON.parse(localStorage.getItem("posts")) || [];
  //grabs the user data and links the value to each corresponding key
  const post = {
    username, 
    title, 
    content, 
  };

  console.log(post); // logs the data from the post object
  entries.push(post); //pushes the user data from post into the entries array
  localStorage.setItem("posts", JSON.stringify(entries));
  window.location.href = "blog.html"; //Clicking the submit button takes you to the second html page
});