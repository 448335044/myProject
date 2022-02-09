<template>
 <div>
    <div>
        高德地图
    </div>
    <div id="map-container"></div>
 </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.init()
    // 这里onmaploaded，异步加载高德地图的回调会去执行这个方法
	// window.onmaploaded = () =>{
    //     // 获取到作为地图容器的DOM元素
    //     const container = document.querySelector('#map-container')
    //     console.log('111', AMap)
    //     // 创建地图实例
    //     const map = new AMap.Map(container, {
    //     scrollWheel: true,
    //     center: [117.000923,36.675807],
    //     zoom: 11,
    //     viewMode:'3D'//使用3D视图
    //     })
    //     // 往地图里加入更多元素（如点标记）
    //     // const marker = new AMap.Marker({
    //     // map: map,
    //     // center: [117.000923,36.675807]
    //     // })

    //     var lineArr = [
    //         [117.000923,36.675807],
    //         [117.382122, 39.901176],
    //         [118.387271, 40.912501],
    //         [119.398258, 42.904600]
    //     ];
    //     var polyline = new AMap.Polyline({
    //         path: lineArr,          //设置线覆盖物路径
    //         strokeColor: "pink", //线颜色
    //         strokeWeight: 5,        //线宽
    //         strokeStyle: "solid",   //线样式
    //     });
    //     map.add(polyline);
       
    // }

    // const url = `https://webapi.amap.com/maps?v=1.4.15&key=b795aa89e4bbe49b9dd9ad64b7bf89eb&callback=onmaploaded`
    // let jsapi = document.createElement('script')
    // jsapi.charset = 'utf-8'
    // jsapi.src = url
    // document.head.appendChild(jsapi)

    },
    methods: {
        init() {
            // 获取到作为地图容器的DOM元素
            const container = document.querySelector('#map-container')
            // 创建地图实例
            const map = new AMap.Map(container, {
            scrollWheel: true,
            center: [117.000923,36.675807],
            zoom: 11
            })
            // 往地图里加入更多元素（如点标记）
            const marker = new AMap.Marker({
            map: map,
            center: [117.000923,36.675807]
            })

            var lineArr = [
                [117.000923,36.675807],
                [117.382122, 39.901176],
                [118.387271, 40.912501],
                [119.398258, 42.904600]
            ];
            var polyline = new AMap.Polyline({
                path: lineArr,          //设置线覆盖物路径
                strokeColor: "pink", //线颜色
                strokeWeight: 5,        //线宽
                strokeStyle: "solid",   //线样式
            });
            map.add(polyline);
        }
    }
}
</script>

<style>
#map-container{
    width:100%;
    height:90vh;
}
</style>