export default {
  name: 'about-page-component',
  template: /* html */ `
    <section class="container py-4">
      <div class="hero-glow p-4 mb-4">
        <h1 class="mb-3">About Bonded Builds</h1>
        <p class="lead text-muted mb-0">A modern storefront experience built to showcase products with clean styling, strong hierarchy, and polished navigation.</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-8">
          <div class="card surface-card border-0 p-4">
            <h2 class="h5 mb-3">Why this app works</h2>
            <p class="mb-3">The interface is designed to feel premium and accessible. It uses a dark theme, neon accents, and glass surfaces to keep the focus on product content.</p>
            <p class="mb-0">With Vue Router powering each page, this demo app is simple to extend while maintaining crisp page transitions and consistent navigation.</p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card surface-card border-0 p-4">
            <h2 class="h5 mb-3">What’s included</h2>
            <ul class="mb-0 text-muted">
              <li>Top tab navigation</li>
              <li>Shop listing and item details</li>
              <li>Login and orders demo flow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
};
