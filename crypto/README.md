## crypto

crypto 模块的目的是为了提供通用的加密和哈希算法。

用纯 JavaScript 代码实现这些功能不是不可能，但速度会非常慢。

Node 用 C/C++ 实现这些算法后，通过 crypto 这个模块暴露为 JavaScript 接口，这样用起来方便，运行速度也快。

#### MD5 和 SHA1

```javascript
const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update();
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));    // 7e1977739c748beac0c0fd14fd26a544
```

update() 方法默认字符串编码为 utf-8，也可以传入 Buffer。

如果要计算 SHA1，只需要把 `md5` 改成 `sha1`。

还可以使用更安全的 `sha256` 和 `sha512`。

#### Hmac

Hmac 算法也是一种哈希算法，它可以利用 MD5 和 SHA1 等哈希算法。

不同的是，Hmac 还需要一个密钥：

```javascript
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));
```

只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把 Hmac 理解为用随机数"增强"的哈希算法。


