// Star Wars Theme - Interactive Elements

// Create stars in the background
function createStars() {
  const stars = document.createElement('div');
  stars.className = 'stars';
  document.body.appendChild(stars);
  
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    stars.appendChild(star);
  }
}

// Lightsaber cursor effect
function initLightsaberCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'lightsaber-cursor';
  document.body.appendChild(cursor);
  
  let trail = [];
  const trailLength = 10;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    // Update trail positions with delay
    setTimeout(() => {
      trail.forEach((dot, index) => {
        const trailFactor = (trailLength - index) / trailLength;
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        dot.style.width = `${8 * trailFactor}px`;
        dot.style.height = `${8 * trailFactor}px`;
        dot.style.opacity = trailFactor * 0.5;
      });
    }, index * 30);
  });
  
  // Change cursor color based on section
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      if (section.classList.contains('about') || section.classList.contains('projects')) {
        cursor.style.backgroundColor = 'var(--lightsaber-blue)';
        trail.forEach(dot => dot.style.backgroundColor = 'var(--lightsaber-blue)');
      } else if (section.classList.contains('experience') || section.classList.contains('contact')) {
        cursor.style.backgroundColor = 'var(--lightsaber-red)';
        trail.forEach(dot => dot.style.backgroundColor = 'var(--lightsaber-red)');
      }
    });
  });
}

// Hologram effect for profile image
function initHologramEffect() {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;
  
  // Add scanlines
  const scanlines = document.createElement('div');
  scanlines.className = 'hologram-scanlines';
  heroImage.appendChild(scanlines);
  
  // Add glitch effect occasionally
  setInterval(() => {
    heroImage.classList.add('hologram-glitch');
    setTimeout(() => {
      heroImage.classList.remove('hologram-glitch');
    }, 200);
  }, 5000);
}

// Star Wars opening crawl
function initOpeningCrawl() {
  const crawlContainer = document.querySelector('.crawl-container');
  if (!crawlContainer) return;
  
  const crawlText = document.querySelector('.crawl-text');
  
  // Reset animation when it completes
  crawlText.addEventListener('animationend', () => {
    crawlText.style.animation = 'none';
    setTimeout(() => {
      crawlText.style.animation = 'crawl 60s linear';
    }, 100);
  });
}

// Lightsaber menu animation
function initLightsaberMenu() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    // Create lightsaber hilt
    const hilt = document.createElement('div');
    hilt.className = 'lightsaber-hilt';
    
    // Create lightsaber blade
    const blade = document.createElement('div');
    blade.className = 'lightsaber-blade';
    
    // Wrap link text
    const text = link.textContent;
    link.textContent = '';
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    
    // Assemble lightsaber
    link.appendChild(hilt);
    link.appendChild(blade);
    link.appendChild(textSpan);
    
    // Ignite lightsaber on hover
    link.addEventListener('mouseenter', () => {
      blade.classList.add('ignited');
    });
    
    link.addEventListener('mouseleave', () => {
      blade.classList.remove('ignited');
    });
  });
}

// Holocron project cards
function initHolocronCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    // Add holocron glow effect
    card.addEventListener('mouseenter', () => {
      card.classList.add('holocron-active');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('holocron-active');
    });
    
    // Add 3D rotation effect
    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const rotateY = (e.clientX - cardCenterX) / 10;
      const rotateX = (cardCenterY - e.clientY) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// Parallax star background
function initParallaxStars() {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const stars = document.querySelector('.stars');
    if (stars) {
      stars.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
  });
}

// Binary sunset transition effect
function initBinarySunsetTransition() {
  const sections = document.querySelectorAll('.section');
  
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75 && sectionTop > -sectionHeight * 0.5) {
        const progress = 1 - (sectionTop / windowHeight);
        section.style.setProperty('--sunset-progress', progress);
      }
    });
  });
}

// BB-8 droid assistant
function initDroidAssistant() {
  const droid = document.createElement('div');
  droid.className = 'droid-assistant';
  droid.innerHTML = `
    <div class="droid-body">
      <div class="droid-head"></div>
    </div>
  `;
  document.body.appendChild(droid);
  
  // Make droid follow scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Position droid at bottom right, following scroll
    droid.style.top = `${Math.min(scrollPosition + windowHeight - 100, document.body.scrollHeight - 100)}px`;
  });
  
  // Show tooltips for technical terms
  const techTerms = document.querySelectorAll('.tech-term');
  techTerms.forEach(term => {
    term.addEventListener('mouseenter', () => {
      const tooltip = document.createElement('div');
      tooltip.className = 'droid-tooltip';
      tooltip.textContent = term.dataset.description;
      
      const termRect = term.getBoundingClientRect();
      tooltip.style.left = `${termRect.left}px`;
      tooltip.style.top = `${termRect.top - 40}px`;
      
      document.body.appendChild(tooltip);
      
      // Animate droid to look at term
      const droidRect = droid.getBoundingClientRect();
      const angle = Math.atan2(termRect.top - droidRect.top, termRect.left - droidRect.left);
      droid.querySelector('.droid-head').style.transform = `rotate(${angle}rad)`;
      
      term.addEventListener('mouseleave', () => {
        document.body.removeChild(tooltip);
        droid.querySelector('.droid-head').style.transform = 'rotate(0)';
      });
    });
  });
}

// Initialize all interactive elements
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  initLightsaberCursor();
  initHologramEffect();
  initOpeningCrawl();
  initLightsaberMenu();
  initHolocronCards();
  initParallaxStars();
  initBinarySunsetTransition();
  initDroidAssistant();
  
  // Add smooth scrolling for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
});
