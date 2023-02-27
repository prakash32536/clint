const outer = document.getElementsByClassName("outer")
console.log(outer)
const iner = document.getElementsByClassName("iner")
console.log(iner)


outer.addEventListener("click", function() {
    iner.style.display = 'block' ;
  });