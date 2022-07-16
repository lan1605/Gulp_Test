const accordion = document.querySelectorAll(".question-item__header");
[...accordion].forEach((item)=> item.addEventListener("click",handleClick));
function handleClick(e){
    const content =e.target.nextElementSibling;
    content.classList.toggle("active");
}