const outerdiv=document.querySelector('#outerdiv')
const centerdiv=document.querySelector('#centerdiv')
const themetoggle=document.querySelector('#theme-toggle')

theme-toggle.addEventListener('click',()=>
{
    outerdiv.classList.toggle('dark-theme');
    centerdiv.classList.toggle('dark-theme');
});

