
var menu_item_img = document.querySelector(".menu-item");
var image = ['dish1.jpeg','dish2.jpeg', 'dish3.jpeg', 'dish4.jpeg', 'dish5.jpeg', 'dish6.jpeg', 'dish7.jpeg', 'dish8.jpeg', 'dish9.jpeg', 'dish10.jpeg']

var i=0; //current image index

function prev(){
    if (i <= 0)i = image.length;
    i--;
    return setImg();

}
function next(){
    if (i >= image.length-1) i = -1;
    i++;
    return setImg();

}

function setImg(){
    return menu_item_img.setAttribute('src','image/' +image[i]);
}


