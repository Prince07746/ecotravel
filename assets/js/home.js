document.addEventListener('DOMContentLoaded', function() {




    let currentIndex = 0;
    const packages = document.querySelectorAll('.eco-package-item');
    const totalPackages = packages.length;
    const itemsPerSlide = 3; // Number of items to show per slide
    const totalSlides = Math.ceil(totalPackages / itemsPerSlide); // Total number of slide groups
  
    // Generate the markers
    const markerContainer = document.querySelector('.slider-markers');
    for (let i = 0; i < totalSlides; i++) {
      const marker = document.createElement('div');
      marker.classList.add('slider-marker');
      markerContainer.appendChild(marker);
    }
    const markers = document.querySelectorAll('.slider-marker');
  
    function showPackage(index) {
      // Hide all packages
      packages.forEach((pkg) => {
        pkg.classList.remove('active');
        pkg.style.display = 'none';
      });
  
      // Show the active group of 3 packages
      for (let i = 0; i < itemsPerSlide; i++) {
        const packageIndex = (index + i) % totalPackages;
        packages[packageIndex].classList.add('active');
        packages[packageIndex].style.display = 'block';
      }
  
      // Update the active marker
      markers.forEach(marker => marker.classList.remove('active'));
      markers[Math.floor(index / itemsPerSlide)].classList.add('active');
    }
  
    // Initial display of first 3 packages and first marker
    showPackage(currentIndex);
  
    // Change packages and update markers every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + itemsPerSlide) % totalPackages;
      showPackage(currentIndex);
    }, 5000); // Adjust the interval time as needed




    // JavaScript for Interactive Destination Info
document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', function(e) {
      e.preventDefault();
      const destinationId = this.getAttribute('href').substring(1);
      document.querySelectorAll('.destination-card').forEach(card => {
          card.style.display = 'none';  // Hide all destination cards
      });
      document.getElementById(destinationId).style.display = 'block';  // Show selected card
  });
});




  });
  