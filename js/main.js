let a = id => document.getElementById(id);
let s = state => {
  a('modal').style.display = state;
  a('overlay').style.display = state;
  if (state==='block') {
    a('content').classList.add('blurred');
  } else {
    a('content').classList.remove('blurred');
  }
}
a('btn').addEventListener('click', function () {
  s('block');
});

a('close').addEventListener('click', function () {
  s('none');
});


a('overlay').addEventListener('click', function (event)  {
  s('none');
})






