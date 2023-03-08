document.addEventListener("load", init)
function init() {
    const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', () => {
  console.log('A gombra kattintottak');
});
}
const myImage = document.querySelector('#myImage');
myImage.addEventListener('mouseover', () => {
  console.log('Az egér fölött van a kép');
});
