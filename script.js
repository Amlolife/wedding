function displayImages(images) {
  const gridContainer = document.getElementById('image-grid');
  
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url; // Cloudinary image URL
    imgElement.alt = image.public_id;
    
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.appendChild(imgElement);
    
    gridContainer.appendChild(div);
  });
}

fetch('https://res.cloudinary.com/dbpd1u7tn/image/list/wedding.json')
  .then(response => response.json())
  .then(data => {
    const images = data.resources; // List of images
    displayImages(images);
  })
  .catch(error => console.error('Error fetching images from Cloudinary:', error));
