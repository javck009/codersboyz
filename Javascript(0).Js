function btn_click() {
  // body...
  var uname=document.getElementById('uname').value;
   var pass=document.getElementById('pass').value;
   
   if (uname=='swap' && pass==12345) {
     alert('login succes');
   }else{
     alert('login faild')
   }
}