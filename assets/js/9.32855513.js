(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(_,v,t){"use strict";t.r(v);var e=t(0),a=Object(e.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器的多进程机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的多进程机制","aria-hidden":"true"}},[_._v("#")]),_._v(" 浏览器的多进程机制")]),_._v(" "),t("h2",{attrs:{id:"进程与线程的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程的概念","aria-hidden":"true"}},[_._v("#")]),_._v(" 进程与线程的概念")]),_._v(" "),t("ul",[t("li",[_._v("进程: "),t("code",[_._v("CPU")]),_._v("资源分配的最小单位")]),_._v(" "),t("li",[_._v("线程: "),t("code",[_._v("CPU")]),_._v("调度的最小单位")])]),_._v(" "),t("h2",{attrs:{id:"浏览器中常见的进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中常见的进程","aria-hidden":"true"}},[_._v("#")]),_._v(" 浏览器中常见的进程")]),_._v(" "),t("p",[_._v("浏览器是多进程的，常见的进程如下:")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("主控")]),_._v("进程，只有一个，负责调度，管理整个浏览器的运行")]),_._v(" "),t("li",[t("strong",[_._v("渲染")]),_._v("进程，也称"),t("strong",[_._v("浏览器内核")]),_._v("，每一个 "),t("code",[_._v("tab")]),_._v(" 页一个，负责页面渲染，"),t("code",[_._v("js")]),_._v(" 执行等")]),_._v(" "),t("li",[t("strong",[_._v("第三方插件")]),_._v("进程，浏览器开启的第三方插件")]),_._v(" "),t("li",[t("code",[_._v("GPU")]),_._v("进程，只有一个，用于 "),t("code",[_._v("3D")]),_._v(" 绘制")])]),_._v(" "),t("h2",{attrs:{id:"浏览器的渲染进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染进程","aria-hidden":"true"}},[_._v("#")]),_._v(" 浏览器的渲染进程")]),_._v(" "),t("p",[_._v("浏览器渲染进程也称浏览器内核，在这个进程内会进行页面的渲染、"),t("code",[_._v("JS")]),_._v(" 的执行以及事件循环，因此浏览器渲染进程又是"),t("strong",[_._v("多线程")]),_._v("的，具体包括如下线程:"),t("br"),_._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/GoFzy/pic-bed/master/browser_inner_thread.png",alt:"browser_inner_thread"}}),t("br")]),t("h4",[_._v("GUI渲染线程")]),t("p"),_._v(" "),t("ul",[t("li",[_._v("负责渲染浏览器界面，解析"),t("code",[_._v("HTML")]),_._v("，"),t("code",[_._v("CSS")]),_._v("，构建 "),t("code",[_._v("DOM")]),_._v(" 树、"),t("code",[_._v("CSS")]),_._v("规则树并生成 "),t("code",[_._v("Render")]),_._v(" 树，最后进行布局和绘制等。")]),_._v(" "),t("li",[_._v("当界面需要重绘（"),t("code",[_._v("Repaint")]),_._v("）或由于某种操作引发回流( "),t("code",[_._v("Reflow")]),_._v(" )时，该线程就会执行")]),_._v(" "),t("li",[_._v("注意，"),t("code",[_._v("GUI")]),_._v(" 渲染线程与 "),t("code",[_._v("JS")]),_._v(" 引擎线程是互斥的")])]),_._v(" "),t("h4",[_._v("JS引擎线程")]),_._v(" "),t("ul",[t("li",[_._v("也称为JS内核，负责处理 "),t("code",[_._v("JS")]),_._v(" 脚本程序（例如V8引擎），一个 "),t("code",[_._v("tab")]),_._v(" 页只有一个该线程用来执行"),t("code",[_._v("JS")]),_._v("（单线程）")]),_._v(" "),t("li",[_._v("同样注意，GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞")])]),_._v(" "),t("h4",[_._v("事件触发线程")]),_._v(" "),t("ul",[t("li",[_._v("归属于浏览器而不是JS引擎，用来控制事件循环")]),_._v(" "),t("li",[_._v("当 "),t("code",[_._v("JS")]),_._v(" 引擎执行代码块如定时器、"),t("code",[_._v("AJAX")]),_._v(" 请求时，会在相应线程处理完成后将对应回调任务添加到事件线程中")]),_._v(" "),t("li",[_._v("当 "),t("code",[_._v("JS")]),_._v(" 引擎空闲时，该线程会把事件添加到待处理队列的队尾，让 "),t("code",[_._v("JS")]),_._v(" 引擎的处理")]),_._v(" "),t("li",[_._v("注意，由于 "),t("code",[_._v("JS")]),_._v(" 的"),t("strong",[_._v("单线程")]),_._v("关系，所以这些待处理队列中的事件都得排队等待 "),t("code",[_._v("JS")]),_._v(" 引擎处理（当"),t("code",[_._v("JS")]),_._v(" 引擎空闲时才会去执行）")])]),_._v(" "),t("h4",[_._v("定时触发器线程")]),_._v(" "),t("ul",[t("li",[_._v("传说中的 "),t("code",[_._v("setInterval")]),_._v(" 与 "),t("code",[_._v("setTimeout")]),_._v(" 所在线程")]),_._v(" "),t("li",[_._v("浏览器定时计数器并不是由 "),t("code",[_._v("JS")]),_._v(" 引擎计数的,（因为 "),t("code",[_._v("JS")]),_._v(" 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）")]),_._v(" "),t("li",[_._v("通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待 "),t("code",[_._v("JS")]),_._v(" 引擎空闲后执行）")])]),_._v(" "),t("h4",[_._v("异步http请求线程")]),_._v(" "),t("ul",[t("li",[_._v("在"),t("code",[_._v("XMLHttpReques")]),_._v("t在连接后是通过浏览器新开一个线程请求，具体来说就是在 "),t("code",[_._v("send")]),_._v(" 方法调用后开启")]),_._v(" "),t("li",[_._v("将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中，再由 "),t("code",[_._v("JS")]),_._v(" 引擎执行")])]),_._v(" "),t("h2",{attrs:{id:"gui渲染线程工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gui渲染线程工作流程","aria-hidden":"true"}},[_._v("#")]),_._v(" GUI渲染线程工作流程")]),_._v(" "),t("p",[_._v("浏览器器内核拿到内容后，渲染大概可以划分成以下几个步骤：")]),_._v(" "),t("ul",[t("li",[_._v("解析 "),t("code",[_._v("HTML")]),_._v(" 生成 "),t("code",[_._v("DOM")]),_._v(" 树")]),_._v(" "),t("li",[_._v("解析 "),t("code",[_._v("CSS")]),_._v(" 生成 "),t("code",[_._v("CSS")]),_._v(" 规则树")]),_._v(" "),t("li",[_._v("将 "),t("code",[_._v("CSS")]),_._v(" 规则树与 "),t("code",[_._v("DOM")]),_._v(" 树合并成 "),t("code",[_._v("Render")]),_._v(" 树")]),_._v(" "),t("li",[_._v("布局"),t("code",[_._v("Render")]),_._v(" 树（"),t("code",[_._v("Layout/reflow")]),_._v("），负责各元素尺寸、位置的计算")]),_._v(" "),t("li",[_._v("绘制 "),t("code",[_._v("Render")]),_._v(" 树（"),t("code",[_._v("paint")]),_._v("），绘制页面像素信息，并显示在屏幕上")])]),_._v(" "),t("p",[_._v("渲染完毕后就是"),t("code",[_._v("window.onload")]),_._v(" 事件了，之后就是自己的 "),t("code",[_._v("JS")]),_._v(" 逻辑处理了，具体流程可以参考下图进行理解\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/GoFzy/pic-bed/master/browser_rending.png",alt:"browser_rending"}})]),_._v(" "),t("h2",{attrs:{id:"js引擎线程解析流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js引擎线程解析流程","aria-hidden":"true"}},[_._v("#")]),_._v(" JS引擎线程解析流程")]),_._v(" "),t("h3",[_._v("预处理阶段")]),_._v(" "),t("p",[_._v("首先在 "),t("code",[_._v("js")]),_._v(" 解析执行前，会有一个"),t("strong",[_._v("预处理")]),_._v("阶段，这里仅提部分内容:")]),_._v(" "),t("p",[t("strong",[_._v("1. 分号补全")])]),_._v(" "),t("ul",[t("li",[_._v("当有换行符（包括含有换行符的多行注释），并且下一个 "),t("code",[_._v("token")]),_._v(" 没法跟前面的语法匹配时，会自动补分号")]),_._v(" "),t("li",[_._v("当有}时，如果缺少分号，会补分号")]),_._v(" "),t("li",[_._v("程序源代码结束时，如果缺少分号，会补分号")])]),_._v(" "),t("p",[_._v("例如")]),_._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("function")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("return")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'a'")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])])]),t("p",[_._v("由于分号补全机制，所以它变成了：")]),_._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("function")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n        a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'a'")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])])]),t("p",[_._v("所以运行后是"),t("code",[_._v("undefined")])]),_._v(" "),t("p",[t("strong",[_._v("2. 变量提升")]),t("br"),_._v("\n一般包括"),t("strong",[_._v("函数提升")]),_._v("和"),t("strong",[_._v("变量提升")]),_._v("，这里不展开只说结论，详情可以参看"),t("a",{attrs:{href:"https://juejin.im/post/5a0e3577f265da43085d978b",target:"_blank",rel:"noopener noreferrer"}},[_._v("该篇文章"),t("OutboundLink")],1)]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("使用 "),t("code",[_._v("var")]),_._v(" 定义变量的时候，"),t("code",[_._v("js")]),_._v(" 解释器会将变量提升到该作用域的最顶部，这就是变量提升")])]),_._v(" "),t("li",[t("strong",[_._v("函数的提升只对声明式函数有效，对字面量函数无效，且函数会被优先放在顶部，而后才是变量")])])]),_._v(" "),t("h3",[_._v("解析阶段")]),_._v(" "),t("p",[_._v("在解析阶段，V8引擎分为以下几个模块对源码进行处理:")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("Parser")]),_._v("：通过分词和语法分析将 "),t("code",[_._v("JS")]),_._v(" 源码转换成 "),t("code",[_._v("AST(Abstract Syntax Tree)")]),_._v(" 语法树("),t("code",[_._v("babel")]),_._v("就是通过替换 "),t("code",[_._v("AST")]),_._v(" 语法树实现 "),t("code",[_._v("ES6")]),_._v(" 到 "),t("code",[_._v("ES5")]),_._v(" 的转换)")]),_._v(" "),t("li",[t("code",[_._v("Ignition")]),_._v("：解释器，负责将 "),t("code",[_._v("AST")]),_._v(" 语法树解释成 "),t("code",[_._v("bytecode")]),_._v(" 字节码")]),_._v(" "),t("li",[t("code",[_._v("Turbofan")]),_._v("： 编译器，负责将 "),t("code",[_._v("bytecode")]),_._v(" 字节码转换成汇编代码")])]),_._v(" "),t("p",[_._v("除此以外，V8引擎中还有个 "),t("code",[_._v("Orinoca")]),_._v(" "),t("strong",[_._v("垃圾回收模块")]),_._v("，清除方法分为以下两种：")]),_._v(" "),t("ul",[t("li",[_._v("标记清除: 遍历所有可访问的对象，回收已不可访问的对象")]),_._v(" "),t("li",[_._v("引用次数：跟踪记录每个值被引用的次数，回收次数为0的对象")])])])},[],!1,null,null,null);v.default=a.exports}}]);