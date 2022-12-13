document.querySelectorAll('.select').forEach(select => {
  select.innerHTML = `<div class="list">${select.innerHTML}</div>`;

  let list = select.querySelector('.list');
  let options = select.querySelectorAll('option');
  let active = options[0];
  let span = document.createElement('span');
  let valueKeep = document.createElement('select');
  console.log(active.value);
  valueKeep.value = active.value.toString();
  console.log(valueKeep.value);

  active.classList.add('active');

  span.onclick = _ => {
    select.classList.toggle('active');
  }
  span.innerText = active.innerHTML;

  options.forEach(option => {
    option.onclick = _ => {
      // debugger;
      select.classList.remove('active');
      span.innerHTML = option.innerHTML;
      valueKeep.value = option.value;
    }
  })

  select.insertBefore(span, list);
  select.appendChild(valueKeep);

  // setInterval(() => {
  //   console.log(`val: ${valueKeep.value}`);
  // }, 1000);
})