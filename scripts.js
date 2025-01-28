function toggleTheme() {
    // Select the <link> element
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'style1.css') {
        theme.setAttribute('href', 'style2.css');
    } else {
        theme.setAttribute('href', 'style1.css');
    }
    // localStorage.setItem('Style', theme.getAttribute('href'))
}

// function getStyle(){
//     let theme = localStorage.getItem("Style") || 'style1.css';
//     theme.setAttribute('href', theme);
// }


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }