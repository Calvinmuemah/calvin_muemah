import { experienceData } from '../data/experience.js'

export function Experience() {
  const renderExperienceDevelopment = () => {
    return experienceData.professional.map((exp, index) => `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title mb-0">${exp.position}</h5>
              <span class="badge bg-primary">${exp.period}</span>
            </div>
            <h6 class="card-subtitle mb-3 text-primary">${exp.company}</h6>
            <p class="card-text mb-3">${exp.description}</p>
            <div class="mb-2">
              <strong>Key Achievements:</strong>
              <ul class="mt-2">
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
              </ul>
            </div>
            <div>
              <strong>Technologies:</strong><br>
              ${exp.technologies.map(tech => `<span class="badge bg-light text-dark me-1 mt-1">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('')
  }

  const renderEducation = () => {
    return experienceData.education.map((edu, index) => `
      <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <i class="${edu.icon} fa-2x text-primary me-3"></i>
              <div>
                <h5 class="card-title mb-1">${edu.degree}</h5>
                <h6 class="card-subtitle text-muted">${edu.institution}</h6>
              </div>
            </div>
            <p class="card-text">${edu.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">${edu.period}</small>
              ${edu.gpa ? `<span class="badge bg-success">GPA: ${edu.gpa}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('')
  }

  return `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h1 class="display-5 fw-bold mb-3">Experience</h1>
            <p class="lead text-muted">My professional journey and educational background</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold text-center mb-5">Professional Experience</h2>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="timeline">
              ${renderExperienceDevelopment()}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Education</h2>
            <p class="lead text-muted">Academic foundation and continuous learning</p>
          </div>
        </div>
        
        <div class="row">
          ${renderEducation()}
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Key Achievements</h2>
            <p class="lead text-muted">Milestones and recognitions throughout my career</p>
          </div>
        </div>
        
        <div class="row g-4">
          ${experienceData.achievements.map((achievement, index) => `
            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="${index * 100}">
              <div class="card text-center h-100">
                <div class="card-body">
                  <i class="${achievement.icon} fa-3x text-primary mb-3"></i>
                  <h5 class="card-title">${achievement.title}</h5>
                  <p class="card-text">${achievement.description}</p>
                  <small class="text-muted">${achievement.year}</small>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8" data-aos="fade-right">
            <h2 class="display-6 fw-bold mb-3">Ready to Work Together?</h2>
            <p class="lead mb-0">Let's discuss how my experience can help bring your project to life.</p>
          </div>
          <div class="col-lg-4 text-lg-end" data-aos="fade-left" data-aos-delay="200">
            <a href="#" data-route="/contact" class="btn btn-light btn-lg">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  `
}