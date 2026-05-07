 let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "image/HTML.png"){
        myImage.setAttribute("src", "image/HTML2.png");
    }else{
        myImage.setAttribute("src", "image/HTML.png");
    }
}    

