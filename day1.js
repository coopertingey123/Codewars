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
      