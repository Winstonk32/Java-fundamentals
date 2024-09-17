function calculate() {
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
  
    const area = length * width;
    const perimeter = 2 * (length + width);
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Area: ${area} cm <br>Perimeter: ${perimeter}cm`;
  }