export default {
  name: 'login-page-component',
  setup() {
    const authStore = Vue.inject('authStore');
    const router = VueRouter.useRouter();
    const route = VueRouter.useRoute();
    const email = Vue.ref('');
    const password = Vue.ref('');
    const errorMessage = Vue.ref('');

    const handleSubmit = () => {
      if (!email.value || !password.value) {
        errorMessage.value = 'Please enter email and password.';
        return;
      }

      const success = authStore.login(email.value, password.value);
      if (success) {
        const returnTo = route.query.redirect || '/orders';
        router.push(returnTo);
      } else {
        errorMessage.value = authStore.error || 'Login failed. Please try again.';
      }
    };

    return {
      email,
      password,
      errorMessage,
      handleSubmit,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="hero-glow p-4 mb-4">
        <h1 class="mb-3">Login</h1>
        <p class="lead mb-0">Sign in to unlock your account and view your orders.</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card auth-card border-0 shadow-sm p-4">
            <div class="mb-4">
              <label class="form-label text-white">Email address</label>
              <input v-model="email" type="email" class="form-control auth-input" placeholder="you@example.com" />
            </div>
            <div class="mb-4">
              <label class="form-label text-white">Password</label>
              <input v-model="password" type="password" class="form-control auth-input" placeholder="Password" />
            </div>
            <div v-if="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>
            <div class="d-grid gap-2 login-actions">
              <button @click.prevent="handleSubmit" class="btn btn-primary btn-lg">Login</button>
              <button @click.prevent="email=''; password=''; errorMessage='';" class="btn btn-outline-light btn-lg">Clear</button>
            </div>
            <p class="text-muted small mt-3 mb-0">Demo login accepts any email and password. Use it to explore the Orders area.</p>
          </div>
        </div>
      </div>
    </section>
  `,
};
