const maxOccurance = (str) => {
    const myStrObj = {};
    let keyList = {}, valueList = {};
    for (i=0; i < str.split('').length; i++) {
      var pattern = new RegExp( str[i], 'g');
      myStrObj[str[i]] = str.match(pattern).length;
    }
    keyList = Object.keys(myStrObj);
    keyListMax = Math.max(...keyList);
    valueList = Object.values(myStrObj);
    console.log(valueList, keyListMax);  
}


maxOccurance("srividhya");