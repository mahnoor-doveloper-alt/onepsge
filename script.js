document.addEventListener("DOMContentLoaded", function () {
    var offcanvas = document.querySelector(".offcanvas");
    var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);

    document.querySelectorAll(".dropdown-item").forEach(function (item) {
        item.addEventListener("click", function (event) {
            // Check agar clicked item deep dropdown ka parent hai to offcanvas close na ho
            if (!item.closest(".deep-dropdown")) {
                if (bsOffcanvas) {
                    bsOffcanvas.hide(); // Only main dropdown close karega
                }
            }
        });
    });

    // Deep dropdown ko left align karna aur width same karna
    document.querySelectorAll(".deep-dropdown").forEach(function (deepDropdown) {
        var submenu = deepDropdown.querySelector(".deep-dropdown-menu");
        if (submenu) {
            submenu.style.left = "0"; // Left align
            submenu.style.width = "100%"; // Width full
        }
    });
});














document.addEventListener("click", function (event) {
let dropdowns = document.querySelectorAll(".dropdown-menu.show");
dropdowns.forEach(function (dropdown) {
    if (!dropdown.parentElement.contains(event.target)) {
        let dropdownToggle = dropdown.parentElement.querySelector(".dropdown-toggle");
        let bsDropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
        if (bsDropdown) {
            bsDropdown.hide();
        }
    }
});
});


//.......................................................COLORCHANGE..........................//


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
//.....................................strat.........................//
function toggleActive(box) {
    // Remove active class from all boxes
    document.querySelectorAll('.feature-box').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked box
    box.classList.add('active');
}


        // Click animation
        function toggleActive(box) {
            document.querySelectorAll('.feature-box').forEach(item => {
                item.classList.remove('active');
            });
            box.classList.add('active');
        }

        // Scroll animation
        function animateOnScroll() {
            const boxes = document.querySelectorAll('.feature-box');
            const windowHeight = window.innerHeight;
            
            boxes.forEach(box => {
                const boxPosition = box.getBoundingClientRect().top;
                const scrollPosition = windowHeight * 0.8;
                
                if(boxPosition < scrollPosition) {
                    box.classList.add('animate');
                }
            });
        }

        // Initialize animation on load
        window.addEventListener('load', animateOnScroll);
        
        // Trigger animation on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Click animation
        function toggleActive(box) {
            document.querySelectorAll('.feature-box').forEach(item => {
                item.classList.remove('active');
            });
            box.classList.add('active');
        }

        // Scroll animation
        function animateOnScroll() {
            const boxes = document.querySelectorAll('.feature-box');
            const windowHeight = window.innerHeight;
            
            boxes.forEach(box => {
                const boxPosition = box.getBoundingClientRect().top;
                const scrollPosition = windowHeight * 0.8;
                
                if(boxPosition < scrollPosition) {
                    box.classList.add('animate');
                }
            });
        }

        // Initialize
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
        //.......................HIDDENBOX.......................................//

        document.addEventListener("DOMContentLoaded", function () {
            function revealOnScroll() {
                let container = document.querySelector(".container");
                let position = container.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;
        
                if (position < windowHeight - 100) {
                    container.classList.add("show");
                }
            }
        
            window.addEventListener("scroll", revealOnScroll);
        });

        //....................................ANIMATION...............................//

        // Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero-section");

    // Function to add class 'show' after page load for animation
    setTimeout(function() {
        heroSection.classList.add("show");
    }, 100); // Small delay to ensure animation effect
});
//........................................................tuching.....................//

document.querySelectorAll(".feature-box").forEach(box => {
    box.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});

//........................................ANIMATION ..........................//


    function revealFeatureBoxes() {
        const boxes = document.querySelectorAll(".feature-box");

        boxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                box.classList.add("show");
            }
        });
    }

    // Call on scroll and page load
    window.addEventListener("scroll", revealFeatureBoxes);
    window.addEventListener("load", revealFeatureBoxes);


    //........................................ABOUT US.............................//


   
      
    //.......................................counter....................//


    function countUp(elementId, start, end, duration) {
        let current = start;
        let increment = end / (duration / 100);
  
        const counter = document.getElementById(elementId);
        const interval = setInterval(() => {
          current += increment;
          if (current >= end) {
            clearInterval(interval);
            current = end;
          }
          counter.textContent = Math.floor(current);
        }, 100);
      }
  
      window.onload = () => {
        countUp('clients', 0, 232, 3000);  // 232 for Clients
        countUp('projects', 0, 521, 3000);  // 521 for Projects
        countUp('hours', 0, 1453, 3000);    // 1453 for Hours Of Support
        countUp('workers', 0, 32, 3000);    // 32 for Workers
      };

//.....................................m,,.......................................//

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonials-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    let testimonialWidth = testimonials[0].clientWidth;
    const totalTestimonials = testimonials.length;
    let autoSlideInterval;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    
    // Set initial position
    updateSlider();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        testimonialWidth = testimonials[0].clientWidth;
        updateSlider();
    });
    
    // Update slider position
    function updateSlider() {
        container.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
        updateDots();
    }
    
    function updateDots() {
        dots.forEach((dot, index) => {
            // agar current dot ka index == currentIndex hai to usko active class do
            // warna hata do
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    }
    
    // Next slide
    function nextSlide() {
        if (currentIndex >= totalTestimonials - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlider();
        resetAutoSlide();
    }
    
    // Previous slide
    function prevSlide() {
        if (currentIndex <= 0) {
            currentIndex = totalTestimonials - 1;
        } else {
            currentIndex--;
        }
        updateSlider();
        resetAutoSlide();
    }
    
    // Start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000);
    }
    
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Arrow click events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch events for mobile swipe
    container.addEventListener('touchstart', touchStart);
    container.addEventListener('touchend', touchEnd);
    container.addEventListener('touchmove', touchMove);
    
    // Mouse events for desktop drag
    container.addEventListener('mousedown', touchStart);
    container.addEventListener('mouseup', touchEnd);
    container.addEventListener('mouseleave', touchEnd);
    container.addEventListener('mousemove', touchMove);
    
    function touchStart(e) {
        if (e.type === 'touchstart') {
            startPos = e.touches[0].clientX;
        } else {
            startPos = e.clientX;
            e.preventDefault();
        }
        
        isDragging = true;
        container.style.cursor = 'grabbing';
        container.style.transition = 'none';
        resetAutoSlide();
        
        // Cancel any ongoing animations
        cancelAnimationFrame(animationID);
    }
    
    function touchMove(e) {
        if (isDragging) {
            const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const diff = currentPosition - startPos;
            
            container.style.transform = `translateX(calc(-${currentIndex * testimonialWidth}px + ${diff}px))`;
        }
    }
    
    function touchEnd(e) {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = 'grab';
            
            const currentPosition = e.type === 'touchend' ? 
                (e.changedTouches ? e.changedTouches[0].clientX : 0) : e.clientX;
            const diff = currentPosition - startPos;
            
            // Apply threshold for swipe
            if (diff < -50) {
                nextSlide();
            } else if (diff > 50) {
                prevSlide();
            } else {
                updateSlider();
            }
            
            container.style.transition = 'transform 0.5s ease-in-out';
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize auto slide
    startAutoSlide();
});
//............................................................services.................................//








     // Scroll reveal logic
  const cards = document.querySelectorAll('.service-card');

  function revealOnScroll() {
    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      const triggerBottom = window.innerHeight - 100;

      if (cardTop < triggerBottom) {
        setTimeout(() => {
          card.classList.add('reveal');
        }, index * 150); // delay for each card
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // Trigger on page load

  
document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.testimonials-slide-container');
    const testimonialBoxes = document.querySelectorAll('.testimonial-box');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;
    const totalBoxes = testimonialBoxes.length;
    let boxWidth = testimonialBoxes[0].offsetWidth + 20; // including gap
    
    // Set initial positions
    updateSlider();
    
    // Auto slide
    function startSlider() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalBoxes;
            updateSlider();
        }, 3000);
    }
    
    // Update slider position and dots
    function updateSlider() {
        slideContainer.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            resetInterval();
        });
    });
    
    // Reset interval when user interacts
    function resetInterval() {
        clearInterval(interval);
        startSlider();
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        boxWidth = testimonialBoxes[0].offsetWidth + 20;
        updateSlider();
    });
    
    // Start auto slider
    startSlider();
});
  //...................................................call to action .............................//


  document.addEventListener("DOMContentLoaded", function () {
    const ctaSection = document.querySelector(".cta-section");
  
    // Create an intersection observer to watch the cta-section
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        // If the cta-section is in view, add the 'show' class to trigger the animation
        if (entry.isIntersecting) {
          ctaSection.classList.add("show");
        }
      });
    }, {
      threshold: 0.5 // Trigger the animation when 50% of the section is in the viewport
    });
  
    // Observe the .cta-section element
    observer.observe(ctaSection);
  });

  //............................PORTFOLIO....................................//


  function filterCategory(category) {
    let items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
        item.classList.add('visible'); // Show item with animation
      } else {
        // Show item only if it matches the category
        if (item.classList.contains(category)) {
          item.style.display = 'block';
          item.classList.add('visible'); // Add animation class
        } else {
          item.style.display = 'none';
          item.classList.remove('visible'); // Remove animation class
        }
      }
    });

    // Ensure the "main category" is always visible
    let mainCategory = document.querySelector('.main-category');
    if (mainCategory) {
        mainCategory.style.display = 'block'; // Show the main category
    }
}

// Automatically trigger reveal on page load
window.addEventListener('load', () => {
    filterCategory('all');  // Default to showing all items when the page loads
});
//,........................................FQ......................................//



// Toggle answers on click
const faqItems = document.querySelectorAll(".faq-item:not(:first-child)");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");

    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

//.....................................................loder................//

window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    loader.style.display = "none"; // Hide after page loads
  });



  

  //......................................................BTOOOO.............................//
      const backToTopButton = document.querySelector('.back-to-top');
      
      window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
              backToTopButton.classList.add('visible');
          } else {
              backToTopButton.classList.remove('visible');
          }
      });
      
      backToTopButton.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });