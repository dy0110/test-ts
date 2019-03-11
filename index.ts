import test from "./ts/test";
import func from "./ts/func";
import { myProfile } from "./ts/myprofile"; //クラスを指定
import { taxCalculation } from "./ts/tax";

// 変数の型
console.log(test.num);
console.log(test.str);
console.log(test.bool);
console.log(test.date);

const arr: Array<number> = test.arr;

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log("Array<number>: " + element);
}

for (let index = 0; index < test.data.length; index++) {
  const element = test.data[index];
  console.log("Array<Tuple>: " + element);
}

for (let index = 0; index < test.profile.length; index++) {
  const element = test.profile[index];
  console.log("Profile: " + element);
}

// 関数
function addItems<T>(...arg: Array<T>): T {
  let res;
  switch (typeof arg[0]) {
    case "number":
      res = 0;
      break;
    case "string":
      res = "";
      break;
    default:
      return null;
  }
  for (let i = 0; i < arg.length; i++) {
    res += arg[i];
  }
  return res;
}

window.onload = function() {
  // 関数計算
  const number: number = func.calc(10);
  document.getElementById("result_calc").textContent = number.toString();

  // オプショナル引数なし
  const tax_a: number = func.taxCalculation(1000);
  document.getElementById("result_tax_a").textContent =
    "オプショナル引数なし: " + tax_a.toString();

  // オプショナル引数あり
  const tax_b: number = func.taxCalculation(1000, 10);
  document.getElementById("result_tax_b").textContent =
    "オプショナル引数あり: " + tax_b.toString();

  // 可変引数なし
  const sum_result_a: number = func.sumNumber();
  document.getElementById("sum_result_a").textContent =
    "可変引数なし: " + sum_result_a.toString();

  // 可変引数あり
  const sum_result_b: number = func.sumNumber(1, 2, 3, 4, 5, 6, 7, 8, 9);
  document.getElementById("sum_result_a").textContent =
    "可変引数9個: " + sum_result_b.toString();

  const sum_result_c: number = func.sumNumber(1, 2, 3, 4, 5);
  document.getElementById("sum_result_c").textContent =
    "可変引数5個: " + sum_result_c.toString();

  // ジェネリック
  const out_a: string = addItems("1", "2", "3");
  document.getElementById("out_a").textContent =
    "ジェネリック(文字列): " + out_a.toString();

  const out_b: number = addItems(1, 2, 3, 4, 5);
  document.getElementById("out_b").textContent =
    "ジェネリック(数字): " + out_b.toString();

  // クラス
  const profile = new myProfile("Tanaka Taro"); // インスタンス化
  profile.age = 30;
  document.getElementById("print_name").innerHTML = profile.print(); // クラス関数の呼び出し

  // 継承
  class mail extends myProfile {
    public mail: string;

    constructor(n: string, address: string) {
      super(n);
      this.mail = address;
    }

    print(): string {
      let msg: string = `<ul>
          <li> ${this.name} </li>
          <li> ${this.age} </li>
          <li> ${this.mail} </li>
      </ul>`;
      return msg;
    }
  }

  const address = new mail("Suzuki Ichiro", "hogehoge@gmail.com");
  address.age = 24;
  document.getElementById("print_adress").innerHTML = address.print();

  // スタティック変数,クラスメソッド
  document.getElementById("static_price").innerHTML = taxCalculation.price.toString(); // インスタンス化しなくても参照できる
  document.getElementById("static_tax").innerHTML = taxCalculation.tax.toString();
  document.getElementById("static_method").innerHTML = taxCalculation.print().toString();
};
