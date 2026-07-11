export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-5">
      <div class="hero-glow p-4 mb-4">
        <h1 class="mb-3">Slick Web App Starter</h1>
        <p class="lead mb-4">A polished demo app with modern page styling, smooth navigation, and a clean data-driven collection experience.</p>
        <router-link to="/items" class="btn btn-primary btn-lg"><i class="bi bi-list-check me-2"></i>Explore the Collection</router-link>
      </div>

      <div class="row g-4">
        <div class="col-12 col-lg-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h2 class="h5">Built for quick customization</h2>
              <p class="card-text">Use this starter to adapt the app to your own theme, dataset, and story. The layout is designed for easy editing and strong visual polish.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h2 class="h5">Ready for your data</h2>
              <p class="card-text">The app loads a dataset from a CSV file and displays items in a smooth card grid with image previews and detail pages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
