// template_2yn8mx5
// service_xvi7dk6
// public key: AFYPuaJKIMP26vHVm

// <script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init("AFYPuaJKIMP26vHVm");
//    })();
// </script>


let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x, y);
    //querySelectorAll returns an array
    for (let i = 0;  i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }

}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    } 
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact (event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            "service_xvi7dk6",
            "template_2yn8mx5",
            event.target,
            "AFYPuaJKIMP26vHVm"

        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
            console.log("this worked again")
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert (
                "the email service is temporarily unavailable. Please contact me directly on jonathanlee882@gmail.com"
            );
        })
    }

    
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }



//     loading.classList += " modal__overlay--visible"
//     setTimeout(() => {
//         loading.classList.remove("modal__overlay--visible");
//         success.classList += " modal__overlay--visible"
//     }, 1000)
// }
    
