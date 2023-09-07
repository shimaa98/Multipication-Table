const table = document.getElementById("mul_table"),
  form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let header = `<tr>
  <th>Multiplier</th>
  <th>Multiplicand</th>
  <th>Product</th>
    </tr>`;
  table.innerHTML = header;
  const number = +form.elements.number.value.trim();
  for (let i = 0; i < 10; i++) {
    let ele = `<tr>
    <td>${i + 1}</td>
    <td>${number}</td>
    <td>${(i + 1) * number}</td>
    </tr>`;
    table.innerHTML += ele;
  }
});
