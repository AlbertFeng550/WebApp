#项目概述
一个[WebApp](https://albertfeng550.github.io/WebApp/index.html
)，组件式开发，利用HTML+CSS实现柱状图，垂直柱状图，散点图，Canvas实现雷达图，饼图，环图和折线图，CSS3动画来实现loading，返回首页等其他需要动画效果的地方。

#技术选型
1.   页面的DOM操作：jQuery
2.   页面切换功能：FullPage.js
3.   内容结构方案：页面--组件

#所有组件
1.   H5ComponentBase.js</br>
    最基本的图文组件，其他所有组件都会基于它，主要用于添加基本的图片和文字
    
2.  H5ComponentBar.js</br>
    横向的柱状图组件
    
3.  H5ComponentBar_v.js</br>
    垂直的的柱状图组件
    
4.  H5ComponentPolyline.js</br>
     折线图组件
     
5.  H5ComponentRadar.js</br>
     雷达图组件

6.  H5ComponentRing,js</br>
     环型图组件

7.  H5ComponentPie.js</br>
    饼图组件
    
8.  H5ComponentPoint.js</br>
    散点图组件</br>
    
    除图文组件外，其他组件接受的配置数据均为
    ['名字',比例（小数）,'颜色(非必须)']，
    例如['苹果',.275,'#ff7676']，
    不过需要注意的是，饼图组件的数据比例之和需要为100%，
    环形组件一次仅接受一组数据。所有组件均可在同名html内进行验证。
    
    