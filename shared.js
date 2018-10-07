
var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.menu-mobile');
// var i;

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].onclick = function () {
//         this.classList.toggle("active");
//         this.nextElementSibling.nextElementSibling.classList.toggle("show");
//     }
// }

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
});

// accordion.addEventListener('click', function () {
//     accordionPanel.style.display = 'block';
// });


// var vvOpen = document.querySelectorAll('.rz-open-menu-element');
// vvOpen.forEach(function(n) {
//   n.onclick = function(){
//   	var child = n.parentNode.querySelector('.rz-child-menu');
//     if (child.style.display != 'block') {
//   	  child.style.display = 'block';
//     } else {
//   	  child.style.display = 'none';
//     }
//   };
// })



const linkItems = document.querySelectorAll('.menu-mobile__item');
const accordionPanel = document.querySelectorAll('.accordion-panel');

linkItems.forEach(item => {
    //on any click on .accordion
    item.addEventListener('click', e => {
        console.log(e)
        //remove all existing active classes from accordion panels, BUT NOT on current clicked
        Array.from(accordionPanel).filter(panel => panel !== e.target.nextElementSibling)
            .forEach(panel => panel.classList.remove("active"));
        //add active class to the accordion near clicked element
        //e.target -> is <a>
        //next sibling of <a> -> <ul class="accordion-panel">
        if(e.target.nextElementSibling !== null) {
            e.target.nextElementSibling.classList.toggle('active');
        }
        e.stopPropagation();
   }, true);

});

// accordion.forEach(function(n) {
//   n.onclick = function(){
//     var accordionPanel = n.parentNode.querySelector('.accordion-panel');
//     if (accordionPanel.style.display != 'block') {
//   	  accordionPanel.style.display = 'block';
//     } else {
//   	  accordionPanel.style.display = 'none';
//     }
//   };
// })
