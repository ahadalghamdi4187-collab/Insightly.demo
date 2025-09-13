// الصفحة الأولى – تسجيل الدخول التجريبي
function demoLogin() {
  const demoCode = "100200300";
  const userName = prompt("ادخلي اسمك لتسجيل الدخول التجريبي:");
  const code = prompt("ادخلي رمز التجربة:");
  if (code === demoCode) {
    alert(`مرحبًا ${userName} في متجر Insightly!`);
    // توجيه للواجهة الثانية بعد الضغط على OK
    window.location.href = "packages.html";
  } else {
    alert("رمز خاطئ، حاول مرة أخرى.");
  }
}

// تغيير اللغة
function toggleLanguage() {
  let lang = document.getElementById("language").value;

  if (lang === "en") {
    document.querySelector("header h1").innerText = "Welcome to Insightly";
    document.querySelector("header p").innerText = "Your first choice for smart data analytics ✨";
    const formHeader = document.querySelector(".form-section h2");
    if(formHeader) formHeader.innerText = "Your Options";
    document.querySelector("label[for='language']").innerText = "Choose language:";
    document.querySelector("label[for='payment']").innerText = "Choose payment method:";
    document.querySelector("label[for='file']").innerText = "📂 Upload your data file (optional demo):";
    document.querySelector("footer p").innerText = "📞 Contact: 0533904187 | 📧 ahadalghamdi4187@gmail.com";
  } else {
    document.querySelector("header h1").innerText = "مرحبًا بكم في Insightly";
    document.querySelector("header p").innerText = "وجهتكم الأولى للتحليلات الذكية والرسوم البيانية ✨";
    const formHeader = document.querySelector(".form-section h2");
    if(formHeader) formHeader.innerText = "خياراتك";
    document.querySelector("label[for='language']").innerText = "اختر اللغة:";
    document.querySelector("label[for='payment']").innerText = "اختر وسيلة الدفع:";
    document.querySelector("label[for='file']").innerText = "📂 ارفع ملف بياناتك (اختياري للتجربة):";
    document.querySelector("footer p").innerText = "📞 للتواصل: 0533904187 | 📧 ahadalghamdi4187@gmail.com";
  }
}

// الصفحة الثانية – اختيار الباقة
function selectPackage(name) {
  alert(`تم اختيار ${name}`);
}

// الصفحة الثانية – الدفع التحريبي
function pay() {
  document.getElementById("paymentStatus").innerText = "✅ تم الدفع بنجاح، شكرًا على اختيارك خدمتنا!";
}
