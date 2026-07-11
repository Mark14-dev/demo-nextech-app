export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');

    const setPreviewImage = (item, file) => {
      if (!file || !file.type.startsWith('image/')) {
        return;
      }

      if (item._previewObjectUrl) {
        URL.revokeObjectURL(item._previewObjectUrl);
      }

      item._previewObjectUrl = URL.createObjectURL(file);
      item.previewImage = item._previewObjectUrl;
    };

    const handleFileSelect = (event, item) => {
      const file = event.target.files?.[0];
      if (file) {
        setPreviewImage(item, file);
      }
      event.target.value = '';
    };

    const handleImageDrop = (event, item) => {
      const file = event.dataTransfer?.files?.[0];
      if (file) {
        setPreviewImage(item, file);
      }
    };

    return {
      itemsStore,
      handleFileSelect,
      handleImageDrop,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">PC Shop</h1>
        <span class="badge text-bg-light border">{{ itemsStore.items.length }} shown</span>
      </div>

      <p class="text-muted">Browse the available PC builds. The first entry includes price and specs. Drop your own image on any card or click the card image to choose a file.</p>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading items...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
        No items found in the dataset.
      </div>

      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in itemsStore.items" :key="item.id">
          <article class="card h-100 shadow-sm border-0">
            <label
              class="image-drop-zone"
              @dragover.prevent
              @drop.prevent="handleImageDrop($event, item)">
              <input
                type="file"
                :id="`imageFile-${item.id}`"
                accept="image/*"
                @change="handleFileSelect($event, item)" />

              <img
                v-if="item.previewImage || item.imageUrl"
                :src="item.previewImage || item.imageUrl"
                :alt="item.name"
                class="w-100 h-100 object-fit-cover" />

              <div class="image-drop-hint">
                <strong>Drop or click to replace image</strong>
                <small>Upload your own picture for this PC build.</small>
              </div>
            </label>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h2 class="h5 card-title mb-0">{{ item.name }}</h2>
                <span class="badge text-bg-primary ms-2">{{ item.category || 'General' }}</span>
              </div>

              <p class="card-text text-muted flex-grow-1 collection-description">
                {{ item.description || 'No description available.' }}
              </p>

              <p class="small mb-3"><strong>Location:</strong> {{ item.location || 'N/A' }}</p>

              <div class="d-grid">
                <router-link :to="'/items/' + item.id" class="btn btn-outline-secondary btn-sm">
                  View details
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
