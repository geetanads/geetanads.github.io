document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'Flight Price Analysis Dashboard', description: 'A dashboard to analyze flight prices.', link: 'https://example.com/flight-dashboard' },
        { title: 'Health Care Analytics', description: 'Analytics for health care trends.', link: 'https://example.com/health-analytics' },
        { title: 'Delicious Pizza Sales Report', description: 'A report analyzing pizza sales data.', link: 'https://example.com/pizza-report' }
    ];

    const projectSection = document.getElementById('projects');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectSection.appendChild(projectDiv);
    });
});
