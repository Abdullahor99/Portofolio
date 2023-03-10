
export function isInViewport(element)
{
//TODO: später lösen es funktioniert nicht richtig

  const rect = element.getBoundingClientRect();
  

  let result = 0;
  if (rect.top >= 0)
    result = rect.height - rect.top;
  if(rect.top < -1)
    result = rect.top - rect.height;

  if (result > (rect.height / 2))
    return true
  else
    return false;
   // Get the position of the element relative to the viewport
//   const rect = element.getBoundingClientRect();

//   console.log(element.id);
  
//   console.log(rect);
// if (rect.top >= -20 && rect.top <= 20)
//   {
//     console.log(element.id, "is in the VP");
//     return true;
//   }
}
export function bouncyAndOpcityAnimation(view)
{
  // console.log(view)
  const visibleBouncyElements = view.querySelectorAll(".bouncy");
  visibleBouncyElements.forEach((bouncy, i) =>
  {
    bouncy.style.opacity = "0";
    bouncy.classList.add("bouncing-op");
    let delay = 0.05 * i;
    delay += "s";
    bouncy.style.animationDelay = delay;
    bouncy.addEventListener("animationend", function ()
    {
      bouncy.classList.remove("bouncing-op");
      bouncy.style.opacity = "1";
    });
    
  });

}

export function removeActiveFromIcons()
{
  const previouslyFocused = document.querySelector(":focus");
  if (previouslyFocused) {
    previouslyFocused.blur();
  }
  let icons = document.querySelectorAll(".header__nav-icon");
  icons.forEach((icon) =>
  {
    icon.classList.remove("active");
  });
}

export function setActiveClassToIcon(id)
{
  let icon = document.getElementById(`${id}icon`);
  icon.classList.add("active");
}