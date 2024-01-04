

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


// main collapse section
const mainCollapse = document.querySelectorAll(".contentBx")

mainCollapse.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

// 2nd collapse section
const faqs = document.querySelectorAll(".question")

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

// nested collapse
const nested = document.querySelectorAll(".nested-b")

nested.forEach((nest) => {
    nest.addEventListener('click', () => {
        nest.classList.toggle('active')
    })
})

// expand all section 
var expandAll = false;

document.getElementById('expand-all').addEventListener('click', function () {
    var collapses = document.querySelectorAll('.content');
    expandAll = !expandAll

    collapses.forEach(function (collapse) {
      collapse.style.display = expandAll ?  'block' : 'none';
    });
  });