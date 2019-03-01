let a = id => document.getElementById(id);

a('btn').addEventListener('click', function () {
  modal.style.display = "block";
});

a('close').addEventListener('click', function () {
  modal.style.display = "none";
});


window.addEventListener('click', function (event)  {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})






