/* 垂直柱图组件对象 */

var H5ComponentBar_v =function ( name, cfg ) {

    var component =  new H5ComponentBar( name ,cfg );

    // 每个柱图中项目的宽度计算
    var width = ( 100 / cfg.data.length ) >> 0 ;
    component.find('.line').width( width + '%');

    $.each( component.find('.rate') ,function(){
        var w = $(this).css('width');
        //把进度区的宽度重设为高度，并且取消原来的宽度
        $(this).height(w).width('');
    });

    $.each( component.find('.per'),function(){
        //  重新调整 DOM 结构
        $(this).appendTo( $(this).prev() ) ;//进度区 元素
    })

    return component;
}