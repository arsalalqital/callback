
"use strict"
// Fungsi untuk membuat tabel
function createTable(data, callback) {
  let container = document.getElementById('table-container');
  let html = '<table border="1"><tr><th>ID</th><th>Name</th><th>username</th><th>email</th><th>addres</th><th>company</th></tr>';
  data.forEach(item => {
      html += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.username}</td><td>${item.email}</td><td>${item.addres}</td><td>${item.company}</td></tr>`;
  });
  html += '</table>';
  container.innerHTML = html;
  callback();
}

// Fungsi untuk mengambil data (simulasi dengan setTimeout)
function fetchData(callback) {
  setTimeout(() => {
      const data = [
          { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", addres: "Kulas Light Apt. 556 Gwenborough", company: "Romaguera-Crona"},
          { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", addres: "Victor Plains Suite 879 Wisokyburgh", company: "Deckow-Crist" },
          { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", addres: "Douglas Extension Suite 847 McKenziehaven", company: "Romaguera-Jacobson"},
          { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", addres: "Hoeger Mall Apt. 692 South Elvis", company: "Robel-Corkery"},
          { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", addres: "Skiles Walks Suite 351 Roscoeview", company: "Keebler LLC"},
          { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", addres: "Norberto Crossing Apt. 950 South Christy", company: "Considine-Lockman"},
          { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", addres: "Rex Trail Suite 280 Howemouth", company: "Johns Group"},
          { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", addres: "Ellsworth Summit Suite 729 Aliyaview", company: "Abernathy Group"}, 
          { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", addres: "Dayna Park Suite 449 Bartholomebury", company: "Yost and Sons"},
          { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", addres: "Kattie Turnpike Suite 198 Lebsackbury", company: "Hoeger LLC"},          
      ];
      callback(data);
  }, 5000); 
}

// Panggil fungsi fetchData dan buat tabel setelah data diambil
fetchData((data) => {
  createTable(data, () => {
      console.log('Tabel berhasil dibuat!');
  });
});
