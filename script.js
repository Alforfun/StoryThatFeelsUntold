// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// Lightbox
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'; // disable scroll
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.classList.add('visible');
  });
});

const closeLightbox = () => {
  lightbox.style.display = 'none';
  lightboxImg.classList.remove('visible');
  document.body.style.overflow = ''; // enable scroll again
};

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    closeLightbox();
  }
});
