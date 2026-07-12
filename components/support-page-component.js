export default {
  name: 'support-page-component',
  template: /* html */ `
    <section class="container py-4">
      <div class="hero-glow p-4 mb-4">
        <h1 class="mb-3">Support</h1>
        <p class="lead text-muted mb-0">Need help with the storefront? This page guides you through account support and general app tips.</p>
      </div>

      <div class="card surface-card border-0 p-4 mb-4">
        <h2 class="h5 mb-3">Contact</h2>
        <p class="mb-2">Send us a message at <a href="mailto:support@example.com">support@example.com</a> for assistance with your orders or product details.</p>
        <p class="mb-0 text-muted">Our demo app support is built to show how a branded storefront can include helpful customer resources.</p>
      </div>

      <div class="card surface-card border-0 p-4">
        <h2 class="h5 mb-3">Need a quick fix?</h2>
        <ul class="mb-0 text-muted">
          <li>Refresh the page if a product image does not load.</li>
          <li>Use the top navigation to jump between Shop, Reviews and Orders.</li>
          <li>Login anytime to access the protected orders area.</li>
        </ul>
      </div>
    </section>
  `,
};
