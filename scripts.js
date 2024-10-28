
// navbar
let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let about = document.querySelector("#about");
let edu = document.querySelector("#edu");
let ser = document.querySelector("#ser");
let con = document.querySelector("#con");
// home page
let home = document.querySelector("#home");
let contentH3 = document.querySelector(".home-content h3");
let contentH1 = document.querySelector(".home-content h1");
let contentH4 = document.querySelector(".home-content h4");
let circle1 = document.querySelector(".home-circle-1");
let circle2 = document.querySelector(".home-circle-2");
let img = document.querySelector(".home-img");
let imgBorder = document.querySelector(".home-img img");
let nav = document.querySelector('.navbar a');
let modeBtn = document.querySelector(".mode-Btn");
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');
// about page
let aboutPage = document.querySelector('.about');
let aboutH2 =document.querySelector(".about-content h2");
let aboutH3 =document.querySelector(".about-content h3");
let aboutpara =document.querySelector(".about-content p");
let aboutCircle=document.querySelector(".about-circle ");
let aboutImgBrdr=document.querySelector(".about-img img ");
let aboutImg=document.querySelector(".about-img ");
// education page
let eduPage = document.querySelector('.timeline-section ');
let eduPageH2 = document.querySelector('.timeline-section h2');
// service page
let serPage = document.querySelector('.services');
let serPageH2 = document.querySelector('.services h2');
let serBox = document.querySelector('.service-container .services-box');
let serBox1 = document.querySelector('.service-container #box1');
// contact page
let contPage = document.querySelector('.contact');
// footer
let footer = document.querySelector('footer');
let ftr = document.querySelector('#ftr');
let ftrabout = document.querySelector('#ftrabout');
let ftrser = document.querySelector('#ftrser');
let ftrprivacy = document.querySelector('#ftrprivacy');
let ftrCopy = document.querySelector('.footer .copyright');



let mode = "light";
modeBtn.onclick =()=>{
   
   if (mode === "light") {
    // navbar and home page 
    console.log("clicked");
    header.style.backgroundColor = "black";
    logo.style.color = "white";
    nav.style.color = "white";
    about.style.color = "white";
    ser.style.color = "white";
    edu.style.color = "white";
    con.style.color = "white";
    modeBtn.style.backgroundColor = "white";
    modeBtn.style.color = "black";
    modeBtn.innerText = "Light!"
    home.style.backgroundColor = "black";
    contentH1.style.color = "white"; 
    contentH4.style.color = "white";
    contentH3.style.color = "white";
    circle1.style.backgroundColor = "#ff154c" ;
    circle2.style.backgroundColor = "#ff154c" ;
    img.style.border = "20px solid #ff154c";
    imgBorder.style.border = "30px solid black"
    mode = "dark";
    // about page
    aboutPage.style.backgroundColor = "black";
    aboutH2.style.color = "white";
    aboutH3.style.color = "white";
    aboutpara.style.color = "white";
    aboutCircle.style.backgroundColor = "#ff154c" ;
    aboutImgBrdr.style.border = "30px solid black";
    aboutImg.style.border = "20px solid #ff154c";
    // education page
    eduPage.style.backgroundColor = "black";
    eduPageH2.style.color = "white";
    // service page
    serPage.style.backgroundColor = "black";
    serPageH2.style.color = "white";
    serBox.style.backgroundColor = "black";
    serBox.style.color = "white";
    serBox1.style.backgroundColor = "black";
    serBox1.style.color = "white";
    // contact page
    contPage.style.backgroundColor = "black";
    contPage.style.color = "white";
    // footer
   footer.style.backgroundColor = "black";
   ftr.style.color = "white";
   ftrabout.style.color = "white";
   ftrser.style.color = "white";
   ftrprivacy.style.color = "white";
   ftrCopy.style.color = "white";
 }else{
    // navbar and home page 
    modeBtn.innerText = "Dark!";
    mode = "light";
    home.style.backgroundColor = "#C4DAD2";
    header.style.backgroundColor = "rgb(106, 156, 137, 0.5)";
    logo.style.color = "black";
    nav.style.color = "black";
    about.style.color = "black";
    ser.style.color = "black";
    edu.style.color = "black";
    con.style.color = "black";
    modeBtn.style.backgroundColor = "black";
    modeBtn.style.color = "white";
    contentH1.style.color = "black"; 
    contentH4.style.color = "black";
    contentH3.style.color = "black";
    circle1.style.backgroundColor = "#6A9C89" ;
    circle2.style.backgroundColor = "#6A9C89" ;
    img.style.border = "20px solid #6A9C89";
    imgBorder.style.border = "30px solid #C4DAD2"
    // about page
    aboutPage.style.backgroundColor = "rgb(196, 218, 210, 0.7)";
    aboutH2.style.color = "black";
    aboutH3.style.color = "black";
    aboutpara.style.color = "black";
    aboutCircle.style.backgroundColor = "#6A9C89" ;
    aboutImgBrdr.style.border = "30px solid rgb(196, 218, 210)";
    aboutImg.style.border = "20px solid #6A9C89";
    // education page
    eduPage.style.backgroundColor = "#C4DAD2";
    eduPageH2.style.color = "black";
    // service page
    serPage.style.backgroundColor = "rgb(196, 218, 210, 0.7)";
    serPageH2.style.color = "black";
    serBox.style.backgroundColor = "white";
    serBox.style.color = "black";
    serBox1.style.backgroundColor = "white";
    serBox1.style.color = "black";
    // contact page
    contPage.style.backgroundColor = "#C4DAD2";
    contPage.style.color = "black";
     // footer
   footer.style.backgroundColor = "rgb(106,156,137)";
   ftr.style.color = "black";
   ftrabout.style.color = "black";
   ftrser.style.color = "black";
   ftrprivacy.style.color = "black";
   ftrCopy.style.color = "black";

   }
}

var typed = new Typed(".typewriter-text",
    {
        strings: [" ",
            "Front-End Developer"    
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
        
    }
)

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

