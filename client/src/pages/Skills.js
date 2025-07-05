import { skillsData } from '../data/skills.js'

export function Skills() {
  const renderSkillBars = (skills) => {
    return skills.map((skill, index) => `
      <div class="mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="d-flex justify-content-between mb-2">
          <span class="fw-semibold">${skill.name}</span>
          <span class="text-muted">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 0%" data-width="${skill.level}%"></div>
        </div>
      </div>
    `).join('')
  }

  const renderToolCards = (tools) => {
    return tools.map((tool, index) => `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6" data-aos="zoom-in" data-aos-delay="${index * 50}">
        <div class="card text-center h-100 border-0 shadow-sm">
          <div class="card-body p-3">
            <i class="${tool.icon} fa-2x text-primary mb-2"></i>
            <h6 class="card-title small mb-0">${tool.name}</h6>
          </div>
        </div>
      </div>
    `).join('')
  }

  // Animate skill bars after content loads
  setTimeout(() => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
      const width = bar.getAttribute('data-width')
      bar.style.width = width
    })
  }, 500)

  return `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h1 class="display-5 fw-bold mb-3">My Skills</h1>
            <p class="lead text-muted">Technologies and tools I work with</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-6 mb-5">
            <h3 class="mb-4" data-aos="fade-right">Technical Skills</h3>
            ${renderSkillBars(skillsData.technical)}
          </div>
          
          <div class="col-lg-6 mb-5">
            <h3 class="mb-4" data-aos="fade-left">Soft Skills</h3>
            ${renderSkillBars(skillsData.soft)}
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Technologies & Tools</h2>
            <p class="lead text-muted">The arsenal I use to bring ideas to life</p>
          </div>
        </div>
        
        <div class="row g-3 mb-5">
          ${renderToolCards(skillsData.tools)}
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Certifications</h2>
            <p class="lead text-muted">Professional certifications and achievements</p>
          </div>
        </div>
        
        <div class="row g-4">
          ${skillsData.certifications.map((cert, index) => `
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="card h-100">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <i class="${cert.icon} fa-2x text-primary me-3"></i>
                    <div>
                      <h5 class="card-title mb-1">${cert.name}</h5>
                      <small class="text-muted">${cert.issuer}</small>
                    </div>
                  </div>
                  <p class="card-text">${cert.description}</p>
                  <small class="text-muted">Issued: ${cert.date}</small>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}