var str = document.getElementById("string");
var btn = document.getElementById("button");
var result = document.getElementById("result");

btn.addEventListener("click",()=>{
    let text = str.value;
    result.innerText= "No of vowel letters are:"+ vowels(text);
})

function vowels(text) {
   let words = [...text];
   let length = words.length;

   let rem=0;
   for (let i = 0; i < length; i++) {
    
        if (words[i]=="a"|| words[i]=="e" || words[i]=="i" || words[i]=="o" || words[i]=="u") {
          var output = ++rem;
        }

   }
   return output;
   
}
