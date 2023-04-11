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

function contact () {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            "service_xvi7dk6",
            "template_2yn8mx5",
            event.target,
            "AFYPuaJKIMP26vHVm"

        ).then(() => {
            console.log("this worked again")
        })
}