function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index')
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'tpl/index.html'
        })
        .state('manage', {
            url: '/manage',
            templateUrl: 'tpl/manage.html',
            controller:function($scope){



            }
        })
        .state('addUser', {
            url: '/addUser',
            templateUrl: 'tpl/addUser.html',
            controller: function ($scope) {
                $scope.addFn = function () {//添加用户信息
                    var num = $scope.data.length
                    $scope.add.ID = ++num
                    function fn(day) {
                        if (day < 10) {
                            return '0' + day
                        } else {
                            return day
                        }
                    }

                    $scope.add.creattime = new Date().getFullYear() + '-' + fn(new Date().getMonth()) + '-' + fn(new Date().getDate()) + ' ' + fn(new Date().getHours()) + ':' + fn(new Date().getMinutes())
                    //console.log($scope.add.creattime)
                    $scope.$emit('addData', {//发送数据
                        data: $scope.add
                    })
                }
            }

        })

}
angular.module('myApp')
    .config(config)
    .service('data', function () {
        return [
            {
                ID: 1,
                parentid: 23,
                loginname: 'zhangsan',
                name: '张三',
                role: '管理员3',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 2,
                parentid: 23,
                loginname: 'lisi',
                name: '李四',
                role: '管理员1',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 3,
                parentid: 23,
                loginname: 'wangwu',
                name: '王五',
                role: '管理员2',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 4,
                parentid: 23,
                loginname: 'zhangchen',
                name: '张晨',
                role: '管理员1',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 5,
                parentid: 23,
                loginname: 'liucheng',
                name: '刘成',
                role: '管理员1',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 6,
                parentid: 23,
                loginname: 'liji',
                name: '李继',
                role: '管理员2',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 7,
                parentid: 23,
                loginname: 'yuantao',
                name: '袁涛',
                role: '管理员2',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 8,
                parentid: 23,
                loginname: 'wangjian',
                name: '王建',
                role: '管理员1',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 9,
                parentid: 23,
                loginname: 'zhangsanfeng',
                name: '张三丰',
                role: '管理员3',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 18:56'
            },
            {
                ID: 10,
                parentid: 23,
                loginname: 'lizhongshuo',
                name: '李钟硕',
                role: '管理员2',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 19:56'
            },
            {
                ID: 11,
                parentid: 23,
                loginname: 'piaoxinhui',
                name: '朴信惠',
                role: '管理员2',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-28 16:56'
            },
            {
                ID: 12,
                parentid: 23,
                loginname: 'zhangchenyu',
                name: '张晨宇',
                role: '管理员3',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 13,
                parentid: 23,
                loginname: 'liuyuxing',
                name: '刘雨欣',
                role: '管理员1',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 14,
                parentid: 23,
                loginname: 'liminhao',
                name: '李敏镐',
                role: '管理员3',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 15,
                parentid: 23,
                loginname: 'xiuzhi',
                name: '秀智',
                role: '管理员2',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 16,
                parentid: 23,
                loginname: 'zhengxiujing',
                name: '郑秀晶',
                role: '管理员1',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            }
        ]
    })
    .service("cutpage", function () {
        return function ($scope) {

            var oldData= $scope.data
            //var oldData = $scope.fileData()
            $scope.allPage = Math.ceil(oldData.length / $scope.maxLength)
            if($scope.allPage<=1){
                $scope.showState=false
            }else{
                $scope.showState=true
            }
            $scope.pageArr = []
            for (var i = 2; i < $scope.allPage; i++) {
                $scope.pageArr.push(i)
            }
            $scope.len = ($scope.middlePage - 1) / 2
            $scope.pageShow = function (i) {
                $scope.index = i - 1
                $scope.showStatue1 = false;
                $scope.showStatue2 = false;
                if ($scope.index < $scope.middlePage - $scope.len) {
                    $scope.showStatue1 = false;
                    $scope.showStatue2 = true;
                    $scope.showArr = []
                    for (var i = 1; i <= $scope.middlePage; i++) {
                        $scope.showArr.push(i)
                    }

                } else if ($scope.index >= $scope.middlePage - $scope.len && $scope.index <= $scope.allPage - ($scope.middlePage - 1) / 2 - 2) {
                    $scope.showStatue1 = true;
                    $scope.showStatue2 = true;
                    if ($scope.index == $scope.middlePage - $scope.len) {
                        $scope.showStatue1 = false;
                    }
                    if ($scope.index == $scope.allPage - ($scope.middlePage - 1) / 2 - 2) {
                        $scope.showStatue2 = false;
                    }

                    $scope.showArr = [$scope.index + 1]
                    for (var i = 0; i < $scope.len; i++) {
                        $scope.showArr.push($scope.index - i)
                    }
                    for (var i = 2; i <= $scope.len + 1; i++) {
                        $scope.showArr.push($scope.index + i)
                    }
                } else {
                    $scope.showStatue1 = true;
                    $scope.showStatue2 = false;
                    $scope.showArr = []
                    for (var i = 1; i < $scope.middlePage; i++) {
                        $scope.showArr.push($scope.allPage - i)
                    }
                }
                if ($scope.allPage <= 6) {
                    $scope.showStatue1 = false;
                    $scope.showStatue2 = false;
                }
                $scope.cutDataFn()
            }

            $scope.cutDataFn = function () {
                var newdata = $scope.fileData()
                $scope.cutoutData = newdata.splice($scope.index * $scope.maxLength, $scope.maxLength)
                //console.log($scope.cutoutData)
            }
            $scope.changeIndexFn = function (i) {
                $scope.pageShow(i)

            }
            $scope.updownFn = function (i) {
                if (i == "+") {
                    if (($scope.index + 1) < $scope.allPage) {
                        $scope.pageShow($scope.index + 2)
                    }
                } else {
                    if ($scope.index > 0) {
                        $scope.pageShow($scope.index)
                    }
                }
            }
            $scope.valueDATA=1
            $scope.changeInput = function () {
                $scope.valueDATA=$('#txt').val()
                $scope.pageShow($scope.valueDATA)
            }
            $scope.pageShow(1)
        }
    })
    .controller("myCtrl", function ($scope, data, cutpage,$filter) {
//数据源
        $scope.data = data
        $scope.$on('addData',function(e,d){//接收数据
            $scope.data.push(d.data)
            cutpage($scope)
        })
        $scope.fileData = function () {
            return $scope.data.map(function (i) {
                return i
            })
        }
        $scope.maxLength = 1
        //        定义中间页数显示的长度,只能为奇数；
        $scope.middlePage = 5
        cutpage($scope)


        //根据唯一的id值匹配删除;
        $scope.remove = function (id) {
            $scope.data.forEach(function(item,index){//遍历数据，若点击删除的数据行对应的Id与数据中的id值相匹配，则利用索引删除数组对应值
                if(item.ID==id){
                    $scope.data.splice(index,1)
                }
            })
            cutpage($scope)
        }
        $scope.bool=true
        ////修改表格信息
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
                        cutpage($scope)
                    }
                }
            })
        }

        $scope.cancel=function(){//点击取消弹出框消失
            $scope.bool=true
        }
        $scope.filts=function(){
            //console.log(1)
            $scope.roles=$('#roles').val()
            $scope.states=$('#states').val()
            console.log($scope.roles+$scope.states)
            $scope.names=$('#names').val()
            cutpage($scope)
            return $filter('filter')($scope.data,{role:$scope.roles,state:$scope.states})
        }

        $scope.searchFn=function(){
            $scope.names=$('#names').val()
            $scope.roles=$('#roles').val()
            console.log($scope.roles)
            $scope.states=$('#states').val()

            $scope.data=$scope.data.filter(function(v,i){
                if(v.role.indexOf($scope.roles)!=-1){
                    return v;
                }
            });
            $scope.data=$scope.data.filter(function(v,i){
                if(v.loginname.indexOf($scope.names)!=-1){
                    return v;
                }
            });
            $scope.data=$scope.data.filter(function(v,i){
                if(v.state.indexOf($scope.states)!=-1){
                    return v;
                }
            });
            cutpage($scope)
        }
    })


