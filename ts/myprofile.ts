//　クラスを定義(exportを付けてほかのファイルからimportできるようにする)
export class myProfile {
  name: string; // 名前
  private _age: number; // 年齢

  // コンストラクタ
  constructor(n: string) {
    this.name = n;
  }

  get age(): number {
    return this._age;
  }

  set age(num: number) {
    this._age = num < 0 ? 0 : num;
  }

  // 表示する
  print(): string {
    let msg: string = `<ul>
        <li> ${this.name} </li>
        <li> ${this.age} </li>
    </ul>`;
    return msg;
  }
}
