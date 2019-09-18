document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://grupo-l-fafae.firebaseio.com/')
  
    db.download('/', function(data) {
      context=data
      coDesReplace('.child1', context)
      coDesReplace('.child1_image1', context)
      coDesReplace('.child1_text1', context)
      coDesReplace('.sub_title', context)
      coDesReplace('.b_text',context)
    })
  })