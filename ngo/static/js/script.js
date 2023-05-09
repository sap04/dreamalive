// Home page specific JS
const heroSection = document.querySelector('#hero-section');
const heroTitle = heroSection.querySelector('h1');

// Change hero section title on mouseover
heroTitle.addEventListener('mouseover', () => {
  heroTitle.textContent = 'Join us to help change lives';
});

// Change hero section title back on mouseout
heroTitle.addEventListener('mouseout', () => {
  heroTitle.textContent = 'Welcome to Dream Alive Centre Foundation';
});

// Donate page specific JS
const donateForm = document.querySelector('form');
const donationAmountInput = donateForm.querySelector('#id_donation_amount');

// Set minimum donation amount to $10
donationAmountInput.setAttribute('min', 10);

// Programs page specific JS
const activityImages = document.querySelectorAll('.activity img');

// Add border on hover for activity images
activityImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.border = '2px solid #4CAF50';
  });

  image.addEventListener('mouseout', () => {
    image.style.border = 'none';
  });
});

// Add activity page specific JS
const activityImageInput = document.querySelector('#id_image');

// Preview activity image on input change
activityImageInput.addEventListener('change', (event) => {
  const previewImage = document.querySelector('#activity-image-preview');
  // Set the source of the preview image to the selected file
previewImage.setAttribute('src', URL.createObjectURL(event.target.files[0]));
});