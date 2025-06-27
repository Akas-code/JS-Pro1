const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");
// console.log(boxes);
// console.log(body);

boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "1st") {
      body.style.backgroundColor = "yellow";
      document.querySelector("h1").innerHTML = "Anshu I love You";
    }
    if (e.target.id === "2nd") {
      body.style.backgroundColor = "blue";
      document.querySelector("h1").innerHTML = "Anshu  Tmse bahut pyaar krta hu meri WIFI";
    }
    if (e.target.id === "3rd") {
      body.style.backgroundColor = "red";
      document.querySelector("h1").innerHTML = "Anshu I love You so much";
    }
    if (e.target.id === "4th") {
      body.style.backgroundColor = "orange";
      document.querySelector("h1").innerHTML = "Anshu Baht pyaar krta hu Tmse";
    }
  });
});
