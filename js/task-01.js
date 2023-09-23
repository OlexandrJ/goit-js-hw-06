// const categoriesList = document.querySelectorAll('ul#categories > li.item');
// console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach(category => {
//     const categoryName = category.querySelector('h2').textContent;
//     const categoryElements = category.querySelectorAll('ul > li');
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements.length}`);
// });

const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});