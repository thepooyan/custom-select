document.querySelectorAll('.select').forEach(select=>{
  let selectHtml = select.innerHTML;
  select.innerHTML = `<div class="select">${selectHtml}</div>`
  
  let options = select.querySelectorAll('option');
  let active = options[0];
  
  let span = document.createElement('span');
  span.innerText = active.innerText;

  let list = select.querySelector('.list');

  select.insertBefore(span, list);

})