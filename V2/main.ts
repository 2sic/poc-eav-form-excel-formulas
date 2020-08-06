import { Parser as FormulaParser } from 'hot-formula-parser';

export function run(values: Object, errorHandling: (d: any, name: string) => any) {
    const parser = new FormulaParser();

    parser.on('callVariable', (name: string, done: (value: string | number) => any) => {
        if (!values.hasOwnProperty(name)) {
            return errorHandling(done, name);
            // throw new Error(`Value '${name}' does not exist.`);
        }
        const val = demoForm[name];

        // Use static value.
        if (val[0] !== '=') return done(val);

        // Resolve formula.
        const formula = val.slice(1, val.length);
        const res = parser.parse(formula);

        done(res.result);
    });

    (window as any).parser = parser;

    const res = parser.parse('FullNameAndMore');
    console.log(res.result);

    // parser.parse('Title').result => "Herr"
}

const demoForm = {
    FirstName: "Daniel",
    LastName: "Mettler",
    Title: 'Herr',
    FullName: '=FirstName & " " & LastName',
    FullNameAndMore: '=Title & " " & FullName',
};

window.onload = () => run(demoForm, (done, name) => done(name));
