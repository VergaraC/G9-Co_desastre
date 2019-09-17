document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://console.firebase.google.com/project/grupo-l-fafae/database/grupo-l-fafae/data/')
  
    db.download('/', function(data) {
      context=data
      coDesReplace('.menu', context)
      coDesReplace('.menu-secao', context)
      coDesReplace('.secao-titulo-items',context)
      coDesReplace('secao-menu-imagem',context)
    })
  })