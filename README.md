# ☕ Đất Sài Gòn Café — Official Website & E-Commerce Platform

[![GitHub Pages](https://img.shields.io/badge/Demo-Live%20Website-brightgreen?style=for-the-badge&logo=github)](https://thanhvp1.github.io/dsg-homepage)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blueviolet?style=for-the-badge)](https://thanhvp1.github.io/dsg-homepage)

Hệ thống website thương mại điện tử và giới thiệu thương hiệu hoàn chỉnh cho **Đất Sài Gòn Café** — Di sản cà phê rang mộc truyền thống Việt Nam.

---

## 🌐 Trải nghiệm trực tiếp (Live Demo)
👉 **Truy cập website tại:** **[https://thanhvp1.github.io/dsg-homepage](https://thanhvp1.github.io/dsg-homepage)**

---

## 🚀 Các Tính Năng Nổi Bật

### 1. 🛒 Hệ thống Giỏ hàng & Mua sắm hoàn chỉnh (Client-side)
- **Quản lý Giỏ hàng (`cart.js`):** Thêm, sửa số lượng, xóa sản phẩm, tính tổng tiền tự động, đồng bộ hóa bằng `localStorage` hoạt động thông suốt qua tất cả các trang.
- **Thanh toán (`thanh-toan.html`):** Form đặt hàng chuyên nghiệp, lựa chọn hình thức nhận hàng, thanh toán COD hoặc quét mã QR chuyển khoản tiện lợi.
- **Tra cứu đơn hàng (`tra-cuu-don-hang.html`):** Cho phép khách hàng nhập mã đơn để kiểm tra trạng thái và chi tiết đơn hàng đã lưu.
- **Thông báo Toast & Badge:** Cập nhật số lượng sản phẩm trên icon giỏ hàng và hiển thị thông báo pop-up trực quan khi thêm vào giỏ.

### 2. 📱 Trải nghiệm người dùng (UX/UI) & Mobile-First
- **Responsive 100%:** Tối ưu mượt mà từ màn hình siêu rộng (Ultra-Wide), Laptop, Tablet đến Smartphone.
- **Mobile Navigation Drawer & Bottom Bar:** Thanh điều hướng dưới đáy và menu vuốt sang hiện đại trên điện thoại.
- **Tìm kiếm toàn trang (Search Overlay):** Modal tìm kiếm nhanh sản phẩm theo từ khóa.
- **Nút liên hệ nhanh:** Tích hợp gọi điện trực tiếp, chat Zalo, Messenger và nút cuộn nhanh lên đầu trang (Back to Top).

### 3. 📄 Hệ thống Trang & Cấu trúc Nội dung phong phú
- **Trang chủ (`index.html`):** 11 Section bao gồm Hero Banner ấn tượng, câu chuyện thương hiệu, danh mục sản phẩm nổi bật, quy trình rang xay, cảm nhận khách hàng và tin tức hoạt động.
- **Danh mục & Chi tiết sản phẩm (`san-pham.html` & `san-pham/*.html`):** 
  - Đầy đủ 6 dòng cà phê chủ lực: **R1** (Robusta Thượng hạng), **RM** (Rang mộc nguyên chất), **RS** (Đậm đà pha phin), **CR** (Culi Robusta), **Culi** (Hạt tròn chọn lọc), **Espresso** (Pha máy chuẩn Ý).
  - Tùy chọn đóng gói, trọng lượng, số lượng, hình ảnh sắc nét và mô tả hương vị chuẩn SEO.
- **Về chúng tôi (`ve-chung-toi.html`):** Tầm nhìn, sứ mệnh, giá trị cốt lõi và hình ảnh nhà xưởng công nghệ cao.
- **Kiến thức cà phê & Pha chế (`kien-thuc-ca-phe.html`, `kien-thuc-ca-phe/pha-phin.html`):** Hướng dẫn pha phin chuẩn gu, mẹo bảo quản và văn hóa thưởng thức cà phê Sài Gòn.
- **Tin tức & Sự kiện (`tin-tuc.html`):** Bản tin khuyến mãi, thông tin vùng trồng và hoạt động thương hiệu.
- **Liên hệ (`lien-he.html`):** Bản đồ, thông tin hệ thống phân phối và form gửi phản hồi nhanh.
- **Chính sách (`chinh-sach.html`):** Quy định đổi trả, vận chuyển, bảo mật thông tin và điều khoản dịch vụ minh bạch.
- **Trang bổ trợ:** Trang cảm ơn khách hàng (`thanks-card.html`), Trang báo lỗi tùy biến (`404.html`) và Landing Page chuyên sâu (`Landing page/ld-dsg-index.html`).

---

## 📁 Cấu trúc Thư mục (Project Architecture)

```
Web-dsg/
├── index.html                      # Trang chủ chính
├── san-pham.html                   # Trang danh sách sản phẩm
├── san-pham/                       # Chi tiết từng dòng sản phẩm
│   ├── r1.html                     # Cà phê Rang Mộc R1
│   ├── rm.html                     # Cà phê Rang Mộc RM
│   ├── rs.html                     # Cà phê Rang Xay RS
│   ├── cr.html                     # Cà phê Culi Robusta CR
│   ├── culi.html                   # Cà phê Culi Thượng Hạng
│   └── es.html                     # Cà phê Pha Máy Espresso
├── gio-hang.html                   # Trang xem giỏ hàng
├── thanh-toan.html                 # Trang thanh toán (Checkout)
├── tra-cuu-don-hang.html           # Tra cứu trạng thái đơn hàng
├── ve-chung-toi.html               # Trang giới thiệu thương hiệu
├── kien-thuc-ca-phe.html           # Trang blog kiến thức cà phê
├── kien-thuc-ca-phe/
│   └── pha-phin.html               # Bài viết hướng dẫn pha phin
├── tin-tuc.html                    # Tin tức & Sự kiện
├── lien-he.html                    # Trang liên hệ & chi nhánh
├── chinh-sach.html                 # Chính sách & Điều khoản
├── thanks-card.html                # Thiệp cảm ơn điện tử kèm QR
├── 404.html                        # Trang lỗi 404 Not Found
│
├── Landing page/                   # Landing page chiến dịch
│   └── ld-dsg-index.html
│
├── style.css                       # Design system & styles cho trang chủ
├── pages.css                       # Stylesheets hợp nhất cho các trang con
├── cart.js                         # Bộ điều khiển giỏ hàng & logic toàn trang
│
├── assets/
│   └── images/                     # Tài nguyên hình ảnh, banner, logo & sản phẩm
│
├── .gitignore                      # Cấu hình bỏ qua tệp tạm & media raw nặng
└── README.md                       # Tài liệu hướng dẫn dự án
```

---

## 🎨 Bảng Màu & Nhận Diện Thương Hiệu (Design System)

| Yếu tố | Mã màu / Giá trị | Mô tả |
| :--- | :--- | :--- |
| **Primary Color** | `#CC1111` | Đỏ đậm truyền thống Đất Sài Gòn |
| **Secondary Color** | `#D4930A` | Vàng kim quý phái, tạo điểm nhấn |
| **Accent / Coffee Dark** | `#3E2723` | Nâu hạt cà phê rang mộc |
| **Background / Light** | `#FAFAFA` / `#FFFFFF` | Nền sáng hiện đại, thoáng đãng |
| **Typography** | `Public Sans` & `Playfair Display` | Hiện đại, thanh lịch và giàu tính thẩm mỹ |

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Setup)

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/Thanhvp1/dsg-homepage.git
   cd dsg-homepage
   ```

2. **Chạy trực tiếp:**
   - Dự án được xây dựng bằng công nghệ thuần (Pure HTML5/CSS3/Vanilla JS), không cần cài đặt Node.js hay build dependencies phức tạp.
   - Bạn có thể mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari) hoặc dùng tiện ích **Live Server** trên VS Code / Antigravity IDE để có trải nghiệm tốt nhất (tải lại trang tự động khi sửa code).

---

## 📌 Thông Tin Bản Quyền & Phát Triển
- **Đơn vị phát triển:** Đất Sài Gòn Café Dev Team
- **Bản quyền © 2026 Đất Sài Gòn Café.** All rights reserved.
