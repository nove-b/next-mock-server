## nextでモックサーバーを立ち上げる

### 起動

``` bash
npm i
npm run dev
```

URL:http://localhost:3000/api-doc

### 概要

モックを作る際にモックサーバーを立ち上げたかった。
[json-server](https://www.npmjs.com/package/json-server)でも良かったけど、`Swagger`も同時に作成できそうだったので`api/routing`を使用することにした。

Swagger`の作成は`[https://www.npmjs.com/package/next-swagger-doc](https://www.npmjs.com/package/next-swagger-doc)

を使用した。


