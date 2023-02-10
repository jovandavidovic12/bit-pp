function getSecondUl() {
    var ul = document.querySelector("#bg-color");
    ul.className = "ul-bg-color";
  }

  getSecondUl();


  function getAllLi() {
    var li = document.querySelectorAll("li");
    li.forEach(function (element) {
      element.className = "li-bg-color";
    });
  } 

  getAllLi();