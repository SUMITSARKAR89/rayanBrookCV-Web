const bg = document.getElementById('background');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      if (scrollY > 300 && scrollY < maxScroll - 500) {
        bg.classList.add('blurred');
      } else {
        bg.classList.remove('blurred');
      }
    });

// ==============================dark======================= 
 const sun = document.querySelector(".toogle-sun");
const night = document.querySelector(".toogle-night");
const wallpepar = document.querySelector(".bg");

const h1 = document.querySelector(".name-title");
const email_p = document.querySelector(".email-txt");
const phone_p = document.querySelector(".phone-txt");
const linkedin_p = document.querySelector(".linkedin-txt");
const location_p = document.querySelector(".location-txt");

night.addEventListener('click', () => {
  sun.style.display = "block";
  night.style.display = "none";
  document.body.classList.remove("lightmood");
  // ------background-------- 
  wallpepar.style.background = "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')";
  wallpepar.style.backgroundPosition = "center 30%";
  wallpepar.style.backgroundRepeat = "no-repeat";
  wallpepar.style.backgroundAttachment = "fixed";
  wallpepar.style.backgroundSize = "cover";
  // --------home-------- 
  h1.innerHTML = "Tyrone Brooks";
  email_p.innerHTML = "tyrone.brooks@gmail.com";
  phone_p.innerHTML = "+1 404-555-9876";
  linkedin_p.innerHTML = "linkedin.com/in/tyrone-brooks/";
  location_p.innerHTML = "Atlanta, US";
  


  
    
});

sun.addEventListener('click', () => {
  night.style.display = "block";
  sun.style.display = "none";
  document.body.classList.add("lightmood");

  // ------background-------- 
  wallpepar.style.background = "url('https://i.postimg.cc/Pq8fmq59/bg2.png')";
  wallpepar.style.backgroundPosition = "center 10%";
  wallpepar.style.backgroundRepeat = "no-repeat";
  wallpepar.style.backgroundAttachment = "fixed";
  wallpepar.style.backgroundSize = "cover";
  
  // --------home-------- 
  h1.innerHTML = "Zachary Olsen";
  email_p.innerHTML = "zachary.olsen@gmail.com";
  phone_p.innerHTML = "+45 71 20 4567";
  linkedin_p.innerHTML = "linkedin.com/in/zachary-olsen/";
  location_p.innerHTML = "Copenhagen, Denmark";
 
  
});




// =============================navigation======================= 
  window.addEventListener("scroll", () =>{
    const sectionsContent = document.querySelectorAll(".sectionContent");
    const scrollY = window.pageYOffset; 

    sectionsContent.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 60;
      const sectionId = section.getAttribute("id");

      const menuItem = document.querySelector(`header nav .menu .menu-item a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        menuItem.classList.add("current");
      } else {
        menuItem.classList.remove("current");
      }
    })
})