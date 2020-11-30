
window.onload= function() {
  let date = new Date();
  let currentDate = date.toISOString().slice(0,10);
  var currentTime = moment(date).format('hh:mm');
  document.querySelector('.set-today').value=currentDate;
  document.querySelector('.set-now').value=currentTime;
}

const placesAutocomplete = places({
  appId: 'plEQCR37KMQ9',
  apiKey: '5701b721593618ffd6409a49f9b11747',
  container: document.querySelector('#address-input')
});


let checker = (check) => {
  check.classList.toggle("checked");
};
