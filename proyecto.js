

let links = document.querySelectorAll("nav a");
for (var x=0; x <links.length;x++){
    links[x].onclick  = function(){
        menu.style.display = " none";
        menu_visible = false;
    }
}