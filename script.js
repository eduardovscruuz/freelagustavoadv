const intersectObserver = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting){intersectObserver.unobserve(entry.target)}
        })
    },
    {
        threshold:0
    }
)

const elements = document.querySelectorAll(".animate")

elements.forEach(element => intersectObserver.observe(element))