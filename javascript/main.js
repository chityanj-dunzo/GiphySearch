document.querySelector(".js-go").addEventListener('click', function(){

    var input = document.querySelector("input").value;
   
    search(input);
});

//Search using enter key
document.querySelector(".js-userinput").addEventListener('keyup', function(e){
// e is to provide informatioin about our click or whatever is our event listner is for if we use e in click it will provide information about our click like x and y coordinates etc  
    var input = document.querySelector("input").value;
    
    if (e.which == 13) { // 13 for enter key we didnt used e.keycode as it is depreciated from web standard
        search(input);
    }
    
});

function search(input) {
    
    var url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=WEbf96NoR0yHFY8Bn0pxoyQmKIe9OYZT`

        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load',function(e){
            console.log(e.target.response)
            var data = e.target.response;
            console.log(data)
            pushToDOM(data);
  
  });
}




function pushToDOM(data) {

    
    var container = document.querySelector(".js-container");
    
        
    for (let index = 0; index < 50; index++) {
        var response = JSON.parse(data);
        
        var imageUrls = response.data[index]
        var imageUrl = imageUrls.images.fixed_height.webp
        console.log(imageUrl);
        //container.innerHTML = container.innerHTML + imageUrl;
        container.innerHTML = container.innerHTML + `<img src="${imageUrl}">`;
        
    }
    
}
