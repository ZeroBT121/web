var MyChart = echarts.init(document.querySelector('.middle'));
    var xDataArr = ['李家伟', '曾勇', '颜泽辉', '许顺航', '柳彭龙', '文亮', '朱元昊', '易邝成', '胡兴广', '邓炼武', '文攻术', '王杰', '谢佳峻', '李龙', '贺傲松', '陈熙文', '李龙昌', '沈泽胜', '吴楚堃', '李多慧', '王祜龙', '张可为', '成凯睿', '易龙昊', '王泽暄', '莫翔宇', '黄金阳', '刘旭', '张泽军', '曾山星', '郑航', '李灵娇', '刘映林', '王琼', '曹晟嘉', '易圆梦', '吴湘', '宋泽楹', '罗悦雯', '胡娟', '胡淑婷', '高莹', '朱沁英', '王颖超', '宋梦婷', '刘梦恬'] // 准备x轴数据
    var yDataArr3 = ['17', '77', '36', '51', '97', '72', '68', '0', '46', '60', '69', '58', '14', '63', '45', '82', '17', '14', '27', '18', '15', '60', '17', '74', '5', '35', '46', '34', '64', '56', '55', '84', '23', '83', '53', '73', '31', '17', '50', '15', '88', '42', '77', '81', '69', '58']//计算机应用
    var yDataArr1 =  ['31', '29', '15', '26', '44', '86', '73', '8', '46', '64', '52', '39', '85', '88', '35', '51', '29', '61', '24', '16', '100', '78', '4', '96', '15', '84', '42', '14', '89', '35', '54', '68', '96', '78', '38', '33', '6', '67', '69', '93', '58', '69', '48', '76', '90', '23']//大学语文	
    var yDataArr2 = ['84', '13', '84', '76', '64', '53', '9', '6', '0', '51', '16', '53', '87', '49', '37', '38', '90', '64', '78', '68', '44', '92', '75', '38', '54', '57', '37', '72', '21', '66', '72', '31', '76', '72', '39', '32', '57', '70', '21', '33', '91', '32', '44', '90', '36', '46']//高等数学
    var yDataArr4 = ['90', '27', '10', '30', '32', '89', '96', '22', '38', '37', '17', '53', '9', '90', '29', '3', '94', '56', '85', '49', '66', '4', '45', '53', '24', '3', '60', '22', '98', '24', '19', '94', '24', '59', '50', '77', '18', '28', '46', '11', '79', '18', '92', '91', '95', '70']//大学英语
    yDataArr = []
    for(var i=0;i<xDataArr.length;i++){
        yDataArr[i]=Number(yDataArr1[i])+Number(yDataArr2[i])+Number(yDataArr3[i])+Number(yDataArr4[i])
    }
    console.log(yDataArr)
    var option = {
      xAxis: {
        type: 'category',
        data: xDataArr,
        axisLabel: {
            interval: 0,//横轴信息全部显示  
            rotate: 75,// 
        },
      },
      yAxis: {
        type: 'value'
      },
      legend: { // 图例, 图例中的data数据来源于series中每个对象的name, 图例可以帮助我们对图表进行筛选
        data: ['一学期总成绩', '二学期语文成绩'],
      },
      dataZoom:{
          // 这个dataZoom组件，也控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 50,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
      },
      series: [
        {
          name: '一学期总成绩',
          type: 'bar',
          markPoint: { // 标记点
            data: [
              {
                type: 'max', name: '最大值'
              },{
                type: 'min', name: '最小值'
              }
            ]
          },
          markLine: { // 标记线
            data: [
              {
                type: 'average', name: '平均值'
              }
            ]
          },
          label: { // 柱状图上的文字设置
            show: true, // 是否显示
            rotate: 60, // 旋转角度
            position: 'top' // 显示位置
          },
          barWidth: '40%', // 柱的宽度
          data: yDataArr
        },
        {
          name: '二学期语文成绩',
          type: 'line',
          markPoint: { // 标记点
            data: [
              {
                type: 'max', name: '最大值'
              },{
                type: 'min', name: '最小值'
              }
            ]
          },
          markLine: { // 标记线
            data: [
              {
                type: 'average', name: '平均值'
              }
            ]
          },
          label: { // 柱状图上的文字设置
            show: true, // 是否显示
            rotate: 60, // 旋转角度
            position: 'top' // 显示位置
          },
          barWidth: '40%', // 柱的宽度
          data: yDataArr1
        }
      ]
    }
    MyChart.setOption(option)

MyChart.on('click',function(ret){
    console.log(ret)
        var Name=ret.name
        var Number
        for(var i=0;i<xDataArr.length;i++){
            if(Name==xDataArr[i])
            Number=i
        }
        var MyChart3 = echarts.init(document.querySelector('.left-bottom'));
        var pieData = [
        {
            name: '大学语文',
            value: yDataArr1[Number]
            },
        {
            name: '高等数学',
            value: yDataArr2[Number]
        },
        {
            name: '大学英语',
            value: yDataArr3[Number]
        },
        {
            name: '计算机应用',
            value: yDataArr4[Number]
        }
        ]
        var option = {
            title:{
                text:Name+"的各科成绩"
                },
        series: [
            {
            type: 'pie',
            data: pieData,
            label: { // 饼图文字的显示                  show: true, // 显示文字
            },
            roseType: 'radius', // 南丁格尔图 饼图的每一个区域的半径是不同的
            }
        ]
        }
        MyChart3.setOption(option)
        
            // 开始画第二个图
        var MyCharts4 = echarts.init(document.querySelector('.right-bottom'))
            // 各个维度的最大值
        var dataMax = [
        {
            name: '大学语文',
            max: 100
        },
        {
            name: '高等数学',
            max: 100
        },
        {
            name: '大学英语',
            max: 100
        },
        {
            name: '计算机应用',
            max: 100
        }
        ]
        var option = {
        radar: { 
            indicator: dataMax, // 配置各个维度的最大值
            shape: 'polygon' // 配置雷达图最外层的图形 circle polygon
        },
        series: [
            {
            type: 'radar', // radar 此图表时一个雷达图
            label: { // 设置标签的样式
                show: true // 显示数值
            },
            // areaStyle: {}, // 将每一个产品的雷达图形成阴影的面积
            data: [
                {
                name: ret.name,
                value: [yDataArr1[Number],yDataArr2[Number],yDataArr3[Number],yDataArr4[Number]]
                },
            ]
            }
        ]
        }
        MyCharts4.setOption(option)

        var text1 = document.querySelector('.right-top');
        text1.innerHTML="此图类型是："+ret.componentSubType+"<br>"+"此属性成绩是："+ret.data+"<br>"+"此属性序号是："+ret.dataIndex+"<br>"+"此属性事件是："+ret.event+"<br>"+"此成绩类型是："+ret.seriesName+"<br>"+"属性名字是：："+ret.name+"<br>"+"你的操作是："+ret.type
})  

// 饼图模块1
var MyChart2 = echarts.init(document.querySelector('.left-top'));
    var option={
        title:{
            text:'两个学期成绩之和对比图',
            left:'35%'
        },
        tooltip:{},
        series:[
                {
                    type: 'pie',
                    data: [
                        { name: '第一个学期成绩和', value: 8103 },
                        { name: '第二个学期成绩和', value: 9305 }
                    ],
                    radius: '60%',
                    center: ['50%', '50%'],
                },
        ]
    }
    MyChart2.setOption(option)  