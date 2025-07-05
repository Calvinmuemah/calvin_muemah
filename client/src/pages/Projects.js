// Projects.js (Main /projects page)
export async function Projects() {
  let categories = [];
  let featuredProjects = [];
  let errorMessage = '';

  const renderMessage = (title, message) => `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="text-center">
          <h1>${title}</h1>
          <p>${message}</p>
        </div>
      </div>
    </section>
  `;

  try {
    const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT; 
       const res = await fetch(`${API_BASE_URL}/api/getCats`);
    const categoriesResponse = await fetch(`${API_BASE_URL}/api/getCategories`);
    if (!categoriesResponse.ok) throw new Error('Failed to fetch categories');
    categories = await categoriesResponse.json();

    const featuredProjectsResponse = await fetch(`${API_BASE_URL}/api/getFeaturedProjects`);
    if (!featuredProjectsResponse.ok) throw new Error('Failed to fetch featured projects');
    featuredProjects = await featuredProjectsResponse.json();
  } catch (error) {
    console.error("Error fetching data for Projects page:", error);
    return renderMessage('Loading Error', 'Failed to load project data. Please try again later.');
  }

  const renderCategoryCards = () => {
    if (!categories.length) {
      return `
        <div class="col-12 text-center py-4">
          <p class="text-muted">No categories to display yet.</p>
        </div>
      `;
    }

    return categories.map((category, index) => `
      <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card h-100 text-center category-card shadow-sm border-0">
          <div class="card-body d-flex flex-column align-items-center justify-content-center p-4">
            <div class="category-icon mb-3" style="font-size: 3rem; color: var(--bs-primary);">
              <i class="${category.icon || 'fas fa-folder'}"></i>
            </div>
            <h5 class="card-title mb-2">${category.name}</h5>
            <p class="card-text text-muted flex-grow-1">${category.description || 'No description.'}</p>
            <a href="#" data-route="/projects?category=${category._id}" class="btn btn-outline-primary mt-3">View Projects</a>
          </div>
        </div>
      </div>
    `).join('');
  };

  const renderFeaturedProjects = () => {
    if (!featuredProjects.length) {
      return `
        <div class="col-12 text-center py-4">
          <p class="text-muted">No featured projects to display yet.</p>
        </div>
      `;
    }

    return featuredProjects.map((project, index) => `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card project-card">
          <img src="${project.image}" class="card-img-top" alt="${project.name}" style="height: 200px; object-fit: cover;">
          <div class="project-overlay">
            <div class="text-center">
              <h5 class="mb-3">${project.name}</h5>
              <div class="mb-3">
                ${(project.technologies || []).map(tech => `<span class="badge bg-light text-dark me-1">${tech}</span>`).join('')}
              </div>
              <div>
                ${project.demo ? `<a href="${project.demo}" class="btn btn-light btn-sm me-2" target="_blank">Live Demo</a>` : ''}
                ${project.github ? `<a href="${project.github}" class="btn btn-outline-light btn-sm" target="_blank">GitHub</a>` : ''}
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.description}</p>
            <div class="mb-2">
              ${(project.technologies || []).slice(0, 3).map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  };

  return `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h1 class="display-5 fw-bold mb-3">My Projects</h1>
            <p class="lead text-muted">Explore my work across different categories</p>
          </div>
        </div>
        <div class="row">
          ${renderCategoryCards()}
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Featured Projects</h2>
            <p class="lead text-muted">Some of my best work</p>
          </div>
        </div>
        <div class="row g-4">
          ${renderFeaturedProjects()}
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="display-6 fw-bold mb-4">Want to see more?</h2>
            <p class="lead mb-4">I have worked on numerous projects across different industries and technologies. Each project represents a unique challenge and learning opportunity.</p>
            <p class="mb-4">From small business websites to large-scale enterprise applications, I bring the same level of dedication and attention to detail to every project.</p>
            <a href="#" data-route="/contact" class="btn btn-primary btn-lg">Start Your Project</a>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                 alt="More Projects" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </section>
  `;
}
