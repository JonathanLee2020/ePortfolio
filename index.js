// $(document).ready(function () {
//   $('.slick-slider').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots : true,
//       arrows: true
//   });
// });



let isModalOpen = false;
const scaleFactor = 1 / 20;


console.log("step 1")


function moveBackground(event) {
  console.log("hello")
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // console.log(boolInt)
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}


let contrastToggle = false;

console.log("step 2");

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

console.log("step 3");


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .
    sendForm('service_di9e90y', 'template_2yn8mx5', event.target, 'AFYPuaJKIMP26vHVm')
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((error) => {
      console.log(error)
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on jonathanlee882@email.com"
      );
    });
}

console.log("step 4");


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

$(document).ready(function () {
  $('.slick-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots : true,
      arrows: true
  });
});