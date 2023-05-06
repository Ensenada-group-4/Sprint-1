const form = document.getElementById("searchForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById("find-user-form");
  const key = input.value;

  fetch(`http://localhost:3000/user?searchKey=${searchKey}`)
    .then((response) => response.json())
    .then((data) => {
      data
        .forEach((user) => {
          const li = document.createElement("li");
          li.textContent = user.name;
          userList.appendChild(li);
          console.log(users);
          users.map((user) => {
            const { id, name, email, phone } = user;
            return {
              id,
              name,
              email,
              phone,
            };
          });
        })
        .catch((error) => console.error(error));

      const users = response.json();
    });
});
