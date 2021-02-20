// var map = new AMap.Map('container', {
//     zoom: 11, //级别
//     center: [116.397428, 39.90923], //中心点坐标
//     viewMode: '3D', //使用3D视图
// });
// // var marker = new AMap.Marker({
// //     // offset: new AMap.Pixel(-10, -10),
// //     size: new AMap.Size(40, 50),
// //     position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
// //     icon: ,
// //     title: '北京',
// //     zoom: 13,
// // });

// // 将创建的点标记添加到已有的地图实例：
// // map.add(marker);

// // 移除已创建的 marker
// // map.remove(marker);

// // //添加点标记
// // var content = '<div class="marker-route marker-marker-bus-from">123</div>';

// // var icon = new AMap.Icon({
// //     size: new AMap.Size(40, 50), // 图标尺寸
// //     image: './images/ACS.png', // Icon的图像
// //     offset: new AMap.Pixel(100, 100),
// //     // imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
// //     imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
// // });

// // // 将 Icon 实例添加到 marker 上:
// // var marker = new AMap.Marker({
// //     position: new AMap.LngLat(116.405467, 39.907761),
// //     offset: new AMap.Pixel(100, 100),
// //     // icon: icon, // 添加 Icon 实例
// //     content: content, // 自定义点标记覆盖物内容
// //     title: '北京',
// //     zoom: 13,
// // });

// // map.add(marker);

// // 创建样式对象
// var styleObject = {
//     url: './images/ACS.png', // 图标地址
//     size: new AMap.Size(11, 11), // 图标大小
//     anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
// };

// var massMarks = new AMap.MassMarks({
//     zIndex: 5, // 海量点图层叠加的顺序
//     zooms: [3, 19], // 在指定地图缩放级别范围内展示海量点图层
//     style: styleObject, // 设置样式对象
// });

// var data = [
//     {
//         lnglat: [116.405285, 39.904989], //点标记位置
//         name: 'beijing',
//         id: 1,
//     },
//     // {
//     //     lnglat: [216.405285, 239.904989], //点标记位置
//     //     name: 'beijing',
//     //     id: 2,
//     // },
// ];

// massMarks.setData(data);

// // 将海量点添加至地图实例
// massMarks.setMap(map);

var map = new AMap.Map('container', {
    zoom: 4,
    center: [102.342785, 35.312316],
});

var style = [
    {
        url: './images/ACS.png',
        anchor: new AMap.Pixel(6, 6),
        size: new AMap.Size(30, 30),
    },
    {
        url: 'https://a.amap.com/jsapi_demos/static/images/mass0.png',
        anchor: new AMap.Pixel(4, 4),
        size: new AMap.Size(30, 30),
    },
    {
        url: './images/DCicon.png',
        anchor: new AMap.Pixel(3, 3),
        size: new AMap.Size(30, 30),
    },
];

var mass = new AMap.MassMarks(citys, {
    opacity: 0.8,
    zIndex: 111,
    cursor: 'pointer',
    style: style,
});

var marker = new AMap.Marker({ content: ' ', map: map });

mass.on('mouseover', function (e) {
    marker.setPosition(e.data.lnglat);
    marker.setLabel({ content: e.data.name });
});

mass.setMap(map);

function setStyle(multiIcon) {
    if (multiIcon) {
        mass.setStyle(style);
    } else {
        mass.setStyle(style[2]);
    }
}
