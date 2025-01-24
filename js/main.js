document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('templates-container');
    
    templates.forEach(template => {
        const card = createTemplateCard(template);
        container.appendChild(card);
    });
});