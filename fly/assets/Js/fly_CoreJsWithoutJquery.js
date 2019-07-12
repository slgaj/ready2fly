document.addEventListener("DOMContentLoaded", function(event) {
	
    new FlightWithUs();
	 $("<link />", {
        'rel': 'stylesheet',
        'href': '../fly/assets/ThirdParty/fonts.css'
      }).appendTo('head');
});

class FlightWithUs {

    constructor() {
        this.data = {
            "city": [
                "Ranchi",
                "Delhi",
                "Kolkata",
                "Mumbai"
            ]
        };


        this.flightData = {

            "flight_details": [{
                    "id": "Ind_101",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Ranchi",
                    "departTime": "10:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "12:00 pm"
                },

                {
                    "id": "GO_101",
                    "name": "GoAir",
                    "origin": "Delhi",
                    "dest": "Ranchi",
                    "departTime": "9:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "11:30 am"
                },

                {
                    "id": "Vis_101",
                    "name": "Vistara",
                    "origin": "Delhi",
                    "dest": "Ranchi",
                    "departTime": "7:30 am",
                    "Type": "One-Stop",
                    "arriveTime": "10:30 am"
                },
                {
                    "id": "Ind_102",
                    "name": "Indigo",
                    "origin": "Ranchi",
                    "dest": "Delhi",
                    "departTime": "8:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "9:50 am"
                },

                {
                    "id": "GO_102",
                    "name": "GoAir",
                    "origin": "Ranchi",
                    "dest": "Delhi",
                    "departTime": "7:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "9:20 am"
                },

                {
                    "id": "Vis_102",
                    "name": "Vistara",
                    "origin": "Ranchi",
                    "dest": "Delhi",
                    "departTime": "4:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "6:30 am"
                },

                {
                    "id": "Vis_103",
                    "name": "Vistara",
                    "origin": "Ranchi",
                    "dest": "Mumbai",
                    "departTime": "4:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "6:30 am"
                },
                {
                    "id": "Ind_103",
                    "name": "Indigo",
                    "origin": "Ranchi",
                    "dest": "Mumbai",
                    "departTime": "9:00 am",
                    "Type": "One-Stop",
                    "arriveTime": "2:30 pm"
                },
                {
                    "id": "Go_103",
                    "name": "GoAir",
                    "origin": "Ranchi",
                    "dest": "Mumbai",
                    "departTime": "4:15 am",
                    "Type": "Non-Stop",
                    "arriveTime": "6:30 am"
                },
                {
                    "id": "Vis_101_1",
                    "name": "Vistara",
                    "origin": "Delhi",
                    "dest": "Kolkata",
                    "departTime": "7:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "9:15 am"
                },
                {
                    "id": "Vis_101_2",
                    "name": "Vistara",
                    "origin": "Kolkata",
                    "dest": "Ranchi",
                    "departTime": "9:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "10:30 am"
                },

                {
                    "id": "Ind_103_1",
                    "name": "Indigo",
                    "origin": "Ranchi",
                    "dest": "Delhi",
                    "departTime": "9:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "11:00 am"
                },

                {
                    "id": "Ind_103_2",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "11:45 am",
                    "Type": "Non-Stop",
                    "arriveTime": "2:30 pm"
                },
                {
                    "id": "GO_104",
                    "name": "GoAir",
                    "origin": "Ranchi",
                    "dest": "Kolkata",
                    "departTime": "11:45 am",
                    "Type": "Non-Stop",
                    "arriveTime": "2:30 pm"
                },
                {
                    "id": "Vis_104",
                    "name": "Vistara",
                    "origin": "Ranchi",
                    "dest": "Kolkata",
                    "departTime": "9:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "10:30 pm"
                },
                {
                    "id": "Vis_105",
                    "name": "Vistara",
                    "origin": "Ranchi",
                    "dest": "Kolkata",
                    "departTime": "4:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "5:30 am"
                },

                {
                    "id": "Vis_106",
                    "name": "Vistara",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "6:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "8:00 am"
                },

                {
                    "id": "Ind_104",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "7:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "8:55 am"
                },

                {
                    "id": "Ind_105",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "11:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "1:05 pm"
                },

                {
                    "id": "GO_105",
                    "name": "GoAir",
                    "origin": "Kolkata",
                    "dest": "Ranchi",
                    "departTime": "9:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "11:00 am"
                },
                {
                    "id": "Vis_107",
                    "name": "Vistara",
                    "origin": "Kolkata",
                    "dest": "Ranchi",
                    "departTime": "7:30 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "8:55 pm"
                },
                {
                    "id": "Vis_108",
                    "name": "Vistara",
                    "origin": "Kolkata",
                    "dest": "Ranchi",
                    "departTime": "5:45 am",
                    "Type": "Non-Stop",
                    "arriveTime": "7:15 am"
                },
                {
                    "id": "Vis_109",
                    "name": "Vistara",
                    "origin": "Mumbai",
                    "dest": "Delhi",
                    "departTime": "8:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "10:00 am"
                },

                {
                    "id": "Ind_106",
                    "name": "Indigo",
                    "origin": "Mumbai",
                    "dest": "Delhi",
                    "departTime": "9:00 am",
                    "Type": "One-Stop",
                    "arriveTime": "2:30 pm"
                },

                {
                    "id": "Ind_107",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "9:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "10:55 am"
                },
                {
                    "id": "Ind_106_1",
                    "name": "Indigo",
                    "origin": "Mumbai",
                    "dest": "Kolkata",
                    "departTime": "9:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "12:00 pm"
                },
                {
                    "id": "Ind_106_2",
                    "name": "Indigo",
                    "origin": "Kolkata",
                    "dest": "Delhi",
                    "departTime": "12:10 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "2:30 pm"
                },
                {
                    "id": "GO_106",
                    "name": "GoAir",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "6:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "8:25 am"
                },

                {
                    "id": "GO_107",
                    "name": "GoAir",
                    "origin": "Mumbai",
                    "dest": "Delhi",
                    "departTime": "4:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "6:05 am"
                },

                {
                    "id": "GO_108",
                    "name": "GoAir",
                    "origin": "Mumbai",
                    "dest": "Ranchi",
                    "departTime": "8:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "11:55 am"
                },

                {
                    "id": "GO_109",
                    "name": "GoAir",
                    "origin": "Mumbai",
                    "dest": "Kolkata",
                    "departTime": "2:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "5:00 pm"
                },

                {
                    "id": "GO_110",
                    "name": "GoAir",
                    "origin": "Kolkata",
                    "dest": "Mumbai",
                    "departTime": "11:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "1:55 pm"
                },
                {
                    "id": "GO_111",
                    "name": "GoAir",
                    "origin": "Delhi",
                    "dest": "Kolkata",
                    "departTime": "6:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "8:20 pm"
                },
                {
                    "id": "GO_112",
                    "name": "GoAir",
                    "origin": "Kolkata",
                    "dest": "Delhi",
                    "departTime": "3:50 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "6:00 pm"
                },
                {
                    "id": "Vis_110",
                    "name": "Vistara",
                    "origin": "Mumbai",
                    "dest": "Kolkata",
                    "departTime": "11:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "2:00 am"
                },
                {
                    "id": "Vis_111",
                    "name": "Vistara",
                    "origin": "Kolkata",
                    "dest": "Mumbai",
                    "departTime": "8:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "11:00 pm"
                },
                {
                    "id": "Vis_112",
                    "name": "Vistara",
                    "origin": "Delhi",
                    "dest": "Kolkata",
                    "departTime": "11:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "1:20 am"
                },
                {
                    "id": "Vis_113",
                    "name": "Vistara",
                    "origin": "Kolkata",
                    "dest": "Delhi",
                    "departTime": "9:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "11:00 pm"
                },
                {
                    "id": "Vis_114",
                    "name": "Vistara",
                    "origin": "Mumbai",
                    "dest": "Ranchi",
                    "departTime": "5:00 pm",
                    "Type": "Non-Stop",
                    "arriveTime": "8:00 pm"
                },
                {
                    "id": "Ind_108",
                    "name": "Indigo",
                    "origin": "Mumbai",
                    "dest": "Ranchi",
                    "departTime": "5:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "8:00 am"
                },

                {
                    "id": "Ind_109",
                    "name": "Indigo",
                    "origin": "Mumbai",
                    "dest": "Delhi",
                    "departTime": "5:45 am",
                    "Type": "Non-Stop",
                    "arriveTime": "8:00 am"
                },

                {
                    "id": "Ind_110",
                    "name": "Indigo",
                    "origin": "Mumbai",
                    "dest": "Kolkata",
                    "departTime": "5:15 am",
                    "Type": "Non-Stop",
                    "arriveTime": "8:15 am"
                },
                {
                    "id": "Ind_112",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Mumbai",
                    "departTime": "8:15 am",
                    "Type": "Non-Stop",
                    "arriveTime": "10:15 am"
                },
                {
                    "id": "Ind_111",
                    "name": "Indigo",
                    "origin": "Kolkata",
                    "dest": "Mumbai",
                    "departTime": "8:30 am",
                    "Type": "Non-Stop",
                    "arriveTime": "11:30 am"
                },
                {
                    "id": "Ind_113",
                    "name": "Indigo",
                    "origin": "Delhi",
                    "dest": "Kolkata",
                    "departTime": "8:00 am",
                    "Type": "Non-Stop",
                    "arriveTime": "11:00 am"
                }
            ]

        }

        this.DSPCapacity = [{
                "id": "Ind_113",
                "date": "2019-02-14",
                "seat": 23,
                "price": 6700
            },
            {
                "id": "Vis_101_1",
                "date": "2019-02-14",
                "seat": 3,
                "price": 8700
            },
            {
                "id": "Vis_101_2",
                "date": "2019-02-14",
                "seat": 3,
                "price": 2300
            },
            {
                "id": "Vis_101",
                "date": "2019-02-14",
                "seat": 3,
                "price": 10700
            },
            {
                "id": "Ind_103_1",
                "date": "2019-02-14",
                "seat": 20,
                "price": 5300
            },
            {
                "id": "Ind_103_2",
                "date": "2019-02-14",
                "seat": 20,
                "price": 7300
            },
            {
                "id": "Ind_103",
                "date": "2019-02-14",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "Ind_101",
                "date": "2019-02-14",
                "seat": 10,
                "price": 9230
            },
            {
                "id": "Ind_102",
                "date": "2019-02-14",
                "seat": 20,
                "price": 6220
            },
            {
                "id": "Ind_104",
                "date": "2019-02-14",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "Ind_105",
                "date": "2019-02-14",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "Ind_106",
                "date": "2019-02-14",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_106_1",
                "date": "2019-02-14",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_106_2",
                "date": "2019-02-14",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_106_1",
                "date": "2019-02-15",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_106_2",
                "date": "2019-02-15",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_106_1",
                "date": "2019-02-16",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_106_2",
                "date": "2019-02-16",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Ind_107",
                "date": "2019-02-14",
                "seat": 15,
                "price": 7100
            },
            {
                "id": "Ind_108",
                "date": "2019-02-14",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "Ind_109",
                "date": "2019-02-14",
                "seat": 230,
                "price": 9900
            },
            {
                "id": "Ind_110",
                "date": "2019-02-14",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "Ind_111",
                "date": "2019-02-14",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "Ind_112",
                "date": "2019-02-14",
                "seat": 5,
                "price": 8900
            },
            {
                "id": "Ind_113",
                "date": "2019-02-15",
                "seat": 23,
                "price": 6700
            },
            {
                "id": "Vis_101_1",
                "date": "2019-02-15",
                "seat": 3,
                "price": 8700
            },
            {
                "id": "Vis_101_2",
                "date": "2019-02-15",
                "seat": 3,
                "price": 2300
            },
            {
                "id": "Vis_101",
                "date": "2019-02-15",
                "seat": 3,
                "price": 10700
            },
            {
                "id": "Ind_103_1",
                "date": "2019-02-15",
                "seat": 20,
                "price": 5300
            },
            {
                "id": "Ind_103_2",
                "date": "2019-02-15",
                "seat": 20,
                "price": 7300
            },
            {
                "id": "Ind_103",
                "date": "2019-02-15",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "Ind_101",
                "date": "2019-02-15",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "Ind_102",
                "date": "2019-02-15",
                "seat": 20,
                "price": 6000
            },
            {
                "id": "Ind_104",
                "date": "2019-02-15",
                "seat": 45,
                "price": 23000
            },
            {
                "id": "Ind_105",
                "date": "2019-02-15",
                "seat": 23,
                "price": 7000
            },
            {
                "id": "Ind_106",
                "date": "2019-02-15",
                "seat": 10,
                "price": 8900
            },
            {
                "id": "Ind_107",
                "date": "2019-02-15",
                "seat": 15,
                "price": 2300
            },
            {
                "id": "Ind_108",
                "date": "2019-02-15",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "Ind_109",
                "date": "2019-02-15",
                "seat": 230,
                "price": 9900
            },
            {
                "id": "Ind_110",
                "date": "2019-02-15",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "Ind_111",
                "date": "2019-02-15",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "Ind_112",
                "date": "2019-02-15",
                "seat": 5,
                "price": 8900
            },
            {
                "id": "Ind_113",
                "date": "2019-02-16",
                "seat": 23,
                "price": 23400
            },
            {
                "id": "Vis_101_1",
                "date": "2019-02-16",
                "seat": 3,
                "price": 12200
            },
            {
                "id": "Vis_101_2",
                "date": "2019-02-16",
                "seat": 3,
                "price": 2300
            },
            {
                "id": "Vis_101",
                "date": "2019-02-16",
                "seat": 3,
                "price": 10700
            },
            {
                "id": "Ind_103_1",
                "date": "2019-02-16",
                "seat": 2,
                "price": 5300
            },
            {
                "id": "Ind_103_2",
                "date": "2019-02-16",
                "seat": 20,
                "price": 7300
            },
            {
                "id": "Ind_103",
                "date": "2019-02-16",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "Ind_101",
                "date": "2019-02-16",
                "seat": 10,
                "price": 7800
            },
            {
                "id": "Ind_102",
                "date": "2019-02-16",
                "seat": 20,
                "price": 4300
            },
            {
                "id": "Ind_104",
                "date": "2019-02-16",
                "seat": 45,
                "price": 10900
            },
            {
                "id": "Ind_105",
                "date": "2019-02-16",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "Ind_106",
                "date": "2019-02-16",
                "seat": 34,
                "price": 7800
            },
            {
                "id": "Ind_107",
                "date": "2019-02-16",
                "seat": 15,
                "price": 8100
            },
            {
                "id": "Ind_108",
                "date": "2019-02-16",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "Ind_109",
                "date": "2019-02-16",
                "seat": 230,
                "price": 9900
            },
            {
                "id": "Ind_110",
                "date": "2019-02-16",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "Ind_111",
                "date": "2019-02-16",
                "seat": 4,
                "price": 6500
            },
            {
                "id": "Ind_112",
                "date": "2019-02-16",
                "seat": 5,
                "price": 7100
            },

            {
                "id": "Vis_113",
                "date": "2019-02-14",
                "seat": 23,
                "price": 6700
            },
            {
                "id": "Vis_101_1",
                "date": "2019-02-14",
                "seat": 3,
                "price": 8700
            },
            {
                "id": "Vis_101_2",
                "date": "2019-02-14",
                "seat": 3,
                "price": 2300
            },
            {
                "id": "Vis_102",
                "date": "2019-02-14",
                "seat": 3,
                "price": 10700
            },
            {
                "id": "Vis_103",
                "date": "2019-02-14",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "Vis_114",
                "date": "2019-02-14",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "Vis_104",
                "date": "2019-02-14",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "Vis_105",
                "date": "2019-02-14",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "Vis_106",
                "date": "2019-02-14",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Vis_107",
                "date": "2019-02-14",
                "seat": 15,
                "price": 9000
            },
            {
                "id": "Vis_108",
                "date": "2019-02-14",
                "seat": 0,
                "price": 7890
            },
            {
                "id": "Vis_109",
                "date": "2019-02-14",
                "seat": 230,
                "price": 9900
            },
            {
                "id": "Vis_110",
                "date": "2019-02-14",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "Vis_111",
                "date": "2019-02-14",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "Vis_112",
                "date": "2019-02-14",
                "seat": 5,
                "price": 8900
            },

            {
                "id": "Vis_113",
                "date": "2019-02-15",
                "seat": 23,
                "price": 6700
            },
            {
                "id": "Vis_101_1",
                "date": "2019-02-15",
                "seat": 3,
                "price": 8700
            },
            {
                "id": "Vis_101_2",
                "date": "2019-02-15",
                "seat": 3,
                "price": 2300
            },
            {
                "id": "Vis_102",
                "date": "2019-02-15",
                "seat": 3,
                "price": 10700
            },
            {
                "id": "Vis_103",
                "date": "2019-02-15",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "Vis_114",
                "date": "2019-02-15",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "Vis_104",
                "date": "2019-02-15",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "Vis_105",
                "date": "2019-02-15",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "Vis_106",
                "date": "2019-02-15",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Vis_107",
                "date": "2019-02-15",
                "seat": 0,
                "price": 9000
            },
            {
                "id": "Vis_108",
                "date": "2019-02-15",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "Vis_109",
                "date": "2019-02-15",
                "seat": 230,
                "price": 9900
            },
            {
                "id": "Vis_110",
                "date": "2019-02-15",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "Vis_111",
                "date": "2019-02-15",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "Vis_112",
                "date": "2019-02-15",
                "seat": 5,
                "price": 8900
            },

            {
                "id": "Vis_113",
                "date": "2019-02-16",
                "seat": 23,
                "price": 6700
            },
            {
                "id": "Vis_101_1",
                "date": "2019-02-16",
                "seat": 3,
                "price": 8700
            },
            {
                "id": "Vis_101_2",
                "date": "2019-02-16",
                "seat": 3,
                "price": 2300
            },
            {
                "id": "Vis_102",
                "date": "2019-02-16",
                "seat": 0,
                "price": 10700
            },
            {
                "id": "Vis_103",
                "date": "2019-02-16",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "Vis_114",
                "date": "2019-02-16",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "Vis_104",
                "date": "2019-02-16",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "Vis_105",
                "date": "2019-02-16",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "Vis_106",
                "date": "2019-02-16",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "Vis_107",
                "date": "2019-02-16",
                "seat": 15,
                "price": 9000
            },
            {
                "id": "Vis_108",
                "date": "2019-02-16",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "Vis_109",
                "date": "2019-02-16",
                "seat": 101,
                "price": 9900
            },
            {
                "id": "Vis_110",
                "date": "2019-02-16",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "Vis_111",
                "date": "2019-02-16",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "Vis_112",
                "date": "2019-02-16",
                "seat": 5,
                "price": 8900
            },

            {
                "id": "GO_101",
                "date": "2019-02-16",
                "seat": 23,
                "price": 6700
            },

            {
                "id": "GO_102",
                "date": "2019-02-16",
                "seat": 0,
                "price": 10700
            },
            {
                "id": "GO_103",
                "date": "2019-02-16",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "GO_114",
                "date": "2019-02-16",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "GO_104",
                "date": "2019-02-16",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "GO_105",
                "date": "2019-02-16",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "GO_106",
                "date": "2019-02-16",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "GO_107",
                "date": "2019-02-16",
                "seat": 15,
                "price": 9000
            },
            {
                "id": "GO_108",
                "date": "2019-02-16",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "GO_110",
                "date": "2019-02-16",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "GO_111",
                "date": "2019-02-16",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "GO_112",
                "date": "2019-02-16",
                "seat": 5,
                "price": 8900
            },

            {
                "id": "GO_102",
                "date": "2019-02-14",
                "seat": 0,
                "price": 10700
            },
            {
                "id": "GO_103",
                "date": "2019-02-14",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "GO_114",
                "date": "2019-02-14",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "GO_104",
                "date": "2019-02-14",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "GO_105",
                "date": "2019-02-14",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "GO_106",
                "date": "2019-02-14",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "GO_107",
                "date": "2019-02-14",
                "seat": 15,
                "price": 9000
            },
            {
                "id": "GO_108",
                "date": "2019-02-14",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "GO_110",
                "date": "2019-02-14",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "GO_111",
                "date": "2019-02-14",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "GO_112",
                "date": "2019-02-14",
                "seat": 5,
                "price": 8900
            },

            {
                "id": "GO_102",
                "date": "2019-02-15",
                "seat": 0,
                "price": 10700
            },
            {
                "id": "GO_103",
                "date": "2019-02-15",
                "seat": 20,
                "price": 9000
            },
            {
                "id": "GO_114",
                "date": "2019-02-15",
                "seat": 10,
                "price": 5000
            },
            {
                "id": "GO_104",
                "date": "2019-02-15",
                "seat": 45,
                "price": 9000
            },
            {
                "id": "GO_105",
                "date": "2019-02-15",
                "seat": 23,
                "price": 6900
            },
            {
                "id": "GO_106",
                "date": "2019-02-15",
                "seat": 10,
                "price": 9000
            },
            {
                "id": "GO_107",
                "date": "2019-02-15",
                "seat": 15,
                "price": 9000
            },
            {
                "id": "GO_108",
                "date": "2019-02-15",
                "seat": 20,
                "price": 7890
            },
            {
                "id": "GO_110",
                "date": "2019-02-15",
                "seat": 24,
                "price": 9090
            },
            {
                "id": "GO_111",
                "date": "2019-02-15",
                "seat": 75,
                "price": 6500
            },
            {
                "id": "GO_112",
                "date": "2019-02-15",
                "seat": 5,
                "price": 8900
            },

            {
                "id": "GO_101",
                "date": "2019-02-15",
                "seat": 109,
                "price": 4500
            },
            {
                "id": "GO_101",
                "date": "2019-02-14",
                "seat": 2,
                "price": 8900
            }
        ];
        this.wrapperElem = document.querySelector(".flight-container");
        this.init();
    }

    init() {
        var self = this;
        this.departDateElem = $("#depart-date");
        this.arrivalDateElem = $("#arrival-date");
        this.sliderRange = $("#slider-range");
        this.sliderText = "";
        this.formFlight = this.wrapperElem.querySelector(".search-flight-form");
		
		this.oneWayTrip = this.wrapperElem.querySelector(".one-way");
		this.roundTrip = this.wrapperElem.querySelector(".round-trip");
		
		
		
        this.citySelect = this.wrapperElem.querySelectorAll(".city-list");
        this.searchBtn = this.wrapperElem.querySelector(".search-btn");
        this.passengerElem = this.wrapperElem.querySelector(".passenger-dropdown");
        this.travellerField = this.wrapperElem.querySelector(".traveller-count");
        this.passengerCount = this.travellerField.querySelector("#passenger-count");

        this.passengerSelect = this.passengerElem.getElementsByTagName("select")[0];

        this.departureElem = this.wrapperElem.querySelector(".depart-city");

        this.departureElemSelect = this.departureElem.getElementsByTagName("select")[0];
        this.arrivedElem = this.wrapperElem.querySelector(".arrived-city");
        this.arrivedElemSelect = this.arrivedElem.getElementsByTagName("select")[0];

        this.departDatePick = this.wrapperElem.querySelector(".depart-date-picker");
        this.departDate = this.departDatePick.querySelector("#depart-date");
        this.arrivedDatePick = this.wrapperElem.querySelector(".arrived-date-picker");
        this.arrivedDate = this.arrivedDatePick.querySelector("#arrival-date");

        this.populateCities(this.citySelect, this.data);
        this.getDatePicker(this.departDateElem);
        this.getDatePicker(this.arrivalDateElem);
        this.getSlider(this.sliderRange);
        this.checkSameCities(this.departureElemSelect,this.arrivedElemSelect,self);
		this.checkSameCities(this.arrivedElemSelect,this.departureElemSelect,self);
        this.getActualPassengerCount(this.travellerField);
        this.elementArray = [{
            "pSelect": this.passengerSelect,
            "dSelect": this.departureElemSelect,
            "aSelect": this.arrivedElemSelect,
            "aDate": this.arrivedDate,
            "dDate": this.departDate,
            "pCount": this.passengerCount,
            "pForm": this.formFlight
        }];
		
		this.oneWayTrip.addEventListener("click", function (e) {
			self.arrivedDatePick.classList.add("hide");
			self.oneWayTrip.classList.add("active");
			self.roundTrip.classList.remove("active");

		});
		this.roundTrip.addEventListener("click", function (e) {
			self.arrivedDatePick.classList.remove("hide");
			self.oneWayTrip.classList.remove("active");
			self.roundTrip.classList.add("active");
		});

        this.searchHandler(this.elementArray, self);
    }
   

    getSlider(elem) {
        elem.slider({
            range: true,
            min: 0,
            max: 50000,
            values: [5000, 35000],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        this.sliderText = $("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1);
        document.querySelector("#amount").value = this.sliderText;
		document.querySelector("#amount").text = this.sliderText;
    }


    getDatePicker(elem) {
        elem.datepicker({
            dateFormat: "yy-mm-dd",
            minDate: new Date('2019-2-14'),
            maxDate: new Date('2019-2-16')
        });
    }


    populateCities(elem, data) {

        for (let i = 0; i < elem.length; i++) {
            for (let j = 0; j < data.city.length; j++) {
                elem[i].innerHTML = elem[i].innerHTML + '<option value="' + data.city[j] + '">' + data.city[j] + '</option>';
            }

        }
    }

    getActualPassengerCount(elem) {

        this.passengerSelect.addEventListener("change", function(e) {
            if (e.target.value == "more")
                elem.classList.remove("hide");
            else
                elem.classList.add("hide");

        });
    }

    checkSameCities(elem,onChangeElem,self) {
        onChangeElem.addEventListener("change", function(e) {
            self.sameCityValidation(elem,onChangeElem);
        });
    }
	
	sameCityValidation(elem,onChangeElem){
		if (elem.value === onChangeElem.value) {
               onChangeElem.parentElement.querySelector(".error").classList.remove("hide");
               onChangeElem.parentElement.querySelector(".error").classList.add("errShow");
            } else {
                onChangeElem.parentElement.querySelector(".error").classList.add("hide");
                onChangeElem.parentElement.querySelector(".error").classList.remove("errShow");
            }
	}

    fieldValidation(elem) {
        if (elem[0].dDate.value == "") {
            elem[0].dDate.parentElement.querySelector(".error").classList.remove("hide");
            elem[0].dDate.parentElement.querySelector(".error").classList.add("errShow");
        } else {
            elem[0].dDate.parentElement.querySelector(".error").classList.add("hide");
            elem[0].dDate.parentElement.querySelector(".error").classList.remove("errShow");
        }

        if (!elem[0].aDate.parentElement.classList.contains("hide") && elem[0].aDate.value == "") {
            elem[0].aDate.parentElement.querySelector(".error").classList.remove("hide");
            elem[0].aDate.parentElement.querySelector(".error").classList.add("errShow");
        } else {
            elem[0].aDate.parentElement.querySelector(".error").classList.add("hide");
            elem[0].aDate.parentElement.querySelector(".error").classList.remove("errShow");
        }


        if (!elem[0].pCount.parentElement.classList.contains("hide")) {
            if (elem[0].pCount.value == "" || isNaN(elem[0].pCount.value) || parseInt(elem[0].pCount.value)< 5 ) {
                elem[0].pCount.parentElement.querySelector(".error").classList.remove("hide");
                elem[0].pCount.parentElement.querySelector(".error").classList.add("errShow");
            } else {
                elem[0].pCount.parentElement.querySelector(".error").classList.add("hide");
                elem[0].pCount.parentElement.querySelector(".error").classList.remove("errShow");
            }
        }
    }
	
	oneWayFunction(elem,flyStringDate,originC,destC,self,wayData) {
		 let flightSearchObj = self.flightData,
                    flightDateObj = self.DSPCapacity,
                    dateArray = [],
                    idArray = [],
                    ctr = 0,
					priceFit = $("#amount").val(),
					priceRange=[],
					formattedPrice = [],
                    oneWayFreshData = [];
					
					priceRange = priceFit.split("-");
					formattedPrice = priceRange.map(obj=>parseInt(obj.trim()));
					
                for (let i = 0; i < flightSearchObj.flight_details.length; i++) {
                    if ((originC == flightSearchObj.flight_details[i].origin) && (destC == flightSearchObj.flight_details[i].dest)) {
                        idArray.push(flightSearchObj.flight_details[i].id);
                    }
                }
				
			
					
                for (let k = 0; k < idArray.length; k++) {
                    for (let j = 0; j < flightDateObj.length; j++) {
                        if ((flyStringDate == flightDateObj[j].date) && (idArray[k] == flightDateObj[j].id)) {
							if(flightDateObj[j].seat > 0) {
								if(flightDateObj[j].price >= formattedPrice[0] && flightDateObj[j].price <= formattedPrice[1]) {
									dateArray.push({
										"id": flightDateObj[j].id,
										"price": flightDateObj[j].price,
										"seat": flightDateObj[j].seat
									});
								}
							}
							
                        }
                    }
                }
                var fname = "";
				var fillingText = "";
                for (let m = 0; m < flightSearchObj.flight_details.length; m++) {
                    for (let n in dateArray) {
                        if (dateArray[n].id == flightSearchObj.flight_details[m].id) {
							
                            if (flightSearchObj.flight_details[m].id.includes("Ind"))
                                fname = "Indigo";
                            else if (flightSearchObj.flight_details[m].id.includes("GO"))
                                fname = "Go";
                            else
                                fname= "Vistara";
							
							if (elem[0].pCount.parentElement.classList.contains("hide")) {
							
								if(elem[0].pSelect.value==dateArray[n].seat)								
									fillingText="Last "+elem[0].pSelect.value+" seats."; 
								else
									fillingText="";
							}
							
							
							
                            oneWayFreshData.push({
                                "fName": fname,
                                "name": flightSearchObj.flight_details[m].name,
                                "id": flightSearchObj.flight_details[m].id,
                                "origin": flightSearchObj.flight_details[m].origin,
                                "dest": flightSearchObj.flight_details[m].dest,
                                "type": flightSearchObj.flight_details[m].Type,
                                "price": dateArray[n].price,
                                "departure": flightSearchObj.flight_details[m].departTime,
                                "arrival": flightSearchObj.flight_details[m].arriveTime,
								"msg":fillingText,
								"way":wayData
                            });
                        }
                    }
                }

               
				return oneWayFreshData;
                
		
	}

    searchHandler(elem, self) {
        this.searchBtn.addEventListener("click", function(e) {
            self.fieldValidation(elem);
			self.sameCityValidation(elem[0].dSelect,elem[0].aSelect);
			self.sameCityValidation(elem[0].aSelect,elem[0].dSelect);
			
			if (!elem[0].pForm.querySelectorAll(".errShow").length ) {
				
				const monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
				];

				const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
				var flyStringDate=[elem[0].dDate.value,elem[0].aDate.value];
				var flyStringCity = [elem[0].dSelect.value,elem[0].aSelect.value];
				var wayData="";
				document.getElementById("search-result").style.background = "none";
			
				Handlebars.registerHelper('checklength', function (v1, v2, options) {
					'use strict';
					if (v1.length>v2) {
					return options.fn(this);
					}
					return options.inverse(this);
				});            
				
               if(elem[0].aDate.parentElement.classList.contains("hide")){			  
			   
				   
					var data = self.oneWayFunction(elem,flyStringDate[0],flyStringCity[0],flyStringCity[1],self,wayData);
					var d = new Date(elem[0].dDate.value);			
					var oneWayData = document.getElementById("oneway-template").innerHTML;
					var oneWayTemplate = Handlebars.compile(oneWayData);
					
					
					var quoteData = oneWayTemplate({
						originCity: elem[0].dSelect.value,
						destination: elem[0].aSelect.value,
						found: data.length,
						date: d.getDate(),
						month: monthNames[d.getMonth()],
						week: week[d.getDay()],
						data
					});
					
					document.getElementById("first-trip").innerHTML = "";
					document.getElementById("return-trip").innerHTML = "";
					document.getElementById("return-trip").classList.add("fullwidth-grid");
								
					document.getElementById("first-trip").innerHTML += quoteData;
					document.getElementById("first-trip").classList.add("fullwidth-grid");
					document.getElementById("first-trip").classList.remove("round-first-grid");
					document.getElementById("result-content").classList.remove("hide");		
			   }
				else{
					var roundWayData = document.getElementById("roundtrip-template").innerHTML;
					var roundWayTemplate = Handlebars.compile(roundWayData);
					var wayData="ftrip";
					var data = self.oneWayFunction(elem,flyStringDate[0],flyStringCity[0],flyStringCity[1],self,wayData);
					var d = new Date(elem[0].aDate.value);
					
					
					var quoteData = roundWayTemplate({
						originCity: elem[0].dSelect.value,
						destination: elem[0].aSelect.value,
						found: data.length,
						date: d.getDate(),						
						month: monthNames[d.getMonth()],
						week: week[d.getDay()],
						data
					});
					
					
					
					document.getElementById("first-trip").innerHTML = "";
					document.getElementById("first-trip").innerHTML += quoteData;
					document.getElementById("first-trip").classList.remove("fullwidth-grid");
					document.getElementById("first-trip").classList.add("round-first-grid");
					
					var wayData="rtrip";
					var data = self.oneWayFunction(elem,flyStringDate[1],flyStringCity[1],flyStringCity[0],self,wayData);
					var d = new Date(elem[0].dDate.value);
					
					var quoteData = roundWayTemplate({
						originCity:  elem[0].aSelect.value,
						destination: elem[0].dSelect.value,
						found: data.length,
						date: d.getDate(),
						month: monthNames[d.getMonth()],
						week: week[d.getDay()],
						data
					});
					
					document.getElementById("return-trip").innerHTML = "";
					document.getElementById("return-trip").innerHTML += quoteData;
					document.getElementById("return-trip").classList.remove("fullwidth-grid");
					document.getElementById("return-trip").classList.add("round-return-grid");
					
					document.getElementById("result-content").classList.remove("hide");	
					
				}
				
            }
        });
    }
}