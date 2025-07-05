export function Contact() {
  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    
    // Show success message (in real app, you'd send to server)
    const alertDiv = document.createElement('div')
    alertDiv.className = 'alert alert-success alert-dismissible fade show'
    alertDiv.innerHTML = `
      <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `
    
    event.target.insertBefore(alertDiv, event.target.firstChild)
    event.target.reset()
  }

  // Add event listener after content loads
  setTimeout(() => {
    const form = document.getElementById('contact-form')
    if (form) {
      form.addEventListener('submit', handleFormSubmit)
    }
  }, 100)

  return `
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h1 class="display-5 fw-bold mb-3">Get In Touch</h1>
            <p class="lead text-muted">I'd love to hear about your project and how we can work together</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="row">
              <div class="col-lg-8 mb-5" data-aos="fade-right">
                <div class="card">
                  <div class="card-body p-4">
                    <h3 class="mb-4">Send me a message</h3>
                    <form id="contact-form">
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label for="name" class="form-label">Name *</label>
                          <input type="text" class="form-control" id="name" name="name" required>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="email" class="form-label">Email *</label>
                          <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="subject" class="form-label">Subject *</label>
                        <input type="text" class="form-control" id="subject" name="subject" required>
                      </div>
                      <div class="mb-3">
                        <label for="budget" class="form-label">Project Budget</label>
                        <select class="form-control" id="budget" name="budget">
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="over-50k">Over $50,000</option>
                        </select>
                      </div>
                      <div class="mb-4">
                        <label for="message" class="form-label">Message *</label>
                        <textarea class="form-control" id="message" name="message" rows="6" required placeholder="Tell me about your project..."></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg w-100">
                        <i class="fas fa-paper-plane me-2"></i>Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 mb-5" data-aos="fade-left" data-aos-delay="200">
                <div class="card h-100">
                  <div class="card-body p-4">
                    <h3 class="mb-4">Contact Information</h3>
                    
                    <div class="contact-item mb-4">
                      <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                          <i class="fas fa-envelope text-primary"></i>
                        </div>
                        <div>
                          <strong>Email</strong><br>
                          <a href="mailto:kelvinmuemah855@email.com" class="text-decoration-none">kelvinmuemah855@email.com</a>
                        </div>
                      </div>
                    </div>
                    
                    <div class="contact-item mb-4">
                      <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                          <i class="fas fa-phone text-primary"></i>
                        </div>
                        <div>
                          <strong>Phone</strong><br>
                          <a href="tel:+254 110 975 075" class="text-decoration-none">+254 110 975 075</a>
                        </div>
                      </div>
                    </div>
                    
                    <div class="contact-item mb-4">
                      <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                          <i class="fas fa-map-marker-alt text-primary"></i>
                        </div>
                        <div>
                          <strong>Location</strong><br>
                          Kenya, Kakamega
                        </div>
                      </div>
                    </div>
                    
                    <div class="contact-item mb-4">
                      <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                          <i class="fas fa-clock text-primary"></i>
                        </div>
                        <div>
                          <strong>Response Time</strong><br>
                          Within 24 hours
                        </div>
                      </div>
                    </div>
                    
                    <hr>
                    
                    <div class="social-links text-center">
                      <h5 class="mb-3">Follow Me</h5>
                      <a href="#" class="btn btn-outline-primary btn-sm me-2 mb-2">
                        <i class="fab fa-linkedin"></i> LinkedIn
                      </a>
                      <a href="https://github.com/Calvinmuemah" class="btn btn-outline-primary btn-sm me-2 mb-2">
                        <i class="fab fa-github"></i> GitHub
                      </a>
                      <a href="https://x.com/kelvinmuem23776?t=v1VDnR-hVkMFaQCinVM8OQ&s=09" class="btn btn-outline-primary btn-sm me-2 mb-2">
                        <i class="fab fa-twitter"></i> Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5" data-aos="fade-up">
            <h2 class="display-6 fw-bold mb-3">Frequently Asked Questions</h2>
            <p class="lead text-muted">Common questions about working with me</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="accordion" id="faqAccordion" data-aos="fade-up" data-aos-delay="200">
              <div class="accordion-item">
                <h2 class="accordion-header" id="faq1">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                    What is your typical project timeline?
                  </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months. I always provide detailed timelines during our initial consultation.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header" id="faq2">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                    Do you work with international clients?
                  </button>
                </h2>
                <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Yes! I work with clients worldwide and am comfortable with different time zones. I use various communication tools to ensure smooth collaboration regardless of location.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header" id="faq3">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                    What technologies do you specialize in?
                  </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    I specialize in modern web technologies including React, Node.js, Python, and various databases. I also work with mobile development using React Native and have experience with cloud platforms like AWS and Google Cloud.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header" id="faq4">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                    Do you provide ongoing support?
                  </button>
                </h2>
                <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Absolutely! I offer various support packages including bug fixes, updates, hosting management, and feature enhancements. We can discuss the best support plan for your needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}