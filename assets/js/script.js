const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".parent-list");

btn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

const tabs = document.querySelectorAll(".tabs");
const image = document.getElementById("image");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const classes = [
    {
        image: "./assets/images/training-image-01.jpg",
        title: "First Training Class",
        desc: "Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit.       Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia      gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam."


    },
    {
        image: "./assets/images/training-image-02.jpg",
        title: "Second Training Class ",
        desc: "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
        image: "./assets/images/training-image-03.jpg",
        title: "Third Training Class",
        desc: "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque."

    },
    {
        image: "./assets/images/training-image-04.jpg",
        title: "Fourth Training Class",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et."

    }

]
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {  
            tab.classList.remove("sec-active")
        })
        const index = tab.dataset.id;
        image.src = classes[index].image;
        title.innerText = classes[index].title;
        desc.innerText = classes[index].desc;
        tab.classList.add("sec-active");

    })




})

