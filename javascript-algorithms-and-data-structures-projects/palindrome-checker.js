function palindrome(str) {
    str = str.toLowerCase();
    // remove all special characters other than alphabets and numbers
    str = str.replace(/[^a-zA-Z0-9 ]/g, "");
    // remove all spaces between characters
    str = str.replace(/ /g,'');
    let letters = [];
    for(let i = 0; i < str.length; i++) {
      letters.push(str[i]);
    }
    let reverse = ''
    for(let i = str.length-1; i >= 0; i--) {
      reverse += letters[i]
    }
  
    if(str === reverse) {
      return true;
    }
    else {
      return false;
    }
  }