export default {
  name: 'navbar-component',
  setup() {
    const authStore = Vue.inject('authStore');
    const router = VueRouter.useRouter();

    const handleLogout = () => {
      authStore.logout();
      router.push('/');
    };

    return {
      authStore,
      handleLogout,
    };
  },
  template: /* html */ `
    <nav class="navbar sticky-top px-3">
      <div class="d-flex align-items-center justify-content-between w-100">
        <span class="navbar-brand mb-0 h1"><i class="bi bi-bootstrap-fill me-2"></i>Bonded Builds</span>

        <ul class="nav nav-pills gap-2 main-tabs">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/items">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/support">Support</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reviews">Reviews</router-link>
          </li>
        </ul>

        <div class="d-flex gap-2 align-items-center login-actions">
          <router-link v-if="authStore.isAuthenticated" class="btn btn-outline-light btn-sm" to="/orders">
            Orders
          </router-link>
          <router-link v-if="!authStore.isAuthenticated" class="btn btn-primary btn-sm" to="/login">
            Login
          </router-link>
          <button v-if="authStore.isAuthenticated" @click="handleLogout" class="btn btn-outline-light btn-sm">
            Logout
          </button>
        </div>
      </div>
    </nav>
  `,
};
