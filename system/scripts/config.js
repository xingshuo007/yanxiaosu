function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index')
    $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'tpl/index.html'
        })
        .state('manage',{
            url:'/manage',
            templateUrl:'tpl/manage.html'
        })
        .state('addUser',{
            url:'/addUser',
            templateUrl:'tpl/addUser.html',
            controller:function($scope){
                $scope.addFn=function(){//添加用户信息
                    var num=$scope.data.length
                    $scope.add.ID=++num
                    function fn(day){
                        if(day<10){
                            return '0'+day
                        }else{
                            return day
                        }
                    }
                    $scope.add.creattime=new Date().getFullYear()+'-'+fn(new Date().getMonth())+'-'+fn(new Date().getDate())+' '+fn(new Date().getHours())+':'+fn(new Date().getMinutes())
                    //console.log($scope.add.creattime)
                    $scope.$emit('addData',{//发送数据
                        data:$scope.add
                    })
                }
            }

        })

}
angular.module('myApp')
    .config(config)
    .service('data',function(){
        return [
            {
                ID:1,
                parentid:23,
                loginname:'zhangsan',
                name:'张三',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:2,
                parentid:23,
                loginname:'lisi',
                name:'李四',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:3,
                parentid:23,
                loginname:'wangwu',
                name:'王五',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:4,
                parentid:23,
                loginname:'zhangchen',
                name:'张晨',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:5,
                parentid:23,
                loginname:'liucheng',
                name:'刘成',
                role:'管理员',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:6,
                parentid:23,
                loginname:'liji',
                name:'李继',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:7,
                parentid:23,
                loginname:'yuantao',
                name:'袁涛',
                role:'13管理',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56'
            },
            {
                ID:8,
                parentid:23,
                loginname:'wangjian',
                name:'王建',
                role:'管理员',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56'
            }
        ]
})
    .controller("myCtrl", function ($scope, data) {
        $scope.data = data;
        $scope.$on('addData',function(e,d){//接收数据
            $scope.data.push(d.data)
            $scope.changePage()
        })
        //console.log($scope.data.length)
        //根据唯一的id值匹配删除;
        $scope.remove = function (id) {
            $scope.data.forEach(function(item,index){//遍历数据，若点击删除的数据行对应的Id与数据中的id值相匹配，则利用索引删除数组对应值
                if(item.ID==id){
                    $scope.data.splice(index,1)
                }
            })
            $scope.changePage()
        }
        $scope.bool=true
        //修改表格信息
        $scope.change=function(id){
            $scope.bool=false
            $scope.data.forEach(function(item,index){
                if(item.ID==id){
                    $scope.temp={}
                    for(s in item){
                        $scope.temp[s]=item[s];
                    }
                    $scope.sure=function(){
                        $scope.bool=true
                        $scope.data[index]=$scope.temp;
                        $scope.changePage()
                    }
                }
            })
        }

        $scope.cancel=function(){//点击取消弹出框消失
            $scope.bool=true
        }
        //分页
        $scope.changePage=function(){
            //$scope.data=$scope.data.filter(function(v,i){
            //    if(v.loginname.indexOf('zh')!=-1){
            //        return v;
            //    }
            //});
            $scope.pageSize = 1;
            $scope.pages = Math.ceil($scope.data.length / $scope.pageSize); //分页数量
            //console.log($scope.pages)
            $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;//最多出现五张页数
            $scope.pageList = [];
            $scope.selPage = 1;
            $scope.page=1;
//通过当前页数筛选出表格当前显示数据
            $scope.setData = function () {
                $scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));
            }
            $scope.items = $scope.data.slice(0, $scope.pageSize);
//分页的页码
            for (var i = 0; i < $scope.newPages; i++) {
                $scope.pageList.push(i + 1);
            }
//当前选中页索引
            $scope.selectPage = function (page) {
//不能小于1大于最大
                if (page < 1 || page > $scope.pages) return;
//最多显示分页数5
                if (page > 2) {
//因为只显示5个页数，大于2页开始分页转换
                    var newpageList = [];
                    for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
                        newpageList.push(i + 1);
                    }
                    $scope.pageList = newpageList;
                }
                $scope.selPage = page;
                $scope.setData();
                $scope.isActivePage(page);
                $scope.page=page;
            };
//设置当前选中页样式
            $scope.isActivePage = function (page) {
                return $scope.selPage == page;
            };
//上一页
            $scope.Previous = function () {
                $scope.selectPage($scope.selPage - 1);
            }
//下一页
            $scope.Next = function () {
                $scope.selectPage($scope.selPage + 1);
            };
        }
        $scope.changePage()
})


