export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top bg-white border-bottom px-3">
      <span class="navbar-brand mb-0 h1"><i class="bi bi-bootstrap-fill me-2"></i>Web App Starter</span>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn btn-outline-primary btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-shop me-1"></i>Shop
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/support">
          <i class="bi bi-life-preserver me-1"></i>Support
        </router-link>
      </div>
    </nav>
  `,
};
