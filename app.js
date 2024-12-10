const asem = function combine(str1, str2) {
    let ans='';

    for (let i = 0; i < Math.max(str2.length, (str1.length)); i++) {
        if (i < str2.length && i < str1.length) {
            ans += str1[i];
            ans += str2[i];
        }
        else if(i<str2.length) {
            ans += str2[i];
        }else{
            ans += str1[i];
        }
    }
    return ans;
}

console.log(asem("Ahmed is", "Amazing"));


// combineWords("Ahmed is", "Amazing") // AAhmmaezdi nigs
// combineWords("SCE WORD", "ERT") // SECRET WORD
// combineWords("IEEE ManCSC", "Backend Committee") // IBEaEcEk eMnadn CCSoCmmittee
