// 変数と戻り値の型を指定できる
const calc = function(n: number): number {
  let total: number = 0;
  for (let index = 1; index <= n; index++) {
    total += index;
  }
  return total;
};

// オプショナル引数(必ずセットしなくても良い引数)
const taxCalculation = function(price: number, tax?: number): number {
  let res: number;
  // taxが存在するかチェック
  if (tax) {
    // あるとき => 入力されたtaxで税込計算
    res = price * (1.0 + tax / 100);
  } else {
    // ないとき => 8%で計算
    res = price * 1.08;
  }
  // 小数点以下切り捨て
  return Math.floor(res);
};

// 可変引数(引数の数が呼び出しごとに変わる)
const sumNumber = function(...arr: number[]): number {
    let res:number = 0;
    // 引数が存在するなら分足し合わせる
    if (arr){
        for (let i = 0;i < arr.length;i++){
            res += arr[i];
        }
    }
     // 小数点以下切り捨て
    return Math.floor(res);
};

export default {
  calc,
  taxCalculation,
  sumNumber
};
