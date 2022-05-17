function menu (){
  let menu = document.getElementById("menu-container-content")
  if (menu.style.display == "none") {
    menu.style.display = "flex",
    menu.style.background = "blue"
  } else {
    menu.style.display = "none"    
  }
}

$("#arrow-down").click(function (e) { 
  e.preventDefault();
  menu()
});