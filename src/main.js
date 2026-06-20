import './style.css'

// --- MENU DATA ---
const MENU_ITEMS = [
  { id: 7, name: 'Heritage Fried Fish', price: 32.00, description: 'Crispy marinated catch of the day, steamed basmati, red onion garnish.', image: '/images/special-dish.png' },
  { id: 8, name: 'Royal Mango Lassi', price: 12.00, description: 'Creamy yogurt, fresh mango pulp, touch of cardamom and saffron.', image: '/images/lassi.png' },
  { id: 9, name: 'Emerald Splash', price: 16.00, description: 'Refreshing green botanical mix with a citrus twist and ice splash.', image: '/images/green-cocktail.png' },
  { id: 10, name: 'Spicy King Prawns', price: 38.00, description: 'Jumbo prawns simmered in a rich, spicy tomato and chili gravy.', image: '/images/prawns.png' },
  { id: 11, name: 'Golden Fish Curry', price: 34.00, description: 'Tender fish steaks in a vibrant turmeric and mustard seed broth.', image: '/images/fish-curry.png' },
  { id: 12, name: 'Artisanal Pani Puri', price: 14.00, description: 'Crispy hollow spheres filled with spiced potato and tangy herb water.', image: '/images/pani-puri.png' },
  { id: 13, name: 'Grand Signature Feast', price: 55.00, description: 'A complete culinary journey featuring our finest curries, starters, and sides.', image: '/images/feast.png' }
];

// --- STATE ---
let cart = [];

// --- DOM ELEMENTS ---
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const menuContainer = document.getElementById('menu-container');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const clearCartBtn = document.getElementById('clear-cart');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initSlider();
  initScrollEffects();
  initMobileNav();
  initCart();
});

// --- MENU RENDERING ---
function renderMenu() {
  if (!menuContainer) return;
  menuContainer.innerHTML = MENU_ITEMS.map(item => `
    <div class="menu-card">
      <div class="menu-img" style="background-image: url('${item.image}')"></div>
      <div class="menu-info">
        <div class="menu-header">
          <h3>${item.name}</h3>
          <span class="menu-price">$${item.price.toFixed(2)}</span>
        </div>
        <p>${item.description}</p>
        <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
      </div>
    </div>
  `).join('');

  // Add listeners to new buttons
  document.querySelectorAll('.add-to-cart[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'));
      addToCart(id);
    });
  });
}

// --- CART LOGIC ---
function initCart() {
  cartBtn.addEventListener('click', () => cartDrawer.classList.add('open'));
  closeCart.addEventListener('click', () => cartDrawer.classList.remove('open'));
  clearCartBtn.addEventListener('click', clearCart);
}

function addToCart(id) {
  const product = MENU_ITEMS.find(item => item.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  // Open cart drawer when adding something new (optional, but good for feedback)
  cartDrawer.classList.add('open');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartUI();
    }
  }
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  // Update count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update items list
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--text-dim);">Your cart is empty.</p>';
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="price">$${item.price.toFixed(2)}</span>
          <span class="remove-item" onclick="window.app_removeFromCart(${item.id})">Remove</span>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="window.app_updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="window.app_updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `).join('');
  }

  // Update total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotalPrice.textContent = `$${total.toFixed(2)}`;
}

// Expose these to window for onclick handlers (since we're in a module)
window.app_removeFromCart = removeFromCart;
window.app_updateQuantity = updateQuantity;

// --- SLIDER LOGIC ---
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides[currentSlide].classList.add('active');
  }

  nextBtn?.addEventListener('click', () => showSlide(currentSlide + 1));
  prevBtn?.addEventListener('click', () => showSlide(currentSlide - 1));

  // Auto advance
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

// --- NAVIGATION & SCROLL ---
function initMobileNav() {
  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

function initScrollEffects() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Highlight active link (simple implementation)
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-links a').forEach(li => {
      li.style.color = li.getAttribute('href') === `#${current}` ? 'var(--primary)' : '';
    });
  });
}
