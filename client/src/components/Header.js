export function Header() {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <!-- Brand pushed to left -->
        <a class="navbar-brand me-auto" href="#" data-route="/">
          <i class="fas fa-code me-2"></i>Calvin Muemah
        </a>

        <!-- Toggler button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav items pushed to right -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" data-route="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-route="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-route="/skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-route="/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-route="/experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-route="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
