document.querySelectorAll('.select').forEach(select=>{
  select.onclick = e => {
    select.classList.toggle('active');
  }
  let active;
  select.querySelectorAll('option').forEach((option, index)=>{
    if (index===0) active = option;
    option.onclick = e => {
      if (!select.classList.contains('active')) return
      console.log(option.value);
      let temp = active;
      active.replaceWith(option);
      option.replaceWith(temp)
    }
  })
  let span = document.createElement('option')
  span.innerText = active.innerText;
  
  select.insertBefore(span, active)
})