module.controller("personCtrl",personCtrl)

function personCtrl($scope){
    $scope.time = 10
    $scope.person = new Person()

    $scope.increaseTime =  function(){
        $scope.time++
    }
    $scope.date = new Date
   
    $scope.updateDate =  function(){
        $scope.date = new Date
    }

    $scope.flipName =  function(){
        $scope.newName = ""
        let i =  $scope.person.name.length - 1
        while(i >= 0  ){
            $scope.newName += $scope.person.name[i]
            i--
        }
        $scope.person.name = $scope.newName
    }
}



class Person
{
    constructor(name = "",age ,gender,car = "")
    {
        this.name = name
        this.age = age
        this.gender = gender
        this.car = car
    }
}
