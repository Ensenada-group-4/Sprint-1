const form = document.getElementById("find-user-form");
const main = document.querySelector("article");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.querySelector("#searchFriends");
  const searchKey = input.value;
  const response = await fetch(
    `http://localhost:3000/user?searchKey=${searchKey}`
  );
  const data = await response.json();
  const filter = document.createRange().createContextualFragment(`
    <div class="col-sm-3 default-card friend-box">
      <img class="friend-avatar" style="border-radius: 50%; width: 150px; height: 150px;" src=${data[0].profile_picture}></img>
      <a>${data[0].name}</a>
      <p>${data[0].email}</p>
      <button class="btn btn-outline-warning btn-sm">Enviar solicitud</button>
    </div>
  `);
  main.innerHTML = "";
  main.append(filter);
});
