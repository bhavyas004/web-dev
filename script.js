
const collapsible = document.querySelectorAll('.collapsible');
const subCollapsible = document.querySelectorAll('.sub-collapsible');

collapsible.forEach((section) => {
    section.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

subCollapsible.forEach(subSection => {
    subSection.addEventListener('click', function () {
        const subContent = this.nextElementSibling;
        subContent.style.display = subContent.style.display === 'block' ? 'none' : 'block';
    });
});
