//######## help classes #########
function addClass(classToAdd, classToremove = "", ...ids)
{
  ids.forEach((id) =>
  {
    let ele = document.getElementById(id);
    if (!ele.classList.contains(classToAdd))
    {
      ele.classList.add(classToAdd);
      if(ele.classList.contains(classToremove))
        ele.classList.remove(classToremove);
    }
  });
}
function removeClassFromMany(selctor, classToremove)
{
  let elements = document.querySelectorAll(selctor);
  elements.forEach((ele) =>
  {
    ele.classList.remove(classToremove)
  });  
}
function addActiveClasses(iconId, viewId)
{
  addClass("active", "inactive", iconId);
  addClass("active__view", "inactive__view", viewId);
}
function addInactiveClassesToOthers(iconId, viewId)
{
  let icons = document.querySelectorAll("nav ul li a")
  let views = document.getElementsByClassName("view");

  let inactiveIconIDs = [];
  let inactiveViewIDs = [];
  icons.forEach(icon =>
  {
    if (icon.id != iconId)
      inactiveIconIDs.push(icon.id);
  });
  for (let i = 0; i < views.length; i++)
  {
    if (views[i].id != viewId)
      inactiveViewIDs.push(views[i].id);
    
  }

  inactiveIconIDs.forEach(inactiveIconid =>
  {
    addClass("inactive", "active", inactiveIconid);
  });
  inactiveViewIDs.forEach(inactiveViewID =>
  {
    addClass("inactive__view", "active__view", inactiveViewID);
  });
}

function showHideNav()
{
  //wenn id ist open zeige dann nav und verändere dann link id zu close
  let icon = document.getElementById("open");
  let nav = document.getElementById("header__nav");
  if (icon)
  {
    nav.style.transform = "translateX(0)";
    icon.id = "close";
  }
  else
  {
    icon = document.getElementById("close");
    nav.style.transform = "translateX(120vw)";
    icon.id = "open";
  }
}
function showMoreInfo(projectname)
{
  //class names
  let headerclass = projectname + "__header";
  let summryclass = projectname + "__summary";
  let linkclass = projectname + "__visit-link";

  let header = document.getElementsByClassName(headerclass)[0];
  let summry = document.getElementsByClassName(summryclass)[0];
  let link = document.getElementsByClassName(linkclass)[0];

  // header soll verschwinden
  header.classList.add("hidden-elem");
  // summry & link sollen dargestellt werden
  summry.classList.remove("hidden-elem");
  link.classList.remove("hidden-elem");
}

function showLessInfo(projectname)
{
  let headerclass = projectname + "__header";
  let summryclass = projectname + "__summary";
  let linkclass = projectname + "__visit-link";

  let header = document.getElementsByClassName(headerclass)[0];
  let summry = document.getElementsByClassName(summryclass)[0];
  let link = document.getElementsByClassName(linkclass)[0];

  // header soll verschwinden
  header.classList.remove("hidden-elem");
  // summry & link sollen dargestellt werden
  summry.classList.add("hidden-elem");
  link.classList.add("hidden-elem");
}

document.getElementById("homeicon").onclick = () =>
{
  removeClassFromMany("nav ul li a", "active");
  removeClassFromMany("view", "active__view");

  addActiveClasses("homeicon", "home");
  addInactiveClassesToOthers("homeicon", "home");
}
document.getElementById("aboutmeicon").onclick = () =>
{
  removeClassFromMany("nav ul li a", "active");
  removeClassFromMany("view", "active__view");

  addActiveClasses("aboutmeicon", "aboutme");
  addInactiveClassesToOthers("aboutmeicon", "aboutme");
}
document.getElementById("myworkicon").onclick = () =>
{
  removeClassFromMany("nav ul li a", "active");
  removeClassFromMany("view", "active__view");

  addActiveClasses("myworkicon", "mywork");
  addInactiveClassesToOthers("myworkicon", "mywork");
}
document.getElementById("contacticon").onclick = () =>
{
  removeClassFromMany("nav ul li a", "active");
  removeClassFromMany("view", "active__view");

  addActiveClasses("contacticon", "contact");
  addInactiveClassesToOthers("contacticon", "contact");
}

let views = document.getElementsByClassName("view");
// Listen for scroll event on window#

window.addEventListener("wheel", wheelListener);

function wheelListener(e)
{
  setTimeout(() => {
    console.log("warte ein sekunde");
  }, 1000);
  removeClassFromMany("view", "active__view");
  // Get current scroll position
  let scrollPos = window.pageYOffset;
  let id = '';
  // Loop through sections
  for (let i = 0; i < views.length; i++)
  {
    // Get the top and bottom position of each section
    let top = views[i].offsetTop;
    let bottom = top + views[i].offsetHeight;
    // Check if scroll position is within the current section
    if (scrollPos >= top && scrollPos < bottom)
    {
      // Add active class to current section
      if (e.deltaY > 0)
      {
        if (i + 1 < views.length)
        {
          id = views[i + 1].id;
          addActiveClasses( id + "icon", id);
          addInactiveClassesToOthers(id + "icon", id);
          return;
        }
        else
          return;
      }
      else
      {
        if (i - 1 >= 0)
        {
          id = views[i - 1].id;
          addActiveClasses( id + "icon", id);
          addInactiveClassesToOthers(id + "icon", id);
          return;
        }
        else
          return;
        
      } 
    }
  }
}
