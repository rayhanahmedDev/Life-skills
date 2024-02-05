

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionTwo() {
    document.getElementById("coaching-drop").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// move to top button
const myButton = document.getElementById("mybtn")

window.onscroll = function() {scrollFunction()}

function scrollFunction (){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        myButton.style.display = 'block'
    }else{
        myButton.style.display = 'none'
    }
}

myButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


