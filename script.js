const books = [
  { title: "نحو منعة وطنية شاملة ومستدامة", author: "د. خليف أحمد عيد الخوالدة",file: "books4/نحو_منعة_وطنية_شاملة_ومستدامة_دكتور_خليف_الخوالدة.pdf",image: "image4/80.jpg"},
  { title: " القضاء الالكتروني", author: "العين تغريد حكمت", file: "books3/القضاء_الالكتروني.pdf",image: "image3/front-judge.jpg" },
  { title: "  احوال العرب", author: " ظاهر احمد عمرو",file: "books1/أحوال_العرب.pdf",image: "image1/ahwal_alarab.jpg" },
  { title: "العيش مع السرطان", author: "اكرام العش",file: "books2/العيش_مع_السرطان.pdf",image: "image2/living_with_cancer.jpg" },
  { title: "دليل آفاق حرة الإصدار الأول", author: "الشاعر محمد صوالحة",file: "books5/دليل_آفاق_حرة__الإصدار_الأول.pdf",image: "image5/دليل_آفاق_حرة__الإصدار_الأول_1.jpg"},
  { title: "دليل آفاق حرة الإصدار الثاني", author: "الشاعر محمد صوالحة",file: "books6/دليل_آفاق_حرة__الإصدار_الثاني.pdf",image: "image6/دليل_آفاق_حرة__الإصدار_الثاني_1-0.jpg" },
  { title: "حياتي من قاع الفشل ومحاولة الانتحار إلى الاستقرار", author: "ظاهر احمد عمرو",file: "books15/حياتي_من_قاع_الفشل_.pdf",image: "image15/hayati.jpg" },
  { title: "سنوات في سطور", author: "اكرام العش",file: "books7/سنوات_في_سطور_-_ج3_-_5-3-2023.pdf",image: "image12/سنوات-في-سطور-3.jpg" },
  { title: "سلسلة القدر المسموح", author: "خالد عقل",file: "books14/سلسلة_القدر_المسموح_-.pdf",image: "image13/سلسلة_القدر_المسموح.jpg" },
  { title: "لكل امرأة قصة ترويها", author: "مجموعة من النساء حول العالم",file: "books13/لكل_إمرأة_قصة_ترويها.pdf",image: "image14/each_woman.jpg" },
  { title: "عاشقة البحر", author: "اكرام العش",file: "books8/عاشقة_البحر_الاخيرة_-منسق.pdf",image: "image11/عاشقة-البحر.jpg" },
  { title: "99تضامن'مبادرة'", author: "انور خالد بريغيث",file: "books11/S99_Book_-_Arabic.pdf",image: "image10/دليل_آفاق_حرة__الإصدار_الثالث_1.jpg" },
  { title: "الرباط الازلي", author: "د.ميسون حنا",file: "books10/الرباط-الأزلي.pdf",image: "image8/الرباط_الازلي.jpg" },
  { title: "قراءات نقدية بأقلامهم", author: "عنان محروس",file: "books9/قراءات_نقدية_بأقلامهم.pdf",image: "image9/قراءات_نقدية_بأقلامهم_1.jpg" },
  { title: "وكر الافاعي", author: "د.ميسون حنا",file: "books12/وكر-الأفاعي.pdf",image: "image7/وكر-الأفاعي_1.jpg" },
  { title: "دموع من رمال", author: "د.ميسون حنا",file: "books16/دموع-من-رمال.pdf",image: "image16/دموع-من-رمال_1.jpg" },
  { title: "تاريخ_المملكة_الأردنية_الهاشمية_ج1", author:"الاستاذ الدكتور محمد عبد القادر خريسات",file: "books17/تاريخ_المملكة_الأردنية_الهاشمية_ج1.pdf",image: "image17/R.jpeg" },
  { title: "تاريخ_المملكة_الأردنية_الهاشمية_ج2", author: "الاستاذ الدكتور محمد عبد القادر خريسات",file: "books18/تاريخ_المملكة_الأردنية_الهاشمية_ج2.pdf",image: "image18/R.jpeg" },
  { title: "تاريخ_المملكة_الأردنية_الهاشمية_ج3", author: "الاستاذ الدكتور محمد عبد القادر خريسات",file: "books19/تاريخ_المملكة_الأردنية_الهاشمية_ج3.pdf",image: "image19/R.jpeg" },
  { title: "تاريخ_المملكة_الأردنية_الهاشمية_ج4", author: "الاستاذ الدكتور محمد عبد القادر خريسات",file: "books20/تاريخ_المملكة_الأردنية_الهاشمية_ج4.pdf",image: "image20/R.jpeg" }
];


const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";


    if (book.image) {
  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;
  img.className = "book-cover";
  bookDiv.appendChild(img);
}


    // رابط العنوان
    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.textContent = book.title;
    titleLink.style.display = "block"; // حتى يطلع كعنوان لحالو
    titleLink.style.fontWeight = "bold";
    titleLink.style.marginBottom = "5px";
    titleLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (book.file) {
    window.open(book.file, "_blank");
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