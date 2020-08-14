/*@flow*/

function add(x: number, y: number): number {
  return x + y
}

add(12, 11)


var arr: Array<number> = [1, 2, 3]

arr.push(4)

class Bar {
  x: string;           // x 是字符串
  y: string | number | void;  // y 可以是字符串或者数字
  z: boolean;

  constructor(x: string, y: string | number | void) {
    this.x = x
    this.y = y
    this.z = false
  }
}

var bar: Bar = new Bar('hello', 4)

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
}

//若想任意类型 T 可以为 null 或者 undefined，只需类似如下写成 ?T 的格式即可。
var foo: ?string = null