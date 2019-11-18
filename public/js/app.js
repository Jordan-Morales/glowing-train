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
      data: {
        name: this.name,
        flavor: this.flavor
      }
    }).then(response => {
      this.getSnacks();
    }, error => {
      console.log(error);
    })
  }

  this.getSnacks = () => {
    $http({
      method: "GET",
      url: "/foods"
    }).then(response => {
      this.snacks = response.data
    }, error => {
      console.log(error);
    })
  }

  // this.updateSnack = () => {
  //   console.lo;
  // }

  this.getSnacks();
}]);
