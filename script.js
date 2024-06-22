
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


//Coding skills percentages 

const skillPercentages = [90, 92, 85, 85, 83];


const progressBars = document.querySelectorAll('.progressBar');
const percentage = document.querySelectorAll('.percentage');

// Setting the widths of progress bars based on skill percentages
progressBars.forEach((progressBar, index) => {
    progressBar.style.width=0;
    setTimeout(() => {
        if (skillPercentages[index]) {
            progressBar.style.width = `${skillPercentages[index]}%`;
            percentage[index].textContent=`${skillPercentages[index]}%`;
        }
    }, 100);
 });



 //TopButton
 const TopButton=document.querySelector(".TopButton");
 TopButton.addEventListener("click",()=>{
  
    globalThis.scrollTo({top:0,right:0,behavior:"smooth"});
 });
