
import { isInViewport, removeActiveFromIcons, setActiveClassToIcon } from './helpfunc.js';
gsap.registerPlugin(ScrollToPlugin);


function goToPrevSlide(ele)
{
  let eleId = '#' + ele.id;
  gsap.to(window, {duration: 0.3, scrollTo: { y: eleId }});
}

function goToNextSlide(ele)
{
  let eleId = '#' + ele.id;
  gsap.to(window, {duration: 0.3, scrollTo: { y: eleId }});
}



function onMouseWheel(event)
{
  if (!event.ctrlKey)
  {
    // console.log("fireEvent: ", fireEvent);
    if(!fireEvent) return; // if fireEvent is not allowed => stop execution here ('return' keyword stops execution of the function), else, execute code below:
    newDelta = event.deltaY; 
    // (1.1) if it's not the first event and directions are the same =>   prevent possible dublicates for further 50ms:
    if(oldDelta != null && oldDelta*newDelta > 0)
    { 
      // console.log("olddelta: ", oldDelta);
      // console.log("oldDelta*newDelta: ", oldDelta*newDelta);
      fireEvent = false;
      clearTimeout(eventTimeout); // clear previous timeouts.
      eventTimeout = setTimeout(function(){fireEvent = true},300);
    }
      oldDelta = newDelta;

    event.preventDefault();
    let currentElement;

    let views = document.querySelectorAll(".view");
    for (let i = 0; i < views.length; i++)
    {
      if (isInViewport(views[i]))
        currentElement= views[i];
    }

    if (currentElement)
    {
      if (event.deltaY > 0)
      {
        let nextEle = currentElement.nextElementSibling;
      
        if (nextEle && nextEle.classList.contains("view"))
        {
          removeActiveFromIcons();
          setActiveClassToIcon(nextEle.id);
          goToNextSlide(currentElement.nextElementSibling);
        }  
        else
          return;
      }
      else
      {
        let prevEle = currentElement.previousElementSibling
        if (prevEle && prevEle.classList.contains("view"))
        {
          removeActiveFromIcons();
          setActiveClassToIcon(prevEle.id);
          goToPrevSlide(currentElement.previousElementSibling);
        }

        else
          return;
      }
    }
  }
}

function onKey(event)
{
  let currentElement;
  
  let views = document.querySelectorAll(".view");
  for (let i = 0; i < views.length; i++)
  {
    if (isInViewport(views[i]))
      currentElement= views[i];
  }
  if (currentElement)
  {
    let PRESSED_KEY = event.keyCode;
    if(PRESSED_KEY == keyCodes.UP)
    {
      let prevEle = currentElement.previousElementSibling
      if (prevEle && prevEle.classList.contains("view"))
      {
        removeActiveFromIcons();
        setActiveClassToIcon(prevEle.id);
        goToPrevSlide(currentElement.previousElementSibling);
      }
        
      else
        return;
    

    }
    else if(PRESSED_KEY == keyCodes.DOWN)
    {
      let nextEle = currentElement.nextElementSibling;

      if (nextEle && nextEle.classList.contains("view"))
      {
        removeActiveFromIcons();
        setActiveClassToIcon(nextEle.id);
        goToNextSlide(currentElement.nextElementSibling);
      }
      else
        return;
    }
  }
  
}


const keyCodes = {
  UP: 38,
  DOWN:40
}

// Let's say it's a global context or whatever...:
let fireEvent = true;
let newDelta, oldDelta, eventTimeout;
newDelta = oldDelta = eventTimeout = null;

addEventListener("wheel", onMouseWheel,{ passive: false });
addEventListener("keydown", onKey);


// links.forEach((link, index) => {
//   link.addEventListener("click", () => {
//     gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index)}});
//   });
// });
