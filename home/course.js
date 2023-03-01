let displayImage1 = document.getElementById("image1")
let displayImage2 = document.getElementById("image2")
let displayImage3 = document.getElementById("image3")
let displayImage4 = document.getElementById("image4")
let displayImage5 = document.getElementById("image5")
let displayImage6 = document.getElementById("image6")


function changeImage(){
    if(displayImage1.src=("../img/class 8 tbse (2).webp")){
        // console.log("hello")
            displayImage1.src = "../img/class 8 tbse back.png" 
    }
}
displayImage1.addEventListener("click", function(){
    changeImage()
})

// for img 2

function changeImage2(){
    if(displayImage2.src=("../img/class 8 cbse.webp" )){
        // console.log("hello")
            displayImage2.src = "../img/class 8 tbse back.png" 
    }
}
displayImage2.addEventListener("click", function(){
    changeImage2()
})

// for img 3

function changeImage3(){
    if(displayImage3.src=("../img/class 8 cbse.webp" )){
        // console.log("hello")
            displayImage3.src = "../img/class 8 tbse back.png" 
    }
}
displayImage3.addEventListener("click", function(){
    changeImage3()
})

// for img 4

function changeImage4(){
    if(displayImage4.src=("../img/class 8 cbse.webp" )){
        // console.log("hello")
            displayImage4.src = "../img/class 9 black.png" 
    }
}
displayImage4.addEventListener("click", function(){
    changeImage4()
})

// for img 5

function changeImage5(){
    if(displayImage5.src=("../img/class 8 cbse.webp" )){
        // console.log("hello")
            displayImage5.src = "../img/class 9 black.png" 
    }
}
displayImage5.addEventListener("click", function(){
    changeImage5()
})

// for img 6

function changeImage6(){
    if(displayImage6.src=("../img/class 9 icsc.png" )){
        // console.log("hello")
            displayImage6.src = "../img/class 9 black.png" 
    }
}
displayImage6.addEventListener("click", function(){
    changeImage6()
})


