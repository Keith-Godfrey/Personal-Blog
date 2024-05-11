const themeBtn = document.querySelectorAll("#theme");
const body = document.querySelector("body");
let mode = "light";

themeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (mode === "dark") {
    mode = "light";
    body.setAttribute("id", "light");
    } else {
    mode = "dark";
    body.setAttribute("id", "dark");
    }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("#submission");
    const author = document.querySelector("#Username");
    const title = document.querySelector("#Title");
    const content = document.querySelector("#Content");

    const getData = localStorage.getItem("blogData");
    let blogEntries = [];

    if (getData) {
    blogEntries = JSON.parse(getData);
    }

    submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    submitButton.addEventListener("click", function (event) {
    event.preventDefault();
        console.log("Form submitted");
        console.log(author.value, title.value, content.value);
    if (author.value && title.value && content.value) {
        const blogData = {
        Author: author.value.trim(),
        Title: title.value.trim(),
        Content: content.value.trim(),
        };
        console.log("Blog data to be stored:", blogData);
        blogEntries.push(blogData);
        localStorage.setItem("blogData", JSON.stringify(blogEntries));
        
        showAllBlogs();
    } else {
        alert("Please enter all fields");
    }   
  });


function showAllBlogs() {
  window.location.href = "blog.html";}
});
});
