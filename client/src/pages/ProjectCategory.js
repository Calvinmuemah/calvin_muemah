// import { router } from '../utils/router';

export async function ProjectCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('category');

  let projects = [];
  let categoryMeta = null;

  try {
    const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT; 
    // const res = await fetch(`${API_BASE_URL}/api/getCats`);
    const categoryRes = await fetch(`${API_BASE_URL}/api/projectCats/${categoryId}`);
    if (!categoryRes.ok) throw new Error("Category not found");
    categoryMeta = await categoryRes.json();

    const projectsRes = await fetch(`${API_BASE_URL}/api/getProjectsByCat?category=${categoryId}`);
    if (!projectsRes.ok) throw new Error("Projects fetch failed");
    projects = await projectsRes.json();
  } catch (error) {
    console.error('Error fetching category or projects:', error);

    return `
      <section class="py-5 mt-5">
        <div class="container text-center">
          <h1>Category not found</h1>
          <p>The requested category does not exist or has no projects yet.</p>
          <a href="#" data-route="/projects" class="btn btn-primary">Back to Projects</a>
        </div>
      </section>
    `;
  }

  const renderProjects = () => {
    return projects.map((project, index) => `
      <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card project-card h-100">
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
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text flex-grow-1">${project.description}</p>
            <div class="mb-3">
              ${(project.technologies || []).map(tech => `<span class="badge bg-primary me-1 mb-1">${tech}</span>`).join('')}
            </div>
            ${project.featured ? '<span class="badge bg-warning">Featured</span>' : ''}
          </div>
        </div>
      </div>
    `).join('');
  };

  return `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <nav aria-label="breadcrumb" data-aos="fade-up">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" data-route="/">Home</a></li>
                <li class="breadcrumb-item"><a href="#" data-route="/projects">Projects</a></li>
                <li class="breadcrumb-item active">${categoryMeta.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div class="row mb-5 text-center" data-aos="fade-up">
          <div class="category-icon mb-3" style="font-size: 4rem;">
            <i class="${categoryMeta.icon || 'fas fa-folder'}"></i>
          </div>
          <h1 class="display-5 fw-bold mb-3">${categoryMeta.name} Projects</h1>
          <p class="lead text-muted">${categoryMeta.description || 'Explore projects under this category.'}</p>
          <span class="badge bg-primary fs-6">${projects.length} Projects</span>
        </div>

        <div class="row">
          ${renderProjects()}
        </div>

        ${projects.length === 0 ? `
          <div class="row">
            <div class="col-12 text-center py-5">
              <i class="fas fa-folder-open fa-4x text-muted mb-3"></i>
              <h3>No projects yet</h3>
              <p class="text-muted">Projects in this category are coming soon!</p>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}
