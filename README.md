#项目概述
一个[WebApp](https://albertfeng550.github.io/WebApp/index.html
),组件式开发，利用CSS3动画和Canvas实现柱状图，折线图，散点图，雷达图，饼图，环图，

#所有组件
1.   H5ComponentBase.js
    最基本的图文组件，其他所有组件都会基于它，主要用于添加基本的图片和文字
    
2.  H5ComponentBar.js
    横向的柱状图组件
    
3.  H5ComponentBar_v.js
    垂直的的柱状图组件
    
4.  H5ComponentPolyline.js
     折线图组件
     
5.  H5ComponentRadar.js
     雷达图组件

6.  H5ComponentRing,js
     环型图组件

7.  H5ComponentPie.js
    饼图组件
    
8.  H5ComponentPoint.js
    散点图组件
    
    除图文组件外，其他组件接受的数据均为['名字','比例（小数）','颜色']，例如['苹果',.275,'#ff7676']，不过需要注意的是，饼图组件的数据比例之和需要为100%，环形组件一次仅接受一组数据
    