//Creating variables based on the id's used in the form html
const userNameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitPost = document.querySelector("#submit");

//Add event listener to perform a task when the submit button is clicked
submitPost.addEventListener("click", function (event) {
  console.log("click");
  event.preventDefault();

  const entries = JSON.parse(localStorage.getItem("posts")) || [];

  //grabs the user data and links the value to each corresponding key
  const post = {
    username: userNameInput.value.trim(),
    title: titleInput.value,
    content: contentInput.value,
  };

  console.log(post); // logs the data from the post object
  entries.push(post); //pushes the user data from post into the entries array
  localStorage.setItem("posts", JSON.stringify(entries));
  window.location.href = "blog.html"; //Clicking the submit button takes you to the second html page
});

//Tried to write a function that would send an alert if the form feilds are left empty but it does not work
function validateForm() {
  if (userNameInput === "" || titleInput === "" || contentInput === "") {
    alert("Please fill out the form completely!");
    return false;
  }
  return true;
}
