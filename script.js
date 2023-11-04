console.log("Script loaded");

const scrollToElement = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }else{
        console.log("Element not found");
    }
};

document.getElementById("link1").addEventListener("click", () => scrollToElement(".dtls-elem"));
document.getElementById("link2").addEventListener("click", () => scrollToElement(".prj-elem"));
document.getElementById("link3").addEventListener("click", () => scrollToElement(".cnct-elem"));
