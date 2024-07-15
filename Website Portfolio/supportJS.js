let sections = document.querySelectorAll('.section section');
let navLinks = document.querySelectorAll('.navlog .navigation a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navlog .navigation a[href*="#' + id + '"]').classList.add('active');
            });
        }
    });
};
