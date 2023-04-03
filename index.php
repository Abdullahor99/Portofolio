<!DOCTYPE html>
<html lang="de">
  <head> 
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Capriola"
    />
    <link rel="stylesheet" href="css/helpclasses.css" />
    <link rel="stylesheet" href="css/styleguide.css" />
    <link rel="stylesheet" href="css/allgemein.css" />
    <link rel="stylesheet" href="css/profile.css" />
    <link rel="stylesheet" href="css/aboutme.css" />
    <link rel="stylesheet" href="css/mywork.css" />
    <link rel="stylesheet" href="css/contactme.css" />
    <script src="https://kit.fontawesome.com/f0e3796fee.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <title>Home</title>
  </head>
  <body>
    <div class="wraper">
      <header class="header">
          <a href="" id="open">
            <div class="hamburger">
              <span></span> 
              <span></span>
              <span></span>
            </div>
          </a>
          <nav id="header__nav">
            <ul class="flex f-col navi-ul">
              <li><a class="header__nav-icon active fa-sharp fa-solid fa-house-chimney" href="#home" title="Home" id="homeicon"></a></li>

              <li><a class="header__nav-icon  fa-solid fa-person" href="#aboutme" title="About me" id="aboutmeicon"></a></li>

              <li><a class="header__nav-icon  fa-solid fa-briefcase" href="#mywork" title="My Projects" id="myworkicon"></a></li>

              <li><a class="header__nav-icon  fa-solid fa-address-book" href="#contact" 
              title="Say Hello :)" id="contacticon"></a></li>

            </ul>
          </nav>
        </header>
        <div class="social-network-cont">
          <ul class="flex">

              <li>
                <a class= "social-network-github fa-brands fa-github"  href="https://github.com/?q=ph" title="Sehen Sie sich mein Profil auf Github an." target="_blank">
                </a>
              </li>

              <li>
                <a class= "social-network-gmail fa-solid fa-envelope"  href="mailto:abdullah.orabi999@gmail.com">
                </a>
              </li>

              <li>
                <a class= "social-network-xing fa-brands fa-xing"  href="https://www.xing.com/profile/Abdullah_Orabi5/cv" target="_blank">
                </a>
              </li>
          </ul>

        </div>
      <div class="main-profile-info view" id="home">
        <div class="flex-cont">
          <div class="spalte1">
            <div id="_i" class="center-flex">
              <p class="iletter">I</p>
            </div>
            <div id="with" class="center-flex">
              <p class="withword">with</p>
            </div>
          </div>
          <div class="spalte2">
            <div id="profile" class="txt-center center-xy">
              <h1 class="spalte2__h1">
                <span class="bouncy ">h</span>
                <span class="bouncy ">e</span>
                <span class="bouncy ">l</span>
                <span class="bouncy ">l</span>
                <span class="bouncy ">o</span>
                <span class="bouncy ">👋</span><br>
                <span class="bouncy ">I</span>
                <span class="bouncy ">'</span>
                <span class="bouncy ">m &nbsp;</span>
                <span class="bouncy ">a</span>
                <span class="bouncy ">b</span>
                <span class="bouncy ">d</span>
                <span class="bouncy ">u</span>
                <span class="bouncy ">l</span>
                <span class="bouncy ">l</span>
                <span class="bouncy ">a</span>
                <span class="bouncy ">h</span>
                <span class="bouncy ">,</span><br>
                <span class="bouncy ">w</span>
                <span class="bouncy ">e</span>
                <span class="bouncy ">b &nbsp;</span>
                <span class="bouncy ">d</span>
                <span class="bouncy ">e</span>
                <span class="bouncy ">v</span>
                <span class="bouncy ">e</span>
                <span class="bouncy ">l</span>
                <span class="bouncy ">o</span>
                <span class="bouncy ">p</span>
                <span class="bouncy ">e</span>
                <span class="bouncy ">r</span>
              </h1>
              <figure class="profile-img-figure">
                <img
                  class="profile-img"
                  src="img/abdullah.png"
                  alt="Abdullah's image"
                />
                <img
                  class="profile-img"
                  src="img/abdullahsmall.png"
                  alt="small Abdullah"
                />
                <figcaption class="hidden-elem">Profile imge</figcaption>
              </figure>
              <a class="button waviy" href="#contact">
                <span style="--i: 1">C</span>
                <span style="--i: 2">o</span>
                <span style="--i: 3">n</span>
                <span style="--i: 4">t</span>
                <span style="--i: 5">a</span>
                <span style="--i: 6">c</span>
                <span style="--i: 7">t</span>
              </a>
            </div>
          </div>
          <div class="spalte3">
            <div id="play" class="center-flex">
              <p class="playword">Play</p>
            </div>
            <div id="creativity" class="center-flex">
              <p class="creativityword">Creativity</p>
            </div>
          </div>
        </div>
      </div>
      <section class="aboutme view inactive__view" id="aboutme">
        <header class="aboutme__header">
          <h2 class="aboutme-h2">
            <span class="bouncy ">A</span>
            <span class="bouncy ">b</span>
            <span class="bouncy ">o</span>
            <span class="bouncy ">u</span>
            <span class="bouncy ">t &nbsp;</span>
            <span class="bouncy ">m</span>
            <span class="bouncy ">e</span>
          </h2>
        </header>
        <main class="flex aboutme-main-cont">
          <div class="aboutme__content flex">
            <div class="aboutme__texts-cont">
              <p class="aboutme__P-1">
                Hi, i'm Abdullah nice to meet you. I'm a  passionate web developer
                based in Dortmund. I enjoy developing   Websites and cooking something
                after a hard workout. After my Trainee as a   Programmer i wanted to
                improve my knowledge on the Web through a   Fullstack Kurs which i'm
                doing until the end of mars 2023.
              </p>
              <p class="aboutme__p-2">
                Intending to excel in the web field, I  continuously strive to improve by staying  up-to-date on new technologies, putting a  strong emphasis on user experience, and  making it my mission to get better each day.
              </p>
              <p class="aboutme__p-3">
                I aim to craft stunning and efficient   websites that not only fulfill my client's  requirements but also surpass their  expectations through my skills and passion.
              </p>
            </div>
            <div class="aboutme__imge-div">
              <img class="aboutme__imge" src="img/karton.png" alt="karto">
            </div>
          </div>
        </main>
      </section>
      <section class="mywork view inactive__view" id="mywork">
        <header class="mywork__header">
          <h2 class="mywork-h2">
            <span class="bouncy ">M</span>
            <span class="bouncy ">y &nbsp;</span>
            <span class="bouncy ">R</span>
            <span class="bouncy ">e</span>
            <span class="bouncy ">c</span>
            <span class="bouncy ">e</span>
            <span class="bouncy ">n</span>
            <span class="bouncy ">t &nbsp;</span>
            <span class="bouncy ">W</span>
            <span class="bouncy ">o</span>
            <span class="bouncy ">r</span>
            <span class="bouncy ">k</span>
          </h2>
        </header>
        <main class="mywork__main">
          <p class="mywork-text-1">Here are a few past design projects I've worked on</p>
          <div class="Projects flex">
            <div class="project1 project" name="project1">
              <figure class="project1__figure">
                <img class="project1__imge" 
                src="img/placeimg_400_600_nature.jpg" alt="">
                <figcaption class="project1__description  center-xy">
                  <h1 class="project1__header   center-xy">Tranier Richtig</h1>
                  <p class="project1__summary hidden-elem">Demo   Fittnes Company to learn HTML & CSS.</p>
                  <a class="project1__visit-link hidden-elem"   href="#">Vist Website</a>
                </figcaption>
              </figure>
          </div>

            <div class="project2 project" name="project2">
              <figure class="project2__figure">
                <img class="project2__imge" 
                src="img/placeimg_400_600_nature.jpg" alt="">
                <figcaption class="project2__description  center-xy">
                  <h1 class="project2__header center-xy">Rating App</h1>
                  <p class="project2__summary hidden-elem">Demo Rating App to learn PHP & SQL.</p>
                  <a class="project2__visit-link hidden-elem"  href="#">Vist Website</a>
                </figcaption>
              </figure>
            </div>
          </div>
          <p class="mywork-text-2">I'm interested and excited to add our next projects here...
          </p>
        </main>
        
      </section>
      <section class="contactme view inactive__view" id="contact">
        <header class="contactme__header">
          <h2 class="contactme-h2">
            <span class="bouncy">C</span>
            <span class="bouncy">o </span>
            <span class="bouncy">n</span>
            <span class="bouncy">t</span>
            <span class="bouncy">a</span>
            <span class="bouncy">c</span>
            <span class="bouncy">t &nbsp;</span>
            <span class="bouncy">m</span>
            <span class="bouncy">e</span>
          </h2>
        </header>
        <main class="contactme__main">
          <p class="contactme-text">Got a question or proposal, or just want
            to say hello? Go ahead.
          </p>
            <form class="contactme__form" id="form">
            <input
              type="text"
              class="feedback-input"
              id="name"
              placeholder="Name"
            />
            <input
              type="text"
              class="feedback-input col-50"
              id="email"
              placeholder="Email"
              required
              onblur="isvalidEmail()"
            />
            <input
              type="text"
              class="feedback-input col-100"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              name="message"
              class="feedback-input col-100"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onblur="isvalidMessage()"
              required
            ></textarea>
            <button type="sumibt" class="button waviy sendit-button">
              <span style="--i: 1">S</span>
              <span style="--i: 2">e</span>
              <span style="--i: 3">n</span>
              <span style="--i: 4">d</span>
              <span style="--i: 5"></span>
              <span style="--i: 6">i</span>
              <span style="--i: 7">t</span>
            </button>
          </form>
        </main>
        
      </section>
    </didiv>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
    <script src="js/100vhscroll.js" type="module"></script>
    <script src="js/helpfunc.js" type="module"></script>
    <script src="js/onscrollanimation.js" type="module"></script>
    <script src="js/scribt.js " type="module"></script>
    <script src="js/clientValidation.js"></script>
  </body>
</html>
