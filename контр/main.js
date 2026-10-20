
async function loadUsers() {
    let loading = document.getElementById("loading");
    let error = document.getElementById("error");
    let users = document.getElementById("users");

    loading.textContent = "Идет загрузка данных...";
    error.textContent = "";
    users.innerHTML = "";

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Ошибка сервера");
        }

        let data = await response.json();

        data.forEach(function(user) {
            let card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p>Никнейм: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Компания: ${user.company.name}</p>
            `;

            users.appendChild(card);
        });

    } catch (error) {
        error = error;
        document.getElementById("error").textContent =
            "Ошибка загрузки. Проверь интернет-соединение.";

        console.log(error);
    } finally {
        loading.textContent = "";
    }
}
