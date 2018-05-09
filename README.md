# karmaForJSUnitFrameWork
This is JS unit test framework.

这是一个简单的测试框架集成（Karma + mocha + sinon + chai），使用karma引入几个重要插件：
1、karma-chrome-launcher（chrome浏览器在Karma中启动）
2、karma-chai(加载chai断言库的插件)
3、karma-mocha（加载mocha的插件）
4、karma-sinon（加载sinon的插件）
5、karma-spec-reporter(用于将测试结果显示到控制台插件)
6、karma-coverage（生成测试的覆盖率报告插件）
7、karma-coverage-istanbul-reporter（生成测试覆盖率报告插件，同时可以将测试覆盖率的数据打印到控制台（这里我只用到了将生成测试数据打印到控制台的功能））
8、karma-webpack（引入webpack插件）


使用到的相关工具和技术：（详细使用和配置可以参考官网）
1、webpack
2、gulp
3、karma
4、mocha
5、sinon
6、chai
