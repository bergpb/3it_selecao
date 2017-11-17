function goToDiv(divNo) {
  var sel = document.getElementById('contentSection').getElementsByTagName('article');

  for (var i=0; i<sel.length; i++) { sel[i].style.display = 'none'; }
  if (divNo > sel.length-1) { divNo = 0; }
  else { if (divNo < 0) { divNo = sel.length-1; } }
  sel[divNo].style.display = 'block';
}
