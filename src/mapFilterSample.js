/**
 * mapやfilterを使った配列の処理(forを使わなくなったらしい)
 * →javaのstreamに近いかな？
 */
console.log("-----START mapFilter-----");
const nameArr = ["tanaka", "yamada", "suzuki"];

//for (let i = 0; i < nameArr.length; i++) {
//  console.log(nameArr[i]);
//}

//mapを使った配列の処理
nameArr.map((name) => console.log(name));
//mapを使った配列の処理(第2引数でindexも使える)
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

//filterを使った配列の処理
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

//かんたんなサンプル
const newNameArr = nameArr.map((name) => {
  if (name === "tanaka") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
