
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

// 
const accordion = document.getElementsByClassName('contentBx');

      for(i = 0; i < accordion.length; i++){
        accordion[i].addEventListener('click', function(){
          this.classList.toggle('active')
        })
      }