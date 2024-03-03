document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                if (!sec.classList.contains('show-animate')) {
                    sec.classList.add('show-animate');
                }
            } else {
                sec.classList.remove('show-animate');
            }
        });
    };
 
});
