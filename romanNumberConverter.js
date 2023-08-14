function solution(number){
    // convert the number to a roman numeral
    v = [
      1000,900,500,400,100,90, 50, 40,10, 9, 5, 4, 1
    ]
    s = [
       "M", "CM", "D", "CD",
          "C", "XC", "L", "XL",
          "X", "IX", "V", "IV",
          "I"
    ]
    
    let roman = "";
  
   for(let i=0;i<v.length; i++){
     while(number >= v[i]){
       roman +=s[i];
       number -=v[i];
     }
   }
    return roman;
  }