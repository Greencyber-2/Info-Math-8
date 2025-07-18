//😍بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِیمِ😍
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#6c63ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6c63ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Hero Section Animations
    const heroElements = document.querySelectorAll('.hero-title span, .hero-description, .hero-cta');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease ' + (index * 0.2) + 's';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Features Animation
    const featureCards = document.querySelectorAll('.feature-card');
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
        featureObserver.observe(card);
    });
    
    // Download Cards Animation
    const downloadCards = document.querySelectorAll('.download-card');
    
    const downloadObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    downloadCards.forEach(card => {
        downloadObserver.observe(card);
    });
    
    // Team Members Animation
    const teamCards = document.querySelectorAll('.team-card');
    
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    teamCards.forEach(card => {
        teamObserver.observe(card);
    });
    
    // Math Equation Animation (Windows App Demo)
    const equation = document.querySelector('.equation');
    const solution = document.querySelector('.solution');
    
    if (equation && solution) {
        // Initial animation
        setTimeout(() => {
            equation.style.opacity = '1';
            equation.style.transform = 'translateY(0)';
            setTimeout(() => {
                solution.style.opacity = '1';
                solution.style.transform = 'translateY(0)';
            }, 1500);
        }, 1000);
        
        // Change equation every 5 seconds
        setInterval(() => {
            equation.style.opacity = '0';
            equation.style.transform = 'translateY(20px)';
            solution.style.opacity = '0';
            solution.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                const a = Math.floor(Math.random() * 5) + 1;
                const b = Math.floor(Math.random() * 10) + 5;
                const c = a * (Math.floor(Math.random() * 5)) + 5;
                
                equation.textContent = `${a}x + ${b} = ${c}`;
                equation.style.opacity = '1';
                equation.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                    solution.textContent = `x = ${(c - b) / a}`;
                    solution.style.opacity = '1';
                    solution.style.transform = 'translateY(0)';
                }, 1500);
            }, 500);
        }, 5000);
    }
    
    // Floating Shapes Animation
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        shape.style.animation = `float ${6 + index * 2}s infinite ease-in-out`;
    });
});

