const page = document.getElementById('page');
const prelouder = document.getElementById('prelouder');
setInterval(() => {
page.classList.remove('hidden');
prelouder.classList.add('hidden');
}, 5000);
const getInfo = fetch('https://api.github.com/users/6thSence')
const getDate = new Promise ((resolve, reject) => {
const newDate = new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear();
setTimeout(() => newDate ? resolve(newDate) : reject('Дата не определена'), 5000);
})
Promise.all([getInfo, getDate]) 
.then(newDate => {
const Date = document.createElement('p');
Date.innerHTML = newDate[1];
document.body.append(Date);
})
  .then(getInfo => fetch('https://api.github.com/users/6thSence'))
  .then(result => result.json())
     .then(data => {
      const gitHubUser = document.createElement('a');
      gitHubUser.href = data.html_url;
      gitHubUser.innerHTML = data.html_url;
      const gitHubUser_name = document.createElement('h1');
      gitHubUser_name.title = data.name;
      gitHubUser_name.innerHTML = data.name;
      const gitHubUser_avatar = document.createElement('img');
      gitHubUser_avatar.src = data.avatar_url;
      const gitHubUser_bio = document.createElement('p');
      gitHubUser_bio.innerHTML = data.bio;
document.body.append(gitHubUser);
document.body.append(gitHubUser_name);
document.body.append(gitHubUser_avatar);
document.body.append(gitHubUser_bio);
  })
  .catch(error => console.log('Информация о пользователе недоступна'));