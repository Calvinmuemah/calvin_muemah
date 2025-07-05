export function Footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <h5 class="mb-3">Calvin Muemah</h5>
            <p class="text-light">Full-stack developer passionate about creating innovative solutions and building amazing user experiences.</p>
            <div class="social-links">
              <a href="https://github.com/Calvinmuemah"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/public-profile/settings"><i class="fab fa-linkedin"></i></a>
              <a href="https://x.com/kelvinmuem23776?t=v1VDnR-hVkMFaQCinVM8OQ&s=09"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/calvinmuemah?igsh=YzljYTk1ODg3Zg=="><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div class="col-lg-4 mb-4">
            <h5 class="mb-3">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" data-route="/" class="text-light text-decoration-none">Home</a></li>
              <li><a href="#" data-route="/about" class="text-light text-decoration-none">About</a></li>
              <li><a href="#" data-route="/projects" class="text-light text-decoration-none">Projects</a></li>
              <li><a href="#" data-route="/contact" class="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          <div class="col-lg-4 mb-4">
            <h5 class="mb-3">Contact Info</h5>
            <p class="text-light"><i class="fas fa-envelope me-2"></i>kelvinmuemah855@gmail.com</p>
            <p class="text-light"><i class="fas fa-phone me-2"></i>+254 110 975 075</p>
            <p class="text-light"><i class="fas fa-map-marker-alt me-2"></i>Kenya, Kakamega</p>
          </div>
        </div>
        
        <hr class="my-4" style="opacity: 0.3;">
        
        <div class="row">
          <div class="col-12 text-center">
            <p class="text-light mb-0">© ${new Date().getFullYear()} Calvin Muemah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `
}