document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://grupo-l-fafae.firebaseio.com/')
  
    db.download('/', function(data) {
      context=data
      coDesReplace('.child1', context)

    })
  })