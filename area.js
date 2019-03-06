
length=0;
breadth=0;

function myFunction(length, breadth) {
   
        const area = length * breadth;
        document.getElementById('result').innerHTML = area;
        return area;
    }
    
function loadDoc() {
  var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.responseText;
        }
      };
      xhttp.open("GET","nandini.txt", true);
      
      xhttp.send();
    }