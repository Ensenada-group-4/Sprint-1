const form = document.getElementById("find-user-form");
const userList = document.querySelector(".friends-row");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.querySelector(".search-content-input");
  const searchKey = input.value;
  fetch(`http://localhost:3000/searchkey?searchKey=\${searchKey}`)
    .then((response) => response.json())
    .then((data) => {
      const users = data.map((user) => {
        const { id, name, email, phone } = user;
        return {
          id,
          name,
          email,
          phone,
        };
      });
      userList.innerHTML = ""; // Clearing the list before adding new data
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
});
