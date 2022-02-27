document.getElementById('container').oninput = function() {
  var nRed = document.getElementById('rInput').value;
  var nBlue = document.getElementById('bInput').value;
  var nGreen = document.getElementById('gInput').value;

  document.getElementById('newRed').innerHTML = nRed;
  document.getElementById('newBlue').innerHTML = nBlue;
  document.getElementById('newGreen').innerHTML = nGreen;
  document.getElementById('colorBox').style.background = 'rgb('+nRed+','+nGreen+','+nBlue+')';
  //'rgb('+nRed+','+nBlue+','+nGreen+')'
}
