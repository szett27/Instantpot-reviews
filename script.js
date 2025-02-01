// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Sample review data for all cards (IDs 1 through 12)
  const reviewsData = {
    "1": {
      title: "Instant Pot Duo 7-in-1 Review",
      content: `
        <p>The Instant Pot Duo 7-in-1 is a versatile kitchen workhorse perfect for busy families. It combines pressure cooking, slow cooking, and more.</p>
        <p><strong>Pros:</strong> Versatile, user-friendly.</p>
        <p><strong>Cons:</strong> Learning curve for new users.</p>
      `
    },
    "2": {
      title: "Instant Pot Ultra Review",
      content: `
        <p>The Instant Pot Ultra features advanced settings and precision control, making it a top choice for tech-savvy home cooks.</p>
        <p><strong>Pros:</strong> Advanced features, customizable programs.</p>
        <p><strong>Cons:</strong> Higher price point.</p>
      `
    },
    "3": {
      title: "Instant Pot Duo Nova Review",
      content: `
        <p>The Duo Nova is celebrated for its ease of use and reliability. It's a great all-around option for family meals.</p>
        <p><strong>Pros:</strong> Easy to operate, reliable performance.</p>
        <p><strong>Cons:</strong> Limited advanced features.</p>
      `
    },
    "4": {
      title: "Instant Pot Duo 60 Review",
      content: `
        <p>The Duo 60 offers exceptional value without sacrificing essential features, ideal for families on a budget.</p>
        <p><strong>Pros:</strong> Great value, straightforward operation.</p>
        <p><strong>Cons:</strong> Fewer bells and whistles.</p>
      `
    },
    "5": {
      title: "Instant Pot Mini Review",
      content: `
        <p>The Instant Pot Mini is perfect for smaller households, offering all the convenience of larger models in a compact size.</p>
        <p><strong>Pros:</strong> Compact, efficient.</p>
        <p><strong>Cons:</strong> Limited capacity.</p>
      `
    },
    "6": {
      title: "Instant Pot Ultra Advanced Review",
      content: `
        <p>This detailed review of the Ultra model covers its advanced features and precision control that cater to culinary enthusiasts.</p>
        <p><strong>Pros:</strong> High-tech interface, versatile cooking modes.</p>
        <p><strong>Cons:</strong> May be overkill for simple meals.</p>
      `
    },
    "7": {
      title: "Instant Pot Max Review",
      content: `
        <p>The Instant Pot Max is designed for power users who need rapid cooking times without compromising on quality.</p>
        <p><strong>Pros:</strong> Fast cooking, powerful performance.</p>
        <p><strong>Cons:</strong> Higher energy consumption.</p>
      `
    },
    "8": {
      title: "Instant Pot Lux Review",
      content: `
        <p>The Lux model offers a budget-friendly solution for families who want to experience the benefits of pressure cooking.</p>
        <p><strong>Pros:</strong> Affordable, simple interface.</p>
        <p><strong>Cons:</strong> Basic feature set.</p>
      `
    },
    "9": {
      title: "Instant Pot Smart Review",
      content: `
        <p>The Instant Pot Smart integrates modern technology with cooking convenience, perfect for tech lovers.</p>
        <p><strong>Pros:</strong> Smart controls, app integration.</p>
        <p><strong>Cons:</strong> Requires a learning curve.</p>
      `
    },
    "10": {
      title: "Instant Pot Premium Review",
      content: `
        <p>The Premium model delivers luxury performance with superior build quality and performance features for discerning cooks.</p>
        <p><strong>Pros:</strong> Top-of-the-line features, excellent performance.</p>
        <p><strong>Cons:</strong> Premium price tag.</p>
      `
    },
    "11": {
      title: "Instant Pot Express Review",
      content: `
        <p>The Express model is known for its rapid cooking capabilities, ideal for busy families who need meals fast.</p>
        <p><strong>Pros:</strong> Very fast, efficient.</p>
        <p><strong>Cons:</strong> Limited capacity for larger meals.</p>
      `
    },
    "12": {
      title: "Instant Pot Eco Review",
      content: `
        <p>The Eco model focuses on energy efficiency without compromising performance, making it an eco-friendly option for home cooks.</p>
        <p><strong>Pros:</strong> Energy efficient, sustainable design.</p>
        <p><strong>Cons:</strong> Fewer advanced features.</p>
      `
    }
  };

  // Get DOM elements for the home and review detail sections
  const homeSection = document.getElementById('home');
  const reviewContentSection = document.getElementById('review-content');
  const reviewTitle = document.getElementById('review-title');
  const reviewBody = document.getElementById('review-body');
  const backButton = document.getElementById('back-button');

  // Function to display the review detail
  function showReview(reviewId) {
    const review = reviewsData[reviewId];
    if (review) {
      reviewTitle.textContent = review.title;
      reviewBody.innerHTML = review.content;
      homeSection.classList.add('hidden');
      reviewContentSection.classList.remove('hidden');
      // Update the URL hash for basic routing
      window.history.pushState({ reviewId: reviewId }, '', `#review-${reviewId}`);
    }
  }

  // Function to return to the homepage
  function showHome() {
    reviewContentSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
    window.history.pushState({}, '', '#');
  }

  // Attach event listeners to all "Read More" and "Learn More" links
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

  // On page load, check the URL hash
  if (window.location.hash.startsWith('#review-')) {
    const reviewId = window.location.hash.replace('#review-', '');
    showReview(reviewId);
  }
});
