<script>
    let currentSlideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) { currentSlideIndex = 0; }
        if (index < 0) { currentSlideIndex = slides.length - 1; }

        slides.forEach((slide, i) => {
            slide.style.display = (i === currentSlideIndex) ? 'block' : 'none';
        });
    }
    function changeSlide(step) {
        currentSlideIndex += step;
        showSlide(currentSlideIndex);
    }
    showSlide(currentSlideIndex);
</script>