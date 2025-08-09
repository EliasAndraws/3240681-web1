const books = [
  { title: "نحو منعة وطنية شاملة ومستدامة", author: "د. خليف أحمد عيد الخوالدة",file: "books/نحو_منعة_وطنية_شاملة_ومستدامة_دكتور_خليف_الخوالدة.pdf"},
  { title: " القضاء الالكتروني", author: "العين تغريد حكمت", file: "books/القضاء_الالكتروني.pdf" },
  { title: "  احوال العرب", author: " ظاهر احمد عمرو",file: "books/أحوال_العرب.pdf" },
  { title: "العيش مع السرطان", author: "اكرام العش",file: "books/العيش_مع_السرطان.pdf" },
  { title: "دليل آفاق حرة الإصدار الأول", author: "الشاعر محمد صوالحة",file: "books/دليل_آفاق_حرة__الإصدار_الأول.pdf"},
  { title: "دليل آفاق حرة الإصدار الثاني", author: "الشاعر محمد صوالحة",file: "books/دليل_آفاق_حرة__الإصدار_الثاني.pdf" },
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function showBookContent(filePath) {
  const viewer = document.getElementById("viewer");
  const pdfViewer = document.getElementById("pdfViewer");
  pdfViewer.src = filePath;
  viewer.style.display = "block";
}

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    // رابط العنوان
    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.textContent = book.title;
    titleLink.style.display = "block"; // حتى يظهر كعنوان مستقل
    titleLink.style.fontWeight = "bold";
    titleLink.style.marginBottom = "5px";
    titleLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (book.file) {
        showBookContent(book.file);
      } else {
        alert("لا يوجد ملف لهذا الكتاب.");
      }
    });

    // المؤلف
    const authorPara = document.createElement("p");
    authorPara.innerHTML = `<strong>Author:</strong> ${book.author}`;

    bookDiv.appendChild(titleLink);
    bookDiv.appendChild(authorPara);
    bookList.appendChild(bookDiv);
  });

  
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) 
    
  );
  displayBooks(filtered);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent. Thank you!");
});

displayBooks(books);