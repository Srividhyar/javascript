const list1 = [3, 6, 7, 8, 4, 5];
const list2 = [3, 6, 8, 5, 9, 2, 1];

const isDuplicate = (list, item) => list.every(value => value !== item);
const combineList = (list1, list2) => {
    list2.map(item => isDuplicate(list1, item) && list1.push(item));
    console.log(list1.sort());
}
combineList(list1, list2);