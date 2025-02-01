// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Sample review data
  const reviewsData = {
    "1": {
      title: "Instant Pot Duo 7-in-1 Review",
      content: `
        <p>The Instant Pot Duo 7-in-1 is one of the most popular models for home cooks. It combines 7 appliances in one, 
offering pressure cooking, slow cooking, rice cooking, steaming, sautéing, yogurt making, and warming.</p>
        <p><strong>Pros:</strong> Versatile, easy to use, energy efficient.</p>
        <p><strong>Cons:</strong> Steep learning curve for beginners.</p>
      `
    },
    "2": {
      title: "Instant Pot Ultra Review",
      content: `
        <p>The Instant Pot Ultra offers advanced features with precise control over cooking settings, making it ideal for 
culinary enthusiasts. It comes with an LCD display and customizable cooking programs.</p>
        <p><strong>Pros:</strong> Advanced features, precise control, customizable programs.</p>
        <p><strong>Cons:</strong> Higher price point compared to other models.</p>
      `
    }
  };

  // Get DOM elements
  const homeSection = document.getElementById('home');
  const reviewContentSection = document.getElementById('review-content');
  const reviewTitle = document.getElementById('review-title');
  const reviewBody = document.getElementById('review-body');
  const backButton = document.getElementById('back-button');

  // Show review detail
  function showReview(reviewId) {
    const review = reviewsData[reviewId];
    if (review) {
      reviewTitle.textContent = review.title;
      reviewBody.innerHTML = review.content;
      homeSection.classList.add('hidden');
      reviewContentSection.classList.remove('hidden');
      // Update the URL hash for a basic routing effect
      window.history.pushState({ reviewId: reviewId }, '', `#review-${reviewId}`);
    }
  }

  // Return to the home listing
  function showHome() {
    reviewContentSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
    window.history.pushState({}, '', '#');
  }

  // Attach event listeners to "Read More" links
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const reviewId = this.getAttribute('data-id');
      showReview(reviewId);
    });
  });

  // Back button event listener
  backButton.addEventListener('click', function() {
    showHome();
  });

  // Handle browser navigation (Back/Forward)
  window.addEventListener('popstate', function(e) {
    if (window.location.hash.startsWith('#review-')) {
      const reviewId = window.location.hash.replace('#review-', '');
      showReview(reviewId);
    } else {
      showHome();
    }
  });

  // On page load, check URL hash
  if (window.location.hash.startsWith('#review-')) {
    const reviewId = window.location.hash.replace('#review-', '');
    showReview(reviewId);
  }
});

