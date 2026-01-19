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

    let realIndex = currentIndex - 1;

    if (realIndex < 0) realIndex = items.length - 1;
    if (realIndex >= items.length) realIndex = 0;

    items[realIndex].classList.add("active");

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
    }
    if (e.key === "ArrowRight") {
        currentIndex++;
        updateCarousel();
    }
});



// function jumpToIndex(index) {
//   track.style.transition = "none";
//   currentIndex = index;

//   const x = -(currentIndex * itemWidth) + centerOffset;
//   track.style.transform = `translateX(${x}px)`;

//   requestAnimationFrame(() => {
//     track.style.transition = "transform 0.3s ease";
//   });
// }

// track.addEventListener("transitionend", () => {
//   if (currentIndex === items.length + 1) {
//     jumpToIndex(1);
//   }

//   if (currentIndex === 0) {
//     jumpToIndex(items.length);
//   }
// });


// track.addEventListener("transitionend" , () => {
//     if (currentIndex === items.length + 1) {
//         track.style.transition = "none";
//         currentIndex = 1;

//         const x = -(currentIndex * itemWidth) + centerOffset;
//         track.style.transform = `translateX(${x}px)`;
//     }

//     if (currentIndex === 0) {
//         track.style.transition = "none";
//         currentIndex = items.length;

//         const x = -(currentIndex * itemWidth) + centerOffset;
//         track.style.transform = `translateX(${x}px)`;
//     }

// });
// jumpToIndex(1);
       
// updateCarousel();

// const track = document.querySelector(".track");
// const items = document.querySelectorAll(".item");

// const itemWidth = 100;
// const centerOffset = 100;

// let currentIndex = 0;

// function updateCarousel() {
//   // wrap index infinitely
//   currentIndex = (currentIndex + items.length) % items.length;

//   // update active state
//   items.forEach(item => item.classList.remove("active"));
//   items[currentIndex].classList.add("active");

//   // center the selected item
//   const x = -(currentIndex * itemWidth) + centerOffset;
//   track.style.transform = `translateX(${x}px)`;
// }

// // buttons
// document.querySelector(".arrow-left").addEventListener("click", () => {
//   currentIndex--;
//   updateCarousel();
// });

// document.querySelector(".arrow-right").addEventListener("click", () => {
//   currentIndex++;
//   updateCarousel();
// });

// // keyboard
// window.addEventListener("keydown", e => {
//   if (e.key === "ArrowLeft") {
//     currentIndex--;
//     updateCarousel();
//   }
//   if (e.key === "ArrowRight") {
//     currentIndex++;
//     updateCarousel();
//   }
// });

// // initial state
// updateCarousel();