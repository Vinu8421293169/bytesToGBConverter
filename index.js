function submit() {
  let data = document.getElementById("input").value;
  console.log(data);
  document.getElementById("output").innerText = parseInt(data) / 1000000000;
}
