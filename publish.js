/* publish.js - Handles loading property data and displaying property detail page */

// Fetch properties from local JSON file (relative to site root)
async function fetchProperties() {
  try {
    const resp = await fetch('properties.json');
    if (!resp.ok) throw new Error('Failed to load properties');
    return await resp.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

// Open property detail page (used from listing cards)
function openProperty(id) {
  window.location.href = `property.html?pid=${id}`;
}

// Load property details on property.html based on URL param
async function loadPropertyDetail() {
  const params = new URLSearchParams(window.location.search);
  const pid = params.get('pid');
  if (!pid) {
    document.body.innerHTML = '<p>Property ID missing.</p>';
    return;
  }
  const properties = await fetchProperties();
  const prop = properties.find(p => p.id === pid);
  if (!prop) {
    document.body.innerHTML = '<p>Property not found.</p>';
    return;
  }

  // Populate DOM
  document.title = `${prop.name} – Jaipur PrimeEstate`;
  document.querySelector('.property-title').textContent = prop.name;
  document.querySelector('.property-price').textContent = prop.price;
  document.querySelector('.property-location').textContent = prop.address;
  document.getElementById('propDescription').textContent = prop.description;

  // Gallery (main image + up to 15 thumbnails)
  const mainImg = document.getElementById('mainImage');
  mainImg.src = prop.imageUrl || '';
  const thumbContainer = document.getElementById('thumbnails');
  thumbContainer.innerHTML = '';
  (prop.images || []).slice(0, 15).forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'thumbnail';
    img.onclick = () => { mainImg.src = src; };
    thumbContainer.appendChild(img);
  });

  // Amenities
  const amenitiesSection = document.getElementById('amenitiesSection');
  amenitiesSection.innerHTML = '';
  (prop.amenities || []).forEach(a => {
    const div = document.createElement('div');
    div.className = 'amenity-item';
    div.textContent = a;
    amenitiesSection.appendChild(div);
  });

  // Details list (key/value)
  const detailsList = document.getElementById('detailsList');
  detailsList.innerHTML = '';
  const detailMap = {
    'Price': prop.price,
    'Address': prop.address,
    'Type': prop.type,
    'Size': prop.plotSize || 'N/A',
    'Bedrooms': prop.bedrooms || 'N/A',
    'Bathrooms': prop.bathrooms || 'N/A'
  };
  for (const [k, v] of Object.entries(detailMap)) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${k}</strong><span>${v}</span>`;
    detailsList.appendChild(li);
  }

  // Google Maps embed (free iframe, no API key)
  const mapContainer = document.querySelector('.map-container');
  if (mapContainer) {
    const src = `https://www.google.com/maps?q=${prop.lat},${prop.lng}&hl=en&z=15&output=embed`;
    mapContainer.innerHTML = `<iframe width="100%" height="400" frameborder="0" style="border:0" src="${src}" allowfullscreen></iframe>`;
  }
}

// Initialise when property.html loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPropertyDetail);
} else {
  loadPropertyDetail();
}
