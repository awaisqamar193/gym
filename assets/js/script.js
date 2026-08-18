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
const days = document.querySelectorAll(".day");
const scheduleTable = document.querySelector("#scheduleTable");
const schedules = {
    monday: [
        {
            className: "Fitness Class",
            time: "10:00AM - 11:30AM",
            sectime: "",
            trainer: "William G. Stewart"
        },
        {
            className: "Muscle Training",
            time: "",
            sectime: "",
            trainer: "Paul D. Newman"
        },
        {
            className: "Body Building",
            time: "",
            sectime: "2:00PM - 3:30PM",
            trainer: "Boyd C. Harris"
        },
        {
            className: "Yoga Training Class",
            time: "",
            sectime: "",
            trainer: "Hector T. Daigle"
        },
        {
            className: "Advanced Training",
            time: "",
            sectime: "",
            trainer: "Bret D. Bowers"
        },
    ],

    tuesday: [
        {
            className: "Fitness Class",
            time: "",
            sectime: "2:00PM - 3:30PM",
            trainer: "William G. Stewart"
        },
        {
            className: "Muscle Training",
            time: "",
            sectime: "",
            trainer: "Paul D. Newman"
        },
        {
            className: "Body Building",
            time: "10:00AM - 11:30AM",
            sectime: "",
            trainer: "Boyd C. Harris"
        },
        {
            className: "Yoga Training Class",
            time: "",
            sectime: "",
            trainer: "Hector T. Daigle"
        },
        {
            className: "Advanced Training",
            time: "",
            sectime: "",
            trainer: "Bret D. Bowers"
        },
    ],
    wednesday: [
        {
            className: "Fitness Class",
            time: "",
            sectime: "",
            trainer: "William G. Stewart"
        },
        {
            className: "Muscle Training",
            time: "",
            sectime: "",
            trainer: "Paul D. Newman"
        },
        {
            className: "Body Building",
            time: "",
            sectime: "",
            trainer: "Boyd C. Harris"
        },
        {
            className: "Yoga Training Class",
            time: "10:00AM - 11:30AM",
            sectime: "",
            trainer: "Hector T. Daigle"
        },
        {
            className: "Advanced Training",
            time: "",
            sectime: "2:00PM - 3:30PM",
            trainer: "Bret D. Bowers"
        },
    ],
    thursday: [
        {
            className: "Fitness Class",
            time: "",
            sectime: "",
            trainer: "William G. Stewart"
        },
        {
            className: "Muscle Training",
            time: "",
            sectime: "2:00PM - 3:30PM",
            trainer: "Paul D. Newman"
        },
        {
            className: "Body Building",
            time: "",
            sectime: "",
            trainer: "Boyd C. Harris"
        },
        {
            className: "Yoga Training Class",
            time: "",
            sectime: "",
            trainer: "Hector T. Daigle"
        },
        {
            className: "Advanced Training",
            time: "10:00AM - 11:30AM",
            sectime: "",
            trainer: "Bret D. Bowers"
        },
    ],
    friday: [
        {
            className: "Fitness Class",
            time: "",
            sectime: "",
            trainer: "William G. Stewart"
        },
        {
            className: "Muscle Training",
            time: "10:00AM - 11:30AM",
            sectime: "",
            trainer: "Paul D. Newman"
        },
        {
            className: "Body Building",
            time: "",
            sectime: "",
            trainer: "Boyd C. Harris"
        },
        {
            className: "Yoga Training Class",
            time: "",
            sectime: "2:00PM - 3:30PM",
            trainer: "Hector T. Daigle"
        },
        {
            className: "Advanced Training",
            time: "",
            sectime: "",
            trainer: "Bret D. Bowers"
        },
    ]
};

days.forEach((day) => {
    day.addEventListener("click", () => {
        const selectedDay = day.dataset.day;
        const data = schedules[selectedDay]
        days.forEach((day) => {
            day.classList.remove("third-active")

        })
        scheduleTable.innerHTML = "";

        data.forEach((item) => {
            scheduleTable.innerHTML += `  
         <div class="cell">${item.className}</div>
                 <div class="cell">${item.time}</div>
                 <div class="cell">${item.sectime}</div>
                <div class="cell">${item.trainer}</div> `
            day.classList.add("third-active")

        })



    })






})


const monday = document.querySelector('[data-day="monday"]');

monday.classList.add("third-active");

showSchedule("monday");
function showSchedule(selectedDay) {

    const data = schedules[selectedDay];

    scheduleTable.innerHTML = "";

    data.forEach((item) => {

        scheduleTable.innerHTML += `
            <div class="cell">${item.className}</div>
            <div class="cell">${item.time}</div>
            <div class="cell">${item.sectime}</div>
            <div class="cell">${item.trainer}</div>
        `;

    });
}


