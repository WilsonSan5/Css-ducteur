// Tableau des liens du footer
const footerLinks = [
    { text: 'Home', url: '/' },
    { text: 'Templates', url: '/templates.html' },
    { text: 'Pricing', url: '#' },
    { text: 'Blog', url: '#' },
    { text: 'Support', url: '#' },
    { text: 'About Us', url: '/aboutus.html' }
  ];
  
  function createFooter() {
    // Création de l'élément <footer>
    const footer = document.createElement('footer');
    footer.className = 'footer';
  
    // Conteneur principal du footer
    const container = document.createElement('div');
    container.className = 'footer-container';
  
    // Grille du footer pour répartir les sections
    const grid = document.createElement('div');
    grid.className = 'footer-grid';
  
    // Section Company
    const companySection = document.createElement('div');
    companySection.className = 'footer-section';
    companySection.innerHTML = `
        <h3>Company</h3>
        <p>Notre entreprise propose des templates CSS modernes et minimalistes pour tous vos projets web.</p>
    `;
  
    // Section Products : on y intègre la liste de liens depuis le tableau footerLinks
    const productsSection = document.createElement('div');
    productsSection.className = 'footer-section';
    
    // Titre de la section
    const productsTitle = document.createElement('h3');
    productsTitle.textContent = "Products";
    productsSection.appendChild(productsTitle);
    
    // Création d'une liste pour les liens
    const productsList = document.createElement('ul');
    productsList.className = 'footer-links';
    
    footerLinks.forEach(linkObj => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = linkObj.url;
      a.textContent = linkObj.text;
      li.appendChild(a);
      productsList.appendChild(li);
    });
    
    productsSection.appendChild(productsList);
  
    // Section Resources (exemple avec du contenu statique)
    const resourcesSection = document.createElement('div');
    resourcesSection.className = 'footer-section';
    resourcesSection.innerHTML = `
        <h3>Resources</h3>
        <ul class="footer-links">
            <li><a href="#blog">Blog</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    `;
  
    // Section Legal (contenu statique)
    const legalSection = document.createElement('div');
    legalSection.className = 'footer-section';
    legalSection.innerHTML = `
        <h3>Legal</h3>
        <ul class="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookies Policy</a></li>
        </ul>
    `;
  
    // Ajout des sections dans la grille
    grid.appendChild(companySection);
    grid.appendChild(productsSection);
    grid.appendChild(resourcesSection);
    grid.appendChild(legalSection);
  
    // Création du bas de page
    const bottom = document.createElement('div');
    bottom.className = 'footer-bottom';
  
    const bottomLeft = document.createElement('div');
    bottomLeft.className = 'footer-bottom-left';
    bottomLeft.textContent = '© 2024 Templates. All rights reserved.';
  
    const social = document.createElement('div');
    social.className = 'footer-social';
    // Vous pouvez ici ajouter des icônes de réseaux sociaux si nécessaire
  
    bottom.appendChild(bottomLeft);
    bottom.appendChild(social);
  
    // Ajout de la grille et du footer-bottom dans le conteneur principal
    container.appendChild(grid);
    container.appendChild(bottom);
    footer.appendChild(container);
  
    return footer;
  }
  
  // Dès que le DOM est chargé, on insère le footer dans l'élément avec l'id "main-footer"
  document.addEventListener('DOMContentLoaded', () => {
    const mainFooter = document.getElementById('main-footer');
    if (mainFooter) {
      mainFooter.appendChild(createFooter());
    }
  });  