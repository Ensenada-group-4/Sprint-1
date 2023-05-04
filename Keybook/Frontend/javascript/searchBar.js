const form = document.getElementById('searchForm')
form.addEventListener('submit',async (event)=>{
  event.preventDefault()
  const input = document.getElementById('find-user-form')
  const key = input.value
  const response = await fetch('http://localhost:3000/users?searchKey='+key)
  const users = response.json()
  console.log(users)
//   users.map((user)=>)
})