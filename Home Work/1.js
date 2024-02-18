 const popupIcon = document.getElementById('popupIcon');
 const popup = document.getElementById('popup');
 popupIcon.addEventListener('click', function() {
     popup.style.display = 'block';
 });

 popup.addEventListener('click', function() {
     popup.style.display = 'none';
 });