var map = new AMap.Map('container', {
    zoom: 11, //级别
    center: [116.397428, 39.90923], //中心点坐标
    viewMode: '3D', //使用3D视图
});
// var marker = new AMap.Marker({
//     // offset: new AMap.Pixel(-10, -10),
//     size: new AMap.Size(40, 50),
//     position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
//     icon: ,
//     title: '北京',
//     zoom: 13,
// });

// 将创建的点标记添加到已有的地图实例：
// map.add(marker);

// 移除已创建的 marker
// map.remove(marker);
var content = '<div class="marker-route marker-marker-bus-from">123</div>';

var icon = new AMap.Icon({
    size: new AMap.Size(40, 50), // 图标尺寸
    image: './images/ACS.png', // Icon的图像
    offset: new AMap.Pixel(100, 100),
    // imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
    imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
});

// 将 Icon 实例添加到 marker 上:
var marker = new AMap.Marker({
    position: new AMap.LngLat(116.405467, 39.907761),
    offset: new AMap.Pixel(100, 100),
    // icon: icon, // 添加 Icon 实例
    content: content, // 自定义点标记覆盖物内容
    title: '北京',
    zoom: 13,
});

map.add(marker);
