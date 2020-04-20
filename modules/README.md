## 模块

* 通过 Node.js 的官方 API 可以看到 Node.js 本身提供了很多**核心模块**，这些核心模块被编译成二进制文件，可以 require('模块名') 去获取；

* 核心模块具有最高的加载优先级（当模块与核心模块同名时会体现）

* Node.js 还有一类模块为 **文件模块**，可以是 JavaScript 代码文件（.js作为文件后缀）、也可以是 JSON 格式文本文件（.json作为文件后缀）、还可以是编辑过的 C/C++ 文件（.node作为文件后缀）。

* 文件模块访问方式通过绝对路径和相对路径去访问，文件后缀可以省略；

* Node尝试加载的优先级 js文件 > json文件 > node文件

* require多次调用同一模块不会重复加载，Node.js 会根据文件名缓存所有加载过的文件模块，所以不会重新加载了

#### exports 和 module.exports 的区别

exports 仅仅是 module.exports 的一个地址引用。
nodejs 只会导出 module.exports 的指向，如果 exports 指向变了，那就仅仅是 exports 不在指向 module.exports，于是不会再被导出

module.exports 才是真正的接口，exports 只不过是它的一个辅助工具。　最终返回给调用的是 module.exports 而不是 exports。
所有的 exports 收集到的属性和方法，都赋值给了 Module.exports。当然，这有个前提，就是 module.exports 本身不具备任何属性和方法。
如果，module.exports 已经具备一些属性和方法，那么 exports 收集来的信息将被忽略。

NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports