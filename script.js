// function loadData1(callback) {
//   var httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = function () {
//     if (httpRequest.readyState === 4) {
//       // request is done
//       if (httpRequest.status === 200) {
//         // successfully
//         callback(httpRequest.responseText); // we're calling our method
//       }
//     }
//   };
//   httpRequest.open("GET", "https://publictest.sandbox.tabapay.net/data1", true);
//   httpRequest.send();
// }

// loadData1(function (result) {
//   result = result.split(/\r?\n/);
//   new_result = [];
//   result.pop();
//   for (var i = 0; i < result.length; i++) {
//     var temp = result[i].split(",");
//     new_result = new_result.concat(temp[0]);
//   }
//   var table = document.querySelector("#transactions");

//   var i = 0;
//   while (i < new_result.length) {
//     var newRow = table.insertRow(-1);
//     var j = 0;
//     while (j < 9) {
//       var cell = newRow.insertCell(j);
//       var newText = document.createTextNode(new_result[i]);
//       cell.appendChild(newText);
//       i = i + 1;
//       j = j + 1;
//     }
//   }
// });

function loadData2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;

      data = data.split(/\r?\n/);
      data.pop();
      new_data = [];
      for (var i = 0; i < data.length; i++) {
        var temp = data[i].split(",");
        new_data = new_data.concat(temp);
      }

      var table = document.querySelector("#transactions");

      var i = 0;
      while (i < new_data.length) {
        var newRow = table.insertRow(-1);
        var j = 0;
        while (j < 10) {
          if (j == 0) {
            var cell = newRow.insertCell(j);
            var newText = document.createTextNode("0");
            cell.appendChild(newText);
            j = j + 1;
          } else {
            var cell = newRow.insertCell(j);
            var newText = document.createTextNode(new_data[i]);
            cell.appendChild(newText);
            i = i + 1;
            j = j + 1;
          }
        }
      }
    }
  };
  xhttp.open("GET", "https://publictest.sandbox.tabapay.net/data2", true);
  xhttp.send();
}

loadData2();

function loadData1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;

      data = data.split(/\r?\n/);
      data.pop();
      new_data = [];
      for (var i = 0; i < data.length; i++) {
        var temp = data[i].split(",");
        new_data = new_data.concat(temp[0]);
      }

      var i = 0;
      while (i < new_data.length) {
        var x = document.getElementById("transactions").rows[i + 1].cells;
        x[0].innerHTML = new_data[i];
        i = i + 1;
      }
    }
  };
  xhttp.open("GET", "https://publictest.sandbox.tabapay.net/data1", true);
  xhttp.send();
}

loadData1();
