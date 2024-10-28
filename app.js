window.onload = function () {
    let who = ["El perro", "Mi abuela", "El cartero", "Mi loro"];
    let action = ["se comió", "se orinó en", "aplastó", "rompió"];
    let what = ["mi tarea", "mi teléfono", "el coche"];
    let when = [
      "antes de la clase",
      "mientras dormía",
      "durante mi ejercicio",
      "durante el almuerzo",
    ];
  
    let excuse = `${who[Math.floor(Math.random() * who.length)]} ${
      action[Math.floor(Math.random() * action.length)]
    } ${what[Math.floor(Math.random() * what.length)]} ${
      when[Math.floor(Math.random() * when.length)]
    }.`;
    document.getElementById("excuse").innerHTML = excuse;
  };