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

toggleBar = (bar) => {
  let menuBarToggle = document.querySelector("#menu-bar-toggle")

  menuBarToggle.classList.toggle("max-md:translate-y-[450px]")
  bar.classList.toggle("fa-times")
};

const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 1,
})

cards.forEach((card) => {
  observer.observe(card)
})