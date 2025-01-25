async function getUsers(){
    const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    const resultUsers = users.map(function(user){
        return `
            <div class="user">
                <h1 class="user-name">Name: ${user.name}</h1>
                <p class="user-email">Email: ${user.email}</p>
                <p class="user-username">Username: ${user.username}</p>
                <p class="user-address">Address: ${user.address.city}  ${user.address.street} \t ${user.address.suite}</p>
                <p class="user-phone">Phone: ${user.phone}</p>
                <p class="user-website">Website: ${user.website}</p>
            </div>
        `;
    }).join('\n');
    console.log(resultUsers);
    document.querySelector('.users').innerHTML = resultUsers;
    console.log(users);
}

getUsers();