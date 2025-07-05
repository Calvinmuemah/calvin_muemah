export function Home() {
  return `
    <section class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content" data-aos="fade-right">
              <h1>Hi, I'm <span class="text-warning">Calvin Muemah</span></h1>
              <p class="lead">Full-Stack Developer & UI/UX Designer</p>
              <p class="mb-4">I create digital experiences that combine beautiful design with powerful functionality. Let's build something amazing together.</p>
              <div class="hero-buttons">
                <a href="#" data-route="/projects" class="btn btn-primary me-3">View My Work</a>
                <a href="#" data-route="/contact" class="btn btn-outline-light">Get In Touch</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-center" data-aos="fade-left" data-aos-delay="200">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500" 
                   alt="John Doe" class="img-fluid rounded-circle" style="max-width: 400px; width: 100%;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-5 fw-bold mb-3">What I Do</h2>
            <p class="lead text-muted">I specialize in creating comprehensive digital solutions</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="fas fa-code fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">Building responsive and performant web applications using modern technologies and best practices.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Mobile Development</h5>
                <p class="card-text">Creating mobile applications that provide seamless user experiences across all devices.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="fas fa-paint-brush fa-3x text-primary mb-3"></i>
                <h5 class="card-title">UI/UX Design</h5>
                <p class="card-text">Designing intuitive and visually appealing interfaces that enhance user satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="display-6 fw-bold mb-4">Let's Create Something Amazing</h2>
            <p class="lead mb-4">I'm passionate about turning ideas into reality through code and design. Whether you need a website, mobile app, or digital transformation, I'm here to help.</p>
            <div class="row g-3">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Clean Code</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Fast Delivery</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Responsive Design</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <a href="#" data-route="/contact" class="btn btn-primary btn-lg">Start a Project</a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Workspace" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </section>
  `
}