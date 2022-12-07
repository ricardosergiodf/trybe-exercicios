const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

function addTurno(objeto, chave, valor) {
    objeto.chave = valor;
    return objeto;
}

console.log(addTurno(lesson1, lesson1.turno, 'noite'));

function listKeys(objeto) {
    return Object.keys(objeto);
}

console.log(listKeys(lesson2));

function tamanhoObjeto(objeto) {
    return Object.keys(objeto).length;
}

console.log(tamanhoObjeto(lesson3));

function listValues(objeto) {
    return Object.values(objeto);
}

console.log(listValues(lesson1));

console.log(allLessons);

function totalStudents(objeto) {
    let students = 0;

    const keys = Object.keys(objeto);

    for (index in keys) {
        students += objeto[keys[index]].numeroEstudantes;
    }
    return students;
}

console.log(totalStudents(allLessons));

function getValueByNumber(objeto, number) {
    return Object.values(objeto)[number];
}

console.log(getValueByNumber(lesson1, 3));

function verifyPair(objeto, key, value) {
    const entries = Object.entries(objeto);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) {
            isEqual = true;
        }
    }
    return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));