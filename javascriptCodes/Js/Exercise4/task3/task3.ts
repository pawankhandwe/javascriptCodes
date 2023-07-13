let set: Set<string> = new Set();

function add() {
  if (document.getElementById('add').textContent == 'Update') {
    update();
    return;
  }
  addRow(document.getElementById('firstname').value, document.getElementById('lastname').value);
}

function render() {
  const p = [
    { firstname: 'Rehan', lastname: 'shaikh' },
    { firstname: 'Sagar', lastname: 'Adesara' },
    { firstname: 'Kerav', lastname: 'Gamit' },
    { firstname: 'karnav', lastname: 'Gamit' },
    { firstname: 'Pavan', lastname: 'khandwe' },
    { firstname: 'Bhavik', lastname: 'Gujjar' },
    { firstname: 'Namrita', lastname: 'vyas' },
    { firstname: 'parth', lastname: 'mendapare' },
    { firstname: 'Bhayabhai', lastname: 'Sisodia' },
    { firstname: 'Samrath', lastname: '' },
    { firstname: 'Abhinish', lastname: 'Tiwari' }
  ];

  for (const i of p) {
    addRow(i.firstname, i.lastname);
  }
}

function dele() {
  if (document.getElementById('add').textContent == 'Update') {
    document.getElementById('add').innerHTML = '&oplus; Add';
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
  }

  const parentNode = this.parentNode;
  const inputValues = parentNode.getElementsByTagName('input');
  const fullName = inputValues[0].value + ' ' + inputValues[1].value;

  set.delete(fullName);
  parentNode.remove();
}

function edit() {
  const fn = this.parentNode.getElementsByTagName('input')[0].value;
  const ln = this.parentNode.getElementsByTagName('input')[1].value;

  set.delete(fn + ' ' + ln);
  document.getElementById('firstname').value = fn;
  document.getElementById('lastname').value = ln;
  document.getElementById('add').innerText = 'Update';
  eth = this.parentNode;
}

function update() {
  const fname = document.getElementById('firstname').value;
  const lname = document.getElementById('lastname').value;

  if (set.has(fname + ' ' + lname)) {
    alert(`${fname} ${lname} already exists`);
    return;
  } else {
    set.add(fname + ' ' + lname);

    const inputValues = eth.getElementsByTagName('input');
    inputValues[0].value = fname;
    inputValues[1].value = lname;

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('add').innerHTML = '&oplus; Add';
  }
}

function addRow(fname: string, lname: string) {
  if (set.has(fname + ' ' + lname)) {
    alert(`${fname} ${lname} already exists`);
    return;
  } else {
    set.add(fname + ' ' + lname);

    const firstname = fname;
    const lastname = lname;

    const div = document.createElement('div');
    const fn = document.createElement('input');
    div.append(fn);
    fn.value = firstname;
    fn.disabled = true;

    const ln = document.createElement('input');
    div.append(ln);
    ln.value = lastname;
    ln.disabled = true;

    const ed = document.createElement('button');
    div.append(ed);
    ed.innerText = 'Edit';
    ed.style.background = '#00ff00';

    const del = document.createElement('button');
    div.append(del);
    del.innerText = 'Delete';
    del.style.background = '#ff0000';

    document.getElementById('out').append(div);

    ed.addEventListener('click', edit);
    del.addEventListener('click', dele);

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
  }
}
