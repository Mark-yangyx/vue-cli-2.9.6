# dpos-h5

> A vue.js from yltx

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8082
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 命名规范

### 文件和文件夹命名
* 文件夹和文件名采用英文小写字母命名，多个英语单词用 “-” 分割，不使用驼峰命名，如：hello-world

### 样式表命名
* 样式表命名采用英文小写字母命名，多个英语单词用 “-” 分割，不使用驼峰命名，如：hello-world
* ./client/css/utils下面的function和mixin可以直接使用，如：crem()

### JS命名
* js变量使用驼峰命名，不使用-号分割

```JS
// 不推荐
let foo_bar = 'hello eleme';

// 推荐
let fooBar = 'hello eleme';
```

* 常量要大写

```JS
// 不推荐
let prefix = 'http://service.ziztour.net/api/';
let Prefix = 'http://service.ziztour.net/api/'

// 推荐
const PREFIX = 'http://service.ziztour.net/api/';
```

### 注释命名
* 在stylus和js文件中添加注释时，在“//”后面加入空格再添加文字

```bash
/*不推荐*/
//不推荐
; // 不推荐

/* 推荐 */
// 推荐
;
```

* 在写pug模板时，在“//”后面最好加上-再空格，因为“//”会被转义成<!---->，“//-”不会被转义成任何东西


### Stylus代码风格
* 2个空格缩进，UTF-8 编码
* 如果你的代码中包含大括号，确保大括号与选择器之间留空，冒号后面留空，注释内外前后留空
* .styl样式文件一定要外链进入页面，可以放在vue同级目录

* 避免使用 ID 选择器，权重太高，不易维护
* @require和@import支持引入css文件，避免首页产生过多HTTP请求，可以使用这两个关键字合并css文件
* 0 值的单位建议省略，但不强制，因为大部分 0 值的单位是没用的
* 类名中的字母一律小写，只使用字母、数字以及“-”，因为解析样式表时不区分大小写


### JS代码风格
* 2个空格缩进，UTF-8 编码


* 在二元和三元运算符的符号与操作数之间添加空格，在非行末的 , ; } 后添加空格，在 { 前添加空格。并在每个逻辑块中间添加空白行。 特别的，在 if、while 等关键字后加空格，与函数调用做区分

```JS
// 不推荐
let foo='bar',hello=foo+2,test=true;
function hi(){
  // ...
}
if(foo&&hello){
  // ...
}else if(foo){
  // ...
}else if(! test){
  // ...
}

// 推荐
let foo = 'bar';
let hello = foo + 2;
let test = true;

function hi(arg1, arg2) {
  // ...
}

if (foo && hello) {
  // ...
} else if (foo) {
  // ...
} else if (!test) {
  // ...
}
```

* 不要为大括号另写一行

```JS
// 不推荐
if (foo)
{
  // ...
}

// 推荐
if (foo) {
  // ...
}

// 不允许
return
{
  a: 1
};

// 一定要
return {
  a: 1
};
```

* 写 else 时不要另起一行

```JS
// 不推荐
if (test) {
  things1();
  things2();
}
else {
  things3();
}

// 推荐
if (test) {
  things1();
  things2();
} else {
  things3();
}
```

## 关于Vue的注意事项

### 公用组件全部放入以及目录 components 下级，私有组件可以放在当前模块下面
* 组件命名同步使用 C-name(组件名)

### 自定义扩展组件
* 在组件中如果有自定义属性为驼峰格式，在模板文件中应该插入 “-” 到大写字母前面并将大写字母转小写，例如：cityId ==> city-id

### 客户端存储数据
* 通过action获取完数据之后，一定要在mutation中修改state，这样才能触发store.subscribe方法，就能在不影响业务逻辑的前提下存储数据