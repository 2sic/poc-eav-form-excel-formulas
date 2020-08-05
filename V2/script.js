
var demoForm = {
  FirstName: "Daniel",
  LastName: "Mettler",
  FullName: '=FirstName & " " & LastName',
  FullNameAndMore: '=Title & FullName',
}

var container = document.getElementById('example'),
  hot = new Handsontable(container, {
    data: {},
    colHeaders: true,
    licenseKey: 'non-commercial-and-evaluation'
  });


// todo: here's what we need
// Basically I want to show each field in the console
// and if it starts with "=" it should be evaluated through HandsOnTable
// When HandsOnTable finds a name, it should callback to ask for the underlying value
// like `FirstName`

console.log("Start test");
