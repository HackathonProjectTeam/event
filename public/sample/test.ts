import * as example from './example';
import * as moment from 'moment';

export function test() {
  // 自作モジュール読み込み (example.ts)
  example.hoge();

  // example.tsのHumanクラスを使用
  const Human = example.Human;
  const h1 = new Human("hoge");
  h1.greet();

  const now = moment();
  console.log(`${now.format("MM月DD日 HH:mm:ss")} from test.js`);
}
