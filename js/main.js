let a = id => document.getElementById(id);

a('btn').addEventListener('click', function () {
  a('modal').style.display = "block";
});

a('close').addEventListener('click', function () {
  a('modal').style.display = "none";
});


window.addEventListener('click', function (event)  {
  if (event.target == a('modal')) {
    a('modal').style.display = "none";
  }
})






