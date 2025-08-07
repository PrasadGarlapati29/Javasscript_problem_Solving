let s = "prasadGarlapati";
let sub = "sad";
let is_sub = false;

for (let i = 0; i <= s.length - sub.length; i++) {
    let res = "";
    for (let j = i; j < i + sub.length; j++) {
        res += s[j];  // <-- This is the key line
    }

    if (res === sub) {
        is_sub = true;
        break;
    }
}

if (is_sub) {
    console.log("Substring");
} else {
    console.log("Not a substring");
}
