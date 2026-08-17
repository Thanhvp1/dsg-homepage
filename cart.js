/**
 * ĐẤT SÀI GÒN CAFÉ — GLOBAL CART & STORE ENGINE v2.0
 * Quản lý giỏ hàng, dữ liệu sản phẩm, tìm kiếm, lưu trữ đơn hàng và toast notification
 */

const DSG_CART_KEY = 'dsg_cart_v1';
const DSG_ORDER_KEY = 'dsg_last_order';
const DSG_ORDERS_HISTORY_KEY = 'dsg_orders_history_v1';

const DEFAULT_PRODUCTS = {
  'r1': {
    id: 'r1',
    sku: 'DSG-R1-100G',
    name: 'R1 — Robusta Rang Mộc',
    category: 'Cà phê rang mộc',
    catSlug: 'rang-moc',
    price: 119000,
    originalPrice: 135000,
    badge: 'Bán chạy',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/product_r1.jpeg',
    gallery: [
      'assets/images/product_r1.jpeg',
      'assets/images/product_flatlay.png',
      'assets/images/coffee_bundle.jpg',
      'assets/images/brewing_phin.jpg'
    ],
    url: 'san-pham/r1.html',
    desc: 'R1 là sản phẩm đầu bảng của Đất Sài Gòn Café — được rang từ robusta Tây Nguyên chọn lọc. Hương thơm đậm đà, vị đắng dịu thanh, crema vàng óng sánh. Phù hợp nhất khi pha phin truyền thống hoặc cà phê sữa đá Sài Gòn.',
    flavor: {
      intensity: 8.5,
      bitterness: 7.0,
      aroma: 8.0,
      aftertaste: 7.5
    },
    beanType: 'Robusta (100%)',
    origin: 'Đắk Lắk, Đắk Nông (500–700m)',
    roastLevel: 'Trung-Đậm (Medium-Dark)',
    notes: 'Chocolate, khói, đất nung',
    methods: ['Phin', 'Sữa đá', 'Cold Brew'],
    rating: 4.8,
    reviewsCount: 124
  },
  'rs': {
    id: 'rs',
    sku: 'DSG-RS-100G',
    name: 'RS — Robusta Special',
    category: 'Cà phê rang mộc',
    catSlug: 'rang-moc',
    price: 139000,
    originalPrice: 155000,
    badge: 'Mới',
    badgeClass: 'badge-new',
    image: 'assets/images/product_rs.jpeg',
    gallery: [
      'assets/images/product_rs.jpeg',
      'assets/images/product_flatlay.png',
      'assets/images/coffee_bundle.jpg',
      'assets/images/roastery.png'
    ],
    url: 'san-pham/rs.html',
    desc: 'RS là blend đặc biệt tuyển chọn từ những hạt robusta chín cây 100%, rang sẫm màu theo bí quyết gia truyền. Vị đắng sâu, hậu vị ngọt kéo dài và hương thơm chocolate nồng nàn.',
    flavor: {
      intensity: 9.0,
      bitterness: 8.0,
      aroma: 8.5,
      aftertaste: 8.5
    },
    beanType: 'Robusta Special Blend (100%)',
    origin: 'Buôn Ma Thuột, Đắk Lắk',
    roastLevel: 'Đậm (Dark Roast)',
    notes: 'Dark Chocolate, caramel cháy, hạt phỉ',
    methods: ['Phin', 'Espresso', 'Sữa đá'],
    rating: 4.9,
    reviewsCount: 88
  },
  'cr': {
    id: 'cr',
    sku: 'DSG-CR-100G',
    name: 'CR — Classic Robusta',
    category: 'Cà phê rang mộc',
    catSlug: 'rang-moc',
    price: 109000,
    originalPrice: 125000,
    image: 'assets/images/product_flatlay.png',
    gallery: [
      'assets/images/product_flatlay.png',
      'assets/images/product_r1.jpeg',
      'assets/images/coffee_prep.jpg',
      'assets/images/brewing_phin.jpg'
    ],
    url: 'san-pham/cr.html',
    desc: 'CR mang hương vị mộc mạc cổ điển, rang mức vừa (Medium) để giữ độ chua thanh nhẹ và hậu vị ngọt êm. Thích hợp cho người mới bắt đầu uống cà phê rang mộc.',
    flavor: {
      intensity: 7.0,
      bitterness: 6.0,
      aroma: 8.0,
      aftertaste: 7.0
    },
    beanType: 'Robusta Classic (100%)',
    origin: 'Lâm Đồng, Gia Lai',
    roastLevel: 'Rang vừa (Medium Roast)',
    notes: 'Hạt dẻ, gỗ sồi, mật ong nhẹ',
    methods: ['Phin', 'Pour Over', 'Cold Brew'],
    rating: 4.7,
    reviewsCount: 65
  },
  'rm': {
    id: 'rm',
    sku: 'DSG-RM-100G',
    name: 'RM — Rang Mộc Truyền Thống',
    category: 'Cà phê rang mộc',
    catSlug: 'rang-moc',
    price: 125000,
    originalPrice: 145000,
    image: 'assets/images/product_rm.jpeg',
    gallery: [
      'assets/images/product_rm.jpeg',
      'assets/images/product_flatlay.png',
      'assets/images/roastery.png',
      'assets/images/brewing_phin.jpg'
    ],
    url: 'san-pham/rm.html',
    desc: 'RM là dòng sản phẩm lưu giữ công thức cổ điển từ những năm 2010 của Đất Sài Gòn. Rang mộc 100%, đắng đậm đà, thơm béo tự nhiên, chuẩn gu cà phê quán cóc Sài Gòn xưa.',
    flavor: {
      intensity: 8.5,
      bitterness: 8.0,
      aroma: 7.5,
      aftertaste: 8.0
    },
    beanType: 'Robusta nguyên chất truyền thống',
    origin: 'Cư M\'gar, Đắk Lắk',
    roastLevel: 'Trung-Đậm (Medium-Dark)',
    notes: 'Khói gỗ, bơ tự nhiên, caramel',
    methods: ['Phin', 'Vợt', 'Sữa đá'],
    rating: 4.8,
    reviewsCount: 92
  },
  'es': {
    id: 'es',
    sku: 'DSG-ES-100G',
    name: 'ES — Espresso Blend',
    category: 'Cà phê pha máy',
    catSlug: 'pha-may',
    price: 155000,
    originalPrice: 175000,
    image: 'assets/images/brewing_espresso.jpg',
    gallery: [
      'assets/images/brewing_espresso.jpg',
      'assets/images/product_flatlay.png',
      'assets/images/category_pha_may.png',
      'assets/images/coffee_bundle.jpg'
    ],
    url: 'san-pham/es.html',
    desc: 'ES được phối trộn tỉ mỉ giữa Fine Robusta và Arabica Cầu Đất, tạo lớp crema dày vàng óng, hương thơm phức hợp và vị cân bằng tuyệt hảo khi chiết xuất bằng máy pha espresso.',
    flavor: {
      intensity: 8.0,
      bitterness: 6.5,
      aroma: 9.5,
      aftertaste: 9.0
    },
    beanType: 'Blend Robusta & Arabica Cầu Đất (70/30)',
    origin: 'Cầu Đất (Đà Lạt) & Đắk Lắk',
    roastLevel: 'Rang vừa đậm (City+)',
    notes: 'Hoa quả chín, chocolate đen, cam quýt nhẹ',
    methods: ['Máy Espresso', 'Moka Pot', 'Americano', 'Latte'],
    rating: 4.9,
    reviewsCount: 110
  },
  'culi': {
    id: 'culi',
    sku: 'DSG-CULI-100G',
    name: 'Culi — Hạt Tròn Đặc Biệt',
    category: 'Cà phê hạt đặc biệt',
    catSlug: 'ca-phe-hat',
    price: 165000,
    originalPrice: 185000,
    badge: 'Bán chạy',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/category_rang_moc.png',
    gallery: [
      'assets/images/category_rang_moc.png',
      'assets/images/product_flatlay.png',
      'assets/images/coffee_prep.jpg',
      'assets/images/social_gallery.png'
    ],
    url: 'san-pham/culi.html',
    desc: 'Culi (Peaberry) là những hạt cà phê đột biến dạng tròn duy nhất trong một quả. Tích tụ lượng caffeine dồi dào gấp đôi hạt thông thường, đem đến thể chất cực dày và vị đắng đậm cá tính.',
    flavor: {
      intensity: 9.5,
      bitterness: 8.5,
      aroma: 8.0,
      aftertaste: 8.5
    },
    beanType: 'Culi Robusta 100% hạt tròn',
    origin: 'Buôn Ma Thuột, Đắk Lắk',
    roastLevel: 'Đậm đặc biệt (Full City)',
    notes: 'Gia vị, khói đậm, đắng socola nguyên chất',
    methods: ['Phin', 'Pha máy', 'Cà phê đá đậm'],
    rating: 4.9,
    reviewsCount: 145
  }
};

// Weight multiplier
const WEIGHT_MULTIPLIERS = {
  '100g': 1.0,
  '200g': 1.9,
  '500g': 4.5,
  '1kg': 8.5
};

// Helper: Format VND
function formatVND(amount) {
  return Number(amount).toLocaleString('vi-VN') + 'đ';
}

// Get Product by ID
function getProductById(id) {
  if (!id) return DEFAULT_PRODUCTS['r1'];
  const cleanId = id.toLowerCase().trim();
  return DEFAULT_PRODUCTS[cleanId] || DEFAULT_PRODUCTS['r1'];
}

// Get Cart from localStorage
function getCart() {
  try {
    const raw = localStorage.getItem(DSG_CART_KEY);
    if (!raw) {
      const initial = [
        { ...DEFAULT_PRODUCTS['r1'], qty: 2, weight: '100g', grind: 'Hạt nguyên' },
        { ...DEFAULT_PRODUCTS['rs'], qty: 1, weight: '100g', grind: 'Xay sẵn (phin)' }
      ];
      localStorage.setItem(DSG_CART_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

// Save Cart
function saveCart(cart) {
  localStorage.setItem(DSG_CART_KEY, JSON.stringify(cart));
  updateCartBadges();
}

// Total items in cart
function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
}

// Update all cart badges across page
function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge, #cart-count').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// Add Item to Cart
function addToCart(productId, options = {}) {
  const base = getProductById(productId);
  const cart = getCart();
  const weight = options.weight || '100g';
  const grind = options.grind || 'Hạt nguyên';
  const qty = parseInt(options.qty) || 1;

  // Calculate price based on weight
  const multiplier = WEIGHT_MULTIPLIERS[weight] || 1.0;
  const calculatedPrice = Math.round(base.price * multiplier);

  const existing = cart.find(item => item.id === base.id && item.weight === weight && item.grind === grind);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: base.id,
      name: base.name,
      category: base.category,
      price: calculatedPrice,
      originalPrice: base.originalPrice ? Math.round(base.originalPrice * multiplier) : undefined,
      image: base.image,
      url: base.url,
      weight,
      grind,
      qty
    });
  }

  saveCart(cart);
  showToast(`✓ Đã thêm ${base.name} (${weight} - ${grind}) vào giỏ!`, true);
}

// Toast Notification
function showToast(message, hasCartLink = false) {
  let toast = document.getElementById('dsg-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dsg-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: var(--color-surface, #24140D);
      color: #fff;
      border: 1px solid var(--color-primary, #D4930A);
      border-radius: 12px;
      padding: 1rem 1.4rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      z-index: 99999;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.9rem;
      font-weight: 500;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    document.body.appendChild(toast);
  }

  const isSubfolder = window.location.pathname.includes('/san-pham/') || window.location.pathname.includes('/kien-thuc-ca-phe/');
  const cartUrl = isSubfolder ? '../gio-hang.html' : 'gio-hang.html';

  toast.innerHTML = `
    <span>${message}</span>
    ${hasCartLink ? `<a href="${cartUrl}" style="background:var(--color-primary, #D4930A);color:#fff;padding:0.35rem 0.75rem;border-radius:6px;font-size:0.78rem;font-weight:700;text-decoration:none;white-space:nowrap;">Xem giỏ</a>` : ''}
  `;

  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3500);
}

// Order Management Helpers
function saveOrderToHistory(orderData) {
  try {
    localStorage.setItem(DSG_ORDER_KEY, JSON.stringify(orderData));
    const raw = localStorage.getItem(DSG_ORDERS_HISTORY_KEY);
    const history = raw ? JSON.parse(raw) : [];
    history.unshift(orderData);
    localStorage.setItem(DSG_ORDERS_HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
  } catch (e) {
    console.error('Error saving order', e);
  }
}

function findOrder(query) {
  if (!query) return null;
  const q = query.trim().toUpperCase().replace('#', '');
  
  // Check last order first
  try {
    const last = JSON.parse(localStorage.getItem(DSG_ORDER_KEY) || 'null');
    if (last) {
      if (last.orderId.toUpperCase().includes(q) || (last.phone && last.phone.includes(q))) {
        return last;
      }
    }
  } catch (e) {}

  // Check history
  try {
    const raw = localStorage.getItem(DSG_ORDERS_HISTORY_KEY);
    if (raw) {
      const history = JSON.parse(raw);
      const match = history.find(o => o.orderId.toUpperCase().includes(q) || (o.phone && o.phone.includes(q)));
      if (match) return match;
    }
  } catch (e) {}

  // Sample fallback if matching default sample code
  if (q.includes('08120001') || q === '0912345678') {
    return {
      orderId: 'DSG-2026-08120001',
      name: 'Nguyễn Văn A',
      phone: '0912 345 678',
      address: '50/17 Phan Văn Hớn, P. Tân Thới Nhất, Q.12, TP.HCM',
      date: '12/08/2026 — 17:45',
      carrier: 'GHTK — GHTK-987654321',
      status: 'shipping',
      statusText: 'Đang vận chuyển',
      estimatedDate: '14/08/2026',
      items: [
        { ...DEFAULT_PRODUCTS['r1'], qty: 2, weight: '100g', grind: 'Hạt nguyên' },
        { ...DEFAULT_PRODUCTS['rs'], qty: 1, weight: '100g', grind: 'Xay sẵn phin' }
      ],
      total: '377.000đ',
      paymentMethod: 'COD'
    };
  }

  return null;
}

// Global search redirection
function setupSearchInputs() {
  document.querySelectorAll('#search-input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        const isSubfolder = window.location.pathname.includes('/san-pham/') || window.location.pathname.includes('/kien-thuc-ca-phe/');
        const targetUrl = (isSubfolder ? '../' : '') + `san-pham.html?search=${encodeURIComponent(input.value.trim())}`;
        window.location.href = targetUrl;
      }
    });
  });
}

// Auto filter in san-pham.html if search query exists
function handleProductSearchParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQ = urlParams.get('search');
  const catQ = urlParams.get('cat');

  if (searchQ) {
    const term = searchQ.toLowerCase();
    const cards = document.querySelectorAll('#product-grid .product-card');
    let matchCount = 0;
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(term)) {
        card.style.display = '';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });
    const countLabel = document.querySelector('.sort-bar-count');
    if (countLabel) {
      countLabel.innerHTML = `Kết quả tìm kiếm cho "<strong>${searchQ}</strong>": <strong>${matchCount}</strong> sản phẩm`;
    }
  } else if (catQ) {
    const pill = document.querySelector(`.category-pill[data-filter="${catQ}"]`);
    if (pill) pill.click();
  }
}

// Init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  setupSearchInputs();
  if (window.location.pathname.includes('san-pham.html')) {
    handleProductSearchParam();
  }
});
