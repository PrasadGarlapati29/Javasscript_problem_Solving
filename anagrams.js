
let word1="anagram"
let word2="nagaram"
let is_anagram=true
if(word1.length !=word2.length)
{
    console.log("Both are not anagrams")
    
}
else{
    for(var i=0;i<word1.length;i++){
        let word1_count=0
        let word2_count=0
    
    for(var j=0;j<word1.length;j++){
        if(word1[i]==word1[j]){
            word1_count+=1
        }
    }
    for (var k=0;k<word2.length;k++){
        if(word1[i]==word2[k]){
            word2_count+=1
        }
    }
    if(word1_count!=word2_count){
        is_anagram=false;
        break;
    }}
}

if (is_anagram==true){
    console.log("Both are Anagrams")
}
else{
    console.log("Both are not anagrams")
}
