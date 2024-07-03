


let gudetama_images = [
    //  "https://i.pinimg.com/originals/33/32/71/3332717836a8d1a931f4c246450fab63.png",
    // "https://i.pinimg.com/originals/ef/ee/89/efee89459f53dd388dbaeb110c600527.png"
    // "https://i.pinimg.com/originals/b6/a8/b8/b6a8b8b9043d0a1cd59de3297715cbb6.png",
    "https://pbs.twimg.com/media/E6rKPI3WUAQF192.png"
    // Add more direct image URLs as needed
];

let phrases = [ 
    "I think you're drowning in a sea of information."
    // , "I guess I'm destined to be eaten."
    // , "If the most important person in the country is like this, I fear for the future."
    // , "When people say 'complicated,' there's usually a childish reason behind it."
    // , "The economic outlook is eggcellent."
    // , "This is better than watching grass grow"
    // , "We've had our ups and downs but today's a perfect day for a nap"
    // , "When I knock back some soy sauce, all my misery just melts away"
    // , "It ain't like I wanna be rotten."
    // , "The same way you win someone's heart. If you want it… you steal it."
    // , "In the end, you can only live in the world you see."
    // , "I was able to come this far because you were with me. We're seeing this through to the end together!"
    // , "I'm still raw. I haven't even had salt sprinkled on me."
    // "what a draggggg...",
    // "Pah!”,“Ugh",
    // "Never mind",
    // "Leave me alone",
    // "I cant",
    // "Seriously, I cant." 

]



function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

function updateContent() {
    function changeImages() {
        const imgs = document.getElementsByTagName("img");
        for (let image of imgs) {
            const random_img = Math.floor(Math.random() * gudetama_images.length);
            image.src = gudetama_images[random_img];
        }
    }

    function changeText() {
        const textTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'];
        for (let tag of textTags) {
            const elements = document.getElementsByTagName(tag);
            for (let element of elements) {
                const random_phrase = Math.floor(Math.random() * phrases.length);
                element.textContent = phrases[random_phrase];
            }
        }
    }

    // Initial content update
    changeImages();
    changeText();

    // Debounced function for updating images and text
    const debouncedUpdate = debounce(() => {
        changeImages();
        changeText();
    }, 500);  // Adjust the delay as needed

    // MutationObserver to watch for new content added to the DOM
    const observer = new MutationObserver(() => {
        debouncedUpdate();
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

updateContent();