export function initCustomSelect(className='custom') {
    document.querySelectorAll(`select.${className}`).forEach(select => {
      
      let wrapper = document.createElement('div');
      wrapper.classList.add('select');
      let clone = select.cloneNode(true);
      wrapper.appendChild(clone)
      select.replaceWith(wrapper);
      select = wrapper.querySelector('select');
      
    
      let options = select.querySelectorAll('option');
      let active = options[0];
      let tag = document.createElement('span');
      let list = document.createElement('div');

      list.classList.add('list');
      wrapper.value = active.value;
    
      tag.onclick = _ => {
        wrapper.classList.toggle('active');
      }
      tag.innerText = active.innerHTML;
    
      options.forEach(option => {
        let span = document.createElement('span');
        span.innerHTML = option.innerHTML;
    
        span.onclick = _ => {
          wrapper.classList.remove('active');
          tag.innerHTML = option.innerHTML;
          select.value = option.value;
          wrapper.value = option.value;
        }
    
        list.appendChild(span);
      })
    
      wrapper.appendChild(tag);
      wrapper.appendChild(list)
    })
  }