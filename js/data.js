const data = {
    regies: [
        {
            name: "Espaces Verts",
            responsable: {
                id: 1,
                name: "Lionel Ravani",
                phone: "+33662033590",
                dateEntree: "2015-03-01",
                echelon: "3",
                dateNaissance: "1978-06-15",
            },
            equipes: [
                {
                    name: "Nord",
                    members: [
                        {
                            id: 2,
                            name: "Emmanuel",
                            phone: "+33788836833",
                            dateEntree: "2020-05-12",
                            echelon: "2",
                            dateNaissance: "1990-09-10",
                        },
                        {
                            id: 3,
                            name: "Isabelle Jacquet",
                            phone: "+33123456789",
                            dateEntree: "2018-07-08",
                            echelon: "3",
                            dateNaissance: "1985-12-04",
                        },
                    ],
                },
                {
                    name: "Sud",
                    members: [
                        {
                            id: 4,
                            name: "Said Berkani",
                            phone: "+33123456789",
                            dateEntree: "2017-03-14",
                            echelon: "4",
                            dateNaissance: "1980-11-23",
                        },
                        {
                            id: 5,
                            name: "Habib Coskun",
                            phone: "+33123456789",
                            dateEntree: "2016-06-20",
                            echelon: "3",
                            dateNaissance: "1975-05-30",
                        },
                    ],
                },
            ],
        },
        {
            name: "Atelier Mécanique et Propreté",
            responsable: {
                id: 6,
                name: "Christophe Philippe",
                phone: "+33123456789",
                dateEntree: "2012-08-05",
                echelon: "5",
                dateNaissance: "1970-02-14",
            },
            equipes: [
                {
                    name: "Atelier",
                    members: [
                        {
                            id: 7,
                            name: "Jean-Jacques Capelli",
                            phone: "+33669555761",
                            dateEntree: "2019-04-22",
                            echelon: "3",
                            dateNaissance: "1988-12-12",
                        },
                        {
                            id: 8,
                            name: "Thibault Levavasseur",
                            phone: "+33123456789",
                            dateEntree: "2021-02-18",
                            echelon: "2",
                            dateNaissance: "1995-03-09",
                        },
                        {
                            id: 9,
                            name: "Olivier Deswatinnes",
                            phone: "+33643364828",
                            dateEntree: "2015-09-25",
                            echelon: "4",
                            dateNaissance: "1983-07-16",
                        },
                    ],
                },
            ],
        },
        {
            name: "Bureaux",
            responsable: {
                id: 10,
                name: "Mélanie Pillais",
                phone: "+33123456789",
                dateEntree: "2010-10-01",
                echelon: "6",
                dateNaissance: "1972-04-18",
            },
            equipes: [
                {
                    name: "Informatique et Papiers",
                    members: [
                        {
                            id: 11,
                            name: "Nathalie Picault",
                            phone: "+33123456789",
                            dateEntree: "2018-11-13",
                            echelon: "4",
                            dateNaissance: "1986-05-03",
                        },
                        {
                            id: 12,
                            name: "Zoé Villesalmon",
                            phone: "+33123456789",
                            dateEntree: "2020-07-07",
                            echelon: "3",
                            dateNaissance: "1990-01-15",
                        },
                        {
                            id: 13,
                            name: "Malika Sahraoui",
                            phone: "+33123456789",
                            dateEntree: "2017-12-05",
                            echelon: "5",
                            dateNaissance: "1982-10-21",
                        },
                    ],
                },
            ],
        },
    ],
};

// Fonction pour accéder aux données
function getRegies() {
    return data.regies;
}

// Fonction pour obtenir tous les employés (responsables et membres des équipes)
function getAllEmployees() {
    const employees = [];
    data.regies.forEach((regie) => {
        employees.push(regie.responsable);
        regie.equipes.forEach((equipe) => {
            employees.push(...equipe.members);
        });
    });
    return employees;
}

// Fonction pour rechercher un employé par nom
function searchEmployeeByName(name) {
    const allEmployees = getAllEmployees();
    return allEmployees.filter((employee) =>
        employee.name.toLowerCase().includes(name.toLowerCase())
    );
}
