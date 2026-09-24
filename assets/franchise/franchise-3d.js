/**
 * ═════════════════════════════════════════════════════════════════════════
 * CÔNG TY CỔ PHẦN ĐẤT SÀI — 3D CYBER-TECH PRECISION COFFEE ENGINE & ROI LOGIC
 * Futuristic Three.js Holographic Station, Smart Tumbler & Unit Economics
 * ═════════════════════════════════════════════════════════════════════════
 */

// ──────────────── 1. OFFICIAL FRANCHISE DATA & UNIT ECONOMICS ────────────────
const FRANCHISE_DATA = {
  qcfm5: {
    code: "Gói Khởi Nghiệp QCFM 5",
    title: "Combo Xe Cà Phê Muối To-Go",
    target: "Công suất thiết kế 40 – 60 ly/ngày (~1.0 kg/ngày)",
    deposit: "6.000.000đ",
    depositNum: 6000000,
    dailyRental: "15.000đ/ngày",
    payback: "Cam kết hoàn vốn 100% sau 6 tháng (50 ly/ngày)",
    itemsCount: 28,
    features: [
      "Bàn giao trọn gói 28 hạng mục vật dụng cao cấp",
      "Quầy di động inox gấp gọn có thể thu hồi lại tiền cọc",
      "Cam kết hoàn vốn 100% sau 6 tháng (1.500 ly/tháng)",
      "Ưu đãi nhập hạt cà phê 10 TẶNG 1 trọn đời hợp đồng",
      "Hỗ trợ 50% chi phí quảng cáo Facebook & TikTok (15 ngày)",
      "Chuyển giao 100% công thức Cà phê muối Đất Sài độc quyền"
    ],
    items: [
      { stt: "01", name: "Quầy di động inox chuyên dụng (Có thể thu hồi lại)", unit: "Cái", qty: "1", group: "quay_chieu_sang", group_name: "Quầy xe & Chiếu sáng" },
      { stt: "02", name: "Kệ đựng ly 4 ngăn nghiêng chuyên nghiệp", unit: "Bộ", qty: "1", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "03", name: "Ly nhựa 360ml + nắp cầu cao cấp", unit: "Cái", qty: "200", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "04", name: "Ly nhựa 700ml + nắp chịu nhiệt", unit: "Cái", qty: "200", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "05", name: "Giấy chống tràn thực phẩm an toàn", unit: "Tờ", qty: "200", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "06", name: "Túi Zíp bảo quản nguyên liệu chuyên dụng", unit: "Cái", qty: "50", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "07", name: "Chai chiết 330ml + 100ml (cốt cafe & sốt muối)", unit: "Chai", qty: "5 + 5", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "08", name: "Menu Cầm Tay cao cấp ép nhựa chống nước", unit: "Cái", qty: "2", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "09a", name: "Túi xách mang đi (loại 1 ly / 2 ly)", unit: "kg", qty: "0.5", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "09b", name: "Túi đựng đá PE sạch", unit: "kg", qty: "0.5", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "10", name: "Ống hút chuyên dụng có màng bọc tiệt trùng", unit: "kg", qty: "1", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "11", name: "Muỗng nhựa ăn mang đi", unit: "Bọc", qty: "3", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "12", name: "Muỗng đong định lượng 10gr", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "13", name: "Cây vét kem silicone dài 28cm cao cấp", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "14", name: "Khăn lau quầy bar microfiber chuyên dụng", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "15", name: "Shaker lắc inox 350ml sáng bóng", unit: "Cái", qty: "1", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "16", name: "Lọ rắc Cacao + Matcha inox nắp lưới", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "17", name: "Bột Matcha Trà Xanh chuẩn vị", unit: "Gam", qty: "50", group: "nguyen_lieu", group_name: "Nguyên liệu test" },
      { stt: "18", name: "Bột Cacao nguyên chất thơm béo", unit: "Gam", qty: "100", group: "nguyen_lieu", group_name: "Nguyên liệu test" },
      { stt: "19", name: "Vụn Dừa Nướng giòn bùi topping", unit: "Gam", qty: "100", group: "nguyen_lieu", group_name: "Nguyên liệu test" },
      { stt: "20", name: "Áo thun đồng phục Đất Sài cao cấp", unit: "Cái", qty: "2", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "21", name: "Tạp dề quầy bar thêu logo sắc nét", unit: "Cái", qty: "4", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "22", name: "Nón phục vụ chuyên nghiệp", unit: "Cái", qty: "4", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "23", name: "Banner Quảng Cáo khai trương bắt mắt", unit: "Cái", qty: "1", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "24", name: "Sổ ghi chép Báo cáo doanh thu bán hàng", unit: "Cái", qty: "1", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "25", name: "Standee để bàn CTKM & Quét mã Momo/NH", unit: "Cái", qty: "1", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "26", name: "Menu công thức pha chế chuẩn vị chuyển giao", unit: "Bộ", qty: "2", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "27", name: "Hộp Card Khai Trương / Thẻ mời cư dân", unit: "Hộp", qty: "10", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "28", name: "Gói hỗ trợ đóng gói & điều phối vận chuyển tận nơi", unit: "Chuyến", qty: "1", group: "quay_chieu_sang", group_name: "Quầy xe & Chiếu sáng" }
    ]
  },
  qcfm10: {
    code: "Gói Tiêu Chuẩn Inox QCFM 10",
    title: "Combo Quầy Inox Chiếu Sáng Chuyên Nghiệp",
    target: "Công suất thiết kế 80 – 120 ly/ngày (~1.5 – 2.0 kg/ngày)",
    deposit: "10.000.000đ",
    depositNum: 10000000,
    dailyRental: "22.000đ/ngày",
    payback: "Cam kết hoàn vốn 100% sau 6 - 9 tháng (100 ly/ngày)",
    itemsCount: 31,
    features: [
      "Bàn giao trọn gói 31 hạng mục (Quầy Inox cao cấp + Đèn Led Rạng Đông 1.2m)",
      "Trang bị thêm Xúc đá inox và Ly đong định lượng 100ml",
      "Nâng số lượng ly nhựa lên 500 cái phục vụ lưu lượng đông",
      "Thích hợp bán cả buổi sáng sớm & buổi tối có đèn rực rỡ",
      "Hỗ trợ 50% chi phí quảng cáo Facebook & TikTok (15 ngày)",
      "Cam kết hoàn vốn 100% khi đạt mốc sản lượng"
    ],
    items: [
      { stt: "01", name: "Quầy di động inox cao cấp chuyên dụng (Có thể thu hồi lại)", unit: "Cái", qty: "1", group: "quay_chieu_sang", group_name: "Quầy xe & Chiếu sáng" },
      { stt: "02", name: "Bộ Đèn 1.2m vàng Rạng Đông + Dây 3m + Phích cắm", unit: "Bộ", qty: "1", group: "quay_chieu_sang", group_name: "Quầy xe & Chiếu sáng", badge: "Đặc quyền gói 10" },
      { stt: "03", name: "Kệ đựng ly 4 ngăn nghiêng chuyên nghiệp", unit: "Bộ", qty: "1", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "04", name: "Ly nhựa 360ml + nắp cầu cao cấp", unit: "Cái", qty: "300", group: "bao_bi", group_name: "Bao bì & Phục vụ", badge: "+100 ly" },
      { stt: "05", name: "Ly nhựa 700ml + nắp chịu nhiệt", unit: "Cái", qty: "200", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "06", name: "Giấy chống tràn thực phẩm an toàn", unit: "Tờ", qty: "200", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "07", name: "Túi Zíp bảo quản nguyên liệu chuyên dụng", unit: "Cái", qty: "50", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "08", name: "Chai chiết 330ml + 100ml (cốt cafe & sốt muối)", unit: "Chai", qty: "5 + 5", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "09", name: "Menu Cầm Tay cao cấp ép nhựa chống nước", unit: "Cái", qty: "2", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "10", name: "Túi xách mang đi + Túi đựng đá", unit: "kg", qty: "0.5 + 0.5", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "11", name: "Ống hút lớn + nhỏ chuyên dụng có màng bọc", unit: "kg", qty: "0.5 + 0.5", group: "bao_bi", group_name: "Bao bì & Phục vụ" },
      { stt: "12", name: "Muỗng nhựa định lượng mang đi", unit: "Cái", qty: "3", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "13", name: "Muỗng đong bột 10gr chuẩn barista", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "14", name: "Cây vét kem dài 28cm silicone", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "15", name: "Khăn lau quầy chuyên dụng microfiber", unit: "Cái", qty: "3", group: "dung_cu", group_name: "Dụng cụ pha chế", badge: "+1 khăn" },
      { stt: "16", name: "Ly đong định lượng chia vạch 100ml", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế", badge: "Bổ sung gói 10" },
      { stt: "17", name: "Shaker lắc inox 350ml", unit: "Cái", qty: "1", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "18", name: "Lọ rắc Cacao + Matcha inox nắp lưới", unit: "Cái", qty: "2", group: "dung_cu", group_name: "Dụng cụ pha chế" },
      { stt: "19", name: "Bột Matcha Trà Xanh cao cấp", unit: "Gam", qty: "50", group: "nguyen_lieu", group_name: "Nguyên liệu test" },
      { stt: "20", name: "Bột Cacao nguyên chất thơm béo", unit: "Gam", qty: "100", group: "nguyen_lieu", group_name: "Nguyên liệu test" },
      { stt: "21", name: "Vụn Dừa Nướng giòn béo topping", unit: "Gam", qty: "100", group: "nguyen_lieu", group_name: "Nguyên liệu test" },
      { stt: "22", name: "Xúc đá inox dày dặn chuyên dụng", unit: "Cái", qty: "1", group: "dung_cu", group_name: "Dụng cụ pha chế", badge: "Bổ sung gói 10" },
      { stt: "23", name: "Áo đồng phục Đất Sài cao cấp", unit: "Cái", qty: "2", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "24", name: "Tạp dề quầy bar thêu logo sắc nét", unit: "Cái", qty: "4", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "25", name: "Nón phục vụ chuyên nghiệp", unit: "Cái", qty: "4", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "26", name: "Banner Quảng Cáo khai trương", unit: "Cái", qty: "1", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "27", name: "Sổ ghi chép Báo cáo doanh thu", unit: "Cái", qty: "1", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "28", name: "Standee để bàn QC CTKM + Quét mã QR", unit: "Cái", qty: "1", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "29", name: "Menu công thức pha chế chuẩn", unit: "Cái", qty: "2", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "30", name: "Hộp Card giới thiệu khai trương", unit: "Hộp", qty: "10", group: "dong_phuc_mkt", group_name: "Đồng phục & MKT" },
      { stt: "31", name: "Hỗ trợ đóng gói & điều phối vận chuyển tận nơi", unit: "Gói", qty: "1", group: "quay_chieu_sang", group_name: "Quầy xe & Chiếu sáng" }
    ]
  },
  espresso: {
    code: "Gói Pha Máy Espresso 1 Group",
    title: "Combo Quầy Xe Inox & Máy Pha CRM 3200B",
    target: "Công suất thiết kế 100 – 250 ly/ngày (Pha nhanh 20s/ly)",
    deposit: "26.500.000đ",
    depositNum: 26500000,
    dailyRental: "Hợp tác đối tác 3 bên",
    payback: "Hoàn vốn 100% sau 24 tháng (>= 1.5kg/ngày)",
    itemsCount: "Full Máy & Dụng Cụ",
    features: [
      "Quầy Inox chịu lực cao cấp thiết kế riêng đặt máy pha",
      "Máy pha Espresso chuyên nghiệp Corrima CRM 3200B (16 Triệu)",
      "Máy xay cà phê hạt công suất mạnh mẽ 1 HP (2.8 Triệu)",
      "Tặng thêm bộ 16 tách sứ cao cấp (8 Espresso + 8 Cappuccino)",
      "Trọn bộ Tamper nén inox, Ca đánh sữa inox, Filter đong",
      "Lợi nhuận dự kiến từ 7.5 – 15 triệu VNĐ/tháng"
    ]
  },
  rental: {
    code: "Chính Sách Cho Thuê Trải Nghiệm (TB 02K26)",
    title: "Bán Thử 0 Đồng Rủi Ro — Giá Thuê = 1 Ly Cà Phê/Ngày",
    target: "Dành cho đối tác muốn trải nghiệm trước khi xuống vốn chính thức",
    deposit: "4.2Tr – 6.9Tr",
    depositNum: 4200000,
    dailyRental: "15.000đ – 22.000đ/ngày",
    payback: "Thu hồi cọc 100% hoặc Mua đứt quầy khi hết hạn thuê",
    itemsCount: "Đầy đủ vật dụng",
    features: [
      "Chi phí thuê cực thấp: Chỉ 15.000đ/ngày (Quầy 6tr) hoặc 22.000đ/ngày (Quầy Inox)",
      "Ký quỹ chỉ từ 4.200.000đ (thời gian thuê 1 - 3 tháng)",
      "Vẫn được hưởng trọn gói tài trợ hoàn vốn 6 triệu đồng theo TB 01K26",
      "Hết hạn thuê: Mua đứt giữ quầy kinh doanh hoặc Trả quầy lấy lại tiền đặt cọc",
      "Hỗ trợ 50% chi phí vận chuyển hoàn trả nếu chấm dứt hợp đồng",
      "Được áp dụng đầy đủ chiến dịch quảng cáo và đào tạo pha chế"
    ]
  }
};

// ──────────────── 2. FUTURISTIC CYBER-TECH THREE.JS 3D BARISTA SHOWCASE ────────────────
// ──────────────── 2. AUTHENTIC GEMILAI CRM 3200B MECHANICAL 3D BARISTA STATION ────────────────
class CyberMechanicalCoffee3D {
  constructor() {
    this.canvas = document.getElementById('hero-3d-canvas');
    if (!this.canvas) return;

    this.container = this.canvas.parentElement;
    this.scene = new THREE.Scene();

    // Responsive Camera Setup (FOV 35 for optimal mechanical perspective)
    const aspect = (this.container.clientWidth || 500) / (this.container.clientHeight || 480);
    this.camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
    this.camera.position.set(0, 0.40, 7.3);
    this.camera.lookAt(0, 0.05, 0);

    // High-Precision WebGL Renderer with ACES Filmic Tone Mapping
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.38;

    // Color & Lighting Themes
    this.colorThemes = [
      { name: "Cyan Cyber", primary: 0x00f0ff, secondary: 0xffb700, core: 0x0284c7, accentGlow: 0x38bdf8 },
      { name: "Golden Roast", primary: 0xf59e0b, secondary: 0xd97706, core: 0x78350f, accentGlow: 0xfbbf24 },
      { name: "Matrix Emerald", primary: 0x10b981, secondary: 0x06b6d4, core: 0x047857, accentGlow: 0x34d399 }
    ];
    this.themeIndex = 0;

    // Root Assembly Groups
    this.mainGroup = new THREE.Group();
    this.mainGroup.scale.set(0.85, 0.85, 0.85);
    this.mainGroup.position.set(0, -0.12, 0);
    this.scene.add(this.mainGroup);

    this.stationGroup = new THREE.Group();
    this.mainGroup.add(this.stationGroup);

    this.tumblerGroup = new THREE.Group();
    this.mainGroup.add(this.tumblerGroup);

    this.hudGroup = new THREE.Group();
    this.mainGroup.add(this.hudGroup);

    // Mechanical Particle & Mesh Tracking
    this.steamParticles = [];
    this.espressoStreams = [];
    this.beans = [];
    this.gaugeNeedles = [];
    this.buttonHalos = [];
    this.telemetryCards = [];

    // Operational State Flags
    this.autoRotate = true;
    this.isWireframe = false;
    this.laserActive = true;
    this.steamEnabled = true;
    this.isExtracting = true;
    this.extractTimer = 24.5;
    this.targetPressure = 9.2;
    this.currentPressure = 9.2;

    // Pointer Interaction State
    this.isDragging = false;
    this.prevPointerX = 0;
    this.prevPointerY = 0;
    this.targetRotY = 0.32;
    this.targetRotX = 0.10;
    this.currentRotY = 0.32;
    this.currentRotX = 0.10;

    this.clock = new THREE.Clock();

    this.setupLighting();
    this.initPbrMaterials();
    this.buildGemilai3200BChassis();
    this.buildCommercialGrinder();
    this.buildSaltedCoffeeToGoCup();
    this.buildMechanicalHUD();
    this.buildQuantumSteam();
    this.bindEvents();
    this.animate();
  }

  // ── Procedural High-Definition Textures ──
  createGemilaiGaugeTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Outer Knurled Bezel & Shadow
    const grad = ctx.createRadialGradient(256, 256, 170, 256, 256, 256);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(0.7, '#94a3b8');
    grad.addColorStop(0.95, '#334155');
    grad.addColorStop(1, '#0f172a');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(256, 256, 256, 0, Math.PI * 2);
    ctx.fill();

    // Inner Dial Face (Deep Charcoal Titanium)
    ctx.fillStyle = '#0a0f1d';
    ctx.beginPath();
    ctx.arc(256, 256, 226, 0, Math.PI * 2);
    ctx.fill();

    // Subtle Radial Gauge Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    for (let r = 70; r <= 200; r += 45) {
      ctx.beginPath();
      ctx.arc(256, 256, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    const startAngle = Math.PI * 0.75;
    const totalAngle = Math.PI * 1.5;

    // Green Optimal Espresso Extraction Zone (8.5 - 11.5 Bar)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(256, 256, 192, startAngle + (8.5 / 16) * totalAngle, startAngle + (11.5 / 16) * totalAngle);
    ctx.stroke();

    // Red Danger / Over-Pressure Zone (12.0 - 16.0 Bar)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(256, 256, 192, startAngle + (12.0 / 16) * totalAngle, startAngle + totalAngle);
    ctx.stroke();

    // Yellow Pre-infusion Zone (2.0 - 4.0 Bar)
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(256, 256, 192, startAngle + (2.0 / 16) * totalAngle, startAngle + (4.0 / 16) * totalAngle);
    ctx.stroke();

    // Major & Minor Tick Marks (0 to 16 Bar)
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '900 22px system-ui, sans-serif';

    for (let i = 0; i <= 32; i++) {
      const val = i / 2;
      const angle = startAngle + (val / 16) * totalAngle;
      const isMajor = (i % 2 === 0);
      const isQuarter = (i % 4 === 0);

      const r1 = 212;
      const r2 = isQuarter ? 176 : (isMajor ? 188 : 198);
      ctx.lineWidth = isQuarter ? 4 : (isMajor ? 2.5 : 1.2);
      ctx.strokeStyle = isQuarter ? '#ffffff' : '#94a3b8';

      ctx.beginPath();
      ctx.moveTo(256 + Math.cos(angle) * r1, 256 + Math.sin(angle) * r1);
      ctx.lineTo(256 + Math.cos(angle) * r2, 256 + Math.sin(angle) * r2);
      ctx.stroke();

      if (isMajor && val % 2 === 0) {
        const textR = 148;
        const tx = 256 + Math.cos(angle) * textR;
        const ty = 256 + Math.sin(angle) * textR;
        ctx.fillText(val.toString(), tx, ty);
      }
    }

    // Inner PSI scale numbers in Gold
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.fillStyle = '#fbbf24';
    for (let psi = 0; psi <= 230; psi += 50) {
      const barEq = psi / 14.5;
      if (barEq <= 16) {
        const angle = startAngle + (barEq / 16) * totalAngle;
        const px = 256 + Math.cos(angle) * 116;
        const py = 256 + Math.sin(angle) * 116;
        ctx.fillText(psi.toString(), px, py);
      }
    }

    // Authentic Brand & Engineering Labels
    ctx.font = '900 26px system-ui, sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('GEMILAI', 256, 128);

    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('CRM 3200B', 256, 155);

    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('PRESSURE (BAR/PSI)', 256, 328);

    ctx.font = '12px system-ui, sans-serif';
    ctx.fillStyle = '#10b981';
    ctx.fillText('● ESPRESSO OPTIMAL', 256, 352);

    // Center Chrome Cap
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(256, 256, 24, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 4;
    return texture;
  }

  createOledScreenTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Matrix Dark Blue Ground
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, 512, 256);

    // Outer Glowing Border
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, 500, 244);

    // Scanline Matrix Pattern
    ctx.fillStyle = 'rgba(0, 240, 255, 0.04)';
    for (let y = 8; y < 250; y += 6) {
      ctx.fillRect(8, y, 496, 2);
    }

    // Top Header: System Status
    ctx.font = 'bold 18px monospace';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('● DUAL THERMOBLOCK PID  [ACTIVE]', 24, 38);

    ctx.fillStyle = '#fbbf24';
    ctx.fillText('ULKA 15-BAR', 370, 38);

    // Main Live Extraction Timer
    ctx.font = '900 68px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('24.5s', 24, 115);

    ctx.font = 'bold 18px monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('SHOT: DOUBLE ESPRESSO', 250, 85);
    ctx.fillStyle = '#a855f7';
    ctx.fillText('YIELD: 60 LY / 1KG HẠT', 250, 115);

    // Mid Technical Telemetry Row
    ctx.font = 'bold 22px monospace';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('BOILER: 93.5°C', 24, 172);

    ctx.fillStyle = '#10b981';
    ctx.fillText('PUMP: 9.2 BAR', 260, 172);

    // Bottom Flow & Pre-infusion Status
    ctx.font = '16px monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('FLOW: 2.1 ml/s  •  PRE-INFUSION: 3.5s  •  READY', 24, 222);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  createMachineBadgeTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 128);

    // Metallic Brushed Rim
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 504, 120);

    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, 492, 108);

    ctx.textAlign = 'center';
    ctx.font = '900 32px system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('GEMILAI CRM 3200B', 256, 50);

    ctx.font = 'bold 18px system-ui, sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('COMMERCIAL DUAL SYSTEM • ĐẤT SÀI TO-GO', 256, 88);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  createSideVentTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#18181b';
    ctx.fillRect(0, 0, 512, 512);

    // Laser Cut Ventilation Louvers with Depth
    for (let y = 40; y < 480; y += 42) {
      // Internal Amber / Cyan Heat Glow
      const glowGrad = ctx.createLinearGradient(0, y, 0, y + 24);
      glowGrad.addColorStop(0, 'rgba(245, 158, 11, 0.45)');
      glowGrad.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(30, y, 452, 24);

      // Slat Edge Shadow
      ctx.fillStyle = '#09090b';
      ctx.fillRect(30, y, 452, 6);

      // Chrome Highlight Rim
      ctx.fillStyle = '#52525b';
      ctx.fillRect(30, y + 22, 452, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  createDripGridTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, 0, 1024, 512);

    // Laser Perforated Drainage Grille Slots
    ctx.fillStyle = '#0f172a';
    const cols = 18;
    const rows = 9;
    const slotW = 38;
    const slotH = 18;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = 50 + c * 52;
        const y = 40 + r * 48;
        ctx.beginPath();
        ctx.roundRect(x, y, slotW, slotH, 6);
        ctx.fill();

        // Slot Chrome Reflection Trim
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(x + 1, y + slotH - 2, slotW - 2, 2, 1);
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  createCupSleeveTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Premium Kraft Textured Ground
    ctx.fillStyle = '#1c1008';
    ctx.fillRect(0, 0, 1024, 512);

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, 992, 480);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.strokeRect(28, 28, 968, 456);

    ctx.textAlign = 'center';

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 52px system-ui, sans-serif';
    ctx.fillText('☕ ĐẤT SÀI CAFÉ ☕', 512, 135);

    ctx.font = 'bold 36px system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('CÀ PHÊ MUỐI TO-GO', 512, 215);

    ctx.font = 'bold 26px system-ui, sans-serif';
    ctx.fillStyle = '#fcd34d';
    ctx.fillText('TRẠM CHIẾT XUẤT MÁY GEMILAI CRM 3200B', 512, 285);

    ctx.font = '22px system-ui, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Hotline: 0913 110 277  •  datsaigon.com.vn', 512, 380);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  setupLighting() {
    // Soft Studio Ambient
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 2.0);
    this.scene.add(ambientLight);

    // Precision Studio Key Light (Highlights metal bevels and chrome group)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(4.5, 8.5, 5.5);
    this.scene.add(keyLight);

    // Warm Golden Rim Light
    const goldFill = new THREE.DirectionalLight(0xfef3c7, 2.0);
    goldFill.position.set(-5, 4, 3);
    this.scene.add(goldFill);

    // Cyber Neon Point Light (Accentuates tech gauges & buttons)
    this.neonAccentLight = new THREE.PointLight(0x00f0ff, 2.8, 14);
    this.neonAccentLight.position.set(-3.5, 2.5, 2);
    this.scene.add(this.neonAccentLight);

    // Deep Amber Back Rim Light
    this.amberRimLight = new THREE.DirectionalLight(0xf59e0b, 2.5);
    this.amberRimLight.position.set(4, -1, -4);
    this.scene.add(this.amberRimLight);
  }

  initPbrMaterials() {
    const theme = this.colorThemes[this.themeIndex];

    // Heavy 304 Brushed Stainless Steel (Chassis body)
    this.brushedInoxMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.94,
      roughness: 0.22
    });

    // Mirror Chromed Brass (E61 Group head, spouts, rails, knobs)
    this.mirrorChromeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.98,
      roughness: 0.04
    });

    // Commercial Brass Casting (Group internal collar & portafilter)
    this.brassGroupMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.94,
      roughness: 0.15
    });

    // Copper Piping (Internal mechanics)
    this.copperPipeMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      metalness: 0.92,
      roughness: 0.28
    });

    // Luxury Gold PVD Accents
    this.goldPVDMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.92,
      roughness: 0.12
    });

    // Industrial Matte Charcoal Side Panels
    this.matteSideMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.45,
      roughness: 0.42
    });

    // Anti-slip Ribbed Rubber (Feet, grips)
    this.matteBlackRubberMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      metalness: 0.15,
      roughness: 0.8
    });

    // Natural Dark Walnut (Ergonomic Portafilter Handle)
    this.walnutMat = new THREE.MeshStandardMaterial({
      color: 0x2e180c,
      roughness: 0.46,
      metalness: 0.08
    });

    // Neon Cyber Core
    this.neonCoreMat = new THREE.MeshBasicMaterial({
      color: theme.primary
    });

    // Clear UV-resistant Polycarbonate / Glass (Bean Hopper & Water Tank)
    this.glassHopperMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.94,
      opacity: 0.94,
      transparent: true,
      roughness: 0.04,
      ior: 1.52
    });

    // Vietnamese Salted Coffee Layers
    this.condensedMilkMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.3,
      metalness: 0.05
    });

    this.espressoLiquidMat = new THREE.MeshStandardMaterial({
      color: 0x1a0a03,
      roughness: 0.08,
      metalness: 0.2
    });

    this.saltedCreamMat = new THREE.MeshStandardMaterial({
      color: 0xfffdf5,
      roughness: 0.75,
      metalness: 0.01
    });

    this.cremaCaramelMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.28,
      metalness: 0.12
    });

    this.roastedBeanMat = new THREE.MeshStandardMaterial({
      color: 0x3b1d0c,
      roughness: 0.25,
      metalness: 0.2
    });
  }

  // 1. Gemilai CRM 3200B Commercial Espresso Station Geometry
  buildGemilai3200BChassis() {
    const theme = this.colorThemes[this.themeIndex];

    // ── Main Chassis Body (Brushed 304 Stainless Steel) ──
    const mainBody = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.5, 2.2), this.brushedInoxMat);
    mainBody.position.set(0, 0.4, -0.65);
    this.stationGroup.add(mainBody);

    // ── Left & Right Contoured Side Panels with CNC Ventilation Louvers ──
    const ventMat = new THREE.MeshBasicMaterial({ map: this.createSideVentTexture() });
    for (let side of [-1.72, 1.72]) {
      const sidePanel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.3, 2.05), this.matteSideMat);
      sidePanel.position.set(side, 0.4, -0.65);
      this.stationGroup.add(sidePanel);

      // CNC Ventilation Grid Plates
      const ventPlate = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.4), ventMat);
      ventPlate.position.set(side + (side > 0 ? 0.035 : -0.035), 0.45, -0.65);
      ventPlate.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
      this.stationGroup.add(ventPlate);

      // Precision Gold Anodized Accent Trim
      const sideGoldTrim = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 2.1), this.goldPVDMat);
      sideGoldTrim.position.set(side, 1.52, -0.65);
      this.stationGroup.add(sideGoldTrim);
    }

    // ── Machined Hex-Socket Corner Bolts (8 CNC Fasteners) ──
    const boltGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 6);
    const boltMat = this.mirrorChromeMat;
    const boltPositions = [
      [-1.68, 1.5, 0.42], [1.68, 1.5, 0.42],
      [-1.68, -0.6, 0.42], [1.68, -0.6, 0.42],
      [-1.68, 1.5, -1.7], [1.68, 1.5, -1.7],
      [-1.68, -0.6, -1.7], [1.68, -0.6, -1.7]
    ];
    for (let pos of boltPositions) {
      const bolt = new THREE.Mesh(boltGeo, boltMat);
      bolt.rotation.x = Math.PI / 2;
      bolt.position.set(...pos);
      this.stationGroup.add(bolt);
    }

    // ── Rear Transparent 1.7L Water Reservoir Module ──
    const waterTank = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.8, 0.45), this.glassHopperMat);
    waterTank.position.set(0, 0.6, -1.88);
    this.stationGroup.add(waterTank);

    const waterLevelLine = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.02, 0.02), this.neonCoreMat);
    waterLevelLine.position.set(0, 0.9, -1.65);
    this.stationGroup.add(waterLevelLine);

    // ── Heavy Anti-Vibration Cylindrical Feet (4 Feet) ──
    const footPositions = [[-1.45, -0.92, 0.75], [1.45, -0.92, 0.75], [-1.45, -0.92, -1.45], [1.45, -0.92, -1.45]];
    for (let fp of footPositions) {
      const footChrome = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.14, 24), this.mirrorChromeMat);
      footChrome.position.set(fp[0], fp[1], fp[2]);
      this.stationGroup.add(footChrome);

      const footPad = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.04, 24), this.matteBlackRubberMat);
      footPad.position.set(fp[0], fp[1] - 0.08, fp[2]);
      this.stationGroup.add(footPad);
    }

    // ── Top Cup Warming Tray & Perimeter Guard Rails ──
    const warmingPlate = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.04, 2.1), this.mirrorChromeMat);
    warmingPlate.position.set(0, 1.67, -0.65);
    this.stationGroup.add(warmingPlate);

    // 3-Side Polished Chrome Guard Rails with 6 Vertical Stanchions
    const railMat = this.mirrorChromeMat;
    const railBack = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 3.2, 16), railMat);
    railBack.rotation.z = Math.PI / 2;
    railBack.position.set(0, 1.82, -1.65);
    this.stationGroup.add(railBack);

    for (let side of [-1.6, 1.6]) {
      const railSide = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 2.0, 16), railMat);
      railSide.rotation.x = Math.PI / 2;
      railSide.position.set(side, 1.82, -0.65);
      this.stationGroup.add(railSide);

      for (let z of [-1.65, -0.65, 0.35]) {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.15, 12), railMat);
        pillar.position.set(side, 1.74, z);
        this.stationGroup.add(pillar);
      }
    }

    // Ceramic Espresso Demitasse Cups Warming on Top
    for (let xPos of [-0.85, 0.85]) {
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.17, 0.3, 24), this.mirrorChromeMat);
      cup.position.set(xPos, 1.82, -0.65);
      this.stationGroup.add(cup);

      const saucer = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.03, 24), this.brushedInoxMat);
      saucer.position.set(xPos, 1.68, -0.65);
      this.stationGroup.add(saucer);
    }

    // ── Front Control Fascia ──
    // Machine Nameplate Badge
    const badgeGeo = new THREE.PlaneGeometry(1.6, 0.4);
    const badgeMat = new THREE.MeshBasicMaterial({ map: this.createMachineBadgeTexture() });
    const logoBadge = new THREE.Mesh(badgeGeo, badgeMat);
    logoBadge.position.set(0, 1.46, 0.46);
    this.stationGroup.add(logoBadge);

    // 4 Backlit Tactile Control Membrane Buttons (Single, Double, Manual, Hot Water)
    const btnLabels = [-0.6, -0.2, 0.2, 0.6];
    this.buttonHalos = [];
    for (let bx of btnLabels) {
      const btnBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.04, 24), this.matteSideMat);
      btnBase.rotation.x = Math.PI / 2;
      btnBase.position.set(bx, 1.15, 0.46);
      this.stationGroup.add(btnBase);

      const btnHalo = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.012, 16, 32), this.neonCoreMat);
      btnHalo.position.set(bx, 1.15, 0.485);
      this.stationGroup.add(btnHalo);
      this.buttonHalos.push(btnHalo);

      const btnCap = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.02, 24), this.mirrorChromeMat);
      btnCap.rotation.x = Math.PI / 2;
      btnCap.position.set(bx, 1.15, 0.485);
      this.stationGroup.add(btnCap);
    }

    // Analog Extraction Pressure Manometer (Center-Left)
    const gaugeHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.1, 32), this.mirrorChromeMat);
    gaugeHousing.rotation.x = Math.PI / 2;
    gaugeHousing.position.set(-0.85, 0.78, 0.46);
    this.stationGroup.add(gaugeHousing);

    const gaugeFace = new THREE.Mesh(
      new THREE.CircleGeometry(0.39, 32),
      new THREE.MeshBasicMaterial({ map: this.createGemilaiGaugeTexture() })
    );
    gaugeFace.position.set(-0.85, 0.78, 0.515);
    this.stationGroup.add(gaugeFace);

    // 3D Oscillating Mechanical Pressure Needle
    const needle = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.24, 0.01), new THREE.MeshBasicMaterial({ color: 0xff3b30 }));
    needle.position.set(-0.85, 0.78, 0.525);
    this.stationGroup.add(needle);
    this.gaugeNeedles = [needle];

    // Digital OLED PID Screen (Center-Right)
    const oledScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 0.6),
      new THREE.MeshBasicMaterial({ map: this.createOledScreenTexture() })
    );
    oledScreen.position.set(0.85, 0.78, 0.465);
    this.stationGroup.add(oledScreen);

    // ── Recessed Group Head Alcove with Mirror Splashback ──
    const alcoveBack = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.1), this.mirrorChromeMat);
    alcoveBack.position.set(0, 0.35, 0.12);
    this.stationGroup.add(alcoveBack);

    // ── Heavy Commercial 58mm E61 Group Head & Portafilter ──
    const groupHead = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.75, 0.46, 36), this.mirrorChromeMat);
    groupHead.position.set(0, 0.65, 0.18);
    this.stationGroup.add(groupHead);

    const groupGoldRing = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.02, 16, 48), this.goldPVDMat);
    groupGoldRing.rotation.x = Math.PI / 2;
    groupGoldRing.position.set(0, 0.65, 0.18);
    this.stationGroup.add(groupGoldRing);

    // 58mm Portafilter Collar
    const portafilterCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.52, 0.22, 32), this.brassGroupMat);
    portafilterCollar.position.set(0, 0.42, 0.18);
    this.stationGroup.add(portafilterCollar);

    // Walnut Handle extending forward at ergonomic 12° barista angle
    const handleStem = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.35, 16), this.mirrorChromeMat);
    handleStem.rotation.x = Math.PI / 2;
    handleStem.position.set(0, 0.42, 0.52);
    this.stationGroup.add(handleStem);

    const handleGrip = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.09, 0.95, 24), this.walnutMat);
    handleGrip.rotation.x = Math.PI / 2;
    handleGrip.position.set(0, 0.42, 1.15);
    this.stationGroup.add(handleGrip);

    const handleEndCap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), this.goldPVDMat);
    handleEndCap.position.set(0, 0.42, 1.64);
    this.stationGroup.add(handleEndCap);

    // Dual Duckbill Spouts (2 Vòi Mỏ Vịt)
    this.espressoStreams = [];
    for (let side of [-0.15, 0.15]) {
      const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.024, 0.18, 16), this.goldPVDMat);
      spout.position.set(side, 0.32, 0.18);
      this.stationGroup.add(spout);

      // Active Caramel Espresso Pouring Stream
      const streamGeo = new THREE.CylinderGeometry(0.016, 0.012, 0.12, 12);
      const stream = new THREE.Mesh(streamGeo, this.cremaCaramelMat);
      stream.position.set(side, 0.22, 0.18);
      this.stationGroup.add(stream);
      this.espressoStreams.push(stream);
    }

    // ── Rotary Steam Valve Knob & Hot Water Tap (Right Side) ──
    const steamKnobBase = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.12, 24), this.matteSideMat);
    steamKnobBase.position.set(1.76, 0.95, 0.1);
    steamKnobBase.rotation.z = Math.PI / 2;
    this.stationGroup.add(steamKnobBase);

    const steamKnobCap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.04, 24), this.mirrorChromeMat);
    steamKnobCap.position.set(1.82, 0.95, 0.1);
    steamKnobCap.rotation.z = Math.PI / 2;
    this.stationGroup.add(steamKnobCap);

    // Dedicated Hot Water Wand (Right)
    const hotWaterPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.5, 16), this.mirrorChromeMat);
    hotWaterPipe.position.set(1.48, 0.35, 0.2);
    this.stationGroup.add(hotWaterPipe);

    // ── 360° Commercial Stainless Steel Steam Wand (Left Side) ──
    const steamPivot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), this.goldPVDMat);
    steamPivot.position.set(-1.55, 0.85, 0.2);
    this.stationGroup.add(steamPivot);

    const steamPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.65, 16), this.mirrorChromeMat);
    steamPipe.rotation.z = Math.PI / 4.2;
    steamPipe.position.set(-1.75, 0.55, 0.25);
    this.stationGroup.add(steamPipe);

    // Silicone Heat-Resistant Rubber Grip on Wand
    const wandGrip = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.2, 16), this.matteBlackRubberMat);
    wandGrip.rotation.z = Math.PI / 4.2;
    wandGrip.position.set(-1.75, 0.65, 0.25);
    this.stationGroup.add(wandGrip);

    const steamTip = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.065, 0.28, 16), this.mirrorChromeMat);
    steamTip.position.set(-1.95, 0.26, 0.3);
    this.stationGroup.add(steamTip);

    // ── Stainless Steel Drip Tray & Perforated Drainage Grille ──
    const dripBase = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.26, 1.8), this.brushedInoxMat);
    dripBase.position.set(0, -0.78, 0.18);
    this.stationGroup.add(dripBase);

    // Laser-Slotted Drainage Grille
    const dripGrilleMat = new THREE.MeshStandardMaterial({
      map: this.createDripGridTexture(),
      metalness: 0.96,
      roughness: 0.1
    });
    const dripGrille = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.03, 1.6), dripGrilleMat);
    dripGrille.position.set(0, -0.64, 0.18);
    this.stationGroup.add(dripGrille);

    // Red Water Level Float Indicator
    const floatIndicator = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.12, 12), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    floatIndicator.position.set(1.3, -0.62, 0.7);
    this.stationGroup.add(floatIndicator);

    // Bottom Neon Trim Under Drip Tray
    const bottomNeon = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.02, 0.03), this.neonCoreMat);
    bottomNeon.position.set(0, -0.9, 1.08);
    this.stationGroup.add(bottomNeon);
  }

  // 2. Accompanying Commercial Coffee Grinder (CRM 020 / CRM 9005)
  buildCommercialGrinder() {
    const grinderGroup = new THREE.Group();
    grinderGroup.position.set(2.05, 0.15, -0.45);

    // Heavy Metal Grinder Body
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 1.6, 32), this.brushedInoxMat);
    grinderGroup.add(base);

    // Stepless Micrometric Collar Adjustment Dial
    const dialCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.14, 32), this.goldPVDMat);
    dialCollar.position.set(0, 0.85, 0);
    grinderGroup.add(dialCollar);

    // Clear Polycarbonate Conical Bean Hopper
    const hopper = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.88, 32, 1, true), this.glassHopperMat);
    hopper.rotation.x = Math.PI;
    hopper.position.set(0, 1.38, 0);
    grinderGroup.add(hopper);

    // Packed 3D Roasted Coffee Beans Inside Hopper
    const beanGeo = this.createRealisticBeanGeometry();
    for (let b = 0; b < 14; b++) {
      const beanMesh = new THREE.Mesh(beanGeo, this.roastedBeanMat);
      const angle = (b / 14) * Math.PI * 2;
      const r = 0.12 + Math.random() * 0.24;
      beanMesh.position.set(Math.cos(angle) * r, 1.18 + Math.random() * 0.35, Math.sin(angle) * r);
      beanMesh.scale.set(0.35, 0.35, 0.35);
      beanMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      grinderGroup.add(beanMesh);
    }

    // Chrome Hopper Lid
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.08, 32), this.mirrorChromeMat);
    lid.position.set(0, 1.84, 0);
    grinderGroup.add(lid);

    // Dosing Chute & Hands-free Portafilter Fork
    const chute = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.28, 0.25), this.mirrorChromeMat);
    chute.position.set(0, 0.25, 0.45);
    grinderGroup.add(chute);

    this.stationGroup.add(grinderGroup);
  }

  // 3. Authentic Vietnamese Salted Coffee To-Go Cup (Cốc Cà Phê Muối Đất Sài)
  buildSaltedCoffeeToGoCup() {
    // Tapered Cup Body standing on the Drip Tray (y = -0.64)
    const cupGeo = new THREE.CylinderGeometry(0.48, 0.36, 0.85, 48);
    this.cupBody = new THREE.Mesh(cupGeo, new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.08
    }));
    this.cupBody.position.set(0, -0.215, 0.18);
    this.tumblerGroup.add(this.cupBody);

    // Top Polished Gold Rim
    const topRim = new THREE.Mesh(new THREE.TorusGeometry(0.485, 0.015, 16, 48), this.goldPVDMat);
    topRim.rotation.x = Math.PI / 2;
    topRim.position.set(0, 0.21, 0.18);
    this.tumblerGroup.add(topRim);

    // Đất Sài Branded Thermal Sleeve (Custom Dynamic Texture Wrap)
    const sleeveGeo = new THREE.CylinderGeometry(0.44, 0.39, 0.42, 48, 1, true);
    const sleeveMat = new THREE.MeshStandardMaterial({
      map: this.createCupSleeveTexture(),
      roughness: 0.35,
      metalness: 0.15
    });
    const sleeve = new THREE.Mesh(sleeveGeo, sleeveMat);
    sleeve.position.set(0, -0.215, 0.18);
    this.tumblerGroup.add(sleeve);

    // Gold Trim Accent Rings on Sleeve
    this.sleeveNeonTop = new THREE.Mesh(new THREE.TorusGeometry(0.445, 0.01, 16, 48), this.goldPVDMat);
    this.sleeveNeonTop.rotation.x = Math.PI / 2;
    this.sleeveNeonTop.position.set(0, -0.005, 0.18);
    this.tumblerGroup.add(this.sleeveNeonTop);

    this.sleeveNeonBottom = new THREE.Mesh(new THREE.TorusGeometry(0.395, 0.01, 16, 48), this.goldPVDMat);
    this.sleeveNeonBottom.rotation.x = Math.PI / 2;
    this.sleeveNeonBottom.position.set(0, -0.425, 0.18);
    this.tumblerGroup.add(this.sleeveNeonBottom);

    // ── 3 Layers of Authentic Vietnamese Salted Coffee ──
    // 1. Bottom Layer: Sweet Condensed Milk (Sữa đặc ngọt béo)
    const condensedMilk = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.36, 0.16, 36), this.condensedMilkMat);
    condensedMilk.position.set(0, -0.55, 0.18);
    this.tumblerGroup.add(condensedMilk);

    // 2. Middle Layer: Dark Espresso & Iced Blend
    const espressoLayer = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.38, 0.48, 36), this.espressoLiquidMat);
    espressoLayer.position.set(0, -0.23, 0.18);
    this.tumblerGroup.add(espressoLayer);

    // 3. Top Layer: Velvety Sea Salt Cream Foam (Lớp Kem Muối Biển)
    const saltedCreamFoam = new THREE.Mesh(new THREE.CircleGeometry(0.46, 36), this.saltedCreamMat);
    saltedCreamFoam.rotation.x = -Math.PI / 2;
    saltedCreamFoam.position.set(0, 0.19, 0.18);
    this.tumblerGroup.add(saltedCreamFoam);

    // Caramel & Cocoa Dusting Swirl on Foam
    const cremaSwirl = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.44, 36), this.cremaCaramelMat);
    cremaSwirl.rotation.x = -Math.PI / 2;
    cremaSwirl.position.set(0, 0.195, 0.18);
    this.tumblerGroup.add(cremaSwirl);
  }

  // 4. Roasted Coffee Bean Geometry with Iconic Center Cleft
  createRealisticBeanGeometry() {
    const geo = new THREE.SphereGeometry(0.32, 20, 20);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i) * 1.45;
      let z = pos.getZ(i) * 0.72;

      if (z > 0) {
        const cleft = Math.exp(-Math.abs(x) * 4.8) * 0.24;
        z -= cleft;
      }
      pos.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }

  // 5. Mechanical HUD, Hologram Gyroscopes & Floating Telemetry Plaques
  buildMechanicalHUD() {
    const theme = this.colorThemes[this.themeIndex];

    // HUD Hologram Gyroscope Rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: theme.primary, transparent: true, opacity: 0.45 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: theme.secondary, transparent: true, opacity: 0.35 });

    this.hudRing1 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.012, 16, 120), ringMat1);
    this.hudRing1.rotation.x = Math.PI / 2.3;
    this.hudGroup.add(this.hudRing1);

    this.hudRing2 = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.01, 16, 120), ringMat2);
    this.hudRing2.rotation.y = Math.PI / 3.0;
    this.hudGroup.add(this.hudRing2);

    // Laser Scan Plane
    const laserGeo = new THREE.TorusGeometry(1.5, 0.016, 16, 64);
    this.laserRing = new THREE.Mesh(laserGeo, new THREE.MeshBasicMaterial({
      color: theme.primary,
      transparent: true,
      opacity: 0.75
    }));
    this.laserRing.rotation.x = Math.PI / 2;
    this.hudGroup.add(this.laserRing);

    // Orbiting Roasted Coffee Beans in Magnetic Trajectory
    const beanGeo = this.createRealisticBeanGeometry();
    const count = 6;
    const radius = 2.35;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const mesh = new THREE.Mesh(beanGeo, this.roastedBeanMat);

      const y = Math.sin(i * 1.6) * 0.45;
      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);

      const scale = 0.38 + (i % 2) * 0.08;
      mesh.scale.set(scale, scale, scale);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      mesh.userData = {
        angle: angle,
        orbitRadius: radius + (i % 2 === 0 ? 0.2 : -0.15),
        speed: 0.3 + (i % 2) * 0.1,
        baseY: y,
        rotSpeedX: 0.02 + Math.random() * 0.01,
        rotSpeedY: 0.025 + Math.random() * 0.015
      };

      this.beans.push(mesh);
      this.hudGroup.add(mesh);
    }
  }

  // 6. Quantum Illuminated Steam Rising from Cup & Extraction
  buildQuantumSteam() {
    this.steamGroup = new THREE.Group();
    this.steamGroup.position.set(0, 0.25, 0.18);

    const count = 24;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.08, 10, 10);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xfff8ee,
        transparent: true,
        opacity: 0.0
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = {
        life: Math.random(),
        speed: 0.3 + Math.random() * 0.22,
        driftX: (Math.random() - 0.5) * 0.14,
        driftZ: (Math.random() - 0.5) * 0.14,
        scale: 0.7 + Math.random() * 0.5
      };
      this.steamParticles.push(mesh);
      this.steamGroup.add(mesh);
    }
    this.mainGroup.add(this.steamGroup);
  }

  // Trigger Interactive Live Extraction Cycle
  toggleExtraction() {
    this.isExtracting = !this.isExtracting;
    const btnExtract = document.getElementById('btn-3d-extract');

    if (this.isExtracting) {
      this.targetPressure = 9.2;
      this.extractTimer = 0.0;
      if (btnExtract) {
        btnExtract.classList.add('active');
        btnExtract.textContent = '☕ Đang Chiết Xuất...';
      }
    } else {
      this.targetPressure = 1.2;
      if (btnExtract) {
        btnExtract.classList.remove('active');
        btnExtract.textContent = '☕ Chiết Xuất 15-Bar';
      }
    }
  }

  // Switch Cyber Color Themes
  switchColorTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.colorThemes.length;
    const theme = this.colorThemes[this.themeIndex];

    this.neonAccentLight.color.setHex(theme.primary);
    this.neonCoreMat.color.setHex(theme.primary);
    this.hudRing1.material.color.setHex(theme.primary);
    this.laserRing.material.color.setHex(theme.primary);

    const btnTheme = document.getElementById('btn-3d-theme');
    if (btnTheme) btnTheme.textContent = `🎨 ${theme.name}`;
  }

  bindEvents() {
    // Resize
    window.addEventListener('resize', () => {
      if (!this.canvas || !this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // Pointer Drag & Tilt
    const onPointerDown = (x, y) => {
      this.isDragging = true;
      this.autoRotate = false;
      this.prevPointerX = x;
      this.prevPointerY = y;
    };

    const onPointerMove = (x, y) => {
      if (!this.isDragging) {
        const rect = this.container.getBoundingClientRect();
        const normY = (y - rect.top) / rect.height - 0.5;
        this.targetRotX = 0.06 + normY * 0.3;
        return;
      }
      const dx = x - this.prevPointerX;
      const dy = y - this.prevPointerY;
      this.prevPointerX = x;
      this.prevPointerY = y;

      this.targetRotY += dx * 0.008;
      this.targetRotX = Math.max(-0.25, Math.min(0.5, this.targetRotX + dy * 0.006));
    };

    const onPointerUp = () => {
      this.isDragging = false;
    };

    this.container.addEventListener('mousedown', (e) => onPointerDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onPointerUp);

    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', onPointerUp);

    // Interactive Buttons
    const btnRotate = document.getElementById('btn-3d-rotate');
    const btnExtract = document.getElementById('btn-3d-extract');
    const btnWireframe = document.getElementById('btn-3d-wireframe');
    const btnLaser = document.getElementById('btn-3d-laser');
    const btnSteam = document.getElementById('btn-3d-steam');
    const btnTheme = document.getElementById('btn-3d-theme');

    btnRotate?.addEventListener('click', () => {
      this.autoRotate = !this.autoRotate;
      btnRotate.classList.toggle('active', this.autoRotate);
    });

    btnExtract?.addEventListener('click', () => {
      this.toggleExtraction();
    });

    btnWireframe?.addEventListener('click', () => {
      this.isWireframe = !this.isWireframe;
      this.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.wireframe = this.isWireframe;
        }
      });
      btnWireframe.classList.toggle('active', this.isWireframe);
    });

    btnLaser?.addEventListener('click', () => {
      this.laserActive = !this.laserActive;
      this.laserRing.visible = this.laserActive;
      btnLaser.classList.toggle('active', this.laserActive);
    });

    btnSteam?.addEventListener('click', () => {
      this.steamEnabled = !this.steamEnabled;
      this.steamGroup.visible = this.steamEnabled;
      btnSteam.classList.toggle('active', this.steamEnabled);
    });

    btnTheme?.addEventListener('click', () => {
      this.switchColorTheme();
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    // Auto rotate
    if (this.autoRotate && !this.isDragging) {
      this.targetRotY += 0.28 * delta;
    }

    // Smooth Lerp Rotation
    this.currentRotY += (this.targetRotY - this.currentRotY) * 0.08;
    this.currentRotX += (this.targetRotX - this.currentRotX) * 0.08;

    this.mainGroup.rotation.y = this.currentRotY;
    this.mainGroup.rotation.x = this.currentRotX;

    // Smooth Pressure Lerp & Natural Vibration Jitter
    this.currentPressure += (this.targetPressure - this.currentPressure) * 0.1;
    const jitter = this.isExtracting ? Math.sin(elapsed * 12.0) * 0.08 : 0;

    // Dial Needle Physics (0 to 16 Bar mapped to dial arc)
    if (this.gaugeNeedles && this.gaugeNeedles.length) {
      const barRatio = (this.currentPressure + jitter) / 16;
      this.gaugeNeedles[0].rotation.z = 0.75 * Math.PI - barRatio * (1.5 * Math.PI) + 0.35;
    }

    // Espresso Extraction Stream Dynamics
    if (this.espressoStreams) {
      const streamVisible = this.isExtracting && this.currentPressure > 3.0;
      for (let s of this.espressoStreams) {
        s.visible = streamVisible;
        if (streamVisible) {
          s.scale.set(1 + Math.sin(elapsed * 9) * 0.15, 1, 1 + Math.cos(elapsed * 9) * 0.15);
        }
      }
    }

    // Pulse Backlit Button Halos
    if (this.buttonHalos) {
      const haloPulse = 0.8 + Math.sin(elapsed * 4.0) * 0.2;
      for (let h of this.buttonHalos) {
        h.scale.set(haloPulse, haloPulse, 1);
      }
    }

    // HUD Gyroscope Multi-Axis Rotations
    if (this.hudRing1) this.hudRing1.rotation.z += 0.22 * delta;
    if (this.hudRing2) this.hudRing2.rotation.x += 0.28 * delta;

    // Laser Scanner Sweep
    if (this.laserActive && this.laserRing) {
      this.laserRing.position.y = Math.sin(elapsed * 2.2) * 1.35 + 0.2;
      this.laserRing.material.opacity = 0.5 + Math.sin(elapsed * 4.5) * 0.35;
    }

    // Orbiting Roasted Beans
    for (let i = 0; i < this.beans.length; i++) {
      const bean = this.beans[i];
      const d = bean.userData;
      d.angle += d.speed * delta;

      bean.position.x = Math.cos(d.angle) * d.orbitRadius;
      bean.position.z = Math.sin(d.angle) * d.orbitRadius;
      bean.position.y = d.baseY + Math.sin(elapsed * 2.2 + i) * 0.16;

      bean.rotation.x += d.rotSpeedX;
      bean.rotation.y += d.rotSpeedY;
    }

    // Quantum Steam Particles Rising from Salted Coffee Cup
    if (this.steamEnabled && this.steamParticles) {
      for (let i = 0; i < this.steamParticles.length; i++) {
        const p = this.steamParticles[i];
        const d = p.userData;

        d.life += delta * 0.55;
        if (d.life > 1) {
          d.life = 0;
          p.position.set((Math.random() - 0.5) * 0.2, 0, (Math.random() - 0.5) * 0.2);
        }

        p.position.y = d.life * 1.35;
        p.position.x += d.driftX * delta;
        p.position.z += d.driftZ * delta;

        p.material.opacity = Math.sin(d.life * Math.PI) * 0.4;
        const s = d.scale * (1 + d.life * 1.5);
        p.scale.set(s, s, s);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// ──────────────── 3. UI CONTROLLER & APP INITIALIZER ────────────────
class FranchiseLandingApp {
  constructor() {
    this.currentPackage = 'qcfm5';
    this.currentCategory = 'all';

    this.initHeaderNav();
    this.initPackageTabs();
    this.initEquipmentSection();
    this.initRoiCalculator();
    this.initContactForm();
    this.initGlobalModal();
  }

  // Sticky & Mobile Header
  initHeaderNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const closeBtn = document.getElementById('mobile-nav-close');

    const toggleDrawer = (open) => {
      drawer?.classList.toggle('open', open);
      overlay?.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggleBtn?.addEventListener('click', () => toggleDrawer(true));
    closeBtn?.addEventListener('click', () => toggleDrawer(false));
    overlay?.addEventListener('click', () => toggleDrawer(false));

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // Package Switcher Tabs
  initPackageTabs() {
    const tabButtons = document.querySelectorAll('.pkg-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const pkgKey = btn.getAttribute('data-package');
        if (!pkgKey || !FRANCHISE_DATA[pkgKey]) return;

        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.currentPackage = pkgKey;
        this.renderPackageShowcase(pkgKey);
        this.renderEquipmentGrid();
      });
    });

    this.renderPackageShowcase('qcfm5');
  }

  renderPackageShowcase(pkgKey) {
    const data = FRANCHISE_DATA[pkgKey];
    if (!data) return;

    const showcaseCard = document.getElementById('package-showcase-container');
    if (!showcaseCard) return;

    const featuresHtml = data.features.map(f => `
      <div class="pkg-feature-item">
        <div class="pkg-check-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <span>${f}</span>
      </div>
    `).join('');

    showcaseCard.innerHTML = `
      <div class="pkg-info-side">
        <div class="pkg-header-badge">${data.code}</div>
        <h3 class="pkg-name">${data.title}</h3>
        <p class="pkg-target">${data.target}</p>

        <div class="pkg-financial-row">
          <div class="financial-item">
            <div class="financial-item-label">Ký Quỹ Đặt Cọc</div>
            <div class="financial-item-val">${data.deposit}</div>
          </div>
          <div class="financial-item">
            <div class="financial-item-label">Phí Thuê Bán Thử</div>
            <div class="financial-item-val">${data.dailyRental}</div>
          </div>
          <div class="financial-item">
            <div class="financial-item-label">Cam Kết Hoàn Vốn</div>
            <div class="financial-item-val" style="font-size: 1.15rem; color: var(--success-green);">${data.payback.includes('6 tháng') ? '100% (6 Tháng)' : '100% Hoàn Vốn'}</div>
          </div>
        </div>

        <div class="pkg-features-list">
          ${featuresHtml}
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="#contact" class="btn-primary-gold" onclick="document.getElementById('form-package').value = '${data.code}';">
            Đăng Ký Gói Này Ngay
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#calculator" class="btn-secondary-outline" onclick="if(window.selectFranchiseCalcPackage) window.selectFranchiseCalcPackage('${pkgKey}', true);">
            📊 Tính Lợi Nhuận Gói Này
          </a>
          <a href="#equipment" class="btn-secondary-outline">
            Xem ${data.itemsCount} Thiết Bị
          </a>
        </div>
      </div>

      <div class="pkg-visual-side">
        <div class="pkg-placeholder-wrapper">
          <svg class="pkg-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="3" width="18" height="18" rx="3" ry="3"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <div class="pkg-placeholder-title">${data.code}</div>
          <div class="pkg-placeholder-sub">Khu vực hiển thị hình ảnh quầy xe & thiết bị thực tế</div>
        </div>
      </div>
    `;
  }

  // Equipment Matrix (28-31 Items Clean Blank Placeholders)
  initEquipmentSection() {
    const filterPills = document.querySelectorAll('.eq-filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        this.currentCategory = pill.getAttribute('data-category') || 'all';
        this.renderEquipmentGrid();
      });
    });

    this.renderEquipmentGrid();
  }

  renderEquipmentGrid() {
    const grid = document.getElementById('equipment-grid');
    if (!grid) return;

    const pkg = (this.currentPackage === 'qcfm10') ? FRANCHISE_DATA.qcfm10 : FRANCHISE_DATA.qcfm5;
    const items = pkg.items || [];

    const filtered = this.currentCategory === 'all' 
      ? items 
      : items.filter(item => item.group === this.currentCategory);

    grid.innerHTML = filtered.map(item => `
      <div class="equipment-card">
        <span class="eq-stt-badge">#${item.stt}</span>
        ${item.badge ? `<span class="eq-special-badge">${item.badge}</span>` : ''}
        
        <!-- Clean Image Placeholder -->
        <div class="eq-img-box">
          <svg class="eq-img-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span class="eq-img-placeholder-text">Hình ảnh thiết bị #${item.stt}</span>
        </div>

        <div class="eq-item-name">${item.name}</div>
        <div class="eq-meta-row">
          <span>${item.group_name}</span>
          <span class="eq-qty-pill">${item.qty} ${item.unit}</span>
        </div>
      </div>
    `).join('');
  }

  // Interactive Live ROI Calculator & Unit Economics Logic
  initRoiCalculator() {
    const sliderCups = document.getElementById('slider-cups');
    const sliderPrice = document.getElementById('slider-price');
    const sliderBeanPrice = document.getElementById('slider-bean-price');
    const selectCoffeeProduct = document.getElementById('select-coffee-product');
    const sliderRent = document.getElementById('slider-rent');
    const methodRadios = document.querySelectorAll('input[name="calc-brewing-method"]');
    const pkgRadios = document.querySelectorAll('input[name="calc-franchise-pkg"]');

    const valPackageBadge = document.getElementById('val-package-badge');
    const valMethodYield = document.getElementById('val-method-yield');
    const valCups = document.getElementById('val-cups');
    const valPrice = document.getElementById('val-price');
    const valBeanPrice = document.getElementById('val-bean-price');
    const valBeanPriceDiscounted = document.getElementById('val-bean-price-discounted');
    const valRent = document.getElementById('val-rent');

    const outPkgBadge = document.getElementById('calc-out-pkg-badge');
    const outInvestmentVal = document.getElementById('calc-out-investment-val');
    const outRevenue = document.getElementById('calc-out-revenue');
    const outCupBeanCost = document.getElementById('calc-out-cup-bean-cost');
    const outBeanCostTotal = document.getElementById('calc-out-bean-cost-total');
    const outSuppliesCost = document.getElementById('calc-out-supplies-cost');
    const outCogs = document.getElementById('calc-out-cogs');
    const outBeans = document.getElementById('calc-out-beans');
    const outBonus = document.getElementById('calc-out-bonus');
    const outBeanSaved = document.getElementById('calc-out-bean-saved');
    const outRent = document.getElementById('calc-out-rent');
    const outGrossProfit = document.getElementById('calc-out-gross');
    const outNetProfit = document.getElementById('calc-out-profit');
    const outPayback = document.getElementById('calc-out-payback');

    const ownershipPanel = document.getElementById('calc-ownership-panel');
    const rentalSliderPanel = document.getElementById('calc-rental-slider-panel');

    /**
     * ──────────────── DANH MỤC 4 GÓI NHƯỢNG QUYỀN & THÔNG SỐ CHUẨN ────────────────
     */
    const PACKAGES_CONFIG = {
      qcfm5: {
        name: 'Gói Khởi Nghiệp QCFM 5',
        badgeText: 'Gói QCFM 5 (Vốn: 6.000.000 đ)',
        investmentValText: '6.000.000 đ (Mua sở hữu)',
        investment: 6000000,
        isRental: false,
        defaultCups: 60,
        defaultPrice: 18000,
        defaultMethod: 'machine',
        defaultBean: 238000,
        rentDaily: 0
      },
      qcfm10: {
        name: 'Gói Tiêu Chuẩn Inox QCFM 10',
        badgeText: 'Gói Inox QCFM 10 (Vốn: 10.000.000 đ)',
        investmentValText: '10.000.000 đ (Mua sở hữu)',
        investment: 10000000,
        isRental: false,
        defaultCups: 90,
        defaultPrice: 18000,
        defaultMethod: 'machine',
        defaultBean: 238000,
        rentDaily: 0
      },
      espresso: {
        name: 'Gói Pha Máy Espresso CRM 3200B',
        badgeText: 'Gói Pha Máy Espresso (Vốn: 26.500.000 đ)',
        investmentValText: '26.500.000 đ (Mua sở hữu)',
        investment: 26500000,
        isRental: false,
        defaultCups: 120,
        defaultPrice: 20000,
        defaultMethod: 'machine',
        defaultBean: 392000,
        rentDaily: 0
      },
      rental: {
        name: 'Gói Thuê Quầy Bán Thử 0 Rủi Ro',
        badgeText: 'Gói Thuê Bán Thử (Cọc: 6.000.000 đ)',
        investmentValText: '6.000.000 đ (Ký quỹ hoàn lại 100%)',
        investment: 6000000,
        isRental: true,
        defaultCups: 50,
        defaultPrice: 18000,
        defaultMethod: 'machine',
        defaultBean: 238000,
        rentDaily: 15000
      }
    };

    /**
     * ──────────────── ĐỊNH MỨC QUY ĐỔI SẢN LƯỢNG & CHI PHÍ HẠT ĐẤT SÀI ────────────────
     * Bảng giá hạt Đất Sài chính hãng: từ 238.000đ (R1 gia công) đến 518.000đ (Espresso)
     * 1. Pha Phin: 1 kg tương đương ~40 ly (Định mức ~25g bột / ly phin truyền thống)
     * 2. Pha Máy: 1 kg tương đương 60 ly (Định mức ~16.7g bột / ly chiết xuất máy Espresso)
     * 3. Chính sách 10 TẶNG 1: Cứ mỗi 10kg hạt nhập, đối tác được TẶNG THÊM 1kg MIỄN PHÍ (~10% giảm giá vốn hạt).
     * 4. Phụ liệu (Sốt kem muối 1.600đ + Ly nắp 1.100đ + Đá túi 700đ) = 3.400đ / ly
     */
    const suppliesCostPerCup = 3400; // Kem muối (1.6k) + Bao bì (1.1k) + Đá túi (0.7k)
    const daysPerMonth = 30;

    let selectedPackageKey = 'qcfm5';
    let selectedMethod = 'machine'; // 'machine' | 'phin'

    const calculate = () => {
      const currentPkg = PACKAGES_CONFIG[selectedPackageKey] || PACKAGES_CONFIG.qcfm5;
      const cups = parseInt(sliderCups?.value || '60', 10);
      const price = parseInt(sliderPrice?.value || '18000', 10);
      const beanPricePerKg = parseInt(sliderBeanPrice?.value || '238000', 10);
      const rentDaily = currentPkg.isRental ? parseInt(sliderRent?.value || '15000', 10) : 0;

      // Yield per kg
      const yieldPerKg = selectedMethod === 'machine' ? 60 : 40;
      const gramPerCup = selectedMethod === 'machine' ? 16.7 : 25;

      const monthlyCups = cups * daysPerMonth;
      const monthlyRevenue = monthlyCups * price;

      // Total monthly bean requirement
      const monthlyBeansKg = (monthlyCups / yieldPerKg);
      const dailyBeansKg = (cups / yieldPerKg);

      // ──────────────── QUY TẮC MUA 10 TẶNG 1 THEO MỐC TRÒN 10KG ────────────────
      // Chỉ khi mua đủ 10kg trở lên mới được tặng 1kg; mua 15kg vẫn tặng 1kg; đến đủ 20kg mới tặng 2kg (Math.floor(kg / 10))
      const purchasedBeansKg = monthlyBeansKg;
      const bonusBeansKg = Math.floor(purchasedBeansKg / 10);
      const totalBeansReceivedKg = purchasedBeansKg + bonusBeansKg;

      // Tổng tiền đối tác thanh toán cho số kg hạt mua
      const totalMoneyPaidForBeans = purchasedBeansKg * beanPricePerKg;

      // Giá vốn hạt thực tế sau khi phân bổ lượng hạt tặng (nếu có)
      const effectiveBeanPricePerKg = totalBeansReceivedKg > 0 
        ? (totalMoneyPaidForBeans / totalBeansReceivedKg) 
        : beanPricePerKg;

      // Chi phí hạt tính cho mỗi ly cà phê
      const effectiveBeanCostPerCup = effectiveBeanPricePerKg / yieldPerKg;

      // Số tiền tiết kiệm thực tế hàng tháng nhờ hạt tặng
      const monthlyBeanSaved = bonusBeansKg * beanPricePerKg;

      // Chi phí hạt phân bổ theo số ly bán ra trong tháng
      const monthlyBeanCost = monthlyCups * effectiveBeanCostPerCup;

      // Total monthly supplies cost (3.400đ / ly)
      const monthlySuppliesCost = monthlyCups * suppliesCostPerCup;

      // Total COGS
      const monthlyCogs = monthlyBeanCost + monthlySuppliesCost;
      const effectiveCogsPerCup = monthlyCogs / monthlyCups;

      const monthlyGrossProfit = monthlyRevenue - monthlyCogs;
      const monthlyRent = rentDaily * daysPerMonth;
      
      // Fixed labor / operational support: Đất Sài supports 50%
      const monthlyLaborMisc = monthlyCups > 1500 ? 1200000 : 600000;

      const monthlyNetProfit = Math.max(0, monthlyGrossProfit - monthlyRent - monthlyLaborMisc);
      const depositAmount = currentPkg.investment;
      
      let paybackText = 'N/A';
      if (monthlyNetProfit > 0) {
        const rawMonths = (depositAmount / monthlyNetProfit);
        const monthsStr = rawMonths < 0.1 ? '< 0.1' : rawMonths.toFixed(1);
        if (currentPkg.isRental) {
          paybackText = `${monthsStr} Tháng (Ký quỹ 6tr - Hoàn 100% khi trả quầy)`;
        } else {
          const invMillion = (depositAmount / 1000000).toFixed(1).replace('.0', '');
          paybackText = `${monthsStr} Tháng (Vốn ${invMillion} Tr - Cam kết tối đa 6 tháng)`;
        }
      }

      if (valMethodYield) {
        valMethodYield.textContent = selectedMethod === 'machine' 
          ? `Pha Máy (60 ly / kg • ~16.7g/ly)` 
          : `Pha Phin (40 ly / kg • ~25g/ly)`;
      }

      if (valCups) valCups.textContent = `${cups} ly / ngày (${monthlyCups.toLocaleString('vi-VN')} ly/tháng)`;
      if (valPrice) valPrice.textContent = `${price.toLocaleString('vi-VN')} đ / ly`;
      if (valBeanPrice) valBeanPrice.textContent = `${beanPricePerKg.toLocaleString('vi-VN')} đ / kg`;
      if (valBeanPriceDiscounted) {
        valBeanPriceDiscounted.textContent = bonusBeansKg > 0
          ? `~${Math.round(effectiveBeanPricePerKg).toLocaleString('vi-VN')} đ/kg (Tặng +${bonusBeansKg}kg)`
          : `${beanPricePerKg.toLocaleString('vi-VN')} đ/kg (Chưa đạt mốc 10kg)`;
      }

      if (valRent) {
        if (currentPkg.isRental) {
          valRent.style.color = 'var(--gold-700)';
          valRent.style.background = 'var(--gold-100)';
          valRent.textContent = `${rentDaily.toLocaleString('vi-VN')} đ / ngày (${monthlyRent.toLocaleString('vi-VN')} đ/tháng)`;
        } else {
          valRent.style.color = '#059669';
          valRent.style.background = '#ECFDF5';
          valRent.textContent = '0 đ (Sở hữu trọn đời)';
        }
      }

      if (outRevenue) outRevenue.textContent = `${monthlyRevenue.toLocaleString('vi-VN')} đ`;
      if (outCupBeanCost) {
        outCupBeanCost.textContent = bonusBeansKg > 0
          ? `${Math.round(effectiveBeanCostPerCup).toLocaleString('vi-VN')} đ / ly (đã trừ hạt tặng)`
          : `${Math.round(effectiveBeanCostPerCup).toLocaleString('vi-VN')} đ / ly (giá gốc)`;
      }
      if (outBeanCostTotal) outBeanCostTotal.textContent = `-${Math.round(monthlyBeanCost).toLocaleString('vi-VN')} đ`;
      if (outSuppliesCost) outSuppliesCost.textContent = `-${monthlySuppliesCost.toLocaleString('vi-VN')} đ (3.4k/ly)`;
      if (outCogs) outCogs.textContent = `-${Math.round(monthlyCogs).toLocaleString('vi-VN')} đ (~${Math.round(effectiveCogsPerCup).toLocaleString('vi-VN')}đ/ly)`;
      if (outBeans) outBeans.textContent = `${monthlyBeansKg.toFixed(1)} kg hạt/tháng (~${dailyBeansKg.toFixed(2)} kg/ngày)`;
      if (outBonus) {
        outBonus.textContent = bonusBeansKg > 0
          ? `+${bonusBeansKg.toFixed(1)} kg MIỄN PHÍ (~${Math.round(bonusBeansKg * yieldPerKg)} ly tặng)`
          : `0 kg (Chưa đạt mốc 10kg)`;
      }
      if (outBeanSaved) {
        outBeanSaved.textContent = bonusBeansKg > 0
          ? `+${Math.round(monthlyBeanSaved).toLocaleString('vi-VN')} đ / tháng`
          : `0 đ / tháng`;
      }
      
      if (outRent) {
        if (currentPkg.isRental) {
          outRent.style.color = '#FFFFFF';
          outRent.textContent = `-${monthlyRent.toLocaleString('vi-VN')} đ`;
        } else {
          outRent.style.color = '#6EE7B7';
          outRent.textContent = '0 đ (Đã sở hữu trọn gói)';
        }
      }

      if (outGrossProfit) outGrossProfit.textContent = `+${Math.round(monthlyGrossProfit).toLocaleString('vi-VN')} đ (${Math.round((monthlyGrossProfit/monthlyRevenue)*100)}%)`;
      if (outNetProfit) outNetProfit.textContent = `+${Math.round(monthlyNetProfit).toLocaleString('vi-VN')} đ`;
      if (outPayback) outPayback.textContent = paybackText;

      // Sync Table Row Highlight
      syncTableRow(beanPricePerKg, selectCoffeeProduct?.value);
    };

    const syncTableRow = (priceVal, optVal) => {
      const rows = document.querySelectorAll('.coffee-row-item');
      rows.forEach(row => {
        const rowPrice = parseInt(row.dataset.price || '0', 10);
        const rowOpt = row.dataset.optVal;
        const isMatched = (optVal && rowOpt === optVal) || (!optVal && rowPrice === priceVal);

        const btn = row.querySelector('.btn-select-coffee-table');
        if (isMatched) {
          row.classList.add('active');
          if (btn) {
            btn.classList.add('active');
            btn.textContent = 'Đang chọn';
          }
        } else {
          row.classList.remove('active');
          if (btn) {
            btn.classList.remove('active');
            btn.textContent = 'Chọn';
          }
        }
      });
    };

    const setFranchisePackage = (pkgKey, applyPresets = true) => {
      if (!PACKAGES_CONFIG[pkgKey]) return;
      selectedPackageKey = pkgKey;
      const pkg = PACKAGES_CONFIG[pkgKey];

      // Update Radio and Active Class on Cards
      document.querySelectorAll('.calc-pkg-card').forEach(card => card.classList.remove('active'));
      const activeCard = document.getElementById(`calc-pkg-card-${pkgKey}`);
      if (activeCard) {
        activeCard.classList.add('active');
        const radio = activeCard.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      }

      // Update Header Badges
      if (valPackageBadge) valPackageBadge.textContent = pkg.badgeText;
      if (outPkgBadge) outPkgBadge.textContent = pkg.badgeText;
      if (outInvestmentVal) outInvestmentVal.textContent = pkg.investmentValText;

      // Toggle Rent Panels
      if (pkg.isRental) {
        if (ownershipPanel) ownershipPanel.style.display = 'none';
        if (rentalSliderPanel) rentalSliderPanel.style.display = 'block';
      } else {
        if (ownershipPanel) ownershipPanel.style.display = 'flex';
        if (rentalSliderPanel) rentalSliderPanel.style.display = 'none';
      }

      // Apply Presets (if requested)
      if (applyPresets) {
        if (sliderCups) sliderCups.value = pkg.defaultCups;
        if (sliderPrice) sliderPrice.value = pkg.defaultPrice;
        if (pkg.isRental && sliderRent) sliderRent.value = pkg.rentDaily;

        // Brewing method
        selectedMethod = pkg.defaultMethod;
        document.querySelectorAll('.method-select-card').forEach(c => c.classList.remove('active'));
        const activeMethodCard = document.getElementById(selectedMethod === 'machine' ? 'card-method-machine' : 'card-method-phin');
        if (activeMethodCard) {
          activeMethodCard.classList.add('active');
          const methodRadio = activeMethodCard.querySelector('input[type="radio"]');
          if (methodRadio) methodRadio.checked = true;
        }

        // Bean price
        if (sliderBeanPrice) sliderBeanPrice.value = pkg.defaultBean;
        if (selectCoffeeProduct) {
          const opt = Array.from(selectCoffeeProduct.options).find(o => parseInt(o.value, 10) === pkg.defaultBean);
          if (opt) selectCoffeeProduct.value = opt.value;
        }
      }

      calculate();
    };

    // Expose global helper for section sync
    window.selectFranchiseCalcPackage = setFranchisePackage;

    // Package card selection listeners
    document.querySelectorAll('.calc-pkg-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
          setFranchisePackage(radio.value, true);
        }
      });
    });

    // Click handler for table rows and buttons
    const tableRows = document.querySelectorAll('.coffee-row-item');
    tableRows.forEach(row => {
      row.addEventListener('click', (e) => {
        const targetPrice = parseInt(row.dataset.price || '238000', 10);
        const targetOpt = row.dataset.optVal || row.dataset.price;

        if (sliderBeanPrice) sliderBeanPrice.value = targetPrice;
        if (selectCoffeeProduct && targetOpt) {
          selectCoffeeProduct.value = targetOpt;
        }
        calculate();

        if (window.innerWidth <= 768 && !e.target.classList.contains('btn-select-coffee-table')) {
          const calcCard = document.querySelector('.calculator-card');
          if (calcCard) {
            calcCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    });

    methodRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        selectedMethod = e.target.value;
        document.querySelectorAll('.method-select-card').forEach(card => card.classList.remove('active'));
        const activeCard = document.getElementById(selectedMethod === 'machine' ? 'card-method-machine' : 'card-method-phin');
        if (activeCard) activeCard.classList.add('active');
        calculate();
      });
    });

    if (selectCoffeeProduct && sliderBeanPrice) {
      selectCoffeeProduct.addEventListener('change', (e) => {
        const val = parseInt(e.target.value, 10);
        sliderBeanPrice.value = val;
        calculate();
      });

      sliderBeanPrice.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (selectCoffeeProduct) {
          const matchedOption = Array.from(selectCoffeeProduct.options).find(opt => parseInt(opt.value, 10) === val);
          if (matchedOption) {
            selectCoffeeProduct.value = matchedOption.value;
          }
        }
        calculate();
      });
    }

    sliderCups?.addEventListener('input', calculate);
    sliderPrice?.addEventListener('input', calculate);
    sliderRent?.addEventListener('input', calculate);

    setFranchisePackage('qcfm5', true);
  }

  // Contact Form Submission
  initContactForm() {
    const form = document.getElementById('franchise-lead-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const phone = document.getElementById('form-phone')?.value.trim();
      const pkg = document.getElementById('form-package')?.value;
      const location = document.getElementById('form-location')?.value.trim();

      if (!name || !phone) {
        alert("Vui lòng điền đầy đủ Họ tên và Số điện thoại liên hệ.");
        return;
      }

      this.openTextModal(
        "Đăng Ký Tư Vấn Thành Công!",
        `<div style="text-align: center; padding: 20px 0;">
          <div style="font-size: 3rem; margin-bottom: 12px;">☕</div>
          <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--gold-700); margin-bottom: 8px;">Cảm ơn Quý khách ${name}!</h4>
          <p style="color: var(--text-body); margin-bottom: 20px; line-height: 1.6;">
            Chuyên viên tư vấn nhượng quyền <strong>CÔNG TY CỔ PHẦN ĐẤT SÀI</strong> sẽ liên hệ trực tiếp qua số điện thoại <strong>${phone}</strong> trong vòng 15 phút để gửi bảng báo giá chi tiết gói <strong>${pkg}</strong> tại khu vực <strong>${location || 'TP.HCM'}</strong>.
          </p>
          <div style="background: var(--gold-50); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-gold); font-size: 0.9rem; color: var(--gold-900);">
            Hotline hỗ trợ 24/7: <strong>0913 110 277</strong>
          </div>
        </div>`
      );

      form.reset();
    });
  }

  // Global Lightbox Modal
  initGlobalModal() {
    this.modal = document.getElementById('global-modal');
    this.modalBody = document.getElementById('global-modal-body');
    const closeBtn = document.getElementById('global-modal-close');

    closeBtn?.addEventListener('click', () => this.closeModal());
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  openTextModal(title, htmlContent) {
    if (!this.modal || !this.modalBody) return;
    this.modalBody.innerHTML = `
      <div>
        <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 14px; color: var(--text-title);">${title}</h3>
        ${htmlContent}
      </div>
    `;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ──────────────── 4. BOOTSTRAP APPLICATION ────────────────
document.addEventListener('DOMContentLoaded', () => {
  window.Cyber3DShowcase = new CyberMechanicalCoffee3D();
  window.FranchiseApp = new FranchiseLandingApp();
});
