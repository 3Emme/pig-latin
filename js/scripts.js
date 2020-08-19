$(document).ready(function(){
  
  $("form#pig-latin-form").submit(function(event){
    event.preventDefault();
    pigLatin()
  });

  function pigLatin(str) {
    str = str.toLowerCase()
    const queYou = ["qu"]
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      return str + "way";
    } else if (str[0] ==="q" && str[1] === "u")
      return str.slice[2] + "quay" 
      ;
    } else {
      for (let char of str) {
        if (vowels.includes(char)) {
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
    else
  }
});



//str[0] ==="q" && str [1] === "u"

// else if ((vowelIndex - 1).val() === "q" && (vowelIndex).val() === "u") {
//   return str.slice(vowelIndex + 2) + str.slice(0, vowelIndex + 1) + "ay";
// }

// function pigLatin(str) {}
//   str = str.toLowerCase()
//   const vowelArray = ["a", "i", "e", "o", "u"];
//   let vowelIndex = 0;

//   if (vowels.includes(str[0]) {
//     return str + "way"
//   } else {}
//   for (let 
//     }