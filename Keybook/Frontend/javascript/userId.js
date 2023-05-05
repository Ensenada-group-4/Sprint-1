async function getUser() {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const result = await response.json();
    console.log(result);
}

getUser();