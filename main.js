const fantastik897 = [
    {
        ism: "Elshod",
        userName: "mmm",
        password: "12345"  // Пароль должен быть строкой
    }
];

const form = document.querySelector(".form");
const loginInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Используем метод find для поиска пользователя
    const result = fantastik897.find(item => item.userName === loginInput.value && item.password === passwordInput.value);

    if (result) {
        // Переадресация на страницу about.html
        window.location.href = "./about.html";
        // Выводим приветственное сообщение
        alert(`Добро пожаловать, ${result.ism}!`);
    } else {
        // Если не найдено совпадений, выводим сообщение об ошибке
        alert("Неверное имя пользователя или пароль");
    }
});
