let filename = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
filename = filename.slice(0,-5);
window.addEventListener('wheel',(event) =>{
  let wheel = event.wheelDeltaY;

  if(wheel < 0){
    let a = document.getElementById('nav-a-next')
    a.href = getURL();
    a.click();
  }
});

function getRanNum(){
  return String(Math.floor(Math.random() * 3) + 1);
}

function getURL(){
  let num;
  do{
    num = getRanNum();
  }while(num == filename);
  let url = '';
  if(filename == 'index'){
    url += './pages/posts/';
  }
  url += num + '.html';
  return url;

}