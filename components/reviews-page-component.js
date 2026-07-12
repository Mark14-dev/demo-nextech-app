export default {
  name: 'reviews-page-component',
  data() {
    return {
      reviews: [
        {
          id: 'review-1',
          name: 'Ava M.',
          initials: 'AM',
          rating: 5,
          text: 'This neon shop is smooth, fast, and the design is amazing. I love the ambient motion and easy navigation.',
        },
        {
          id: 'review-2',
          name: 'Noah K.',
          initials: 'NK',
          rating: 4,
          text: 'Great vibe, fantastic details, and the login/orders flow feels super polished for a demo app.',
        },
        {
          id: 'review-3',
          name: 'Luna R.',
          initials: 'LR',
          rating: 5,
          text: 'The animated background and particle glow make the experience feel futuristic and premium.',
        },
        {
          id: 'review-4',
          name: 'Elliot J.',
          initials: 'EJ',
          rating: 4,
          text: 'Very easy to use. I especially liked the shop layout and how the theme feels cohesive across the whole site.',
        },
      ],
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="hero-glow p-4 mb-4">
        <h1 class="mb-3">Reviews</h1>
        <p class="lead mb-0">Customer feedback for the neon experience — responsive, stylish, and ready for your account.</p>
      </div>

      <div class="row g-3">
        <div class="col-12 col-md-6" v-for="review in reviews" :key="review.id">
          <article class="card review-card p-3 h-100 border-0">
            <div class="d-flex align-items-center mb-3">
              <div class="review-avatar">{{ review.initials }}</div>
              <div>
                <h2 class="h6 mb-1">{{ review.name }}</h2>
                <div class="text-warning small">
                  <span v-for="n in review.rating" :key="n">★</span>
                  <span v-for="n in 5 - review.rating" :key="n + 5" class="text-muted">★</span>
                </div>
              </div>
            </div>
            <p class="mb-0">{{ review.text }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
};
