const liEl = document.querySelectorAll(".item")
console.log('Кількість категорій:', liEl.length)

for (const item of liEl) {
    const title = item.querySelector('h2').textContent
    const elQuantity = item.querySelectorAll('li').length
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elQuantity}`);
    
    
    
}
