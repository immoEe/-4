const authModal = document.getElementById('authModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const closeModal = document.querySelector('.close');

document.querySelector('a[href="#auth"]').addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'flex';
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

document.getElementById('loginFormData').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    alert(`Попытка входа:\nEmail: ${email}\nПароль: ${password}`);
    authModal.style.display = 'none';
});

document.getElementById('registerFormData').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    alert(`Регистрация:\nФИО: ${name}\nEmail: ${email}\nПароль: ${password}`);
    authModal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const newsGrid = document.querySelector('.news-grid');
    const newsItems = [
        { title: 'Обновление системы', date: '2024-03-20', content: 'Реализована новая система отчетности по посещениям' },
        { title: 'Технические работы', date: '2024-03-18', content: 'Плановые работы в серверной комнате 25.03.2024' },
        { title: 'Обучение персонала', date: '2024-03-15', content: 'Новая программа обучения для администраторов зала' }
    ];

    newsItems.forEach(item => {
        const article = document.createElement('article');
        article.className = 'news-card';
        article.innerHTML = `
            <h3>${item.title}</h3>
            <time datetime="${item.date}">${new Date(item.date).toLocaleDateString()}</time>
            <p>${item.content}</p>
        `;
        newsGrid.appendChild(article);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    alert(`Сообщение отправлено!\n\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`);
    
    document.getElementById('feedbackForm').reset();
});

