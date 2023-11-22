document.addEventListener('DOMContentLoaded', () => {
  console.log('here');
  let toggles = document.getElementsByClassName('toggle');

  [...toggles].forEach(toggle => {
    console.log(toggle.addEventListener);
    toggle.addEventListener('click', e => {
      e.target.classList.toggle('hide');
      document.getElementById(e.target.dataset.ref).classList.toggle('hide');
    });
  });

}, false);