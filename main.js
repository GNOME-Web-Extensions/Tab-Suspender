const currentSite = window.location.href
document.addEventListener( 'visibilitychange' , function() {
    if (document.hidden) {
        setTimeout(function(){
            document.querySelector('html').innerHTML = ''
            window.stop()
            document.querySelector('html').classList.add('suspended')
        },1200000);

    } else {
        if (document.querySelector('html').classList.contains('suspended')) {
            window.location.reload()
        }
      }
}, false );
