# 🚀 Website Portfolio tuil4tu

Một website portfolio hiện đại, tương tác được xây dựng bằng Next.js, có các hiệu ứng hoạt ảnh tiên tiến, hiệu ứng 3D và thiết kế tập trung vào công nghệ dành cho Software Engineers.

![tuil4tu Portfolio](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0+-0055FF?style=for-the-badge&logo=framer)

## ✨ Tính Năng

### 🎨 **Hiệu Ứng Hình Ảnh & Hoạt Ảnh**
- **Đèn Rọi Chuột Tương Tác**: Hiệu ứng gradient xuyên tâm tinh tế theo chuyển động con trỏ
- **Tương Tác Card 3D**: Hoạt ảnh dựa trên vật lý sử dụng React Spring
- **Cuộn Parallax**: Hoạt ảnh mượt mà kích hoạt bởi cuộn
- **Nền Hạt**: Các hạt nổi động với đường kết nối
- **Lưới Hoạt Ảnh**: Nền lưới 3D với hoạt ảnh mượt mà
- **Thiết Kế Glassmorphism**: Các phần tử UI giống kính hiện đại

### 🎯 **Thành Phần Chính**
- **Phần Hero**: Giới thiệu hoạt ảnh với hiển thị kiểu terminal
- **Trưng Bày Kỹ Năng**: Các card công nghệ tương tác
- **Portfolio Dự Án**: Các card dự án holographic 3D
- **Timeline Kinh Nghiệm**: Tiến trình sự nghiệp hoạt ảnh
- **Form Liên Hệ**: Phần liên hệ tương tác
- **Chuyển Đổi Giao Diện**: Chuyển đổi chế độ sáng/tối

### 🛠 **Tính Năng Kỹ Thuật**
- **Thiết Kế Responsive**: Tiếp cận mobile-first với Tailwind CSS
- **Tối Ưu Hiệu Suất**: React.memo, hoạt ảnh tối ưu
- **Sẵn Sàng SEO**: Open Graph, Twitter Cards, metadata có cấu trúc
- **An Toàn Kiểu**: Triển khai TypeScript đầy đủ
- **Stack Hiện Đại**: Next.js 13+ với App Router

## 🚀 Công Nghệ Sử Dụng

### **Framework Frontend**
- **Next.js 13+** - Framework React với App Router
- **TypeScript 5.0+** - JavaScript an toàn kiểu
- **Tailwind CSS 3.0+** - CSS framework utility-first

### **Hoạt Ảnh & 3D**
- **Framer Motion** - Hoạt ảnh khai báo
- **React Spring** - Hoạt ảnh dựa trên vật lý
- **Three.js** - Đồ họa và hiệu ứng 3D
- **@react-three/fiber** - React renderer cho Three.js
- **@react-three/drei** - Các helper Three.js

### **Thành Phần UI**
- **Lucide React** - Các icon SVG đẹp
- **@use-gesture/react** - Xử lý cử chỉ tiên tiến
- **Thành Phần Tùy Chỉnh** - Hệ thống thiết kế module, tái sử dụng

## 📦 Cài Đặt

### Yêu Cầu
- Node.js 18.0+ 
- npm hoặc yarn

### Thiết Lập
```bash
# Clone repository
git clone <your-repo-url>
cd profile

# Cài đặt dependencies
npm install

# Chạy server development
npm run dev

# Build cho production
npm run build

# Khởi động server production
npm start
```

## 🏗 Cấu Trúc Dự Án

```
src/
├── app/                    # Next.js App Router
│   ├── cv/               # Trang CV
│   ├── globals.css       # CSS toàn cục
│   ├── layout.tsx        # Layout gốc
│   └── page.tsx          # Trang chủ
├── components/            # Các component React
│   ├── AnimatedGrid.tsx      # Nền lưới 3D
│   ├── AnimatedIcons.tsx     # Hoạt ảnh icon
│   ├── Card3D.tsx            # Hiệu ứng card 3D
│   ├── Enhanced3DButton.tsx  # Component button 3D
│   ├── FloatingButton.tsx    # Hiệu ứng button nổi
│   ├── GlobalBackground.tsx  # Quản lý nền
│   ├── HolographicCard.tsx   # Hiệu ứng holographic
│   ├── InteractiveSpotlight.tsx # Đèn rọi chuột
│   ├── Parallax.tsx          # Cuộn parallax
│   ├── Particles.tsx         # Hệ thống hạt
│   ├── ScrollReveal.tsx      # Hoạt ảnh cuộn
│   ├── SectionHeading.tsx    # Tiêu đề section
│   ├── SpringCard.tsx        # Hoạt ảnh spring
│   ├── TerminalCard.tsx      # Hiển thị terminal
│   ├── ThemeToggle.tsx       # Chuyển đổi giao diện
│   └── TimelineItem.tsx      # Thành phần timeline
└── types/                # Định nghĩa TypeScript
```

## 🎨 Tùy Chỉnh

### **Màu Sắc & Giao Diện**
Website sử dụng CSS custom properties để dễ dàng tùy chỉnh giao diện. Các màu chính được định nghĩa trong `globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --primary: #8b5cf6;
  --accent: #06b6d4;
  --muted: #6b7280;
  --border: #374151;
}
```

### **Đèn Rọi Chuột**
Tùy chỉnh hiệu ứng đèn rọi trong `InteractiveSpotlight.tsx`:

```typescript
// Điều chỉnh độ mạnh (kích thước) và màu sắc
<InteractiveSpotlight 
  strength={180} 
  className="opacity-60" 
/>
```

### **Hoạt Ảnh**
Sửa đổi tham số hoạt ảnh trong các component khác nhau:
- **Hoạt ảnh Spring**: Điều chỉnh `tension`, `friction` trong SpringCard
- **Parallax**: Sửa đổi `speed` trong component Parallax
- **Hạt**: Thay đổi `count` và `speed` trong Particles

## 🔧 Phát Triển

### **Thêm Section Mới**
1. Tạo component trong `src/components/`
2. Import và thêm vào `src/app/page.tsx`
3. Bọc với `ScrollReveal` để có hoạt ảnh

### **Hoạt Ảnh Tùy Chỉnh**
```typescript
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

### **Tối Ưu Hiệu Suất**
- Sử dụng `React.memo` cho các component đắt tiền
- Triển khai `useCallback` cho event handler
- Tối ưu scene Three.js với cleanup phù hợp

## 📱 Thiết Kế Responsive

Website được xây dựng với tiếp cận mobile-first:
- **Mobile**: Layout một cột, tối ưu tương tác cảm ứng
- **Tablet**: Grid hai cột để sử dụng không gian tốt hơn  
- **Desktop**: Layout đa cột đầy đủ với hiệu ứng nâng cao

## 🚀 Triển Khai

### **Vercel (Khuyến Nghị)**
```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Triển khai
vercel
```

### **Các Nền Tảng Khác**
- **Netlify**: Kết nối repository GitHub
- **Railway**: Triển khai với Docker
- **Tự Host**: Build và phục vụ file tĩnh

## 🎯 Hiệu Suất

- **Điểm Lighthouse**: 90+ trên tất cả metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Thêm tính năng tuyệt vời'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## 📄 Giấy Phép

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

## 🙏 Lời Cảm Ơn

- **Đội Ngũ Next.js** - Framework React tuyệt vời
- **Framer Motion** - Hoạt ảnh mượt mà
- **Cộng Đồng Three.js** - Thư viện đồ họa 3D
- **Tailwind CSS** - CSS framework utility-first

## 📞 Liên Hệ

- **Portfolio**: [tuil4tu.dev](https://tuil4tu.dev)
- **GitHub**: [@tuil4tu](https://github.com/tuil4tu)
- **Email**: [contact@tuil4tu.dev](mailto:contact@tuil4tu.dev)

---

⭐ **Hãy star repository này nếu bạn thấy hữu ích!**