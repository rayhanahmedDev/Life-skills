const carousel = document.querySelector('.carousel')
const arrowBtns = document.querySelectorAll('.wrapper i')
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]

let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging')
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging')
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)



// accordion section

let accordions = document.querySelectorAll('.accordion')

accordions.forEach(acco => {
    acco.onclick = (event) => {
        event.stopPropagation();
        let content = acco.querySelector('.accordion-content');

        // Check if this accordion has nested content
        let nestedContent = content.querySelector('.nested-accordion-content');
        if (nestedContent) {
            // If there's nested content, close it first
            let nestedAccordions = content.querySelectorAll('.nested-accordion');
            nestedAccordions.forEach(nest => {
                nest.classList.remove('active');
            });
        }

        // Toggle active class for the clicked accordion
        if (acco.classList.contains('active')) {
            acco.classList.remove('active')

        } else {
            acco.classList.add('active')
        }
    }

    let content = acco.querySelector('.accordion-content');
    content.onclick = (event) => {
        event.stopPropagation(); // Prevents event from bubbling up the DOM tree
    };
})

// nested accordion content
let nestedAccordion = document.querySelectorAll('.nested-accordion')

nestedAccordion.forEach(nest => {
    nest.onclick = () => {
        if (nest.classList.contains('active')) {
            nest.classList.remove('active')

        } else {
            nest.classList.add('active')
        }
    }
})

// expand all section
function toggleAll() {
    let allExpanded = true; // Flag to check if all accordions are expanded
    let accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acco => {
        if (!acco.classList.contains('active')) {
            allExpanded = false;
        }
    });

    // If at least one accordion is not expanded, expand all; otherwise, collapse all
    if (!allExpanded) {
        accordions.forEach(acco => {
            acco.classList.add('active');
            let nestedAccordions = acco.querySelectorAll('.nested-accordion');
            nestedAccordions.forEach(nest => {
                nest.classList.add('active');
            });
        });
    } else {
        accordions.forEach(acco => {
            acco.classList.remove('active');
            let nestedAccordions = acco.querySelectorAll('.nested-accordion');
            nestedAccordions.forEach(nest => {
                nest.classList.remove('active');
            });
        });
    }
}

document.getElementById('expandCollapseAllButton').addEventListener('click', toggleAll);
