//😍بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِیمِ😍
document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animations
    const heroElements = document.querySelectorAll('.hero-title span, .hero-description, .hero-buttons');
    
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.5 });
    
    heroElements.forEach(el => {
        heroObserver.observe(el);
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
    const teamMembers = document.querySelectorAll('.team-member');
    
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    teamMembers.forEach(member => {
        teamObserver.observe(member);
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
    const shapes = document.querySelectorAll('.math-shape');
    
    shapes.forEach((shape, index) => {
        shape.style.animation = `float ${6 + index * 2}s infinite ease-in-out`;
    });
});