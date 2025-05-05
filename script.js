document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration:1000,
        once:true
    });
  });
  let commande = document.getElementById('commande');
  commande.addEventListener('click', function() {
    alert('Merci pour votre commande !');
    }
    );