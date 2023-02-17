/**
 * デフォルト値、引数
 */
//デフォルト値の設定
console.log("-----START default-----");
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
sayHello();
