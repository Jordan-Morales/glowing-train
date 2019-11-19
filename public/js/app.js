const app = angular.module('MeanFoodApp', [])


app.controller('MainController', ['$http', function($http){
  this.h5 = "A Mean Midnight Snack"
  this.h5_2 = "Couldn't Help Myself:"
  this.createForm = {}
  this.snack = ''
  this.indexOfEditFormToShow = null;


  //create a snack in the DB
  this.createSnack = () => {
    $http({
      method: "POST",
      url: "/foods",
      data: this.createForm
    }).then(response => {
      this.createForm = {};
      this.snacks.unshift(response.data);
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

  // this.openModal = (snack) => {
  //   let element = document.getElementById("modal");
  //   element.classList.toggle('edit')
  // }

  this.updateSnack = (snack) => {
    $http({
      method: "PUT",
      url: '/foods/' + snack._id,
      data: {
        name: this.updatedName,
        flavor: this.updatedFlavor
      }
    }).then(response => {
      console.log(response.data);
      // this.openModal();
      this.indexOfEditFormToShow = null;
      this.getSnacks();
    }, error => {
      console.log(error.message);
    })
  }

  this.deleteSnack = snack => {
    $http({
      method: "DELETE",
      url: '/foods/' + snack._id,
    }).then(response => {
      console.log(response.data);
      this.getSnacks();
    }, error => {
      console.log(error);
    })
  }




  this.getSnacks();
}]);
