export function initCustomSelect(className='select') {
    document.querySelectorAll(`.${className}`).forEach(select => {
      select.innerHTML = `<select>${select.innerHTML}</select>`;
    
      let options = select.querySelectorAll('option');
      let active = options[0];
      let tag = document.createElement('span');
      let list = document.createElement('div');
      list.classList.add('list');
      let valueKeep = select.querySelector('select');
    
      tag.onclick = _ => {
        select.classList.toggle('active');
      }
      tag.innerText = active.innerHTML;
    
      options.forEach(option => {
        let span = document.createElement('span');
        span.innerHTML = option.innerHTML;
    
        span.onclick = _ => {
          select.classList.remove('active');
          tag.innerHTML = option.innerHTML;
          valueKeep.value = option.value;
        }
    
        list.appendChild(span);
      })
    
      select.appendChild(tag);
      select.appendChild(list)
    })
  }