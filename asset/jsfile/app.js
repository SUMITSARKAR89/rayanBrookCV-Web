const bg = document.getElementById('background');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      if (scrollY > 100 && scrollY < maxScroll - 500) {
        bg.classList.add('blurred');
      } else {
        bg.classList.remove('blurred');
      }
    });

// ==============================dark======================= 
 const sun = document.querySelector(".toogle-sun");
const night = document.querySelector(".toogle-night");
const wallpepar = document.querySelector(".bg");

sun.addEventListener('click', () => {
  night.style.display = "block";
  sun.style.display = "none";
  wallpepar.style.background = "url('https://i.postimg.cc/Pq8fmq59/bg2.png')";
  wallpepar.style.backgroundPosition = "center 10%";
  wallpepar.style.backgroundRepeat = "no-repeat";
  wallpepar.style.backgroundAttachment = "fixed";
  wallpepar.style.backgroundSize = "cover";
   document.body.classList.add("lightmood");
});
night.addEventListener('click', () => {
  sun.style.display = "block";
  night.style.display = "none";
    document.body.classList.remove("lightmood");
    wallpepar.style.background = "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')";
     wallpepar.style.backgroundPosition = "center 30%";
     wallpepar.style.backgroundRepeat = "no-repeat";
     wallpepar.style.backgroundAttachment = "fixed";
     wallpepar.style.backgroundSize = "cover";
    
});