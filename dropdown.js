
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

// 2nd collpase section
const faqs = document.querySelectorAll(".question")

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})