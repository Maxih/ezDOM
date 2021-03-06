$ez(() => {
  $ez.ajax({
    url: "https://api.github.com/users/maxih/repos",
    success: (repos) => handleRepos(repos)
  })

  function handleRepos(repos) {
    repos = JSON.parse(repos);
    repos.forEach((repo) => {
      const newListItem = $ez("<li>");
      const newListLink = $ez("<a>").attr("href", repo.html_url).html(repo.name);
      const langIcon = languageToElement(repo.language);
      $ez(".repo-list").append(newListItem.append(langIcon).append(newListLink));
    });

  }

  function languageToElement(lang) {
    const i = $ez("<i>");
    switch(lang) {
      case 'Ruby':
        i.addClass("devicon-ruby-plain");
        return i;
      case 'JavaScript':
        i.addClass("devicon-javascript-plain");
        return i;
      case 'C#':
        i.addClass("devicon-csharp-plain");
        return i;
      case 'PHP':
        i.addClass("devicon-php-plain");
        return i;
      case 'HTML':
        i.addClass("devicon-html5-plain");
        return i;
      case 'CSS':
        i.addClass("devicon-css3-plain");
        return i;
      default:
        return "";
    }
  }
});
