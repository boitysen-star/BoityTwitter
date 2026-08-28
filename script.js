const themeToggles = document.querySelectorAll('.theme-toggle');

function updateThemeControls(theme) {
    const isDark = theme === 'dark';

    themeToggles.forEach((toggle) => {
        const label = toggle.querySelector('.theme-label');

    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label',  `Switch to ${isDark ? 'light' : 'dark'} mode`);
    label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('boity-theme', theme);
    updateThemeControls(theme);
}
themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
});
updateThemeControls(document.documentElement.dataset.theme);