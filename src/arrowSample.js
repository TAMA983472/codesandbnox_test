const name = "aaa";
const age = "28";

//テンプレート文字列の利用
const templateTest = `私の名前は${name}です。年齢は${age}です。`;
console.log(templateTest);

/**
 * アロー関数
 */
console.log("-----START arrow-----");

//従来の関数の書き方
function func1(str) {
  return str;
}
console.log(func1("func1です。"));

//従来の関数の書き方2(変数に代入)
const func2 = function (str) {
  return str;
};
console.log(func2("func2です。"));

//アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です。"));

//アロー関数2(関数の処理が一行の場合、returnは省略できる。{}も不要)
const func4 = (int) => int + 1;
console.log("func4です。数値に1を足して返します。返却値：" + func4(2));

//アロー関数3(引数2つ)
const func5 = (num1, num2) => num1 + num2;
console.log("func5です。二つの数字を加算します。返却値：" + func5(3, 4));
