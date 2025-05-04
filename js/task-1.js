const itemList = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemList.length}`);

itemList.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})
