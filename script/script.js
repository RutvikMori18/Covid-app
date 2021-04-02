const URL="https://covid19.mathdro.id/api";

let app = angular.module('myapp', []);

app.controller('myctrl',($scope,$http)=>{

    //this is controller
    $scope.title="Stay Home Stay Safe.";
    
    //just for information
   // $scope.changeval=()=>{
     //   $scope.title="You must have wear mask.";
    //}
    console.log("APP Loaded");

    //calling API
   
    $http.get(URL).then(
     (Response)=>{
        //success 
        console.log('inside success');
        console.log(Response.data);

        $scope.all_data=Response.data;
    },
     (error)=>{
        //error coding
        console.log(error);
    }
    );

    //get country data
    $scope.get_c_data = () =>{
        let country=$scope.c;
        if(country==""){
                $scope.c_data=undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`)
        .then((Response)=>{
                console.log(Response.data);
                $scope.c_data = Response.data;
        },
        (error)=>{
            console.log(error);

        })
    };
});