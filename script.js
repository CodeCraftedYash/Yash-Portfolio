//smooth scrolling
const navLinks=document.querySelectorAll(".navbar a");
navLinks.forEach(link=>{
    link.addEventListener("click",event=>{
        event.preventDefault();
        const target=document.querySelector(link.getAttribute("href"));
        smoothScrollTo(target);
    });
});
function smoothScrollTo(element){
    const rect=element.getBoundingClientRect();

    const offset=rect.top+window.pageYOffset;

    const duration=10;

    const easing="easeinout";

    window.scrollTo({
        top:offset,
        behavior:"smooth",
        duration,
        easing

    });
}







//Read more button
const readmore=document.querySelector('#btn');
const InvisibleContent=document.querySelector('.InvisibleContent');
const change=readmore.addEventListener('click',()=>{
    if(InvisibleContent.style.display==='none'){
        InvisibleContent.style.display='inline';
        readmore.textContent='Read Less';
    }
    else{
        InvisibleContent.style.display='none';
        readmore.textContent='Read More...';
    }
    }
)



//date printing 

let now=new Date();
const date=document.querySelector('.date');
date.textContent=(`${now}`);




 //TopButton
 const TopButton=document.querySelector(".TopButton");
 TopButton.addEventListener("click",()=>{
  
    globalThis.scrollTo({top:0,right:0,behavior:"smooth"});
 });
 

 //coordinates
 
/* const MouseMove=document.querySelector('body'); */



/* MouseMove.addEventListener("mousemove",
    function MouseDetect(e){
        let x=e.clientX;
        let y=e.clientY;
        console.log(x,y);  */                      //returns cursor location on the body




        const topButton=document.querySelector('.TopButton');
        let position=topButton.getBoundingClientRect();
        let a=position.x;
        let b=position.y;

        console.log(position);
        console.log(a) 
        console.log(topButton.clientTop)                                 //checking positon of TopButton in x and y axis



        //For  Coding skills Section

const skillPercentages = [90, 92, 85, 85, 83];     //add more for newer skills


const progressBars = document.querySelectorAll('.progressBar');
const percentage = document.querySelectorAll('.percentage');

// Setting the widths of progress bars based on skill percentages
/* if(a=="1126" && b=="655"){ */
progressBars.forEach((progressBar, index) => {
    progressBar.style.width=0;
    setTimeout(() => {
        if (skillPercentages[index]) {
            progressBar.style.width = `${skillPercentages[index]}%`;
            percentage[index].textContent=`${skillPercentages[index]}%`;
        }
    }, 100);
 });
/* } */


//1126 655

const YashHover=document.querySelector("#YashMishra");
let Header=document.querySelector("header");
const colorLeft="#fff";
const colorRight="#fff"
const hoverEffect=YashHover.addEventListener("mouseover",(e)=>{
/*     Header.style.backgroundColor="red"; */
    Header.style.backgroundImage=`linear-gradient(to right,red,blue)`;
})
const hoverEffectAfter=YashHover.addEventListener("mouseout",(e)=>{
    setTimeout(() => {
        Header.style.backgroundImage="unset";
    }, 1000);
    
})/* background-image: linear-gradient(to bottom, #0f192e 50%, #261b76); */
