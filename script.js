const body = document.querySelector("body"),
  modeToggle = document.querySelector("dark-light-toggle")

let getMode = localStorage.getItem("mode")
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark")
}

// toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active")
  body.classList.toggle("dark")

  // keep user selected mode even if page refresh
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode")
  } else {
    localStorage.setItem("mode", "dark-mode")
  }
})

const openGithub = () => {
  window.open("https://github.com/SofieRydmark")
}

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/sofierydmark/")
}
