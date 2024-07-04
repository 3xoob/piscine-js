import { places } from "./where-do-we-go.data.js";

let scrollPosition = window.scrollY;
const locationLink = document.createElement("a");
locationLink.classList.add("location");
document.body.appendChild(locationLink);

document.addEventListener("DOMContentLoaded", () => {
    setupPage();
});

document.addEventListener("scroll", () => {
    updateLocation();
    const direction = scrollPosition > window.scrollY ? "N" : "S";
    document.querySelector(".direction").textContent = direction;
    scrollPosition = window.scrollY;
});

function setupPage() {
    places.sort(compareCoordinates);
    places.forEach(createSection);

    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);

    updateLocation();
}

function createSection(place) {
    const section = document.createElement("section");
    section.style.background = `url('./where-do-we-go_images/${formatImageName(place.name)}.jpg') center/cover no-repeat`;
    section.style.height = "100vh";
    document.body.appendChild(section);
}

function updateLocation() {
    const sectionHeight = window.innerHeight;
    const scrollMiddle = window.scrollY + sectionHeight / 2;
    const sectionIndex = Math.floor(scrollMiddle / sectionHeight);
    const place = places[sectionIndex];

    locationLink.textContent = `${place.name}\n${place.coordinates}`;
    locationLink.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(place.coordinates)}`;
    locationLink.target = "_blank";
    locationLink.style.color = place.color;
}

function urlEncodeCoordinates(coordinates) {
    return encodeURIComponent(coordinates)
        .replace(/%20/g, " ")
        .replace(/%C2%B0/g, "°")
        .replace(/%22/g, '"');
}

function formatImageName(name) {
    return name.toLowerCase().replace(/ /g, "-").split(",")[0];
}

function compareCoordinates(a, b) {
    const parseCoordinates = (coordinates) => {
        const [degrees, minutes, seconds] = coordinates.match(/\d+/g).map(Number);
        const direction = coordinates.includes("S") ? -1 : 1;
        return direction * (degrees + minutes / 60 + seconds / 3600);
    };

    return parseCoordinates(b.coordinates) - parseCoordinates(a.coordinates);
}

export { setupPage as explore };
