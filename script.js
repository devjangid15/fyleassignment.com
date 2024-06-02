// For PopUp FORM
const popupForm = document.getElementById("popupForm");
const openPopupBtn = document.getElementById("openPopupBtn");



openPopupBtn.onclick = ()=>{
    popupForm.style.display = "block";
}

window.onclick = (e)=> {
    if (e.target === popupForm) {
        popupForm.style.display = "none";
    }
}

//form submittion
const contactForm=document.getElementById('contactForm');
const contactUsBtn=document.getElementById('contactUsBtn');
const inputVal=document.getElementsByTagName('input');
const checkBox=document.getElementById('agreeTerms')

contactUsBtn.onclick=()=>{
    const formData=new FormData(contactForm);

    fetch("https://getform.io/f/pboxjvga",{
        method:'POST',
        body:formData
    })
    .then(res=>console.log(res))
    .catch((error)=>console.log(error))

    // After Submitting reseting the form
    for( let input of inputVal){
        input.value="";
    }
    checkBox.checked=false;
}

// For changing in image when click.
const biggerImage=document.querySelector('.biggerImage');
const imagecard1=document.querySelector('.imageCard1');
const imagecard2=document.querySelector('.imageCard2');
const imagecard3=document.querySelector('.imageCard3');

imagecard1.addEventListener('click',function(){

    biggerImage.style.background=`transparent url('/fyleassignment.com/Images/Home/card1.jpg') 50% 50% no-repeat padding-box`;
    const elems1=document.querySelectorAll('.onclick-imageCard1');
    const elems2=document.querySelectorAll('.onclick-imageCard2');
    const elems3=document.querySelectorAll('.onclick-imageCard3');
    elems1.forEach((elem)=>{
        elem.style.color='#FFFFFF';
    })
    elems2.forEach((elem)=>{
        elem.style.color='#000000';
    })
    elems3.forEach((elem)=>{
        elem.style.color='#000000';
    })
    imagecard1.style.backgroundColor='#FF3147';
    imagecard2.style.backgroundColor='#F6F6F6';
    imagecard3.style.backgroundColor='#F6F6F6';


})
imagecard2.addEventListener('click',function(){
    biggerImage.style.background=`transparent url('/fyleassignment.com/Images/Home/image.png') 0% 0% no-repeat padding-box`;
    const elems1=document.querySelectorAll('.onclick-imageCard1');
    const elems2=document.querySelectorAll('.onclick-imageCard2');
    const elems3=document.querySelectorAll('.onclick-imageCard3');
    elems1.forEach((elem)=>{
        elem.style.color='#000000';
    })
    elems2.forEach((elem)=>{
        elem.style.color='#FFFFFF';
    })
    elems3.forEach((elem)=>{
        elem.style.color='#000000';
    })
    imagecard1.style.backgroundColor='#F6F6F6';
    imagecard2.style.backgroundColor='#FF3147';
    imagecard3.style.backgroundColor='#F6F6F6';
})

imagecard3.addEventListener('click',function(){
    biggerImage.style.background=`transparent url('/fyleassignment.com/Images/Home/card2.jpg') 50% 50% no-repeat padding-box`;
    const elems1=document.querySelectorAll('.onclick-imageCard1');
    const elems2=document.querySelectorAll('.onclick-imageCard2');
    const elems3=document.querySelectorAll('.onclick-imageCard3');

    elems1.forEach((elem)=>{
        elem.style.color='#000000';
    })
    elems2.forEach((elem)=>{
        elem.style.color='#000000';
    })
    elems3.forEach((elem)=>{
        elem.style.color='#FFFFFF';
    })
    imagecard1.style.backgroundColor='#F6F6F6';
    imagecard2.style.backgroundColor='#F6F6F6';
    imagecard3.style.backgroundColor='#FF3147';
})



const slideImages = document.querySelector('.slider-images');
const dots = document.querySelectorAll('.slideBtn');
let currentSlide = 0;

function showSlide(n) {
    slideImages.style.transform = `translateX(${(n) * 180}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide =index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);


const fylehq=document.querySelectorAll('.redirect');
for(let elem of fylehq){
    elem.addEventListener('click',()=>{
        window.open('https://www.fylehq.com','_blank')
    })
}


