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
  if (menuBarToggle.classList.contains("max-lg:-translate-y-[240px]")) {
    menuBarToggle.classList.remove("max-lg:-translate-y-[240px]");
    menuBarToggle.classList.add("translate-y-0");
  } else {
    menuBarToggle.classList.remove("translate-y-0");
    menuBarToggle.classList.add("max-lg:-translate-y-[240px]");
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
      document.getElementById("toggle-bars").classList.add("max-lg:-translate-y-[240px]")
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

function submitForm() {
  var name = document.getElementById('fname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // You can perform additional validation here if needed

  // Send the data to your server
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "form.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Optionally, you can handle the server's response here
      console.log(xhr.responseText);
    }
  };

  // Prepare the data to send to the server
  var data = "fname=" + encodeURIComponent(name) +
             "&email=" + encodeURIComponent(email) +
             "&message=" + encodeURIComponent(message);

  // Send the data
  xhr.send(data);

  // Reset the form after submission
  document.getElementById('fname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
}

function clearForm() {
  // Reset the form
  document.getElementById('fname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
}
