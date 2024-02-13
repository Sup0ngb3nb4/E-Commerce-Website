const boxItems = document.querySelectorAll('.box-items');

boxItems.forEach(boxItem => {
  boxItem.addEventListener('mousedown', () => {
    boxItem.style.transform = 'scale(1.2)';
  });

  boxItem.addEventListener('mouseup', () => {
    boxItem.style.transform = 'scale(1)';
  });
});
