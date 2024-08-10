document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image img');
    const popup = document.querySelector('.popup');
    const largeImage = document.querySelector('.large-image');
    const closeBtn = document.querySelector('.close-btn');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const imageName = document.querySelector('.image-name');
    const imageIndex = document.querySelector('.index');
    let currentIndex = 0;

    function showImage(index) {
        largeImage.src = images[index].src;
        imageName.textContent = images[index].getAttribute('src').split('/').pop();
        imageIndex.textContent = (index + 1).toString().padStart(2, '0');
        currentIndex = index;
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            popup.classList.add('active');
            showImage(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    document.addEventListener('keydown', (e) => {
        if (!popup.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') leftArrow.click();
        if (e.key === 'ArrowRight') rightArrow.click();
        if (e.key === 'Escape') closeBtn.click();
    });
});