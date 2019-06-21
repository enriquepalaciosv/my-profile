export default {
    state: {
        employees: [{
                _id: 1,
                profilePicture: "",
                firstName: "Enrique",
                lastName: "Palacios",
                birthday: "1993-08-08",
                profession: "System Engineer",
                email: "palacios335@gmail.com",
                phoneNumber: "87961814",
                address: "Managua, Nicaragua",
                skills: [
                    { name: "AngularJs", value: 90 },
                    { name: "ReactJs", value: 60 },
                    { name: "VueJs", value: 40 }
                ],
                languages: [
                    { name: "Spanish", value: 100 },
                    { name: "English", value: 75 }
                ],
                workExperience: [{
                        title: "Frontend Developer / Struck - NicaSource",
                        dateRange: "Apr 2019 - current",
                        description: "Vue.js, Ruby On Rails 3 and AngularJS websites development."
                    },
                    {
                        title: "Frontend, Backend and Mobile Developer / DGA",
                        dateRange: "Nov 2014 - Mar 2019",
                        description: "AngularJS and ReactJs websites development, Java REST API and Android apps"
                    }
                ],
                education: [{
                        title: "University / UNI - RUPAP",
                        dateRange: "Mar 2010 - Mar 2015",
                        description: "System Engineering Degree"
                    },
                    {
                        title: "Android ATC / www.androidatc.com",
                        dateRange: "August 25, 2018",
                        description: "AND-801	- Android Certified Application Developer v8"
                    }
                ]
            },
            {
                _id: 2,
                profilePicture: "",
                firstName: "Noel",
                lastName: "Flores",
                birthday: "1993-08-08",
                profession: "System Engineer",
                email: "palacios335@gmail.com",
                phoneNumber: "87961814",
                address: "Managua, Nicaragua"
            }
        ]
    },
    mutations: {},
    getters: {},
    actions: {}
};