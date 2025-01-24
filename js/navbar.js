function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const container = document.createElement('div');
    container.className = 'navbar-container';

    // Logo
    const logo = document.createElement('a');
    logo.href = '/';
    logo.className = 'navbar-logo';
    logo.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        SEO-build 
    `;

    // Navigation Links
    const links = document.createElement('div');
    links.className = 'navbar-links';

    const navItems = [
        { text: 'Acceuil', href: '/' },
        { text: 'Qui sommes nous ?', href: '/aboutus.html' },
        { text: 'Templates', href: 'templates.html', isButton: true }
    ];

    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.text;
        link.className = item.isButton ? 'navbar-button' : 'navbar-link';
        links.appendChild(link);
    });

    container.appendChild(logo);
    container.appendChild(links);
    nav.appendChild(container);

    return nav;
}

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('main-nav');
    navContainer.appendChild(createNavbar());
});