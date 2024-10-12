async function fetchUserData(){
  const apiUrl ='https://jsonplaceholder.typicode.com/users'; 
  const dataContainer =document.getElementById("api-data");
  try{
    let response = await fetch(apiUrl);
    let users =await response.json();
    dataContainer.innerHTML = '';
    let userList=document.createElement('ul');
    users.forEach(user => {
        console.log(user)
       let li = document.createElement("li");
       li.textContent = user.username;
       userList.appendChild(li);
       dataContainer.appendChild(userList)
    });
  }
  catch(e){
    dataContainer.innerHTML = 'Failed to load user data.';
  }
 
}
document.addEventListener("DOMContentLoaded",fetchUserData)