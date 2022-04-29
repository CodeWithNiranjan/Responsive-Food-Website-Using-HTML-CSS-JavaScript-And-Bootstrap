window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav")
    navbar.classList.toggle("navsticky", window.scrollY > 0)
})