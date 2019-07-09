const news = document.querySelector('.news');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // category form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render new data
const renderNew = (data, id) => {

  const html = `
    <div class="card-panel new white row" data-id="${id}">
      <img src="/img/dish.png" alt="recipe thumb">
      <div class="new-details">
        <div class="new-title">${data.title}</div>
        <div class="new-content">${data.content}</div>
      </div>
    </div>
  `;
  recipes.innerHTML += html;

};