module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }

  let map = new Map();

  for (let j=0; j < bracketsConfig.length; j++) {
    map.set(bracketsConfig[j][0], bracketsConfig[j][1]);
  }

  console.log(map);

  let arr = str.slice('');
  let st = [];

  for (var i = 0; i < arr.length; i++) {
      let ch = arr[i];
      let ind = map.has(ch);
      if (ind == false) {

            if (!st.length) {
              return false;
            }
            let lastBr = st.pop();
            if (map.get(lastBr) != ch) {
              return false;
            }
        } else { 
            
          if (ch == map.get(ch)) {
            if (!st.length) {
                st.push(ch);           
            }  else if (st[st.length-1] !=ch) {
                st.push(ch);
            } else {
                let lastBr = st.pop();
                if (map.get(lastBr) != ch) {
                    console.log("eee1");
                  return false;
                }
            }      
        } else {
            st.push(ch);
        }
        }
      }
    if (st.length > 0) {
      return false;
    } else {
      return true;
    }
};
