AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  disable: 'mobile',
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

document.addEventListener("DOMContentLoaded", function() {
  // Modal elements
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeModal = document.querySelector(".close");

  // "Read more" links
  const readMoreLinks = document.querySelectorAll("#projects .link-projects");

  // Project data for modal content
  const projectDetails = {
    "Codebots": {
          image: "./assets/images/CB01.png",
          text: "Codebots is an online platform that aims to expand programming education reach to children and teens. We provide safe" +
                "and effective virtual classroom." +
                "<br>This web application is based in technologies like PHP, Javascript, SQL, CSS, and a number of additional frameworks and APIs " +
                "that enable it to expand accessibility to high-quality resources and a personalized learning experience." +
                "<br>Here are some features and functionalities that describe the project and my involvement in it:" +
                "<br>- Secure user profile creation and customization" +
                "<br>- Course sign up and secure purchase implementation" +
                "<br>- Custom classroom content editor" +
                "<br>- Custom student management system" +
                "<br>- Zoom, Stripe and other API integrations" +
                "<br>- Custom quiz and assignment system" +
                "<br>- Automatic grading system" 
                
      },
      "Tunnel Glide": {
          image: "./assets/images/TG01.gif",
          text: "TunnelGlide is a flying game that has a sense of flow and features a multitude of obstacles that the" +
          "player must avoid. The player must keep flying the flying craft from crashing into obstacles by moving up," +
          "and side to side." +
          "<br><br>The main challenges faced in this project include consistent level rotation, making the player movement" +
          "feel satisfying (required play testing and parameter tweaking), and adjusting the game world for a view" +
          "change (perspective change)." +
          "<br><br>This game is similar to other games such as The Helicopter Game, Flappy Bird and Pixel Copter." +
          "<br><br>To start the game, you must run a python program, which will open the game in your default browser." +
          "<br><br>Working on the TunnelGlide project has provided me with valuable development skills in game" +
          "development, WebGL proficiency, gameplay mechanics implementation, user input handling, level" +
          "design, playtesting, parameter tweaking, web development, and genre awareness."
      },
      "Sling Match": {
          image: "./assets/images/SM01.gif",
          text: "SlingMatch is a simple, 2D game made with Unity. In this game there can be up tp four players that are competing to destroy the most blocks with their cannon." +
          "<br><br> The SlingMatch projectile has provided me with a stron foundation in Unity game development, 2D game design, player controls," +
          " physics-based gameplay, user interface design, multiplayer functionality, and project management. These skills will enable me to " +
          " contribute effectively to future game development projects and deliver high-quality." +
          "<br><br> The blocks are colored randomly and are positioned at the center of the screen. Each player is situated on one side of the game screen" +
          "(right, left, top, bottom) and is supplied with rotating cannon that changes the color of its ammunition with each shot." +
          "<br><br> The original game prototype was to be made for a large touch screen, where each player would take turns shooting their cannon" +
          "<br><br> The SlingMatch project has provided me with a foundation in Unity game development, 2D game design, player controls, physics-based" +
          "gameplay, user interface design, and roject management. These skills will eneble me to contribute effectively to future development projects" +
          "and deliver high-quality experiences."
      },
      "Encrypted Coms.": {
          image: "./assets/images/client-server03.png",
          text: "This program is designed to display effective server-client communication. I have learned how to" +
          "establish a connection between a client and a server, allowing them to exchange information securely." +
          "<br><br>Combining the usage of symmetric key and public key algorithms elevates the security of communication" +
          "exchanges than sole reliance on one or the other. For instance, while symmetric key encryption is more" +
          "efficient, it requires a secret key to be securely exchanged. This disadvantage is solved by using public" +
          "key encryption to move the secret key to a different non-attacker host. While a combination of these" +
          "algorithms is effective, there are downsides. For example, existing weaknesses can still be exploited, such" +
          "as through Replay Attacks." +
          "<br><br>This project largely includes identity validation, symmetric key generation, key management, User input" +
          "menu, and encryption algorithms."
      }
  };


    // Show modal with fade-in effect
    readMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
        event.preventDefault();

        const projectTitle = this.closest(".card-custom-content").querySelector("h4").textContent;
        const projectData = projectDetails[projectTitle];

        if (projectData) {
            modalImage.src = projectData.image;
            modalTitle.textContent = projectTitle;
            modalText.innerHTML = projectData.text;

            // Add 'show' class to fade in
            modal.classList.add("show");
        }
        });
    });

    // Close modal with fade-out effect
    closeModal.onclick = function() {
        modal.classList.remove("show"); // Trigger fade-out
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.classList.remove("show"); // Trigger fade-out
        }
    };

});