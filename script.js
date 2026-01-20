const track = document.querySelector(".track");
const items = document.querySelectorAll(".item");
const itemWidth = 100 + 20; 
const centerOffset = 100; 
let currentIndex = 0;


function updateCarousel() {
  
  currentIndex = (currentIndex + items.length) % items.length;

  
  items.forEach(item => item.classList.remove("active"));
  items[currentIndex].classList.add("active");

  
  const x = -(currentIndex * itemWidth) + centerOffset;
  track.style.transform = `translateX(${x}px)`;
}


document.querySelector(".arrow-left").addEventListener("click", () => {
  currentIndex--;
  updateCarousel();
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  currentIndex++;
  updateCarousel();
});


window.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") {
    currentIndex--;
    updateCarousel();
  } else if (e.key === "ArrowRight") {
    currentIndex++;
    updateCarousel();
  }
});

updateCarousel();