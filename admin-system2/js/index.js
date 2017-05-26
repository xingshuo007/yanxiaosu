
app.config(function (alldata,$stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'page/home.html'
        })
    alldata.fstdata.forEach(function (i) {
        $stateProvider
            .state(i.route,{
                url:"/"+i.route,
                templateUrl:"page/aside.html",
                controller:function ($scope,$stateParams,alldata) {
                    console.log($stateParams.self.id)
                    var newdata=alldata.secdata.filter(function (i) {
                        return i.parentid==$stateParams.self.id
                    })
                    console.log(newdata)
                    $scope.data=newdata
                    $scope.parentName=$stateParams.self.name
                    $scope.statueCon=false
                    $scope.statueConFn=function () {
                        $scope.statueCon=!$scope.statueCon
                    }
                },
                params:{
                    self:i
                }
            })
    })
    alldata.secdata.forEach(function (i) {
        $stateProvider
            .state(i.route,{
                url:"/"+i.route,
                templateUrl:"page/"+i.enName+".html",
                controller:function ($scope,$stateParams,alldata,pre,cutpage,$filter) {
                    var cutfn=function () {
                        $scope.data=alldata.fourdata
                        $scope.$on('addData',function(e,d){//接收添加用户传递过来的数据
                            $scope.data.push(d.data)
                            console.log(d.data)
                            cutpage($scope)
                        })
                        $scope.fileData=function () {
                            return $filter('filter')($scope.data,{role:$scope.roleName,state:$scope.statues})
                        }
                        console.log($scope.fileData())
//        每一页显示的数据长度
                        $scope.maxLength=1
//        定义中间页数显示的长度,只能为奇数；
                        $scope.middlePage=5
                        cutpage($scope)
                        $scope.pageShow(1)
                        $scope.searchFn=function () {
                            console.log($scope.roleName)
                            console.log($scope.statues)
                            $scope.pageShow(1)
                        }
                        $scope.popupSH=false  //删除弹框的控制
                    //    删除
                        $scope.deleteFn=function (item) {
                            $scope.popupSH=true
                            //确定的执行方法
                            $scope.okFn=function () {
                                //通过过滤后的数据找当前显示页
                                var indexPage;
                                $scope.fileData().forEach(function (i,index) {
                                    switch (i.ID){
                                        case item.ID:{
                                            indexPage= Math.ceil(index/$scope.maxLength)
                                        }
                                    }
                                })
                                //    在原始数据上进行数据的剪切
                                $scope.data.forEach(function (i,index) {
                                    switch (i.ID){
                                        case item.ID:{
                                            $scope.data.splice(index,1)
                                        }
                                    }
                                })

                                $scope.pageShow(indexPage)
                                $scope.popupSH=false

                            }
                            //取消的执行方法
                            $scope.noFn=function () {
                                $scope.popupSH=false
                            }

                        }

                    //    修改部分
                        $scope.amendSH=false;
                        $scope.amendFn=function (item) {
                            $scope.amendSH=true;//控制修改弹窗的显示
                            $scope.start="启用"
                            $scope.stop="禁用"
                            $scope.statueRole=item.state
                            $scope.popupData={}
                            for(i in item){
                                $scope.popupData[i]=item[i]
                            }
                            $scope.changeStateFn=function (i) {
                                $scope.statueRole=i
                                console.log($scope.statueRole)
                            }
                            $scope.amendOk=function () {

                                $scope.data.forEach(function (i,index) {
                                    switch (i.ID){
                                        case $scope.popupData.ID:{

                                            for(j in $scope.popupData){
                                                $scope.data[index][j]=$scope.popupData[j]
                                            }
                                            $scope.data[index].state=$scope.statueRole
                                        }break
                                    }
                                })
                                $scope.amendSH=false;
                            }
                            $scope.amendNo=function () {
                                $scope.amendSH=false;
                            }

                        }


                    }
                    var addUser=function(){
                        $scope.addFn = function () {//添加用户信息
                            $scope.add={}
                            $scope.data=alldata.fourdata
                            $scope.fileData=function () {
                                return alldata.fourdata.map(function(i){
                                    return i
                                })
                            }
                            var num=$scope.fileData().length
                            console.log(num)
                            $scope.add.ID = ++num
                            $scope.add.creattime=new Date()
                            $scope.add.role=$('#aRole').val()
                            $scope.add.state=$('#aState').val()
                            $scope.add.orders=$('#aOrder').val()
                            $scope.$emit('addData', {//发送数据
                                data: $scope.add
                            })
                            console.log($scope.add)
                            cutfn()
                        }
                    }

                    switch (i.id){
                        case 22:{
                            //角色管理
                            cutfn()

                        }break;
                        case 23:{
                            cutfn()
                            addUser()

                        }break;
                    }

                },
                // controller:i.enName,
                resolve:{
                    pre:function ($q,$http,$stateParams) {
                        // $http.get("/")
                        console.log($stateParams.id)
                    }
                },
                params:{
                    id:""
                }
            })
    })

})

