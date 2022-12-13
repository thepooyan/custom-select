export function initCustomSelect(className = 'select') {
  document.querySelectorAll(`.${className}`).forEach(wrapper => {

    let options = wrapper.querySelectorAll('option');
    let active = options[0];
    let tag = document.createElement('span');
    let list = document.createElement('div');
    let select = wrapper.querySelector('select');

    list.classList.add('list');
    wrapper.value = active.value;

    wrapper.onclick = _ => {
      wrapper.classList.toggle('active');
    }
    tag.innerText = active.innerHTML;

    options.forEach(option => {
      let span = document.createElement('span');
      span.innerHTML = option.innerHTML;

      span.onclick = _ => {
        tag.innerHTML = option.innerHTML;
        wrapper.value = option.value;
        select.value = option.value;
      }

      list.appendChild(span);
    })

    wrapper.appendChild(tag);
    wrapper.appendChild(list)
  })
}