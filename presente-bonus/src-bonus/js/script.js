var back_redirect_back_link = 'https://tracker.lendasbet.com/link?btag=51375640_295513';
history['pushState']({}, '', location['href']);
history['pushState']({}, '', location['href']);
window['onpopstate'] = function() {
setTimeout(function() {
	location['href'] = back_redirect_back_link
	}, 1)
}


var tmin = 3;
var tseg = 0;
  
var tpitch = (tmin * 60000) + (tseg * 1000);
setTimeout('show()', tpitch);
console.log('pitch em:', tpitch,'ms - totalizando',tmin,'min','e',tseg,'seg'); 
function show(){
var list = document.getElementsByClassName('ocultar');
for (var i = 0; i < list.length; i++) {
    list[i].style.visibility = 'visible';
    list[i].style.display = 'block';
    }
}