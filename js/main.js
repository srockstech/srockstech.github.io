var btn = document.getElementById("go-button");

btn.addEventListener("click", buttonClicked);

function buttonClicked()
{
  console.log("Button got Clicked.");
  btn.removeEventListener("click", buttonClicked);
}
