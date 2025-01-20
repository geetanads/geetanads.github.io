document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'Flight Price Analysis Dashboard', link: '#' },
        { title: 'Health Care Analytics', link: '#' },
        { title: 'Delicious Pizza Sales Report', link: '#' },
    ];
    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<h3>${project.title}</h3><a href="${project.link}">View Project</a>`;
        projectSection.appendChild(projectDiv);
    });
});
