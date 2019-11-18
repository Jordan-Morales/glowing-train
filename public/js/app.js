const app = angular.module('MeanFoodApp', [])


app.controller('MainController', ['$http', function($http){
  this.h5 = "A Mean Midnight Snack"
  this.h5_2 = "Couldn't Help Myself:"
  this.createForm = {}

//create a snack in the DB
  this.createSnack = () => {
    $http({
      method: "POST",
      url: "/foods",
      data: this.createForm
    }).then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}]);
