//local reviews data
const reviews = [
    {
     id: 1,
     name:"susan smith",
     job: "web developer",
     img:"https://www.csid.ro/wp-content/uploads/2009/10/5065254/1-shutterstock-birou.jpg",
     text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure at totam laboriosam! Quod in modi distinctio. Dolores neque inventore excepturi. ",       
    },
    {
        id:"2",
        name:"anna jonshon",
        job:"web designer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYbo57EEcI_3a1T_xNANSjwxJKDiHaw-img&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa mollitia autem eius vero in ex, fuga nihil adipisci ipsum consequuntur obcaecati error alias numquam facere earum, nulla officia dicta!",
    },
    {
id:"4",
name:"joseph clare",
job:"web development",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfbTABQ9HLefvNRECEezgr0CaXDGG3YLcRnJP4pcf1r6AOmB7E0SL224jBiZeIdJEGUo&usqp=CAU",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa mollitia autem eius vero in ex, fuga nihil adipisci ipsum consequuntur obcaecati error alias numquam facere earum, nulla officia dicta!",
    }
];

//select itemes
const img = document.getElementById("person-img");
const author  = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item 
 let currentItem = 0;
//load initial item

window.addEventListener("DOMContentLoaded", function(){
showPerson();
});

//show person based on item
 

function showPerson(person){
    const item =reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

//showNextPerson

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});


//show random person

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson();
})