const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");
// console.log(boxes);
// console.log(body);

// alert("Click on the boxes to change the background color and text of the heading! MERI TITLI");

boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "1st") {
      body.style.backgroundColor = "yellow";
      document.querySelector("h1").innerHTML = "I love You";
    }
    if (e.target.id === "2nd") {
      body.style.backgroundColor = "blue";
      document.querySelector("h1").innerHTML = " Tmse bahut pyaar krta hu meri WIFI";
    }
    if (e.target.id === "3rd") {
      body.style.backgroundColor = "red";
      document.querySelector("h1").innerHTML = "I love You so much";
    }
    if (e.target.id === "4th") {
      body.style.backgroundColor = "orange";
      document.querySelector("h1").innerHTML = "Bahut pyaar krta hu Tmse";
    }
  });
});
