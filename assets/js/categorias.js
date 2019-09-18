document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  
  let db = coDesConnect('https://grupo-l-fafae.firebaseio.com/')

  db.download('/', function(data) {
    
    context=data
    coDesReplace('.category-title',context)
    coDesReplace('.title',context)
    coDesReplace('.category-title-image',context)
    coDesReplace('.description',context)

    context=data['portfolio'][value]
    coDesReplace('.projetos-menu',context)

  })
})