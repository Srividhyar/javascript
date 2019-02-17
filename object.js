const firstList = [
    {
        name: 'name1',
        place: 'place1',
        age: 40,
        id: 2
    },
    {
        name: 'name2',
        age: 2,
        id: 1
    }
];

const secondList = [
    {
        age: 20,
        place: 'place3',
        id: 2
    },
    {
        place: 'place2',
        id: 1
    },
    {
        name: 'name3',
        id: 3
    }
];
const combineObjectsinArray = (list1, list2) => {
    list1.forEach((item, key) => {
        list1[key] = {...item, ...list2[key]}
    });
    return list1;
}

// console.log(combineObjectsinArray(firstList, secondList));

const combineArrayOfObjects = (list1, list2) => {
    if (list1.length > list2.length) {
        return combineObjectsinArray(list1, list2);
    } else {
        return combineObjectsinArray(list2, list1);
    }
}

// console.log(combineArrayOfObjects(firstList, secondList));

const combineObjectsbyId = (list1, list2) => {
    list1.forEach((item1, key) => {
        const newListItem = list2.filter(item2 => item1.id === item2.id)[0];
        list1[key] = {...item1, ...newListItem}
    });
    return list1;
}

// console.log(combineObjectsbyId(firstList, secondList));

const combineArrayOfObjectsbyId = (list1, list2, swap = false) => {
    if (swap) {
        return combineObjectsbyId(list2, list1);
    }
    return combineObjectsbyId(list1, list2);
}

 //console.log(combineArrayOfObjectsbyId(firstList, secondList, true));

 const mergedList = combineArrayOfObjectsbyId(firstList, secondList, true);


 const sortByKey = (list, key = 'id') => list.sort((a, b) => {
    if (a[key] < b[key]) return -1
    else if(a[key] > b[key]) return 1
    return 0;
});

const byKey = sortByKey(mergedList, 'place');
console.log('\nBy Id', byKey);