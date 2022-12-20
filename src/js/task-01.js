const categoriesEl = document.querySelector('#categories') ;
const categoriesList = categoriesEl.querySelectorAll('.item');
const categoriesListLength = categoriesList.length;
console.log(`Number of categories: ${categoriesListLength}`);

categoriesList.forEach(item => {
    const titleOfItem = item.querySelector('h2');
    const innerCategoriesListLength = item.querySelectorAll('ul>li').length;
    console.log(`Category: ${titleOfItem.textContent}
    Elements: ${innerCategoriesListLength}`);
});

