// get all the images with the data-src attribute
const images = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

// fist check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    // loop through each img on check status and load if necesary
    images.forEach((img) => {
        imgObserver.observe(img);
    });
} else { // just Load ALL the images if is not supported
    images.forEach((img) => {
        loadImages(img);
    });
}
