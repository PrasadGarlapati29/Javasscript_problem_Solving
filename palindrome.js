//Palindrome

let s="madam"

let res=""

for(var i=s.length-1;i>=0;i--){
    res+=s[i]
}
if (s===res){
    console.log("palindrome")
}
else{
    console.log("Not palindorme")
}
