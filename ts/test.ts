// 変数
const num: number = 123;
const str: string = "abc";
const bool: boolean = false;
const date: Date = new Date();

// 配列
const arr: Array<number> = [1, 2, 3];

// 列挙型
enum Color {
  red,
  blue,
  green
}

// タプル
const data: [string, string, number] = ["hoge", "hugahuga", 1];

// タイプ
type Name = string;
type Mail = string;
type Age = number;
const profile: [Name, Mail, Age] = ["tanaka taro", "hogehoge@hoge.com", 20];

export default {
  num,
  str,
  bool,
  date,
  arr,
  data,
  profile
};
