
window.onload= function() {
  let date = new Date();
  let currentDate = date.toISOString().slice(0,10);
  let currentTime = date.getHours() + ':' + date.getMinutes();
  document.querySelector('.set-today').value=currentDate;
  document.querySelector('.set-now').value=currentTime;
}


let checker = (check) => {
  check.classList.toggle("checked");
};
