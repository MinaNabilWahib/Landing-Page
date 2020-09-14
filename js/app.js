/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const listOfSections = document.querySelectorAll('section');
const navigationMenu = document.querySelector('#navbar__list');
let last_known_scroll_position = 0;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
function activateClass(last_pos)
{
    for(let i = 0; i < listOfSections.length; i++)
    {
        if (i==listOfSections.length-1)
        {
            if (last_pos>=(listOfSections[i].offsetTop-150))
            {
                listOfSections[i].className='your-active-class';

            }
            else
            {
                listOfSections[i].className='';
            }
        } 
        else
        {   
        if (last_pos >= (listOfSections[i].offsetTop-150) && last_pos < (listOfSections[i+1].offsetTop-150) ) 
            {
                listOfSections[i].className='your-active-class';
            }
            else
            {
                listOfSections[i].className='';
            }
        }
    }
}

// Scroll to anchor ID using scrollTO event
function respondToTheClick(evt)
 {
    console.log('An item was clicked: ' + evt.target.textContent);
    for(let i = 0; i < listOfSections.length; i++)
    {
        if (evt.target.textContent===listOfSections[i].dataset.nav) 
        {
            window.scrollTo(0,listOfSections[i].offsetTop-140);
            //activateClass(listOfSections[i]);
        }

    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
for(let i = 0; i < listOfSections.length; i++){
    const newLi = document.createElement('li');
    newLi.className="menu__link";
    newLi.innerText=listOfSections[i].dataset.nav;
    navigationMenu.appendChild(newLi);
}
// Scroll to section on link click
navigationMenu.addEventListener('click', respondToTheClick);

// Set sections as active
document.addEventListener('scroll',function(){
    last_known_scroll_position=window.scrollY;
    activateClass(last_known_scroll_position);

});

