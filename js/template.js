function createTemplateCard(template) {
    const card = document.createElement('div');
    card.className = 'template-card';

    const content = document.createElement('div');
    content.className = 'template-card-content';

    const title = document.createElement('h2');
    title.textContent = template.title;

    const description = document.createElement('p');
    description.textContent = template.description;

    const button = document.createElement('a');
    button.href = template.url;
    button.className = 'buy-button';
    button.innerHTML = `
        Acheter maintenant ${template.price}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
        </svg>
    `;

    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'template-images';

    template.images.forEach(imageUrl => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Template preview';

        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';

        imageContainer.appendChild(img);
        imageContainer.appendChild(overlay);
        imagesContainer.appendChild(imageContainer);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);
    card.appendChild(content);
    card.appendChild(imagesContainer);

    return card;
}