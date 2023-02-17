/**
 * 分割代入
 */
console.log("-----START destructuringAssignment-----");
const myProfile = {
  name: "tama",
  age: 500
};

const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

//分割代入
const { name, age } = myProfile;

const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

//分割代入(配列)
const myProfile2 = ["tama", "500"];
const [name2, age2] = myProfile2;
console.log(`名前は${name2},年齢は${age2}です。`);
