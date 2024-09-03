const TestimoniData = [
  {
    image: "https://picsum.photos/200/300?random=1",
    content: "Ndak tau kok tanyak saya!?",
    author: "dodi",
    rating: 5,
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    content: "Waka waka ee",
    author: "mamang",
    rating: 4,
  },
  {
    image: "https://picsum.photos/200/300?random=3",
    content: "Ih anak gua mahhh canttiikk, udaahhh kaya",
    author: "Ayah Ojak",
    rating: 1,
  },
  {
    image: "https://picsum.photos/200/300?random=4",
    content: "AKHdkahk....",
    author: "Lucinta Dede Hidayat?",
    rating: 2,
  },
  {
    image: "https://picsum.photos/200/300?random=5",
    content: "gas",
    author: "dika",
    rating: 5,
  },
  {
    image: "https://picsum.photos/200/300?random=6",
    content: "Warmindo Kuy, Warkop Bang Saykotsss",
    author: "hanung",
    rating: 3,
  },
  {
    image: "https://picsum.photos/200/300?random=7",
    content: "Kuy, ",
    author: "puspus",
    rating: 2,
  },
  {
    image: "https://picsum.photos/200/300?random=8",
    content: "baguss",
    author: "zaa",
    rating: 4,
  },
  {
    image: "https://picsum.photos/200/300?random=9",
    content: "danger",
    author: "Amanda Puspita JKT48",
    rating: 3,
  },
];

function generateTestimonials(data) {
  const container = document.getElementById("testimonials-container");
  container.innerHTML = "";
  data.forEach((item) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.className = "testimonial";
    testimonialDiv.setAttribute("data-rating", item.rating);
    testimonialDiv.innerHTML = `
    
          <img src="${item.image}" alt="testimonial" class="profile-testimonial">
          <p class="quote">${item.content}</p>
          <p class="author">- ${item.author}</p>
          <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
          `;
    container.appendChild(testimonialDiv);
  });
}

function filterTestimonials(callback) {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial) => {
    if (callback(testimonial)) {
      testimonial.style.display = "block";
    } else {
      testimonial.style.display = "none";
    }
  });
}

// Callback untuk filter semua testimoni
function showAll(testimonial) {
  return true;
}

// Callback untuk filter testimoni positif
function showPositive(testimonial) {
  return testimonial.getAttribute("data-rating") >= 4;
}

// Callback untuk filter testimoni negatif
function showNegative(testimonial) {
  return testimonial.getAttribute("data-rating") <= 2;
}

// Callback untuk filter testimoni berdasarkan rating
function showStarRating(rating) {
  return function (testimonial) {
    return testimonial.getAttribute("data-rating") == rating;
  };
}

// Fungsi untuk menerapkan filter
function applyFilter(type) {
  switch (type) {
    case "all":
      filterTestimonials(showAll);
      break;
    case "positive":
      filterTestimonials(showPositive);
      break;
    case "negative":
      filterTestimonials(showNegative);
      break;
    case "star-1":
      filterTestimonials(showStarRating(1));
      break;
    case "star-2":
      filterTestimonials(showStarRating(2));
      break;
    case "star-3":
      filterTestimonials(showStarRating(3));
      break;
    case "star-4":
      filterTestimonials(showStarRating(4));
      break;
    case "star-5":
      filterTestimonials(showStarRating(5));
      break;
    default:
      filterTestimonials(showAll);
      break;
  }
}

// Pada awalnya tampilkan semua testimoni
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials(TestimoniData);
  applyFilter("all");
});
