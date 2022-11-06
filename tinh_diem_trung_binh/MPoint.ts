// Tinh diem trung binh :
let students =
    [
        {
            name: "Ha",
            gender: 'female',
            point: 8
        },
        {
            name: "Huy",
            gender: 'male',
            point: 9
        },
        {
            name: "Hung",
            gender: 'male',
            point: 7
        },
        {
            name: "Phuong",
            gender: 'female',
            point: 6
        },
        {
            name: "Huyen",
            gender: 'female',
            point: 10
        },
        {
            name: "Long",
            gender: 'male',
            point: 5
        },
        {
            name: "Luan",
            gender: 'male',
            point: 10
        },
        {
            name: "Linh",
            gender: 'female',
            point: 8
        }

    ];

let malePoint = [];
let femalePoint = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].gender == 'male') {
        malePoint.push(students[i].point);
    } else if (students[i].gender == 'female') {
        femalePoint.push(students[i].point);
    }
}

function MPoint(value) {
    let total = 0;
    for (const valueElement of value) {
        total += valueElement;
    }

    return total / value.length;
}

console.log('Diem trung binh cac ban nam: ', MPoint(malePoint));
console.log('Diem trung binh cac ban nu: ', MPoint(femalePoint));