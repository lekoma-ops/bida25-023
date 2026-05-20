// ================================================
// script.js - GoHard Clothing BW
// ================================================

const allProducts = [
    { id: 1, name: "Acid Wash Superstar Tee", price: 399, category: "acid", img: "images/acidwash-T.jpg", badge: "NEW" },
    { id: 2, name: "Reflective Wind Breaker", price: 899, category: "wind", img: "images/windbreaker.jpg", badge: "BEST" },
    { id: 3, name: "Oversized Signature Tee", price: 450, category: "tee", img: "images/oversized-t.jpg" },
    { id: 4, name: "GoHard Bucket Hat", price: 299, category: "cap", img: "images/hat.jpg", badge: "LIMITED" },
    { id: 5, name: "Premium Suede Cap", price: 279, category: "cap", img: "images/cap.jpg" },
    { id: 6, name: "GoHard Hoodie Collection", price: 650, category: "hoodie", img: "images/hoodies.jpg" }
];

// Populate products
function populateProducts(gridId, filteredProducts) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="showProductModal(${product.id})">
            <img src="${product.img}" alt="${product.name}" 
                 onerror="this.src='https://picsum.photos/600/600?random=${product.id}'">
            ${product.badge ? `<div class="badge">${product.badge}</div>` : ''}
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="price">P${product.price}</p>
            </div>
        </div>
    `).join('');
}

// Product Modal
function showProductModal(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <img src="${product.img}" style="width:100%; border-radius:20px;">
            <div>
                <h2>${product.name}</h2>
                <p class="price" style="font-size:2.5rem;">P${product.price}</p>
                <p style="margin:1.5rem 0;">Premium Botswana streetwear since 2010</p>
                <a href="https://wa.me/26774022370?text=I%20want%20this%20${encodeURIComponent(product.name)}" 
                   target="_blank" style="display:block; padding:18px; text-align:center; background:#25D366; color:#fff; border-radius:50px; font-weight:700; text-decoration:none;">
                    💬 ORDER ON WHATSAPP
                </a>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Highlight current page in navbar
function highlightCurrentPage() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
}

// Newsletter
function handleNewsletter(e) {
    e.preventDefault();
    alert("✅ Thank you! You're now part of the movement 🔥");
    e.target.reset();
}

// Initialize everything
window.onload = () => {
    console.log("✅ GoHard Clothing BW website loaded");

    // Populate products on shop and home
    if (document.getElementById('new-arrivals-grid')) {
        populateProducts("new-arrivals-grid", allProducts.slice(0, 4));
    }
    if (document.getElementById('shop-grid')) {
        populateProducts("shop-grid", allProducts);
    }

    highlightCurrentPage();
};