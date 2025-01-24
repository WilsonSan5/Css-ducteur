function createHero() {
    const hero = document.createElement('div');
    hero.className = 'hero';

    // Announcement Banner
    const announcementBanner = document.createElement('div');
    announcementBanner.className = 'announcement-banner';

    const announcementText = document.createElement('span');

    announcementBanner.appendChild(announcementText);

    // Hero Content
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';

    const heroTitle = document.createElement('h1');
    heroTitle.className = 'hero-title';
    const test = document.createElement('span')
    test.textContent = 'TailwindCSS';
    test.className="TailwindCSS";
    heroTitle.textContent = 'Modèles de sites Web modernes, conçus avec ';
    heroTitle.append(test);

    const heroDescription = document.createElement('p');
    heroDescription.className = 'hero-description';
    heroDescription.textContent = `
        Des modèles de sites visuellement époustouflants et faciles à personnaliser, créés avec React et Next.js. Le point de départ idéal pour votre prochain projet et la ressource ultime pour apprendre comment les experts créent de vrais sites Web avec Tailwind CSS..
    `;

    const ctaButtons = document.createElement('div');
    ctaButtons.className = 'cta-buttons';

    const primaryButton = document.createElement('a');
    primaryButton.href = '#';
    primaryButton.className = 'button button-primary';
    primaryButton.textContent = 'Commencer ';

    const secondaryButton = document.createElement('a');
    secondaryButton.href = '#';
    secondaryButton.className = 'button button-secondary';
    secondaryButton.textContent = 'en savoir plus →';

    ctaButtons.appendChild(primaryButton);
    ctaButtons.appendChild(secondaryButton);

    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroDescription);
    heroContent.appendChild(ctaButtons);

    // Background Gradient
    const backgroundGradientTop = document.createElement('div');
    backgroundGradientTop.className = 'background-gradient top';

    const backgroundGradientBottom = document.createElement('div');
    backgroundGradientBottom.className = 'background-gradient bottom';

    // Assemble Hero
    hero.appendChild(announcementBanner);
    hero.appendChild(heroContent);
    hero.appendChild(backgroundGradientTop);
    hero.appendChild(backgroundGradientBottom);

    return hero;
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Add Hero Section
    body.insertBefore(createHero(), document.getElementById('main-nav').nextSibling);

});
