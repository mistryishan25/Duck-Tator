


let gudetama_images = [
    //  "https://i.pinimg.com/originals/33/32/71/3332717836a8d1a931f4c246450fab63.png",
    // "https://i.pinimg.com/originals/ef/ee/89/efee89459f53dd388dbaeb110c600527.png"
    // "https://i.pinimg.com/originals/b6/a8/b8/b6a8b8b9043d0a1cd59de3297715cbb6.png",
    "https://pbs.twimg.com/media/E6rKPI3WUAQF192.png"
    // Add more direct image URLs as needed
];


function updateImages() {
    const imgs = document.getElementsByTagName("img");
    for (let image of imgs) {
        const random_img = Math.floor(Math.random() * gudetama_images.length);
        image.src = gudetama_images[random_img];
    }
}

// Initial image update
updateImages();

// Interval update to catch any images loaded after initial page load (every 10 seconds)
setInterval(updateImages, 1000);

// MutationObserver to watch for new images added to the DOM
const observer = new MutationObserver(updateImages);
observer.observe(document.body, {
    childList: true,
    subtree: true,
});