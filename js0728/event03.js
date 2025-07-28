let nav = document.querySelector(`nav`);
let navLink = document.querySelector('naz ul li a');


//偵測頁面捲動時
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset != 0) {
        nav.style.backgroundColor = "rgba(0,0,0,.5)"
        navLink.forEach(a => {
            a.style.color = "#fff";
        })
    } else {
        nav.style.backgroundColor = "#ccc"
        navLink.forEach(a => {
            a.style.color = "#333";
        })
    }
})