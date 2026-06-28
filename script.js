const phoneInput = document.getElementById("phoneInput");
const searchBtn = document.getElementById("searchBtn");

const result = document.getElementById("result");
const notFound = document.getElementById("notFound");

searchBtn.addEventListener("click", searchStudent);

phoneInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchStudent();
  }
});

function searchStudent() {
  const phone = phoneInput.value.trim();
  const cleanPhone = phone.replace(/^0+/, "");

  const student = students.find(s =>
    s.studentWhatsapp.replace(/^0+/, "") === cleanPhone ||
    s.parentWhatsapp.replace(/^0+/, "") === cleanPhone
  );

  if (student) {
    result.classList.remove("hidden");
    notFound.classList.add("hidden");

    document.getElementById("studentCode").textContent = student.code;
    document.getElementById("studentName").textContent = student.name;
    document.getElementById("studentGrade").textContent = student.grade;
    document.getElementById("studentGroup").textContent = student.group;
    document.getElementById("studentStart").textContent = student.start;
    document.getElementById("studentTime").textContent = student.time;
    document.getElementById("studentWhatsapp").textContent = student.studentWhatsapp;
    document.getElementById("parentWhatsapp").textContent = student.parentWhatsapp;
  } else {
    result.classList.add("hidden");
    notFound.classList.remove("hidden");
  }
}