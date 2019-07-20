// METALICA

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
//     method: "GET",
//     headers: headers
// })

//     .then(function (result) {

//         if (result.ok) {
//             return result.json();
//         }
//     })
//     .then(function (album) {

//         // get the parent element
//         var secondtUl = document.querySelector("#albumDetailsMetali");

//         for (m = 0; m < 6; m++) {


//             // display the content of the album
//             secondtUl.innerHTML +=
//                 `
//                 <li>
//                     <figure class="figure">
//                         <img src="${ album.data[m].album.cover_big}"
//                             class=" img-fluid rounded ml-2" alt="...">
//                         <figcaption class="text-center text-ligth">${ album.data[m].title} <br>
//                         </figcaption>
//                         <audio controls src="${album.data[m].preview}" type="audio/mpeg"></audio>
//                     </figure>

//                 </li>                        
//             `;

//         }


//     })
//     .catch(function (error) { });


// // behemoth

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
//     method: "GET",
//     headers: headers
// })

//     .then(function (display) {

//         if (display.ok) {
//             return display.json();
//         }
//     })
//     .then(function (album) {

//         // get the parent element
//         var thirdUl = document.querySelector("#albumDetailsbehemoth");

//         for (y = 0; y < 4; y++) {

//             // display the content of the album
//             thirdUl.innerHTML +=
//                 `
//                 <li>
//                     <figure class="figure">
//                         <img src="${ album.data[y].album.cover_big}"
//                             class=" img-fluid rounded ml-2" alt="...">
//                         <figcaption class="text-center text-ligth">${ album.data[y].title} <br>
//                         </figcaption>

//                         <audio controls src="${album.data[y].preview}" type="audio/mpeg"></audio>
//                     </figure>

//                 </li>                        
//             `;
//         }
//     })
//     .catch(function (error) { });