let stu = new Map();

function save_stu() {
  let status = document.getElementById("status");
  if (k.value != "" && v.value != "") {
    if (stu.has(k.value)) {
      stu.set(k.value, v.value);
      status.innerHTML = "Record Updated!";
    } else {
      stu.set(k.value, v.value);
      status.innerHTML = "Record Inserted!(" + stu.size + ")";
    }
    show_stu();
  } else status.innerHTML = "Plz Enter the Key & Value!";
}

// for table

function show_stu() {
  let data = "<table border='1' color='black' >";
  data += "<tr> <th>Key</th> <th>Value</th> <th>Action</th> </tr>";
  stu.forEach(function (v, k) {
    data +=
      "<tr> <td>" +
      k +
      "</td> <td>" +
      v +
      "</td> <td><a href=javascript:del_stu('" +
      k +
      "')>Delete</a></td> </tr>";
  });
  data += "</table>";
  document.getElementById("result").innerHTML = data;
}

// for delete
function del_stu(k) {
  let status = document.getElementById("status");
  stu.delete(k);
  status.innerHTML = "Record deleted!";
  show_stu();
}
