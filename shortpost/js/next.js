var filename = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
filename = filename.slice(0,-5);
window.addEventListener('wheel',(event) =>{
  let wheel = event.wheelDeltaY;

  if(wheel < 0){
    var a = document.getElementById('nav-a-next')
    a.href = getURL();
    a.click();
  }
});

function getRanNum(){
  return String(Math.floor(Math.random() * 3) + 1);
}

function getURL(){
  var num;
  do{
    num = getRanNum();
  }while(num == filename);
  var url = '';
  if(filename == 'index'){
    url += './pages/posts/';
  }
  url += num + '.html';
  return url;

}