export default {
  name: 'orders-page-component',
  setup() {
    const authStore = Vue.inject('authStore');
    const orders = Vue.ref([
      {
        id: 'ORD-1001',
        item: 'Neon Core PC Build',
        date: '2026-07-10',
        status: 'Preparing for shipment',
      },
      {
        id: 'ORD-1002',
        item: 'Aurora Keyboard Set',
        date: '2026-06-28',
        status: 'Delivered',
      },
      {
        id: 'ORD-1003',
        item: 'Glowing Mouse Bundle',
        date: '2026-07-02',
        status: 'Shipped',
      },
    ]);

    return {
      authStore,
      orders,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="hero-glow p-4 mb-4">
        <h1 class="mb-3">My Orders</h1>
        <p class="lead mb-0">Welcome back, <strong>{{ authStore.user?.name || 'Customer' }}</strong>. Here are your recent orders.</p>
      </div>

      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="order in orders" :key="order.id">
          <article class="card orders-card border-0 shadow-sm p-3 h-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="badge bg-primary">{{ order.status }}</span>
              <small class="text-muted">{{ order.date }}</small>
            </div>
            <h2 class="h5 mb-2">{{ order.item }}</h2>
            <p class="text-muted mb-3">Order ID: <strong>{{ order.id }}</strong></p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-secondary">Account-only access</span>
              <button class="btn btn-sm btn-outline-light">View</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
