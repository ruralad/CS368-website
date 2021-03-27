"use strict";
const pageViews = document.querySelector("#page-views");
const pageBody = document.querySelector(".content");
const pageAnimation = document.querySelector(".animation");
const loadingAnimation = document.querySelector(".item");
function showBody() {
    // fetch("http://localhost:3000/api/getCurrentViews", { //for dev
    fetch("/api/getCurrentViews", {
        method: "get",
        mode: "cors",
    })
        .then((response) => response.json())
        .then((data) => {
        pageViews.innerHTML = data.views + " page views so far";
        pageBody.style.display = "block";
        pageAnimation.style.display = "block";
        loadingAnimation.style.display = "none";
        // fetch("http://localhost:3000/api/updatePageView", { //for dev
        fetch("/api/updatePageView", {
            method: "post",
            mode: "cors",
        });
    });
}
