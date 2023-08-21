
// ================= for fixed navbar on scrool ========================

 window.addEventListener("scroll", () =>{
   const el = document.querySelector(".header");
   el.classList.toggle("fixednav",window.scrollY > 0);
   document.querySelector(".home-page").classList.add("set-main-page")
  //  console.log(el.classList);
 })


// ===========   for responsive nav Bar ====================
const HambargBtn = document.getElementById("hambarg-menu");

HambargBtn.addEventListener("click",()=>{
    const NavBar = document.querySelector(".navbar")
    NavBar.firstElementChild.classList.toggle("show")
    HambargBtn.classList.toggle("uil-times")
    
})

// ====================== img slider on section 4====================================

   let index = 0;
   function autoSlide(){
     setTimeout(autoSlide,2000)

     const imgs = document.querySelectorAll(".slideimg")

     for(let i =0;i<imgs.length;i++){
       imgs[i].style.display = "none"; 
     }
     index++;
     if(index > imgs.length){
      index = 1; 
     }
     imgs[index].style.display = "block"
   }
  autoSlide()

// ==================== testmonial section ===========================
const reviews = [
    {
      content: "I am happy with services. Caretaker is regular and is good at job. Invoice process is accurate and on time. The service offred by Ayushya healthcare was really helpful to us, the employee placed had no issues and took care very well. Excellent service. Neat and clean. Nurse is very courteous and well mannered and experienced Ayushya providing well trained attendant that too in affordable rates. Thank You weCare.U",
      image: "assets/review user 1.jpeg",
      name: "Dua Lipa",
      deg: "Singer"
    },
    {
        content: "I am Dua lipa , here to say jfd dkfjd ere rjker erjef djfdf ekdfjdjfd teje re dfjd fkejferj fkj dkjfdkjfdjf ejirjiej efje fefj eieif ejf kfjefj jeif eijf dkjf eijfiejf dkf dkjf ijejfdsklfodkeoijrjoiejr iejioejiejijdkfjkd fdjf kdf kds fdsifjdsk fksd f df sdf dkf ksdjf kds f fkd fjkds fkd fkds k fkd fkdsjfkdsjf kdf kdsf dsf kf k fdk fkfd kdsfkfd k",
        image: "assets/review user 3.jpeg",
        name: "Jon Doe",
        deg: "Doctor"
      },
      {
        content: "I am JOne Doe. Caretaker is regular and is good at job. Invoice process is accurate and on time. The service offred by Ayushya healthcare was really helpful to us, the employee placed had no issues and took care very well. Excellent service. Neat and clean. Nurse is very courteous and well mannered and experienced Ayushya providing well trained attendant that too in affordable rates. Thank You weCare.U",
        image: "assets/review user 4.jpeg",
        name: "Mark zuku",
        deg: "Teacher"
      },
      {
        content: "I am ROck rock. Caretaker is regular and is good at job. Invoice process is accurate and on time. The service offred by Ayushya healthcare was really helpful to us, the employee placed had no issues and took care very well. Excellent service. Neat and clean. Nurse is very courteous and well mannered and experienced Ayushya providing well trained attendant that too in affordable rates. Thank You weCare.U",
        image: "assets/review user 5.jpeg",
        name: "Rock Rock",
        deg: "Writer"
      },  
]
let c = 0;
const reviewItem = document.querySelector(".review-section")
const reviewText = document.getElementById("review-text");
const reviewImg = document.getElementById("author-img")
const reviewTitle = document.getElementById('deg')
const reviewName = document.getElementById("author-name")


function modifyReview(c){
  let currentEle = reviews[c];
  reviewText.textContent = currentEle.content;
  reviewName.textContent = currentEle.name;
  reviewTitle.textContent = currentEle.deg;
  // reviewImg.src = ""
  reviewImg.src = currentEle.image;

}

 const leftBtn = document.getElementById("review-left-point");
 const rightBtn = document.getElementById("review-right-point");
// console.log(leftBtn)
window.addEventListener('DOMContentLoaded', function() {
  modifyReview(c);
});

leftBtn.addEventListener("click",()=>{
  c++;
  if(c>=reviews.length){
    c=0;
  }
  modifyReview(c);
})

rightBtn.addEventListener("click",()=>{
  c--;
  if(c<0) {
    c=reviews.length-1;
  }
  modifyReview(c);
})


// auto countin section ..======================================.=================

function animate(obj,fval,lval,time){
  let stime = null;
  let curtime = Date.now();
  //  console.log(curtime)
  const step = (curtime)=>{
    if(!stime){
      stime = curtime
    }
    const progress = Math.min((curtime-stime)/time,1)
    obj.innerHTML = Math.floor(progress*(lval-fval)+fval) + "+"
    
    if(progress<1){
      window.requestAnimationFrame(step)
    }
    else{
      window.cancelAnimationFrame(window.requestAnimationFrame(step))
    }
  }
  // start animating
  window.requestAnimationFrame(step)
}

const custamer = document.getElementById("count-custumer")
const people = document.getElementById("count-people")
const exp = document.getElementById("count-years")

const load = ()=>{
  animate(custamer, 0 ,200, 40000)
  animate(people, 0 ,30, 7000)
  animate(exp, 0 ,2, 3000)

}
window.onload = load();

// =====================how we care section ========================================

  const image = document.querySelector(".care-header img");
  image.addEventListener("mouseover",()=>{
    image.src= "assets/service img 2.jpg";
  })

