export function About() {
  return `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="About Me" class="img-fluid rounded">
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <h1 class="display-5 fw-bold mb-4">About Me</h1>
            <p class="lead mb-4">I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference.</p>
            <p class="mb-4">My journey in technology started with a curiosity about how things work. Today, I specialize in building scalable web applications, mobile apps, and creating user experiences that delight and engage.</p>
            <p class="mb-4">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
            
            <div class="row g-3 mb-4">
              <div class="col-6">
                <strong>Name:</strong><br>Calvin Muemah
              </div>
              <div class="col-6">
                <strong>Location:</strong><br>Kenya, Kakamega
              </div>
              <div class="col-6">
                <strong>Email:</strong><br>kelvinmuemah855@email.com
              </div>
              <div class="col-6">
                <strong>Phone:</strong><br>+254 110 975 075
              </div>
            </div>
            
            <a href="#" data-route="/contact" class="btn btn-primary me-3">Hire Me</a>
            <a href="/resume.pdf" class="btn btn-outline-primary" target="_blank">Download CV</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">My Journey</h2>
            <p class="lead text-muted">The path that led me to where I am today</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="timeline">
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Started Programming Journey</h5>
                    <h6 class="card-subtitle mb-2 text-muted">2018</h6>
                    <p class="card-text">Began learning programming with Python and fell in love with problem-solving through code.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">First Professional Role</h5>
                    <h6 class="card-subtitle mb-2 text-muted">2019</h6>
                    <p class="card-text">Joined a startup as a junior developer, working on web applications using React and Node.js.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Freelance Success</h5>
                    <h6 class="card-subtitle mb-2 text-muted">2021</h6>
                    <p class="card-text">Started freelancing and successfully delivered 50+ projects for clients worldwide.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="400">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Senior Developer</h5>
                    <h6 class="card-subtitle mb-2 text-muted">2023</h6>
                    <p class="card-text">Currently leading development teams and architecting solutions for enterprise clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Fun Facts</h2>
            <p class="lead text-muted">Some interesting things about me</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-coffee fa-3x text-primary mb-3"></i>
                <h3 class="fw-bold">500+</h3>
                <p>Cups of Coffee</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-project-diagram fa-3x text-primary mb-3"></i>
                <h3 class="fw-bold">80+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-users fa-3x text-primary mb-3"></i>
                <h3 class="fw-bold">50+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-code-branch fa-3x text-primary mb-3"></i>
                <h3 class="fw-bold">1000+</h3>
                <p>GitHub Commits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}