# xss flash 钓鱼

if-UserAgent.js
判断目标ua有没有在运行的名单中，目标站需要引入这个文件

download_useragent.txt
下载名单

run_useragent.txt
运行名单

ua.php
负责把下载名单的ua移动到运行名单，以此来防止重复弹窗。

上钩感知需要绑个小工具，运行flash的时候post一下ua.php就可以实现，
我是用的c写了一个小工具，由于url不一样，无法提供！

### 感谢Se7en提供的原版项目
