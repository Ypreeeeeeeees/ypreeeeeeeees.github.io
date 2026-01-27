document.addEventListener("DOMContentLoaded", () => {
  const imgs = [
    "/image/bg1.jpg",
    "/image/bg2.jpg",
    "/image/bg3.jpg",
    "/image/bg4.jpg",
    "/image/bg5.jpg",
    "/image/bg6.jpg"
  ];

  const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

  // Butterfly 文章页 & 首页头图
  const header = document.getElementById("page-header");
  if (header) {
    header.style.backgroundImage = `url(${randomImg})`;
  }
});
