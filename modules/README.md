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

原理：

```javascript
var module = {
    id: 'hello',
    exports: {}
};

var load = function (exports, module) {
    // node模块中的代码
    //...
    
    // exports.fn1 = function () {};
    // exports.fn2 = function () {};
    
    /*
    module.exports = {
        fn3: function () {}, 
        fn4: function () {}
    };
    */
    
    return module.exports;    
};

var exported = load(module.exports, module);
```

#### CommonJS 规范

使用模块的好处？

* 最大的好处就是大大提高了代码的可维护性。
* 其次，编写代码不必从零开始，当一个模块编写完毕，就可以被其他地方引用。
* 我们在编写程序的时候，也经常引用其它模块，包括 Node 内置的模块和来自第三方的模块。
* 使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中。

导出模块：

```javascript
const s = 'Hello';

var s = 'hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
```

引入模块，如果只写模块名：

```javascript
const greet = require('hello');
```

则 Node 会依次在 内置模块、全局模块 和 当前模块 下查找 hello.js

加载项目中自定义的模块，需要相对路径(相对于当前模块)或者绝对路径。

```javascript
const greet = require('./hello');
```

这种模块加载机制就被称为 CommonJS 规范。

在这个规范下，每个 `.js` 文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突。

一个模块想要对外暴露变量（函数也是变量），可以用 `module.exports = variable;`，一个模块要引用其他模块暴露的变量，用 `var ref = require('module_name');` 就拿到了引用模块的变量。
