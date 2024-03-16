document.addEventListener("DOMContentLoaded", function() {
    let containers = document.querySelectorAll('.container');
    let currentIndex = 0;

    function scrollToNextContainer() {
        if (currentIndex < containers.length - 1) {
            containers[currentIndex].classList.add('hidden');
            containers[currentIndex + 1].classList.remove('hidden');
            currentIndex++;
        }
    }

    function scrollToPreviousContainer() {
        if (currentIndex > 0) {
            containers[currentIndex].classList.add('hidden');
            containers[currentIndex - 1].classList.remove('hidden');
            currentIndex--;
        }
    }

    window.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            scrollToNextContainer();
        } else {
            scrollToPreviousContainer();
        }
    });
});