/**
 * Created by p on 2018/11/26.
 */
require(["dojo/parser","dijit/registry","dojo/dom","dojo/on",
"dojo/data/ItemFileWriteStore",
"esri/map","esri/geometry/Extent",
"esri/SpatialReference","esri/Layers/ArcGISDynamicMapServiceLayer",
"dojox/grid/DataGrid","dojo/domReady!"],
function (parser,registry,dom,on,ItemFileWriteStore,Map,Extent,SpatialReference,ArcGISDynamicMapServiceLayer) {
  parser.parse();
  var btnDisOfHouseHolds = dom.byId("distributionOfHouseholds");
  on(btnDisOfHouseHolds,"Click",function () {
    //使用EaseyUI展示表格
    mes();
      
  });
  mes();
  function mes(){
    //使用js动态创建easyui的datagrid
    $('#dataGrid').datagrid({
      title:"政区：陕西省",
      width:510,
      height:300,
      pageSize:10,//初始化显示条数
      pageList:[10,40,60],//分页列表
      iconCls:"icon-save",
      pagination:"true",//设置为ture才显示下方分页工具栏
      rownumbers:"true",
      nowrap:true,
      loadMsg : '数据正在加载,请耐心的等待...',
      fitColumn:"true",
      url:'../../data/datagrid_data.json',
      columns: [[
        {field:'areaName',title:'行政区划',width:'100'},
        {field:'ydfpNumhushu',title:'户数',width:'300'},
        {field:'ydfpNumrenshu',title:'人数',width:'300'},
        {field:'bzstNumhushu',title:'户数',width:'100'},
        {field:'bzstNumrenshu',title:'人数',width:'300'},
        {field:'rzl',title:'搬迁入住率',width:'100'}
      ]]
    });
  }



})