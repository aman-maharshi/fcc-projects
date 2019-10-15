function telephoneCheck(str) {
    str = str.replace(/ /g, "");
    str = str.replace(/-/g, "");
    str = str.replace(/[a-zA-Z]/g, "");
    if (str.length == 10) {
      console.log(str, str.length);
      return true;
    }
    else {
      if(str.length == 11 && str[0] == '1') {
        return true;
      } 
      else if(str.length == 13 && str[0] == '1') {
        console.log(str, str.length);
        return true;
      }
      else if(str.length == 12 && str.indexOf('(') != -1 && str.indexOf(')') != -1) {
        
        return true
      }
      else {
        console.log(str, str.length)
        return false;
      }
    }
  }