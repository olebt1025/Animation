const track = document.querySelector(".track");
const items = document.querySelectorAll(".item");

const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, items[0]);


const itemWidth = 100;
const centerOffset = 100;

let currentIndex = 1;

 function updateCarousel(animate = true) {

    track.style.transition = animate ? "transform 0.3s ease" : "none";
     items.forEach(item => item.classList.remove("active"));

     items[currentIndex].classList.add("active");

     const x = -(currentIndex * itemWidth) + centerOffset;
     track.style.transform = `translateX(${x}px)`;
 }



document.querySelector(".arrow-left") .addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

document.querySelector(".arrow-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

window.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { 
        currentIndex = (currentIndex -1 + items.length) % items.length;
        updateCarousel();
    }
    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
});

updateCarousel();