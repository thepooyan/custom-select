export function initCustomSelect(className = 'select') {
  document.querySelectorAll(`.${className}`).forEach(wrapper => {
    if (wrapper.alreadyInit) return

    let options = wrapper.querySelectorAll('option');
    let tag = document.createElement('span');
    let list = document.createElement('div');
    let select = wrapper.querySelector('select');
    let active = Object.values(options).find(opt => opt.value === select.value);

    list.classList.add('list');
    wrapper.value = active.value;
    tag.innerText = active.innerHTML;

    options.forEach(option => {
      let span = document.createElement('span');
      span.innerHTML = option.innerHTML;

      span.onclick = _ => {
        tag.innerHTML = option.innerHTML;
        wrapper.value = option.value;
        wrapper.onchange();
        select.value = option.value;
      }

      list.appendChild(span);
    })

    wrapper.appendChild(tag);
    wrapper.appendChild(list);
    
    document.addEventListener("click", e => {
      if (wrapper.contains(e.target))
        wrapper.classList.toggle('active')
      else
        wrapper.classList.remove('active')
    })
    wrapper.alreadyInit = true;
  })
}