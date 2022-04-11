var strStr = function(haystack, needle) {
    
    let f = 0;
    let l = needle.length - 1;
    let maxSize = haystack.length - 1;
    while (l <= maxSize) {
        if (haystack.slice(f, l + 1) === needle) return f;
        f++;
        l++;
    }   
    return -1;
};


console.log(strStr("hello","ll"))