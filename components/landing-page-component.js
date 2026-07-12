export default {
  name: 'landing-page-component',
  template: /* html */ `
    <section class="container py-5">
      <div class="hero-glow p-5 mb-5">
        <div class="row align-items-center gy-4">
          <div class="col-lg-7">
            <span class="accent-badge mb-3">Bonded Builds</span>
            <h1 class="display-5 fw-bold">Premium PC builds with neon style.</h1>
            <p class="lead text-muted my-4">A high-end storefront for custom systems, designed to feel modern, fast, and polished on every screen.</p>
            <div class="d-flex flex-wrap gap-2">
              <router-link to="/items" class="btn btn-primary btn-lg">Browse Builds</router-link>
              <router-link to="/reviews" class="btn btn-outline-light btn-lg">See Reviews</router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="surface-card p-4 h-100">
              <div class="mb-4">
                <h2 class="h5 mb-2">Built for real users</h2>
                <p class="mb-0 text-muted">Smooth navigation, account access, and product previews make this a great starter storefront.</p>
              </div>
              <div class="mb-4">
                <h2 class="h5 mb-2">Custom visuals</h2>
                <p class="mb-0 text-muted">Replace item images instantly by dragging or selecting a file, keeping the store experience dynamic.</p>
              </div>
              <div>
                <h2 class="h5 mb-2">Dark theme polish</h2>
                <p class="mb-0 text-muted">Glass surfaces, neon accents, and modern spacing keep the interface clean and premium.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="card surface-card h-100 border-0">
            <div class="card-body">
              <h2 class="h5">Responsive layout</h2>
              <p class="mb-0 text-muted">All pages scale beautifully from desktop to mobile with a consistent dark design system.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card surface-card h-100 border-0">
            <div class="card-body">
              <h2 class="h5">Smooth navigation</h2>
              <p class="mb-0 text-muted">Top tab navigation and route-driven pages keep the experience intuitive and polished.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card surface-card h-100 border-0">
            <div class="card-body">
              <h2 class="h5">Demo account flow</h2>
              <p class="mb-0 text-muted">Login to view mocked orders and demonstrate a complete buyer journey in the UI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
