document.addEventListener("DOMContentLoaded", () => {
  const favorites = new Set();
  const itemsContainer = document.getElementById('items-container');
  const showFavoritesButton = document.getElementById('show-favorites');
  function addToFavorites(event) {
      const item = event.target.closest('.item');
      const itemId = item.getAttribute('data-id');
      favorites.add(itemId);
  }
 function showFavorites() {
      const favoriteItems = Array.from(favorites).map(id => {
          const originalItem = document.querySelector(`.item[data-id="${id}"]`);
          return originalItem.outerHTML;
      }).join('');
      itemsContainer.innerHTML = favoriteItems || '<p>Нет избранных элементов.</p>';
  }
itemsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('favorite-button')) {
          addToFavorites(event);
      }
  });
 showFavoritesButton.addEventListener('click', showFavorites);
});

