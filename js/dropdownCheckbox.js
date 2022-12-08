"use strict";
let checkList = document.getElementById('checklist');
document.getElementById('anchor').onclick = function() {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}