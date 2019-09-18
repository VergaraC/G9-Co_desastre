document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://grupo-l-fafae.firebaseio.com/')

  let strlink = "projeto.html?pai=" + value + "&key={{@key}}"
  let link = document.querySelector('.sub_title')
  console.log(link)
  link.href = strlink



  
  db.download('/', function(data) {

    context = data['portfolio'][value]
    coDesReplace('.category-title',context)
    coDesReplace('.projetos-menu',context)

    context = data
    coDesReplace('.categories-menu',context)

  })
})
