function getSum(a, b)
 {
   let intMax = Math.max(a, b);
   let intMin = Math.min(a, b);
   let result = 0; 
   for(intMin; intMin<=intMax; intMin++){
    result = result + intMin;
   };
   return result
   }
      

   function uniqueInOrder(it) {
    var final_result = []
    var last_char
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last_char) {
        final_result.push(last_char = it[i])
      }
    }
    
    return final_result
  }
  
  uniqueInOrder("oiasdOOOiiskkKKiiisss")