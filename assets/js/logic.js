function goToIndex() {
    window.location.href = 'index.html';
}

document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  document.getElementById('backButton').addEventListener('click', function(){
    window.location.href = 'index.html';
  });