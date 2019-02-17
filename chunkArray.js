const chunkList = (list, size) => {
    const resultList = [];
    let index = 0, innerList = [];
    list.forEach(item => {
        if (index < size) {
            innerList.push(item);
            index++;
        } else {
            resultList.push(innerList);
            innerList = [item];
            index = 1;
        }
    });
    if (innerList.length > 0) {
        resultList.push(innerList);
    }
    console.log(resultList);
}


chunkList([1,2,3,4,5,6,7], 2);
chunkList([1,2,3,4,5,6,7], 3);
chunkList([1,2,3,4,5,6,7], 5);
chunkList([1,2,3,4,5,6,7], 5);
