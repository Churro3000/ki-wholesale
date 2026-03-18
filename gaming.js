// gaming.js

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  const productWidth = 295;        // 280px box + 15px margin
  let currentIndex = 0;

  function moveCarousel(direction) {
    const totalProducts = track.children.length;
    const maxIndex = totalProducts - 4;   // Show 4 products at a time

    currentIndex += direction;

    // Limits
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    track.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }

  // Event listeners
  leftArrow.addEventListener('click', () => moveCarousel(-1));
  rightArrow.addEventListener('click', () => moveCarousel(1));
});
