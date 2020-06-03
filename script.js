var objectData = [
    {id: 1, FirstName: 'Daniel', LastName: 'Mettler', Birthday: '06.02.1978'},
    {id: 2, FirstName: 'Roman', LastName: 'Opalko', Birthday: '27.02.1987'},
    {id: 3, FirstName: 'Janine', LastName: 'Strahl', Birthday: '02.01.1987'},
  ],
  container = document.getElementById('example'),
  hot;

hot = new Handsontable(container, {
  data: objectData,
  colHeaders: true,
  formulas: true,
  licenseKey: 'non-commercial-and-evaluation'
});

var PersonData = [
  ['Daniel', 'Mettler', 'Buchs SG', 1978],
  ['Roman', 'Opalko', 'Domat/Ems', 1987],
  ['Benjamin', 'Freitag', 'Buchs SG', 1987],
  ['Dominic', 'Büchler', 'Buchs SG', 1989],
  ['Peter', 'Schenk', 'Vorarlberg', 1969],
  ['Thomas', 'Lendi', 'Wartau', 1978],
  ['Daniel = ', '', '', '=A1'],
  ['AVG', '', '', '=average(D1:D6)'],
  ['SUM', '', '', '=sum(D1:D6)'],
  ['MIN', '', '', '=min(D1:D6)'],
  ['MAX', '', '', '=max(D1:D6)'],
  ['D + R', '', '', '=sum(D1,D2)'],
  ['Vor- und Nachname', '', '', '=A1 & " " & B1'],
  ['Name aus anderer Tabelle', '', '', hot.getDataAtRowProp(0, 'FirstName')],
],
containerP = document.getElementById('example2'),
hotP;

hotP = new Handsontable(containerP, {
  data: PersonData,
  colHeaders: true,
  formulas: true,
  licenseKey: 'non-commercial-and-evaluation'
});