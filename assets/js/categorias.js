document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  
  let db = coDesConnect('https://grupo-l-fafae.firebaseio.com/')

  db.download('/', function(data) {
    
    context=data
    coDesReplace('.categories-menu',context)

    context=data['portfolio'][value]
    coDesReplace('.projetos-menu',context)

  })
})