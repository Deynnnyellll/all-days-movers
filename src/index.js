//  Toggle Dropdown on About Us
function toggleDropdown() {
  let dropdown = document.querySelector("#dropdown");
  let dropdownIcon = document.querySelector("#dropdown-icon");

  dropdown.classList.toggle("hidden");

  if (dropdownIcon.classList.contains("fa-chevron-right")) {
      dropdownIcon.classList.remove("fa-chevron-right");
      dropdownIcon.classList.add("fa-chevron-down");
  } else {
      dropdownIcon.classList.remove("fa-chevron-down");
      dropdownIcon.classList.add("fa-chevron-right");
  }
}

//  Toggle MenuBar for Small Screen 
let menuBarToggle = document.querySelector("#toggle-bars")
let bar = document.querySelector("#menu-bar")

toggleBar = () => {
  if (menuBarToggle.classList.contains("max-md:-translate-y-[190px]")) {
    menuBarToggle.classList.remove("max-md:-translate-y-[190px]");
    menuBarToggle.classList.add("translate-y-[20px]");
  } else {
    menuBarToggle.classList.remove("translate-y-[20px]");
    menuBarToggle.classList.add("max-md:-translate-y-[190px]");
  }

  bar.classList.toggle("fa-times")
};

var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-bar").style.top = "0";
    } else {
      document.getElementById("nav-bar").style.top = "-100px";
      !dropdown.classList.contains("hidden") && dropdown.classList.add("hidden");
      document.getElementById("dropdown-icon").classList.contains("fa-chevron-down") && (document.getElementById("dropdown-icon").classList.remove("fa-chevron-down") & document.getElementById("dropdown-icon").classList.add("fa-chevron-right"))
      document.getElementById("toggle-bars").classList.add("max-md:-translate-y-[190px]")
      document.getElementById("menu-bar").classList.remove("fa-times")
    }
    prevScrollpos = currentScrollPos;
}

// Intersection Observer Animation
const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  rootMargin: "-100px",
})

cards.forEach((card) => {
  observer.observe(card)
})

// Smooth Scrolling
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
