document.addEventListener('DOMContentLoaded', function() {
  
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['pai']


  let db = coDesConnect('https://grupo-l-fafae.firebaseio.com/')

  db.download('/', function(data) {

    context = data['portfolio'][value2]['projetos'][value]
    coDesReplace('.titulo_pygame',context)
    coDesReplace('.projetos-menu',context)
    coDesReplace('.descricao',context)
  
    context = data['portfolio'][value]
    coDesReplace('.projetos-menu',context)
    

  })
})