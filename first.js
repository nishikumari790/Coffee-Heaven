function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  // Close modal on outside click
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
    }
  }