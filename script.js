
    // DOM Elements
    const navLinks = document.getElementById('nav-links');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechList = document.getElementById('modal-tech-list');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const contactForm = document.getElementById('contact-form');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectBtns = document.querySelectorAll('.project-btn');
    const blogSearchInput = document.getElementById('blog-search-input');
    const blogCards = document.querySelectorAll('.blog-card');

    // Project Data (for modal)
    const projectData = [
      {
        id: 1,
        title: 'Campus Lost & Found',
        description: 'A Figma Prototype for a lost and found system designed for university campuses. The app allows users to report lost items, browse found items, and connect with others to reunite lost belongings with their owners.',
        image: 'images/foundly.png',
        technologies: ['Figma'],
        liveLink: 'https://www.figma.com/proto/Tv19G9BMY3hgIB6rQAuC5I/Foundly---Campus-Lost---Found?node-id=0-1&t=uqf3Yiw2y0qRVoid-1',
        codeLink: 'https://www.figma.com/proto/Tv19G9BMY3hgIB6rQAuC5I/Foundly---Campus-Lost---Found?node-id=0-1&t=uqf3Yiw2y0qRVoid-1'
      },
      {
        id: 2,
        title: 'Hima AI',
        description: 'A manually trained AI-Model with Python and Node.Js',
        image: 'images/ai.png',
        technologies: ['PHP', 'Node.js', 'HTML'],
        liveLink: 'https://github.com/Himasha44/live-ai-assistant',
        codeLink: 'https://github.com/Himasha44/live-ai-assistant'
      },
      {
        id: 3,
        title: 'Simple Calculator',
        description: 'An online learning platform that connects students with educators. The platform includes features like video lessons, interactive quizzes, progress tracking, and certificate generation upon course completion.',
        image: 'images/Calculator.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://github.com/Himasha44/SimpleCal',
        codeLink: 'https://github.com/Himasha44/SimpleCal'
      },
      {
        id: 4,
        title: 'Portfolio Template',
        description: 'A personal portfolio. This is designed to showcase projects, skills, and experiences in an elegant and modern layout.',
        image: 'images/portfolio.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://www.linkedin.com/posts/nethmi-himasha-538595261_webdevelopment-frontend-html-activity-7432286723591716864-zLm5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBWCbwBy85VGJEc3la4pzoNQPlj98PefYs',
        codeLink: 'https://github.com/Himasha44/portfolio-2.0'
      },
      {
        id: 5,
        title: 'Discat - A Gamified O/L mathematics Learning App',
        description: 'A app dedicated to Sri Lankan O/L students who has trouble passing mathemtics.',
        image: 'images/discat.png',
        technologies: ['Java', 'Springboot', 'Figma', 'Kotlin'],
        liveLink: 'https://discat.site/',
        codeLink: 'https://discat.site/'
      },
      {
        id: 6,
        title: 'ACROX',
        description: 'A travelling buddy',
        image: 'images/Screenshot_2026-02-03_212257-removebg-preview.png',
        technologies: ['Figma'],
        liveLink: 'https://www.figma.com/proto/wKzoyxKxuSa4a5ZcBaRm2n/LeDesign%C3%A9?page-id=93%3A2&node-id=203-2526&starting-point-node-id=203%3A2526&t=pG49jAKYLWxz6EXm-1',
        codeLink: 'https://www.figma.com/proto/wKzoyxKxuSa4a5ZcBaRm2n/LeDesign%C3%A9?page-id=93%3A2&node-id=203-2526&starting-point-node-id=203%3A2526&t=pG49jAKYLWxz6EXm-1'
      },
      
      {
        id: 7,
        title: 'Login/ Register page with Flip Effect',
        description: 'A creative login/ register page that flips',
        image: 'images/login.png',
        technologies: ['HTML', 'CSS', 'Javascript'],
        liveLink: 'https://himasha44.github.io/Login-Register-page-with-Flip-Effect/',
        codeLink: 'https://himasha44.github.io/Login-Register-page-with-Flip-Effect/'
      },

      {
        id: 8,
        title: 'Simple PHP CMS',
        description: 'A simple content management system built with PHP',
        image: 'images/php website.png',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
        liveLink: 'https://github.com/Himasha44/simple-php-cms',
        codeLink: 'https://github.com/Himasha44/simple-php-cms'
      },

      {
        id: 9,
        title: 'Tic-Tac-Toe',
        description: 'A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript',
        image: 'images/Tic Tac Toe.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://github.com/Himasha44/Tic_Tac_Toe',
        codeLink: 'https://github.com/Himasha44/Tic_Tac_Toe'
      }
      

    ];

    let currentProjectIndex = 0;

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.innerHTML = document.body.classList.contains('dark-mode')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      
      // Save theme preference in localStorage
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });

    // Load saved theme
    document.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });

    // Project filter functionality
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Open project modal
    projectBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card');
        const projectId = parseInt(projectCard.getAttribute('data-id'));
        
        // Find project in data
        const project = projectData.find(p => p.id === projectId);
        currentProjectIndex = projectData.indexOf(project);
        
        if (project) {
          // Populate modal with project data
          modalImg.src = project.image;
          modalImg.alt = project.title;
          modalTitle.textContent = project.title;
          modalDescription.textContent = project.description;
          
          // Clear and add tech items
          modalTechList.innerHTML = '';
          project.technologies.forEach(tech => {
            const techItem = document.createElement('span');
            techItem.className = 'modal-tech-item';
            techItem.textContent = tech;
            modalTechList.appendChild(techItem);
          });
          
          // Open modal
          projectModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close project modal
    modalClose.addEventListener('click', () => {
      projectModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside content
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Navigate between projects in modal
    modalPrev.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex - 1 + projectData.length) % projectData.length;
      updateModalContent();
    });

    modalNext.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex + 1) % projectData.length;
      updateModalContent();
    });

    function updateModalContent() {
      const project = projectData[currentProjectIndex];
      
      modalImg.src = project.image;
      modalImg.alt = project.title;
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      
      modalTechList.innerHTML = '';
      project.technologies.forEach(tech => {
        const techItem = document.createElement('span');
        techItem.className = 'modal-tech-item';
        techItem.textContent = tech;
        modalTechList.appendChild(techItem);
      });
    }

    // Progress bar animation
    function animateProgressBars() {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
      });
    }

    // Blog search functionality
    blogSearchInput.addEventListener('input', () => {
      const searchValue = blogSearchInput.value.toLowerCase().trim();
      
      blogCards.forEach(card => {
        const title = card.querySelector('.blog-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchValue) || excerpt.includes(searchValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });

    // Contact form validation
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Reset error states
      [nameInput, emailInput, messageInput].forEach(input => {
        input.classList.remove('error');
      });
      
      // Validate name
      if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        isValid = false;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
      }
      
      // Validate message
      if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        isValid = false;
      }
      
      // If valid, simulate form submission
      if (isValid) {
        // This would normally send the data to a server
        alert('Thanks for your message! This is a prototype - in the real version, your message would be sent.');
        contactForm.reset();
      }
    });

    // Scroll animations
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      // Animate elements when they come into view
      document.querySelectorAll('.fade-up').forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight;
        
        if (scrollPosition > elementPosition - viewportHeight + 100) {
          element.classList.add('active');
          
          // If element is a skill card, animate its progress bar
          if (element.classList.contains('skill-card')) {
            const progressBar = element.querySelector('.progress-bar');
            if (progressBar) {
              const width = progressBar.getAttribute('data-width');
              progressBar.style.width = width + '%';
            }
          }
        }
      });
    });

    // Initialize animations on page load
    document.addEventListener('DOMContentLoaded', () => {
      // Trigger scroll once to activate visible elements
      window.dispatchEvent(new Event('scroll'));
    });
