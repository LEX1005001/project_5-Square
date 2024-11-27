// Выбор фигуры
document.getElementById("figure").addEventListener("change", function () {
  const selectedFigure = this.value;
  document.getElementById("circle-inputs").style.display =
    selectedFigure === "circle" ? "block" : "none";
  document.getElementById("rectangle-inputs").style.display =
    selectedFigure === "rectangle" ? "block" : "none";
  document.getElementById("triangle-inputs").style.display =
    selectedFigure === "triangle" ? "block" : "none";
  document.getElementById("square-inputs").style.display =
    selectedFigure === "square" ? "block" : "none"; 
});

// Предоставление данных для выбранных фигур: Круг -> Радиус
document.getElementById("calculate").addEventListener("click", function () {
  const selectedFigure = document.getElementById("figure").value;
  let area = 0;

  // Круг
  if (selectedFigure === "circle") {
    const radius = parseFloat(document.getElementById("radius").value);
    if (!isNaN(radius)) {
      area = Math.PI * radius * radius;
    }
    // Прямоугольник
  } else if (selectedFigure === "rectangle") {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    if (!isNaN(length) && !isNaN(width)) {
      area = length * width;
    }
    // Треугольник
  } else if (selectedFigure === "triangle") {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    if (!isNaN(base) && !isNaN(height)) {
      area = 0.5 * base * height;
    }
    // Квадрат
  } else if (selectedFigure === "square") {
    const side = parseFloat(document.getElementById("side").value);
    if (!isNaN(side)) {
      area = side * side; 
    }
  }

//  Вывод результата
  document.getElementById("area").textContent = area.toFixed(2);
});
