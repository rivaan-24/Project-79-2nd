menu_list_array = ["Veg Margherita Pizza","Cheese Pizza","Chicken Tandoori Pizza","Deluxe Veg Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"];
function getMenu(){
var html_data = "";
menu_list_array.sort();
        for (var i=0; i < menu_list_array.length; i++){
            html_data = html_data + menu_list_array[i] + "<br>";
        }
        document.getElementById("display_menu").innerHTML = html_data;
        //give the appropriate id name as display_menu  
}
function add_item(){
var html_data="";
var item = document.getElementById("add_item").value;
var imgtags='<img id="img1" src="Pizza_Image.jpg"/>'
        menu_list_array.sort()
        for(var i=0;i<menu_list_array.length;i++){
            html_data = html_data + imgtags + menu_list_array [i]+"<br>";
        }
         document.getElementById("display_addedmenu").innerHTML = html_data;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}