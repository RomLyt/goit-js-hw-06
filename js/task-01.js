const ollCategories = document.querySelectorAll('#categories ul');
// const ollCategories = document.querySelectorAll('#categories h2');
console.log(`Number of categories: ${ollCategories.length}`);

const ollElements = document.querySelectorAll('.item');
ollElements.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    const elementsCount = element.querySelectorAll('li');
    console.log(`Elements: ${elementsCount.length}`);
});
