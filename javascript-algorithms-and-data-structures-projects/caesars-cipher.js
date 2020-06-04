function rot13(code) {
        let arr = code.split('');
        let result = '';
        arr.forEach(function(item) {
                let code = item.charCodeAt(0);
                if(code >= 65 && code <= 90) {
                        code = code - 13;
                        if(code < 65) {
                                code  = 90 - (65 - code) + 1;
                        }
                        result += String.fromCharCode(code);
                }
                // leave space as it is
                if(code == 32) {
                        result += item;
                }
                // leave special characters as it is
                if(code >= 33 && code <= 64) {
                        result += item;
                }

        })
        return result;
}
rot13("SERR PBQR PNZC");
// rot13("SERR CVMMN!")
// rot13("SERR YBIR?")
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")