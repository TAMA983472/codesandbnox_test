/**
 * スプレッド構文 ...
 */
//配列の展開(拡張for文的な挙動？)
const arr1 = [1, 2];
console.log(...arr1);

//スプレッド構文を利用して引数に渡す
const sum = (num1, num2) => console.log(num1 + num2);
sum(arr1[0], arr1[1]);
sum(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

//普通に代入してコピーすると、参照を引き継いでしまうから分割代入の方がいい。
const arr6 = [...arr4];
console.log(arr6);

//配列の結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);
