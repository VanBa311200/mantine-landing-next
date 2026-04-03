export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { label: "Dự án launch", value: "180+" },
  { label: "Tăng conversion", value: "2.9x" },
  { label: "Thời gian build", value: "< 10 ngày" },
];

export const features = [
  {
    title: "Visual System mạnh",
    description:
      "Thiết kế landing page có hierarchy rõ ràng, dễ scan và truyền tải value trong 5 giây đầu.",
    icon: "spark",
  },
  {
    title: "Performance-first",
    description:
      "Tối ưu trải nghiệm bằng cấu trúc gọn, component có chủ đích, giảm friction khi người dùng tương tác.",
    icon: "bolt",
  },
  {
    title: "A/B friendly blocks",
    description:
      "Các section tách rời để dễ thay đổi copy, layout, CTA và chạy thí nghiệm tăng conversion.",
    icon: "flask",
  },
  {
    title: "Brand-consistent",
    description:
      "Theme tokens giúp mở rộng landing mà vẫn giữ đúng nhận diện thương hiệu trên mọi breakpoint.",
    icon: "palette",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Audit mục tiêu chuyển đổi",
    description:
      "Xác định một conversion action chính và viết lại thông điệp theo customer intent.",
  },
  {
    step: "02",
    title: "Sắp xếp luồng section",
    description:
      "Đi từ pain point → giải pháp → bằng chứng → offer, giữ nhịp đọc tự nhiên trên mobile.",
  },
  {
    step: "03",
    title: "Triển khai và đo lường",
    description:
      "Kết hợp tracking điểm chạm chính để vòng lặp tối ưu rõ ràng ngay sau khi launch.",
  },
];

export const testimonials = [
  {
    quote:
      "Landing mới giúp chúng tôi tăng demo booking 61% chỉ sau 3 tuần mà không cần tăng ngân sách ads.",
    name: "Linh Trần",
    role: "Growth Lead, Avory",
  },
  {
    quote:
      "Điểm mình thích nhất là cách trình bày message rất sắc, khách hàng hiểu sản phẩm chỉ trong vài cuộn trang.",
    name: "Quân Nguyễn",
    role: "Founder, NovaOps",
  },
  {
    quote:
      "Từ thiết kế đến code đều rất gọn và nhất quán, đội marketing của mình chỉnh nội dung cực nhanh.",
    name: "Ngọc Anh",
    role: "Marketing Manager, Mellora",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$1,200",
    description: "Phù hợp startup cần một landing page conversion-ready.",
    features: ["1 landing page", "Responsive full", "Basic analytics setup"],
    cta: "Bắt đầu nhanh",
  },
  {
    name: "Growth",
    price: "$2,400",
    description: "Dành cho team đang scale và cần nhiều biến thể thông điệp.",
    features: [
      "Multi-section experiments",
      "Advanced CTA logic",
      "Performance + SEO tuning",
    ],
    cta: "Chọn gói này",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$4,800",
    description: "Giải pháp toàn diện cho chiến dịch lớn và nhiều thị trường.",
    features: ["Design system handoff", "Priority iterations", "Quarterly optimization"],
    cta: "Liên hệ tư vấn",
  },
];

export const faqs = [
  {
    question: "Timeline triển khai landing page thường bao lâu?",
    answer:
      "Thông thường từ 7-14 ngày tùy độ phức tạp section và số vòng phản hồi nội dung.",
  },
  {
    question: "Có thể kết nối với CRM/form hiện tại không?",
    answer:
      "Có. Chúng tôi có thể tích hợp webhook hoặc endpoint hiện có để giữ nguyên luồng dữ liệu hiện tại.",
  },
  {
    question: "Sau khi bàn giao có thể tự chỉnh nội dung không?",
    answer:
      "Có. Cấu trúc component theo section giúp team của bạn đổi copy/CTA nhanh mà không phá bố cục tổng thể.",
  },
];
