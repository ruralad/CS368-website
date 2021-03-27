
const pageViews: HTMLHtmlElement = document.querySelector(
  "#page-views"
) as HTMLHtmlElement;
const pageBody :HTMLElement = document.querySelector(".content") as HTMLElement;
const pageAnimation :HTMLElement = document.querySelector(".animation") as HTMLElement;
const loadingAnimation :HTMLElement = document.querySelector(".item") as HTMLElement;
function showBody() {
  fetch("http://localhost:3000/api/getCurrentViews", {
    method: "get",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      pageViews.innerHTML = data.views + " page views so far";

      pageBody.style.display = "block";
      pageAnimation.style.display = "block";
      loadingAnimation.style.display = "none";

      fetch("http://localhost:3000/api/updatePageView", {
        method: "post",
        mode: "cors",
      });
    });
}
