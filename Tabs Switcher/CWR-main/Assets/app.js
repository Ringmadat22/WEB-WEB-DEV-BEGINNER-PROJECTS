const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".about2")[0].classList.add("about4");
            document.querySelectorAll(".about1")[1].classList.add("about3");
        }
    })
})

observer.observe(document.querySelector(".about"))