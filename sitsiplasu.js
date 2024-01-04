function increase(){
  value = document.getElementById("quantity").value;
  if (value <= 3){
    document.getElementById("quantity").value++;
  }
}
function decrease(){
  value = document.getElementById("quantity").value;
  if (value >= 1){
    document.getElementById("quantity").value--;
  }
}
function submit(){
  let tables = document.getElementById("quantity").value;
  const people = [];
  const data = document.getElementById("participants").value
  const input = data.split(/\n/);

  for (let i = 0; i < input.length; i++) {
    people.push(input[i]);
  }

  let perTable = input.length / tables;
  const x = input.length % tables;
  createTable(perTable, x, people)
}
function randomNumber(people){
  min = 0
  max = people.length - 1
  x = 0
  x = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(x);
  return x;
}
function createTable(perTable, divisionLeft, people){
  id = 0
  let integer = Math.trunc(perTable);
  console.log(integer);
  const array = [];
  tablet = ""
  out = ""
  out2 = ""
  out3 = ""
  out4 = ""
  tablet += '<div class="table"><div class="place place1">asd</div><div class="place place2">asd</div><div class="place place1">asd</div><div class="place place2">asd</div><div class="place place1">asd</div><div class="place place2">asd</div><div class="place place1">asd</div><div class="place place2">asd</div></div>';
  tabStart = '<div class="table">'
  tabEnd = '</div>'
  console.log('divisionLeft '+ divisionLeft);
  console.log('perTable ' + perTable);

  let amount = document.getElementById("quantity").value;
  switch (amount) {
    case "1":
      for (let id = 0; id <= people.length; id++) {
        x = randomNumber(people)
        while (array.length != people.length) {
          if (array.includes(x)) {
            x = randomNumber(people)
          }
          else{
            out += '<div class="place place' + id + '">' + people[x] + '</div>'
            array.push(x)
          }
        }

      }
      document.getElementById("container-table").innerHTML = tabStart + out + tabEnd;
      break;

    case "2":
      //Ensin tekee yhdelle pöydälle, sitten sama toiselle pöydälle
      //Mikäli on jakojäännös, vuorotellaan pöytien välillä kunnes ei ole jäljellä ketään
      if (people.length % 2 != 0) {
        for (let id = 0; id <= perTable; id++) {
          x = randomNumber(people)
            while (perTable - array.length > 1) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= perTable; id++) {
          x = randomNumber(people)
            while (array.length != perTable * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd);
      }
      if (people.length % 2 == 0){
        for (let id = 0; (perTable - 1) - id > 1; id++) {
          x = randomNumber(people)
            while (array.length != perTable) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; (perTable - 1) - id > 1; id++) {
          x = randomNumber(people)
            while (array.length != perTable * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd);
      }
      break;

    case "3":
      if (divisionLeft == 0){
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd);

      }
      if (divisionLeft == 1) {
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              } 
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0;id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3 + 1) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd);
      }
      if (divisionLeft == 2) {
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              } 
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0;id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3 + 1) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3 + 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd);
      }
      break;

    case "4":
      if (divisionLeft == 0){
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out4 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd+ tabStart + out4 + tabEnd);

      }
      if (divisionLeft == 1) {
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              } 
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0;id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out4 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4 + 1) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd);
      }
      if (divisionLeft == 2) {
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              } 
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0;id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out4 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4 + 1) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4 + 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd;
        console.log(tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd);
      }
      if (divisionLeft == 3) {
        console.log("division3");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer) {
              if (array.includes(x)) {
                x = randomNumber(people)
              } 
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0;id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        for (let id = 0; id <= integer - 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out4 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4 + 1) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4 + 2) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out2 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        for (let id = 0; id < 1; id++) {
          x = randomNumber(people)
            while (array.length != integer * 4 + 3) {
              if (array.includes(x)) {
                x = randomNumber(people)
              }
              else{
                out3 += '<div class="place">' + people[x] + '</div>'
                array.push(x)
              }
            }
        }
        console.log("done");
        document.getElementById("container-table").innerHTML = tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd;
        output = (tabStart + out + tabEnd + tabStart + out2 + tabEnd + tabStart + out3 + tabEnd + tabStart + out4 + tabEnd);
      
      
    }
    default:
      break;
  }

}

