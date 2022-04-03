const previousBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const profileImg = document.querySelector('.profile');
const description = document.querySelector('.description');
const personName = document.querySelector('.name');
const jobTitle = document.querySelector('.job__title');
let counter = 0;
const tl = gsap.timeline({defaults : {duration : 1, ease:'power1.out'}});




nextBtn.addEventListener('click', () => {
  counter++;
  if(counter > 1) {
    counter = 0;
  }
  tl.fromTo('.description', {opacity : 0}, {opacity : 1, duration : 0.3} );
  tl.fromTo('.profile', {opacity : 0}, {opacity : 1, duration : 0.3}, '<50%');
  if(counter === 1) {
    description.innerText = `"If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. "`;
    profileImg.src = "images/image-john.jpg"
    personName.innerText = "John Tarkpor"
    jobTitle.innerText = "Junior Front-end Developer"
  }
  if(counter === 0) {
    description.innerText = `"I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. "`;
    profileImg.src = "images/image-tanya.jpg"
    personName.innerText = "Tanya Sinclair"
    jobTitle.innerText = "UX Engineer"
  }
})
previousBtn.addEventListener('click', () => {
  counter--;
  if(counter < 0) {
    counter = 1;
  }
  tl.fromTo('.description', {opacity : 0}, {opacity : 1, duration : 0.3} );
  tl.fromTo('.profile', {opacity : 0}, {opacity : 1, duration : 0.3}, '<50%');
  if(counter === 0) {
    description.innerText = `"I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. "`;
    profileImg.src = "images/image-tanya.jpg";
    personName.innerText = "Tanya Sinclair";
    jobTitle.innerText = "UX Engineer";
  };
  if(counter === 1) {
    description.innerText = `"If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. "`;
    profileImg.src = "images/image-john.jpg";
    personName.innerText = "John Tarkpor";
    jobTitle.innerText = "Junior Front-end Developer";
  }
})
