const allLi = document.querySelectorAll('ul li');


allLi.forEach((li) => {
  li.addEventListener('click', () => {
    let myP = li.querySelector("p");
    let myI = li.querySelector("i");
    myI.classList.toggle("hi");
    myP.classList.toggle("hi");
    li.classList.toggle("hi");
  })
})