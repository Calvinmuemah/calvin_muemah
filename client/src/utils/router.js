export class Router {
  constructor() {
    this.routes = {
      '/': () => import('../pages/Home.js').then(m => m.Home()),
      '/about': () => import('../pages/About.js').then(m => m.About()),
      '/skills': () => import('../pages/Skills.js').then(m => m.Skills()),
      '/projects': () => import('../pages/Projects.js').then(m => m.Projects()),
      '/projects/category': () => import('../pages/ProjectCategory.js').then(m => m.ProjectCategory()),
      '/experience': () => import('../pages/Experience.js').then(m => m.Experience()),
      '/contact': () => import('../pages/Contact.js').then(m => m.Contact())
    };

    this.currentRoute = window.location.pathname;
    this.params = new URLSearchParams(window.location.search);
  }

  init() {
    this.handleRoute();

    window.addEventListener('popstate', () => this.handleRoute());

    this.addRouteLinkListeners(); // Attach on first load
  }

  async handleRoute() {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    this.currentRoute = path;
    this.params = searchParams;

    let routeHandler;

    if (path === '/projects' && searchParams.get('category')) {
      routeHandler = this.routes['/projects/category'];
    } else {
      routeHandler = this.routes[path] || this.routes['/'];
    }

    try {
      const content = await routeHandler();
      const mainContent = document.getElementById('main-content');
      mainContent.innerHTML = content;
      mainContent.className = 'page-transition';

      this.addRouteLinkListeners(); // 🔁 Re-attach for new content
      this.updateActiveNavLink(path);

      setTimeout(() => {
        if (window.AOS) window.AOS.refresh();
      }, 100);

      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Route handling error:', error);
      document.getElementById('main-content').innerHTML = '<div class="container"><h1>Page not found</h1></div>';
    }
  }

  navigateTo(path) {
    if (path !== this.currentRoute) {
      window.history.pushState({}, '', path);
      this.handleRoute();
    }
  }

  updateActiveNavLink(currentPath) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    const exactLink = document.querySelector(`[data-route="${currentPath}"]`);
    if (exactLink) {
      exactLink.classList.add('active');
    } else if (currentPath.startsWith('/projects')) {
      document.querySelector('[data-route="/projects"]')?.classList.add('active');
    } else if (currentPath === '/') {
      document.querySelector('[data-route="/"]')?.classList.add('active');
    }
  }

  getQueryParam(key) {
    return this.params.get(key);
  }

  addRouteLinkListeners() {
    document.querySelectorAll('[data-route]').forEach(link => {
      const clone = link.cloneNode(true);
      link.replaceWith(clone); // Remove old listeners
    });

    document.querySelectorAll('[data-route]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        this.navigateTo(route);
      });
    });
  }
}

// ✅ Export a shared router instance
export const router = new Router();
