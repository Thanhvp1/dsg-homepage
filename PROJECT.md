# Project: Dat Sai Gon Robusta R1 Landing Page

## Architecture
- **Platform Nature**: Client-side static landing page deployed at `d:\01. Download\DSG_Web\Landing page\index.html` (with alias `ld-dsg-index.html`), zero build-step requirement, standalone browser execution.
- **Visual & Art Layer**: High-definition 3D studio renders synthesized from authentic 2D packaging photos in `Source SAILAND/hinh_anh/R1/` and `assets/images/`.
- **UI/UX & Design Tokens**: Tailwind CSS v3 (CDN + custom config) following GetLayers.ai dark luxury aesthetic: Obsidian Espresso (`#080706`, `#0F0D0B`), Roast Gold (`#D4A373`, `#E5A93C`), Brand Red (`#CC1111`), serif/sans typography (`Playfair Display`, `Public Sans`), frosted glassmorphism (`backdrop-blur-xl`).
- **WebGL Interactive 3D Layer**: Three.js r128 canvas rendering procedural 3D coffee beans via `THREE.InstancedMesh` (single draw call for 45 beans) + 350 golden bokeh motes with mouse parallax, 60fps target, responsive resizing, and memory disposal.
- **Motion Choreography**: GSAP 3.12+ & ScrollTrigger for hero entrance, continuous floating pack levitation, 250vh sticky packaging dissection pin, and animated tasting radar bars.
- **E-Commerce Data Flow**: `cart-bridge.js` interfacing directly with `localStorage['dsg_cart_v1']`, handling weight multipliers (100g, 200g, 500g, 1kg), grind options, Combo 99K bundling, and linking safely to `../gio-hang.html` and `../thanh-toan.html`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F01 | 3D Hero Pack Render | Cinematic 3D render of Robusta R1 bag with luxury studio lighting, flying roasted beans, and warm coffee steam | M1 | ORIGINAL_REQUEST §R1 |
| F02 | Packaging Anatomy Visuals | High-res visual cutouts of 1-way degassing valve, 3-layer aluminum zipper seal, and laser-engraved phin nhôm | M1 | ORIGINAL_REQUEST §R1, R2 |
| F03 | Combo & Gift Assets | Visual renders for Combo 99K (R1 + RS + Phin nhôm + Ly thủy tinh Đất Sài Gòn logo) | M1 | ORIGINAL_REQUEST §R2 |
| F04 | GetLayers Dark Luxury Layout | 7-stage semantic HTML5 + Tailwind CSS layout with frosted glass cards, navigation, and sticky order footer | M2 | ORIGINAL_REQUEST §R2 |
| F05 | Hero & Story Sections | Impactful title, brand heritage (Tây Nguyên 500-700m, rang mộc thuần túy), trust badges | M2 | ORIGINAL_REQUEST §R2 |
| F06 | Flavor Profile & Sensory Matrix | Dynamic visual presentation of Intensity 8.5, Bitterness 7.0, Aroma 8.0, Aftertaste 7.5, tasting notes | M2 | ORIGINAL_REQUEST §R2 |
| F07 | Product Specs & Brewing Rituals | Detailed technical specs (valve, net weights 100g-1kg) and step-by-step Phin brewing guide (90-95°C, 4-5 min) | M2 | ORIGINAL_REQUEST §R2 |
| F08 | Combo 99K & Pricing Matrix | Tiered pricing display with instant selection (100g, 200g, 500g, 1kg) and Combo 99K "Mua 1 Được 4" spotlight | M2 | ORIGINAL_REQUEST §R2 |
| F09 | Three.js WebGL Particle Canvas | Ambient golden light particles + 45 procedural 3D coffee beans orbiting with mouse parallax | M3 | ORIGINAL_REQUEST §R3 |
| F10 | Three.js Performance & Cleanup | 60fps steady rendering, requestAnimationFrame throttling, responsive resize handling, WebGL context cleanup | M3 | ORIGINAL_REQUEST §R3 |
| F11 | GSAP ScrollTrigger Sequence | Cinematic text staggers, floating layer reveals, dynamic flavor bar expansion on scroll | M4 | ORIGINAL_REQUEST §R3 |
| F12 | Sticky Dissection Scroll Pin | 250vh pinned scroll sequence dissecting packaging features (valve, aluminum barrier, zip lock) | M4 | ORIGINAL_REQUEST §R3 |
| F13 | Cross-Device Responsive Polish | Pixel-perfect layout across Mobile (375px), Tablet (768px), and Desktop (1440px+), touch support | M4 | ORIGINAL_REQUEST §R3 |
| F14 | Cart Integration Bridge | `cart-bridge.js` integrating with `localStorage['dsg_cart_v1']`, linking to `../gio-hang.html` and `../thanh-toan.html` | M5 | ORIGINAL_REQUEST §R2 |
| F15 | Combo 99K One-Click Cart Hook | Add complete Combo 99K bundle to cart with 1 click, toast notifications, weight/grind persistence | M5 | ORIGINAL_REQUEST §R2 |
| F16 | Standalone Browser Delivery | Standalone launchable `index.html` and `ld-dsg-index.html` with zero missing resources (no 404s, no console errors) | M5 | ORIGINAL_REQUEST Acceptance |
| F17 | E2E Acceptance Verification | Pass 100% of opaque-box E2E test suite (Tiers 1-4) & adversarial test hardening (Tier 5) | M6 | ORIGINAL_REQUEST Acceptance |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Visual 3D & AI Art Assets | Create cinematic studio 3D hero pack, anatomy assets (valve, seal), and combo visuals | none | PLANNED |
| M2 | UI/UX & Information Architecture | Build complete HTML5 + Tailwind CSS landing page structure inspired by GetLayers.ai | M1 | PLANNED |
| M3 | Three.js WebGL Interactive Canvas | Implement 60fps WebGL canvas with procedural 3D beans, golden motes, mouse parallax, cleanup | M2 | PLANNED |
| M4 | GSAP Motion & Responsive Choreography | Implement ScrollTrigger animations, 250vh sticky anatomy pin, flavor bar reveals, mobile polish | M3 | PLANNED |
| M5 | Cart Integration & Standalone Polish | Implement `cart-bridge.js`, combo buying flow, dual entry points, zero-error audit | M4 | PLANNED |
| M6 | Final Milestone: E2E Test Pass & Hardening | Pass 100% of E2E test suite (Tiers 1-4) published by E2E Testing Track + Tier 5 hardening | M5, TEST_READY | PLANNED |

## Interface Contracts

### `cart-bridge.js` ↔ `Landing page/index.html`
- `window.DSGCartBridge.addToCart(productId, { weight, grind, qty, isCombo })`:
  - `productId`: `'r1'` or `'combo_99k'`
  - `weight`: `'100g' | '200g' | '500g' | '1kg'`
  - `grind`: `'Hạt nguyên' | 'Xay sẵn (phin)' | 'Xay sẵn (máy)'`
  - `qty`: integer ≥ 1
  - Writes to `localStorage['dsg_cart_v1']`
  - Returns `{ success: true, cartCount: number, cartTotal: number }`
- `window.DSGCartBridge.getCartCount()`: returns number of items in `dsg_cart_v1`.
- `window.DSGCartBridge.openCart()`: navigates safely to `../gio-hang.html`.
- `window.DSGCartBridge.checkoutNow(productId, options)`: adds item and navigates to `../thanh-toan.html`.

### `three-canvas.js` ↔ `Landing page/index.html`
- `initDSGWebGL(containerElementId)`:
  - Initializes WebGLRenderer, Camera, Scene, InstancedMesh (45 beans), Points (350 motes).
  - Listens to mousemove / touchmove on container.
  - Returns controller `{ destroy: Function, resize: Function, pause: Function, resume: Function }`.

### `animations.js` ↔ `Landing page/index.html`
- `initDSGAnimations()`:
  - Registers GSAP `ScrollTrigger`.
  - Initializes Hero reveal, float loop, sensory bar trigger, sticky anatomy pin, and responsive matchMedia.
  - Respects `window.matchMedia('(prefers-reduced-motion: reduce)')`.

## Code Layout
- `Landing page/`:
  - `index.html`: Primary standalone entry point for browser.
  - `ld-dsg-index.html`: Secondary alias matching `README.md` specification.
  - `css/`:
    - `landing.css`: Custom dark luxury styles, glassmorphism, glowing accents, typography rules.
  - `js/`:
    - `three-canvas.js`: Three.js WebGL canvas logic with procedural coffee beans and particle system.
    - `animations.js`: GSAP ScrollTrigger timeline choreography and responsive controls.
    - `cart-bridge.js`: High-reliability cart integration with DSG storage schema.
  - `assets/images/`:
    - 3D hero renders, anatomy cutouts, combo visuals, and optimized SVG icons.
- Exclusive write boundaries:
  - Subagents working on M1 write to `Landing page/assets/images/`.
  - Subagents working on M2 write to `Landing page/index.html`, `Landing page/css/landing.css`.
  - Subagents working on M3 write to `Landing page/js/three-canvas.js`.
  - Subagents working on M4 write to `Landing page/js/animations.js`.
  - Subagents working on M5 write to `Landing page/js/cart-bridge.js`, `Landing page/ld-dsg-index.html`.
  - E2E Testing Track writes to `tests/e2e/`, `TEST_INFRA.md`, and `TEST_READY.md`.

## ☕ F&B Consulting & Coffee Yield Standards (Định Mức Tư Vấn Khách Hàng)
- **1kg Cà Phê Pha Phin**: Tương đương khoảng **40 ly** (Định mức chuẩn: ~25g bột cà phê / ly phin truyền thống).
- **1kg Cà Phê Pha Máy**: Tương đương **60 ly** (Định mức chuẩn: ~16.7g bột cà phê / ly chiết xuất máy Espresso).
- **Chính Sách 10 TẶNG 1 Trọn Đời (Quy Tắc Bậc Thang Tròn 10kg)**:
  - Công thức: `bonusKg = Math.floor(purchasedKg / 10)`
  - Dưới 10kg: Tặng 0kg (Giữ nguyên đơn giá gốc).
  - Từ 10kg đến 19kg (ví dụ: mua 15kg): Tặng **1kg** hạt miễn phí (`Math.floor(15/10) = 1`).
  - Từ 20kg đến 29kg (ví dụ: mua 20kg): Tặng **2kg** hạt miễn phí (`Math.floor(20/10) = 2`).
  - Từ 30kg đến 39kg (ví dụ: bán 60 ly/ngày = 30kg/tháng): Tặng **3kg** hạt miễn phí (`Math.floor(30/10) = 3`).
  - Giúp tối ưu giá vốn thực tế trên mỗi kg hạt và giảm giá thành mỗi ly phục vụ.

### 📋 Bảng Giá Nhập Cà Phê Hạt Đất Sài Gòn (Quy cách 500g/gói):
| STT | Tên Sản Phẩm | Quy Cách | ĐVT | Đơn Giá / kg | Giá Sau 10 TẶNG 1 | Chi Phí Hạt / Ly Pha Máy (60 ly/kg) | Chi Phí Hạt / Ly Pha Phin (40 ly/kg) |
|---|---|---|---|---|---|---|---|
| 1 | Café Hạt R1 (gia công) | 500g/gói | kg | **238.000 đ** | ~216.364 đ | ~3.606 đ | ~5.409 đ |
| 2 | Café Hạt Robusta | 500g/gói | kg | **278.000 đ** | ~252.727 đ | ~4.212 đ | ~6.318 đ |
| 3 | Café Hạt RS | 500g/gói | kg | **298.000 đ** | ~270.909 đ | ~4.515 đ | ~6.773 đ |
| 4 | Café Hạt Culi | 500g/gói | kg | **316.000 đ** | ~287.273 đ | ~4.788 đ | ~7.182 đ |
| 5 | Café Hạt CR | 500g/gói | kg | **316.000 đ** | ~287.273 đ | ~4.788 đ | ~7.182 đ |
| 6 | Café Hạt RM | 500g/gói | kg | **338.000 đ** | ~307.273 đ | ~5.121 đ | ~7.682 đ |
| 7 | Café Hạt pha máy AC | 500g/gói | kg | **392.000 đ** | ~356.364 đ | ~5.939 đ | ~8.909 đ |
| 8 | Café pha máy Espresso | 500g/gói | kg | **518.000 đ** | ~470.909 đ | ~7.848 đ | ~11.773 đ |
