function toggleTheme() {
    const stylesheetLink = document.getElementById("theme");
    const themeToggleButton = document.getElementById("theme-toggle");
    const lightTheme = "style1.css";
    const darkTheme = "style2.css";

    // Determine the new theme
    const newTheme = stylesheetLink.getAttribute("href") === lightTheme ? darkTheme : lightTheme;
    
    // Apply the new theme and store it
    stylesheetLink.setAttribute("href", newTheme);
    localStorage.setItem("selectedTheme", newTheme);
}

// Set initial theme on page load
(function () {
    const storedTheme = localStorage.getItem("selectedTheme") || "style1.css";
    document.getElementById("theme").setAttribute("href", storedTheme);
})();

//vertical nav bar stuff
function openNav() {
    document.getElementById("navbar").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
  }