- [条形扫码枪调用js 案例](#%e6%9d%a1%e5%bd%a2%e6%89%ab%e7%a0%81%e6%9e%aa%e8%b0%83%e7%94%a8js-%e6%a1%88%e4%be%8b)
    - [扫码逻辑模块的封装](#%e6%89%ab%e7%a0%81%e9%80%bb%e8%be%91%e6%a8%a1%e5%9d%97%e7%9a%84%e5%b0%81%e8%a3%85)
    - [方式的使用](#%e6%96%b9%e5%bc%8f%e7%9a%84%e4%bd%bf%e7%94%a8)

# 条形扫码枪调用js 案例

### 扫码逻辑模块的封装

```js
export default class CodeGun {
    constructor(callback = () => {}, origin_code = '', origin_last = '') {
        this.origin_code = origin_code;
        this.origin_last = origin_last;
        this.callback = callback;
        // 事件监听函数，如果需要绑定this，需要 <统一> 绑定this,否则不能移除监听事件，注意匿名函数也不能移除监听,
        this.keyDownFn = this.keyDownFn.bind(this);
        document.addEventListener('keydown', this.keyDownFn);
        // 单例模式
        if (!CodeGun.instance) {
            CodeGun.instance = this;
        }
        return CodeGun.instance;
    }

    // 取消监听
    removeListener() {
        // 注意 匿名函数无法移除
        document.removeEventListener('keydown', this.keyDownFn);
    }
    keyDownFn(e) {
        let nextCode;
        let nextTime = new Date().getTime();
        let lastTime = this.origin_last;
        let code = this.origin_code;
        // 键盘按键
        if (window.event) {
            // IE
            nextCode = e.keyCode;
        } else if (e.which) {
            // Netscape/Firefox/Opera
            nextCode = e.which;
        }

        // 字母上方 数字键0-9 对应键码值 48-57; 数字键盘 数字键0-9 对应键码值 96-105
        if ((nextCode >= 48 && nextCode <= 57) || (nextCode >= 96 && nextCode <= 105)) {
            let codes = {
                '48': 48,
                '49': 49,
                '50': 50,
                '51': 51,
                '52': 52,
                '53': 53,
                '54': 54,
                '55': 55,
                '56': 56,
                '57': 57,
                '96': 48,
                '97': 49,
                '98': 50,
                '99': 51,
                '100': 52,
                '101': 53,
                '102': 54,
                '103': 55,
                '104': 56,
                '105': 57
            };
            nextCode = codes[nextCode];
            nextTime = new Date().getTime();
        }
        // 第二次输入延迟两秒，删除之前的数据重新计算
        if (nextTime && lastTime && nextTime - lastTime > 2000) {
            code = String.fromCharCode(nextCode);
        } else {
            code += String.fromCharCode(nextCode);
        }

        // 保存数据
        this.origin_last = nextTime;
        this.origin_code = code;
        // 键入Enter
        if (String(nextCode) === String(13)) {
            // 键入回车务必清空code值
            this.origin_code = '';
            // 判断 code 长度（这里就获取到条码值了，以下业务自由发挥）
            code = code.trim();
            // 取消监听
            this.removeListener();
            // 触发回调
            this.callback && this.callback(code);
        }
    }
}

```

### 方式的使用

```js
import CodeGun from '@/utils/gun.js';

// 开启监听扫码枪输入事件
this.gun = new CodeGun(code => {
    console.log(code);
})
// 手动取消监听
this.gun.removeListener();

```