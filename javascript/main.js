document.querySelector(".js-go").addEventListener('click', function(){

    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);
});

//Search using enter key
document.querySelector(".js-userinput").addEventListener('keyup', function(e){
// e is to provide informatioin about our click or whatever is our event listner is for if we use e in click it will provide information about our click like x and y coordinates etc  
    var input = document.querySelector("input").value;
    console.log(input);
    if (e.which == 13) { // 13 for enter key we didnt used e.keycode as it is depreciated from web standard
        pushToDOM(input);
    }
    
});

function pushToDOM(input) {
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}