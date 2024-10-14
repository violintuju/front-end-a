//1. promise
// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000); 
//     });
//   }
  
//   async function messages() {
//     const msg = await helloWorld();
//     console.log(msg);
//   }
  
//   messages();

//2. fetch
// function ambilDataUser() {
//     fetch('https://reqres.in/api/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((users) => {
//         users.data.forEach((user) => {
//             console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error);
//     });
// }

// ambilDataUser();

//3. Async Await
// async function ambilDataUser() {
//     try {
//         const response = await fetch('https://reqres.in/api/users');
//         const users = await response.json();
//         users.data.forEach((user) => {
//             console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Panggil function ambilDataUser
// ambilDataUser();


// //4. Axios
// Pastikan Anda telah mengimpor Axios jika belum:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

async function ambilDataUser() {
    try {
        const response = await axios.get('https://reqres.in/api/users');
        const users = response.data;
        users.data.forEach((user) => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Panggil function ambilDataUser
ambilDataUser();
