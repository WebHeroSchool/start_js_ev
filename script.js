fetch('https://api.github.com/users/6thSence')
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