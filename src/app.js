// Icons 
const sunIcon = document.querySelector('.fa-solid.fa-sun');
const moonIcon = document.querySelector('.fa-solid.fa-moon');
// Theme
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
// Toggling
const iconToggle = () => {
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
};
// Initial theme on page load
const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        console.log(aaaa);
        return;
    }
    sunIcon.classList.add('hidden');
};
// Manual Theme Toggle
const themeToggle = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    iconToggle();
};
// Event Listener
sunIcon.addEventListener('click', () => {
    themeToggle();
});
// invoke themeCheck on page load
themeCheck();