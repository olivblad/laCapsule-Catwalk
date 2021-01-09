$("#action").on("click", function () {
  console.log("il court il court le furet...");
  makeItRun();
});

//change the img from 1 to 13 to 1 ....
const makeItRun = () => {
  const img = $("#cat-run");
  const src = img.attr("src");
  const dot = src.indexOf("-");
  const extension = src.indexOf(".jpg");
  let index = parseInt(src.slice(dot + 1, extension));
  index === 13
    ? img.attr("src", "./images/cat-1.jpg")
    : img.attr("src", `./images/cat-${index + 1}.jpg`);
};
