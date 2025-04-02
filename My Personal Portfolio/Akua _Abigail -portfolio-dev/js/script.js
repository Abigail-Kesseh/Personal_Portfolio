/* toggle icon */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Active navlink styled */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY; 
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });

  /* Make header sticky */
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Remove toggle */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: '2000',
  delay: '200',
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom' },
);

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: [
    '2nd year Computer Engineering Student.',
    'Tech Enthusiast.',
    'An Entrepreneur.',
    'Health and Fitness Savvy.',
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

/* The pop up menu */
const popUpMenu = (project) => {
  const popUpModal = document.querySelector('#modal');
  const popUpModalOverlay = document.querySelector('#overlay');
  const popUpModalCloseBtn = document.querySelector('[data-close-button]');

  const popUpImage = document.createElement('img');
  popUpImage.src = project.image;
  popUpImage.classList.add('modal-image');

  const popUpDetails = document.createElement('div');
  popUpDetails.classList.add('modal-details');
  popUpDetails.id = 'modal-details';

  const popUpTitle = document.createElement('h3');
  popUpTitle.classList.add('modal-header');
  popUpTitle.textContent = project.title;
  popUpDetails.appendChild(popUpTitle);

  const popUpText = document.createElement('p');
  popUpText.classList.add('project-details');
  popUpText.textContent = project.details;
  popUpDetails.appendChild(popUpText);

  const repoBtn = document.createElement('a');
  const seeLive = document.createElement('a');
  repoBtn.target = '_blank';
  seeLive.target = '_blank';
  seeLive.classList.add('btn', 'project-btns');
  seeLive.textContent = 'Learn More';
  seeLive.href = project.liveLink;

  const popUpBtnsContainer = document.createElement('div');
  popUpBtnsContainer.classList.add('popup-btns-container');

  popUpBtnsContainer.appendChild(repoBtn);
  popUpBtnsContainer.appendChild(seeLive);

  popUpDetails.appendChild(popUpBtnsContainer);

  popUpModal.appendChild(popUpImage);
  popUpModal.appendChild(popUpDetails);

  popUpModal.classList.add('active');
  popUpModalOverlay.classList.add('active');

  popUpModalCloseBtn.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });

  popUpModalOverlay.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });
};

/* Render projects dynamically */
const projectsArr = [
  {
    image: 'https://i.ibb.co/d4mVB1zp/com-skills.jpg',
    title: 'Communication Skills',
    liveLink: 'https://www.tutorialspoint.com/management_concepts/effective_communication_skills.htm',
    details:
      'I possess strong communication skills, enabling me to express ideas clearly and collaborate effectively. I adapt my style to suit different audiences, ensuring seamless interactions and productive teamwork',
    },
  {
    image: 'https://i.ibb.co/8g2KtVK2/logo.jpg',
    title: 'Programming Skills',
    liveLink: 'https://www.codecademy.com/learn/learn-c-plus-plus',
    details:
      'I am proficient in programming languages such as C++ and Python. I have hands-on experience in writing clean, efficient code for various applications, including algorithms and data structures.',
  },
  {
    image: 'https://i.ibb.co/4nn612jV/html.png',
    title: 'Web Development',
    liveLink: 'https://www.geeksforgeeks.org/web-development/',
    details:
      'I am an intermediate front-end developer skilled in HTML, CSS, and JavaScript. I create responsive designs and interactive user experiences using modern deisgning tool and features such as FIGMA.',
  },
  {
    image: 'https://i.ibb.co/S4GRbz2S/level-main.png',
    title: 'Team Collaboration',
    liveLink: 'https://ideascale.com/blog/what-is-team-collaboration/',
    details: 'I work well in team environments, contributing ideas and collaborating effectively with peers on group projects. I value diverse perspectives and actively participate in discussions to achieve shared goals, ensuring successful project delivery',
  },
  {
    image: 'https://i.ibb.co/bgFZkw77/troubleshooting-vs-debugging.png',
    title: 'Debugging and Troubleshooting',
    liveLink: 'https://stackify.com/troubleshooting-vs-debugging-whats-the-difference-best-practices/',
    details:
      'I have strong debugging and troubleshooting skills that enable me to identify and resolve technical issues efficiently. I can analyze system malfunctions, isolate root causes, and implement effective solutions to restore functionality. My methodical approach ensures minimal downtime and enhanced system reliability.',
  },
  {
    image: 'https://i.ibb.co/RTNztTM7/image.png',
    title: 'Microsoft Office Proficiency',
    liveLink: 'https://www.coursera.org/courses?query=microsoft%20office&msockid=0a6ebb7867bf6ab61573a9ec66476b7b',
    details:
      'I am proficient in Microsoft Word, Excel, and PowerPoint, enabling me to create well-organized documents, perform data analysis using spreadsheets, and deliver engaging presentations. I effectively utilize advanced features, such as formulas, pivot tables, and slide animations, to enhance productivity and communication.',
  },
];

const projectsContainer = document.querySelector('.portfolio-container');

projectsArr.forEach((proj) => {
  const project = document.createElement('div');
  project.classList.add('portfolio-box');

  const projectImg = document.createElement('img');
  projectImg.src = proj.image;
  projectImg.alt = proj.title;

  const layer = document.createElement('div');
  layer.classList.add('portfolio-layer');

  const title = document.createElement('h4');
  title.textContent = proj.title;

  const details = document.createElement('p');
  details.textContent = proj.details;

  const popLink = document.createElement('a');

  const popBtn = document.createElement('i');
  popBtn.classList.add('bx', 'bx-link-external');

  popLink.appendChild(popBtn);

  layer.appendChild(title);
  layer.appendChild(details);
  layer.appendChild(popLink);

  project.appendChild(projectImg);
  project.appendChild(layer);

  projectsContainer.appendChild(project);

  popLink.addEventListener('click', () => {
    popUpMenu(proj);
  });
});
