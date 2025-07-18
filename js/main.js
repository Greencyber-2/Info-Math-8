//😍بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِیمِ😍
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    });
    
    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active Navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const darkModeStyle = document.getElementById('darkModeStyle');
    const body = document.body;
    
    // Check for saved user preference
    if (localStorage.getItem('theme') === 'dark') {
        darkModeStyle.removeAttribute('disabled');
        body.classList.add('dark-mode');
        themeToggle.classList.add('active');
    }
    
    themeToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            darkModeStyle.removeAttribute('disabled');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeStyle.setAttribute('disabled', 'true');
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Products Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
    
    // Messenger Tabs
    const messengerTabs = document.querySelectorAll('.messenger-tabs button');
    
    messengerTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            messengerTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Chat Bot Simulation
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const chatSendBtn = document.querySelector('.chat-input button');
    
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', function() {
            if (chatInput.value.trim() !== '') {
                const userMsg = document.createElement('div');
                userMsg.className = 'message user-message';
                userMsg.innerHTML = `<div class="message-content">${chatInput.value}</div>`;
                chatMessages.appendChild(userMsg);
                
                const userQuestion = chatInput.value;
                chatInput.value = '';
                
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                setTimeout(() => {
                    const botMsg = document.createElement('div');
                    botMsg.className = 'message bot-message';
                    
                    let botResponse = '';
                    if (userQuestion.includes('حل')) {
                        const a = Math.floor(Math.random() * 5) + 1;
                        const b = Math.floor(Math.random() * 10) + 5;
                        const c = a * (Math.floor(Math.random() * 5)) + 5;
                        const x = (c - b) / a;
                        
                        botResponse = `حل معادله ${a}x + ${b} = ${c}:<br>
                            1. ${b} را از دو طرف کم می‌کنیم: ${a}x = ${c - b}<br>
                            2. دو طرف را بر ${a} تقسیم می‌کنیم: x = ${x}<br>
                            جواب نهایی: x = ${x}`;
                    } else if (userQuestion.includes('ریاضی') || userQuestion.includes('سوفیا')) {
                        botResponse = 'سوفیا+ یک اکوسیستم آموزشی هوشمند برای یادگیری ریاضی است. من می‌توانم به سوالات ریاضی شما پاسخ دهم و مفاهیم را آموزش دهم.';
                    } else {
                        botResponse = 'سلام! من چت‌بات سوفیا+ هستم. می‌توانم به سوالات ریاضی شما پاسخ دهم. لطفاً سوال خود را به صورت واضح بیان کنید.';
                    }
                    
                    botMsg.innerHTML = `<div class="message-content">${botResponse}</div>`;
                    chatMessages.appendChild(botMsg);
                    
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        });
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                chatSendBtn.click();
            }
        });
    }
});