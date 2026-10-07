// Cree le compte administrateur sur le serveur lance en local.
// Les informations du compte ne sont pas ecrites dans ce fichier : elles sont lues dans les
// variables d environnement SUPERUSER_... (voir .env.example). Exemple :
//   SUPERUSER_EMAIL=... SUPERUSER_PASSWORD=... node createSuperUser.js
async function send() {
const sendData = await fetch("http://localhost:3000/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "email": process.env.SUPERUSER_EMAIL,
    "firstName": process.env.SUPERUSER_FIRST_NAME,
    "lastName": process.env.SUPERUSER_LAST_NAME,
    "role":process.env.SUPERUSER_ROLE,
    "password": process.env.SUPERUSER_PASSWORD

  })
}).then(response => {
    return response.json();
  }).then(data => {
    console.log(data)
  })
}


send();
