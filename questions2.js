var questions = [
  {
    question_number: "1",
    question: "If an event starts on March 5th and lasts for 10 days, on what date does it end?",
    answers: [
      "March 14th",
      "March 15th",
      "March 16th",
      "March 17th"
    ],
    correctAnswer: 1,
    explanation: "March 5th plus 10 days is March 15th."
  },
  {
    question_number: "2",
    question: "If you have a project that starts on the first Monday of April and you need to work for 4 weeks, on what day does your project end?",
    answers: [
      "The last Monday of April",
      "The first Monday of May",
      "The last Sunday of April",
      "The first Sunday of May"
    ],
    correctAnswer: 0,
    explanation: "4 weeks from the first Monday of April ends on the last Monday of April."
  },
  {
    question_number: "3",
    question: "Avital's flamenco class is every other day starting from Monday, January 1st. What day of the week is her 5th class?",
    answers: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    correctAnswer: 1,
    explanation: "Jane's classes are on the 1st, 3rd, 5th, 7th, and 9th. The 9th is a Tuesday."
  },
  {
    question_number: "4",
    question: "A conference was scheduled to start on September 10th, which was a Tuesday, but it was postponed by 2 weeks. What is the new starting day of the week?",
    answers: [
      "Tuesday",
      "Wednesday",
      "Monday",
      "Thursday"
    ],
    correctAnswer: 0,
    explanation: "Postponing by exactly 2 weeks keeps the same day of the week, so it will still start on a Tuesday."
  },
  {
    question_number: "5",
    question: "If a school semester starts on February 1st and lasts for exactly 5 months, what is the ending date?",
    answers: [
      "June 30th",
      "July 1st",
      "June 29th",
      "July 2nd"
    ],
    correctAnswer: 1,
    explanation: "Starting from February 1st and counting forward 5 months lands on July 1st."
  },
  {
    question_number: "6",
    question: "If you need to microwave a meal for 2 minutes and 30 seconds, but your microwave timer only works in seconds, how many seconds should you set it for?",
    answers: [
      "150 seconds",
      "120 seconds",
      "180 seconds",
      "210 seconds"
    ],
    correctAnswer: 0,
    explanation: "2 minutes and 30 seconds equals (2 * 60 + 30 = 120 + 30 = 150) seconds."
  },
  {
    question_number: "7",
    question: "You are cooking pasta and need to microwave it for 5 minutes. If you accidentally set your microwave to 3 minutes, how much more time do you need to add?",
    answers: [
      "3 minutes",
      "2 minutes",
      "4 minutes",
      "1 minute"
    ],
    correctAnswer: 1,
    explanation: "If you've already microwaved the pasta for 3 minutes, you need (5 - 3 = 2) more minutes."
  },
  {
    question_number: "8",
    question: "Your microwave’s power is too high and cooks very fast. If a dish usually takes 4 minutes to cook on normal power, how long should you cook it if you set the microwave to 50% power to cook the same dish evenly?",
    answers: [
      "8 minutes",
      "6 minutes",
      "5 minutes",
      "7 minutes"
    ],
    correctAnswer: 0,
    explanation: "Cooking at 50% power typically requires doubling the cooking time, so (4 * 2 = 8) minutes."
  },
  {
    question_number: "9",
    question: "If you need to defrost chicken for 12 minutes in the microwave, but you split the time into two equal sessions to prevent overheating, how long is each session?",
    answers: [
      "5 minutes",
      "6 minutes",
      "10 minutes",
      "4 minutes"
    ],
    correctAnswer: 1,
    explanation: "Splitting 12 minutes into two equal sessions gives (12 / 2 = 6) minutes per session."
  },

  {
    question_number: "10",
    question: "You are making popcorn that requires 3 minutes and 30 seconds in the microwave. If you accidentally set it for 2 minutes, how much longer should you microwave it?",
    answers: [
      "1 minute 30 seconds",
      "2 minutes",
      "1 minute 45 seconds",
      "1 minute"
    ],
    correctAnswer: 0,
    explanation: "You still need (3 minutes 30 seconds - 2 minutes = 1 minute 30 seconds)."
  },
  {
    question_number: "11",
    question: "A group of friends want to share some candy equally. If they have 48 pieces of candy and there are 8 friends, how many pieces will each friend get?",
    answers: [
      "4 pieces",
      "5 pieces",
      "6 pieces",
      "8 pieces"
    ],
    correctAnswer: 2,
    explanation: "If there are 48 pieces of candy and 8 friends, you divide 48 by 8 to get 6 pieces per friend."
  },
  {
    question_number: "12",
    question: "A bicycle ride from Rishon LeZion to Ramat Gan takes 2 hours. If you leave at 9:00 AM, what time will you arrive in Ramat Gan?",
    answers: [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM"
    ],
    correctAnswer: 1,
    explanation: "If the ride takes 2 hours and you leave at 9:00 AM, you add 2 hours to 9:00 AM to get 11:00 AM."
  },
  {
    question_number: "13",
    question: "Avital is 25 years old. Her sister is 3 years younger. How old is her sister?",
    answers: [
      "20 years old",
      "21 years old",
      "22 years old",
      "23 years old"
    ],
    correctAnswer: 2,
    explanation: "If Avital is 25 years old and her sister is 3 years younger, you subtract 3 from 25 to get 22."
  },
  {
    question_number: "14",
    question: "A shopping cart has 12 apples, and you add 4 more. How many apples are in the cart now?",
    answers: [
      "14 apples",
      "15 apples",
      "16 apples",
      "17 apples"
    ],
    correctAnswer: 2,
    explanation: "If the cart has 12 apples and you add 4 more, you add 12 + 4 = 16 apples."
  },
  {
    question_number: "15",
    question: "Liz wants to save ₪500 in 5 months. How much do Liz need to save each month?",
    answers: [
      "₪80",
      "₪90",
      "₪100",
      "₪120"
    ],
    correctAnswer: 2,
    explanation: "If Liz wants to save ₪500 in 5 months, you divide 500 by 5 to get 100."
  },
  {
    question_number: "16",
    question: "Mike has 18 pencils in their pencil case. He gives 2 to his friend. How many pencils are left?",
    answers: [
      "16 pencils",
      "17 pencils",
      "18 pencils",
      "19 pencils"
    ],
    correctAnswer: 0,
    explanation: "If Mike has 18 pencils and gives 2 to their friend, you subtract 2 from 18 to get 16."
  },
  {
    question_number: "17",
    question: "A toy car travels 15 meters in 3 seconds. How many meters does it travel per second?",
    answers: [
      "3 meters",
      "4 meters",
      "5 meters",
      "6 meters"
    ],
    correctAnswer: 2,
    explanation: "If the toy car travels 15 meters in 3 seconds, you divide 15 by 3 to get 5 meters per second."
  },
  {
    question_number: "18",
    question: "Rachel has ₪250 in their wallet. Rachel spends ₪50 on a toy and ₪70 on a book. How much money is left?",
    answers: [
      "₪120",
      "₪130",
      "₪140",
      "₪150"
    ],
    correctAnswer: 1,
    explanation: "If Rachel has ₪250 and spends ₪50 on a toy and ₪70 on a book, she spends a total of ₪50 + ₪70 = ₪120. Subtracting ₪120 from ₪250 leaves ₪130."
  },
  {
    question_number: "19",
    question: "A microwave can cook food for 3 minutes and 20 seconds. If you set it for 3 minutes and 30 seconds, how much longer will it cook than the recommended time?",
    answers: [
      "5 seconds",
      "10 seconds",
      "15 seconds",
      "20 seconds"
    ],
    correctAnswer: 1,
    explanation: "If the recommended time is 3 minutes and 20 seconds, and you set it for 3 minutes and 30 seconds, it will cook for 10 seconds longer."
  },
  {
    question_number: "20",
    question: "Avital wants to schedule a meeting with a friend. They want to meet at 2:00 PM, but the friend is busy until 2:30 PM. How long will they have to wait?",
    answers: [
      "15 minutes",
      "20 minutes",
      "25 minutes",
      "30 minutes"
    ],
    correctAnswer: 3,
    explanation: "If Avital wants to meet at 2:00 PM, but the friend is busy until 2:30 PM, they will have to wait 30 minutes."
  },
  {
    question_number: "21",
    question: "A calendar shows that today is Wednesday. If tomorrow is Thursday, what day will it be in 5 days?",
    answers: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Saturday"
    ],
    correctAnswer: 3,
    explanation: "If today is Wednesday, tomorrow is Thursday, and you add 5 days, you get Saturday."
  },
  {
    question_number: "22",
    question: "Avital wants to cook a meal in the microwave for 2 minutes and 15 seconds. If she set it for 2 minutes and 20 seconds, how much longer will it cook than the recommended time?",
    answers: [
      "2 seconds",
      "5 seconds",
      "10 seconds",
      "15 seconds"
    ],
    correctAnswer: 1,
    explanation: "If the recommended time is 2 minutes and 15 seconds, and you set it for 2 minutes and 20 seconds, it will cook for 5 seconds longer."
  },
  {
    question_number: "23",
    question: "Frida has a doctor's appointment at 10:00 AM. If the appointment takes 30 minutes, what time will it end?",
    answers: [
      "10:20 AM",
      "10:25 AM",
      "10:30 AM",
      "10:35 AM"
    ],
    correctAnswer: 2,
    explanation: "If the appointment starts at 10:00 AM and takes 30 minutes, it will end at 10:30 AM."
  },
  {
    question_number: "24",
    question: "A calendar shows that today is the 15th of the month. If tomorrow is the 16th, what will the date be in 5 days?",
    answers: [
      "20th",
      "21st",
      "22nd",
      "23rd"
    ],
    correctAnswer: 1,
    explanation: "If today is the 15th, tomorrow is the 16th, and you add 5 days, you get the 21st."
  },  
  {
     question_number: "25",
      question: "Tom has 12 apples and gives 2 to his friend. How many apples does Tom have left?",
       answers: [ "10", "12", "14", "16" ], 
       correctAnswer: 0, 
       explanation: "Tom had 12 apples and gave away 2, so he has 12 - 2 = 10 apples left."
  },
  {
    question_number: "26",
    question: "A bus leaves Bat Yam at 8:00 AM and arrives in Tel Aviv at 9:00 AM. How long did the bus ride take?",
    answers: [
      "30 minutes",
      "1 hour",
      "1 hour 30 minutes",
      "2 hours"
    ],
    correctAnswer: 1,
    explanation: "The bus ride took 1 hour."
  },
  
  {
    question_number: "27",
    question: "Daniel is 7 years old. How old will she be in 5 years?",
    answers: [
      "10 years old",
      "11 years old",
      "12 years old",
      "13 years old"
    ],
    correctAnswer: 1,
    explanation: "Daniel is currently 7 years old, and in 5 years, she will be 7 + 5 = 12 years old."
  },
  
  {
    question_number: "28",
    question: "A microwave can cook food for 30 seconds, 1 minute, or 2 minutes. How many seconds is 1 minute?",
    answers: [
      "30 seconds",
      "60 seconds",
      "90 seconds",
      "120 seconds"
    ],
    correctAnswer: 1,
    explanation: "1 minute is equal to 60 seconds."
  },
  
  {
    question_number: "29",
    question: "A book costs 25 shekels. If you have a 50-shekel bill, how much change will you get?",
    answers: [
      "25 shekels",
      "30 shekels",
      "40 shekels",
      "50 shekels"
    ],
    correctAnswer: 2,
    explanation: "You pay with a 50-shekel bill, and the book costs 25 shekels, so you'll get 50 - 25 = 25 shekels in change."
  },
  
  {
    question_number: "30",
    question: "A baby is 6 months old. How many months will it be in 3 months?",
    answers: [
      "9 months",
      "7 months",
      "8 months",
      "10 months"
    ],
    correctAnswer: 0,
    explanation: "The baby is currently 6 months old, and in 3 months, it will be 6 + 3 = 9 months old."
  },
  
  {
    question_number: "31",
    question: "A calendar shows that today is Wednesday. What day will it be in 4 days?",
    answers: [
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    correctAnswer: 2,
    explanation: "Today is Wednesday, and in 4 days, it will be Sunday."
  },
  
  {
    question_number: "32",
    question: "Sevilla is a city in which country?",
    answers: [
      "Spain",
      "France",
      "Italy",
      "Germany"
    ],
    correctAnswer: 0,
    explanation: "Sevilla is a city in Spain."
  },
  
  {
    question_number: "33",
    question: "Arik has 12 dollars and spends 4 dollars. How much money does Arik have left?",
    answers: [
      "8 dollars",
      "10 dollars",
      "12 dollars",
      "16 dollars"
    ],
    correctAnswer: 0,
    explanation: "Arik had 12 dollars and spent 4 dollars, so they have 12 - 4 = 8 dollars left."
  },
  
  {
    question_number: "34",
    question: "Rachel is 76 years old. How old will they be in 5 years?",
    answers: [
      "80 years old",
      "81 years old",
      "84 years old",
      "85 years old"
    ],
    correctAnswer: 1,
    explanation: "Rachel is currently 76 years old, and in 5 years, they will be 76 + 5 = 81 years old."
  },
  
  {
    question_number: "35",
    question: "Liz has 15 apples and gives 3 to a friend. How many apples does the Liz have left?",
    answers: [
      "12 apples",
      "13 apples",
      "15 apples",
      "18 apples"
    ],
    correctAnswer: 0,
    explanation: "Liz had 15 apples and gave away 3, so she has 15 - 3 = 12 apples left."
  },
  
  {
    question_number: "36",
    question: "A person wants to save 100 shekels per month. If they save 25 shekels per week, how many weeks will it take to reach their goal?",
    answers: [
      "2 weeks",
      "3 weeks",
      "4 weeks",
      "5 weeks"
    ],
    correctAnswer: 2,
    explanation: "The person wants to save 100 shekels per month, and they save 25 shekels per week. To find out how many weeks it will take, divide 100 by 25, which is 4 weeks."
  },
  
  {
    question_number: "37",
    question: "A person is 25 years old. How old will they be in 10 years?",
    answers: [
      "30 years old",
      "32 years old",
      "35 years old",
      "40 years old"
    ],
    correctAnswer: 2,
    explanation: "The person is currently 25 years old, and in 10 years, they will be 25 + 10 = 35 years old."
  },
  
  {
    question_number: "38",
    question: "A person has 18 dollars and spends 6 dollars. How much money does the person have left?",
    answers: [
      "12 dollars",
      "14 dollars",
      "16 dollars",
      "18 dollars"
    ],
    correctAnswer: 0,
    explanation: "The person had 18 dollars and spent 6 dollars, so they have 18 - 6 = 12 dollars left."
  },
  
  {
    question_number: "39",
    question: "A calendar shows that today is the 10th of the month. If tomorrow is the 11th, what will the date be in 7 days?",
    answers: [
      "17th",
      "18th",
      "19th",
      "20th"
    ],
    correctAnswer: 1,
    explanation: "If today is the 10th, tomorrow is the 11th, and you add 7 days, you get the 18th."
  },
  
  {
    question_number: "40",
    question: "A person wants to buy a toy that costs 50 shekels. If they have a 20-shekel bill, how much more money do they need?",
    answers: [
      "10 shekels",
      "20 shekels",
      "30 shekels",
      "40 shekels"
    ],
    correctAnswer: 2,
    explanation: "The toy costs 50 shekels, and the person has a 20-shekel bill, so they need 50 - 20 = 30 shekels more."
  },
  
  {
    question_number: "41",
    question: "A person is 40 years old. How old will they be in 8 years?",
    answers: [
      "45 years old",
      "46 years old",
      "48 years old",
      "50 years old"
    ],
    correctAnswer: 2,
    explanation: "The person is currently 40 years old, and in 8 years, they will be 40 + 8 = 48 years old."
  },
  
  {
    question_number: "42",
    question: "A person has 12 pencils and gives 2 to a friend. How many pencils does the person have left?",
    answers: [
      "10 pencils",
      "11 pencils",
      "12 pencils",
      "14 pencils"
    ],
    correctAnswer: 0,
    explanation: "The person had 12 pencils and gave away 2, so they have 12 - 2 = 10 pencils left."
  },
  
  {
    question_number: "43",
    question: "A calendar shows that today is Monday. What day will it be in 3 days?",
    answers: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    correctAnswer: 2,
    explanation: "Today is Monday, and in 3 days, it will be Thursday."
  },
  
  {
    question_number: "44",
    question: "A person wants to save 200 shekels per month. If they save 50 shekels per week, how many weeks will it take to reach their goal?",
    answers: [
      "2 weeks",
      "3 weeks",
      "4 weeks",
      "5 weeks"
    ],
    correctAnswer: 2,
    explanation: "The person wants to save 200 shekels per month, and they save 50 shekels per week. To find out how many weeks it will take, divide 200 by 50, which is 4 weeks."
  },
  {
    question_number: "45",
    question: "A bus leaves Bat Yam at 8:00 AM and arrives in Tel Aviv at 9:00 AM. How long did the bus take to travel?",
    answers: [
      "30 minutes",
      "1 hour",
      "1 hour 30 minutes",
      "2 hours"
    ],
    correctAnswer: 1,
    explanation: "The bus traveled from 8:00 AM to 9:00 AM, which is 1 hour."
  },  
  {
    question_number: "46",
    question: "If a baby is 9 months old, how many months will it be in 3 months?",
    answers: [
      "9 months",
      "10 months",
      "11 months",
      "12 months"
    ],
    correctAnswer: 3,
    explanation: "The baby is currently 9 months old, and in 3 months, it will be 9 + 3 = 12 months old."
  },  
  {
    question_number: "47",
    question: "A book costs ₪25. If you pay with a ₪50 bill, how much change will you get?",
    answers: [
      "₪20",
      "₪25",
      "₪30",
      "₪35"
    ],
    correctAnswer: 1,
    explanation: "You pay with a ₪50 bill, and the book costs ₪25, so you'll get ₪50 - ₪25 = ₪25 in change."
  },
  {
    question_number: "48",
    question: "If it takes 2 hours to drive from Rishon to Holon, how long will it take to drive from Rishon to Tel Aviv if it's 30 minutes more?",
    answers: [
      "2 hours",
      "2 hours 30 minutes",
      "3 hours",
      "3 hours 30 minutes"
    ],
    correctAnswer: 1,
    explanation: "It takes 2 hours to drive from Rishon to Holon, and it's 30 minutes more to drive to Tel Aviv, so it will take 2 hours + 30 minutes = 2 hours 30 minutes."
  },
  {
    question_number: "49",
    question: "If you sleep at 10:00 PM and wake up at 7:00 AM, how many hours did you sleep?",
    answers: [
      "7 hours",
      "8 hours",
      "9 hours",
      "10 hours"
    ],
    correctAnswer: 2,
    explanation: "You slept from 10:00 PM to 7:00 AM, which is 9 hours."
  },
  {
    question_number: "50",
    question: "A microwave can cook food for 2 minutes and 30 seconds. If you cook for 1 minute and 15 seconds, how much longer do you need to cook?",
    answers: [
      "1 minute 15 seconds",
      "1 minute 30 seconds",
      "2 minutes",
      "2 minutes 15 seconds"
    ],
    correctAnswer: 2,
    explanation: "You've cooked for 1 minute and 15 seconds, and you need to cook for 2 minutes and 30 seconds, so you need to cook for another 1 minute and 15 seconds."
  },
  {
    question_number: "51",
    question: "If you have ₪120 and spend ₪40, how much money do you have left?",
    answers: [
      "₪80",
      "₪90",
      "₪100",
      "₪110"
    ],
    correctAnswer: 0,
    explanation: "You had ₪120 and spent ₪40, so you have ₪120 - ₪40 = ₪80 left."
  },
  {
    question_number: "52",
    question: "If a Holocaust survivor is 85 years old, how old will they be in 5 years?",
    answers: [
      "85 years old",
      "86 years old",
      "90 years old",
      "95 years old"
    ],
    correctAnswer: 2,
    explanation: "The survivor is currently 85 years old, and in 5 years, they will be 85 + 5 = 90 years old."
  },
  {
    question_number: "53",
    question: "If you have 12 cookies and you eat 2, how many cookies do you have left?",
    answers: [
      "10 cookies",
      "11 cookies",
      "12 cookies",
      "14 cookies"
    ],
    correctAnswer: 0,
    explanation: "You had 12 cookies and ate 2, so you have 12 - 2 = 10 cookies left."
  },
  {
    question_number: "54",
    question: "If a city is 120 km away, and you drive at 40 km/h, how long will it take to get there?",
    answers: [
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours"
    ],
    correctAnswer: 2,
    explanation: "You're driving at 40 km/h, and the city is 120 km away, so it will take 120 km / 40 km/h = 3 hours to get there."
  },
  {
    question_number: "55",
    question: "A bus leaves Bat Yam at 9:00 AM and arrives in Tel Aviv at 10:30 AM. How long did the bus ride take?",
    answers: [
      "1 hour",
      "1.5 hours",
      "2 hours",
      "3 hours"
    ],
    correctAnswer: 1,
    explanation: "The bus ride took 1.5 hours, from 9:00 AM to 10:30 AM."
  },
  {
    question_number: "56",
    question: "If Sara is 8 years old and her brother is 4 years older, how old is her brother?",
    answers: [
      "10 years old",
      "11 years old",
      "12 years old",
      "13 years old"
    ],
    correctAnswer: 2,
    explanation: "If Sara is 8 years old and her brother is 4 years older, her brother is 8 + 4 = 12 years old."
  },
  {
    question_number: "57",
    question: "A microwave can cook food for 30 seconds, 1 minute, or 2 minutes. How many options are there?",
    answers: [
      "2 options",
      "3 options",
      "4 options",
      "5 options"
    ],
    correctAnswer: 1,
    explanation: "There are 3 options: 30 seconds, 1 minute, or 2 minutes."
  },
  {
    question_number: "58",
    question: "If it takes 2 hours to drive from Rishon to Holon, how long will it take to drive from Holon to Rishon?",
    answers: [
      "1 hour",
      "2 hours",
      "3 hours",
      "4 hours"
    ],
    correctAnswer: 1,
    explanation: "The distance is the same, so it will also take 2 hours to drive from Holon to Rishon."
  },
  {
    question_number: "59",
    question: "If a toy costs 25 shekels and you have a 20% discount coupon, how much will you pay?",
    answers: [
      "20 shekels",
      "22 shekels",
      "25 shekels",
      "30 shekels"
    ],
    correctAnswer: 0,
    explanation: "With a 20% discount, you'll pay 25 - (25 x 0.2) = 20 shekels."
  },
  {
    question_number: "60",
    question: "If a baby is 6 months old, how many weeks old is the baby?",
    answers: [
      "20 weeks",
      "24 weeks",
      "26 weeks",
      "30 weeks"
    ],
    correctAnswer: 1,
    explanation: "6 months is equal to 24 weeks."
  },
  {
    question_number: "61",
    question: "If a book costs 50 shekels and you have 30 shekels, how much more money do you need?",
    answers: [
      "10 shekels",
      "20 shekels",
      "30 shekels",
      "40 shekels"
    ],
    correctAnswer: 1,
    explanation: "You need 50 - 30 = 20 shekels more."
  },
  {
    question_number: "62",
    question: "If it's 3:45 PM and you need to wait 2 hours, what time will it be?",
    answers: [
      "5:45 PM",
      "6:45 PM",
      "7:45 PM",
      "8:45 PM"
    ],
    correctAnswer: 1,
    explanation: "If it's 3:45 PM and you wait 2 hours, it will be 5:45 PM."
  },
  {
    question_number: "63",
    question: "If you have 12 cookies and you eat 2, how many cookies do you have left?",
    answers: [
      "10 cookies",
      "11 cookies",
      "12 cookies",
      "14 cookies"
    ],
    correctAnswer: 0,
    explanation: "You had 12 cookies and ate 2, so you have 12 - 2 = 10 cookies left."
  },
  {
    question_number: "64",
    question: "If a person is 80 years old and was born in 1940, what year is it now?",
    answers: [
      "2020",
      "2022",
      "2024",
      "2026"
    ],
    correctAnswer: 0,
    explanation: "If the person was born in 1940 and is 80 years old, it is currently 2020."
  },
  {
    question_number: "65",
    question: "A bus leaves Bat Yam at 9:00 AM and arrives in Tel Aviv at 10:30 AM. How long did the bus ride take?",
    answers: [
      "1 hour",
      "1.5 hours",
      "2 hours",
      "2.5 hours"
    ],
    correctAnswer: 1,
    explanation: "The bus ride took 10:30 - 9:00 = 1.5 hours."
  },
  {
    question_number: "66",
    question: "If Sara is 7 years old and her brother is 3 years older, how old is her brother?",
    answers: [
      "9 years old",
      "10 years old",
      "11 years old",
      "12 years old"
    ],
    correctAnswer: 0,
    explanation: "If Sara is 7 years old and her brother is 3 years older, her brother is 7 + 3 = 10 years old."
  },
  {
    question_number: "67",
    question: "A microwave can cook food for 30 seconds, 1 minute, 1.5 minutes, or 2 minutes. If you cook food for 1.5 minutes, how many seconds is that?",
    answers: [
      "60 seconds",
      "90 seconds",
      "120 seconds",
      "150 seconds"
    ],
    correctAnswer: 2,
    explanation: "1.5 minutes is equal to 1.5 x 60 = 90 seconds."
  },
  {
    question_number: "68",
    question: "If you have $15 and spend $3 on a toy, how much money do you have left?",
    answers: [
      "$10",
      "$12",
      "$15",
      "$18"
    ],
    correctAnswer: 0,
    explanation: "You had $15 and spent $3, so you have $15 - $3 = $12 left."
  },
  {
    question_number: "69",
    question: "If it takes 2 hours to drive from Rishon LeZion to Jerusalem, and you leave at 9:00 AM, what time will you arrive?",
    answers: [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM"
    ],
    correctAnswer: 2,
    explanation: "If it takes 2 hours to drive, and you leave at 9:00 AM, you will arrive at 9:00 + 2 hours = 11:00 AM."
  },
  {
    question_number: "70",
    question: "If a book costs $12 and you have a 20% discount coupon, how much will you pay for the book?",
    answers: [
      "$9",
      "$10",
      "$11",
      "$12"
    ],
    correctAnswer: 0,
    explanation: "If the book costs $12 and you have a 20% discount, you will pay $12 - (20% of $12) = $12 - $2.40 = $9.60."
  },
  {
    question_number: "71",
    question: "If you have 12 pencils in a box and you add 4 more, how many pencils do you have now?",
    answers: [
      "12",
      "14",
      "16",
      "18"
    ],
    correctAnswer: 2,
    explanation: "You had 12 pencils and added 4 more, so you have 12 + 4 = 16 pencils now."
  },
  {
    question_number: "72",
    question: "If a baby is 6 months old, how many weeks old is the baby?",
    answers: [
      "20 weeks",
      "24 weeks",
      "26 weeks",
      "30 weeks"
    ],
    correctAnswer: 1,
    explanation: "If the baby is 6 months old, and there are approximately 4 weeks in a month, the baby is 6 x 4 = 24 weeks old."
  },
  {
    question_number: "73",
    question: "If you have $25 and spend $5 on a toy, how much money do you have left?",
    answers: [
      "$20",
      "$22",
      "$25",
      "$30"
    ],
    correctAnswer: 0,
    explanation: "You had $25 and spent $5, so you have $25 - $5 = $20 left."
  },
  {
    question_number: "74",
    question: "If it takes 3 hours to drive from Holon to Eilat, and you leave at 8:00 AM, what time will you arrive?",
    answers: [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM"
    ],
    correctAnswer: 2,
    explanation: "If it takes 3 hours to drive, and you leave at 8:00 AM, you will arrive at 8:00 + 3 hours = 11:00 AM."
  },
  {
    question_number: "75",
    question: "A baby is 9 months old. How many months will it be in 3 months?",
    answers: [
      "9 months",
      "10 months",
      "11 months",
      "12 months"
    ],
    correctAnswer: 2,
    explanation: "If the baby is 9 months old and 3 months pass, it will be 9 + 3 = 12 months old."
  },
  {
    question_number: "76",
    question: "Sarah has $15 and spends $3 on a toy. How much money does Sarah have left?",
    answers: [
      "$12",
      "$13",
      "$15",
      "$18"
    ],
    correctAnswer: 0,
    explanation: "Sarah had $15 and spent $3, so she has $15 - $3 = $12 left."
  },
  {
    question_number: "77",
    question: "A microwave can cook food for 30 seconds, 1 minute, or 2 minutes. How many seconds is 1 minute?",
    answers: [
      "30 seconds",
      "60 seconds",
      "90 seconds",
      "120 seconds"
    ],
    correctAnswer: 1,
    explanation: "1 minute is equal to 60 seconds."
  },
  {
    question_number: "78",
    question: "A book costs $12. If you have a 20% discount coupon, how much will you pay for the book?",
    answers: [
      "$9",
      "$10",
      "$11",
      "$12"
    ],
    correctAnswer: 0,
    explanation: "If you have a 20% discount, you will pay 80% of the original price, which is $12 * 0.8 = $9.60, rounded to $9."
  },
  {
    question_number: "79",
    question: "A bus travels from Bat Yam to Tel Aviv in 30 minutes. How long will it take to travel from Bat Yam to Holon if it takes 10 minutes to travel from Tel Aviv to Holon?",
    answers: [
      "30 minutes",
      "40 minutes",
      "50 minutes",
      "60 minutes"
    ],
    correctAnswer: 1,
    explanation: "The bus takes 30 minutes to travel from Bat Yam to Tel Aviv, and 10 minutes to travel from Tel Aviv to Holon, so it will take 30 + 10 = 40 minutes to travel from Bat Yam to Holon."
  },
  {
    question_number: "80",
    question: "A person is 25 years old. How old will they be in 5 years?",
    answers: [
      "25 years old",
      "26 years old",
      "28 years old",
      "30 years old"
    ],
    correctAnswer: 3,
    explanation: "If the person is 25 years old and 5 years pass, they will be 25 + 5 = 30 years old."
  },
  {
    question_number: "81",
    question: "A person has $50 and spends $10 on lunch. How much money do they have left?",
    answers: [
      "$40",
      "$45",
      "$50",
      "$60"
    ],
    correctAnswer: 0,
    explanation: "The person had $50 and spent $10, so they have $50 - $10 = $40 left."
  },
  {
    question_number: "82",
    question: "A person wakes up at 7:00 AM and sleeps for 9 hours. What time will they wake up?",
    answers: [
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM"
    ],
    correctAnswer: 2,
    explanation: "If the person sleeps for 9 hours, they will wake up at 7:00 AM + 9 hours = 4:00 PM."
  },
  {
    question_number: "83",
    question: "A person has 12 pencils and gives 2 to their friend. How many pencils do they have left?",
    answers: [
      "10",
      "11",
      "12",
      "14"
    ],
    correctAnswer: 0,
    explanation: "The person had 12 pencils and gave away 2, so they have 12 - 2 = 10 pencils left."
  },
  {
    question_number: "84",
    question: "A person is 80 years old. How old will they be in 5 years?",
    answers: [
      "80 years old",
      "81 years old",
      "83 years old",
      "85 years old"
    ],
    correctAnswer: 3,
    explanation: "If the person is 80 years old and 5 years pass, they will be 80 + 5 = 85 years old."
  },
  {
    question_number: "85",
    question: "A baby is 9 months old. How many months will it be in 3 months?",
    answers: [
      "10 months",
      "11 months",
      "12 months",
      "13 months"
    ],
    correctAnswer: 2,
    explanation: "If the baby is 9 months old and 3 months pass, it will be 9 + 3 = 12 months old."
  },
  {
    question_number: "86",
    question: "Sarah has $15 and spends $3 on a toy. How much money does Sarah have left?",
    answers: [
      "$10",
      "$12",
      "$15",
      "$18"
    ],
    correctAnswer: 1,
    explanation: "Sarah had $15 and spent $3, so she has $15 - $3 = $12 left."
  },
  {
    question_number: "87",
    question: "A microwave can cook food for 30 seconds, 1 minute, or 2 minutes. How many seconds is 1 minute?",
    answers: [
      "30 seconds",
      "60 seconds",
      "90 seconds",
      "120 seconds"
    ],
    correctAnswer: 1,
    explanation: "1 minute is equal to 60 seconds."
  },
  {
    question_number: "88",
    question: "A book costs $12 and you have a 20% discount coupon. How much will you pay for the book?",
    answers: [
      "$9",
      "$10",
      "$11",
      "$12"
    ],
    correctAnswer: 0,
    explanation: "If the book costs $12 and you have a 20% discount, you will pay $12 - (20% of $12) = $9."
  },
  {
    question_number: "89",
    question: "A bus takes 30 minutes to travel from Bat Yam to Tel Aviv. How long will it take to travel from Bat Yam to Holon if it takes 10 minutes to travel from Tel Aviv to Holon?",
    answers: [
      "30 minutes",
      "40 minutes",
      "50 minutes",
      "60 minutes"
    ],
    correctAnswer: 1,
    explanation: "The bus takes 30 minutes to travel from Bat Yam to Tel Aviv, and 10 minutes to travel from Tel Aviv to Holon, so it will take 30 + 10 = 40 minutes to travel from Bat Yam to Holon."
  },
  {
    question_number: "90",
    question: "A person is 80 years old and was born in 1940. What year was she born?",
    answers: [
      "1930",
      "1940",
      "1950",
      "1960"
    ],
    correctAnswer: 1,
    explanation: "If the person is 80 years old and it's currently 2020, they were born in 1940."
  },
  {
    question_number: "91",
    question: "A toy car track is 12 meters long. If it is extended by 4 meters, how long is the track now?",
    answers: [
      "12 meters",
      "14 meters",
      "16 meters",
      "18 meters"
    ],
    correctAnswer: 2,
    explanation: "The track was 12 meters long and was extended by 4 meters, so it is now 12 + 4 = 16 meters long."
  },
  {
    question_number: "92",
    question: "A person has $50 and spends $10 on lunch. How much money does the person have left?",
    answers: [
      "$40",
      "$45",
      "$50",
      "$60"
    ],
    correctAnswer: 0,
    explanation: "The person had $50 and spent $10, so they have $50 - $10 = $40 left."
  },
  {
    question_number: "93",
    question: "A person is 25 years old and was born in 1995. How old will they be in 5 years?",
    answers: [
      "25 years old",
      "26 years old",
      "28 years old",
      "30 years old"
    ],
    correctAnswer: 2,
    explanation: "If the person is 25 years old and 5 years pass, they will be 25 + 5 = 30 years old."
  },
  {
    question_number: "94",
    question: "A person has 18 apples and gives 2 to their friend. How many apples does the person have left?",
    answers: [
      "16 apples",
      "17 apples",
      "18 apples",
      "20 apples"
    ],
    correctAnswer: 0,
    explanation: "The person had 18 apples and gave away 2, so they have 18 - 2 = 16 apples left."
  },
  {
    question_number: "95",
    question: "A bus leaves Bat Yam at 9:00 AM and arrives in Tel Aviv at 10:30 AM. How long did the bus ride take?",
    answers: [
      "1 hour",
      "1 hour 30 minutes",
      "2 hours",
      "2 hours 30 minutes"
    ],
    correctAnswer: 1,
    explanation: "The bus ride took 1 hour and 30 minutes."
  },
  {
    question_number: "96",
    question: "If Sara is 8 years old and her brother is 5 years older, how old is her brother?",
    answers: [
      "11 years old",
      "12 years old",
      "13 years old",
      "14 years old"
    ],
    correctAnswer: 2,
    explanation: "If Sara is 8 years old and her brother is 5 years older, her brother is 8 + 5 = 13 years old."
  },
  {
    question_number: "97",
    question: "A microwave can cook food for 30 seconds, 1 minute, 1 minute 30 seconds, or 2 minutes. How many options are there?",
    answers: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 1,
    explanation: "There are 4 options: 30 seconds, 1 minute, 1 minute 30 seconds, and 2 minutes."
  },
  {
    question_number: "98",
    question: "If it takes 2 hours to drive from Rishon to Holon, and you leave at 10:00 AM, what time will you arrive?",
    answers: [
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM"
    ],
    correctAnswer: 2,
    explanation: "If it takes 2 hours to drive and you leave at 10:00 AM, you will arrive at 12:00 PM."
  },
  {
    question_number: "99",
    question: "If a toy costs 25 shekels and you have a 20% discount coupon, how much will you pay?",
    answers: [
      "20 shekels",
      "22 shekels",
      "25 shekels",
      "30 shekels"
    ],
    correctAnswer: 0,
    explanation: "If the toy costs 25 shekels and you have a 20% discount, you will pay 25 - (25 x 0.2) = 20 shekels."
  },
  {
    question_number: "100",
    question: "If a baby is 9 months old, how many months will it be in 3 months?",
    answers: [
      "10 months",
      "11 months",
      "12 months",
      "13 months"
    ],
    correctAnswer: 2,
    explanation: "If the baby is 9 months old and 3 months pass, the baby will be 9 + 3 = 12 months old."
  },
  {
    question_number: "101",
    question: "If you have 12 shekels and spend 4 shekels on a toy, how much money do you have left?",
    answers: [
      "8 shekels",
      "10 shekels",
      "12 shekels",
      "16 shekels"
    ],
    correctAnswer: 0,
    explanation: "If you have 12 shekels and spend 4 shekels, you have 12 - 4 = 8 shekels left."
  },
  {
    question_number: "102",
    question: "If it takes 5 hours to drive from Sevilla to Madrid, and you leave at 8:00 AM, what time will you arrive?",
    answers: [
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM"
    ],
    correctAnswer: 2,
    explanation: "If it takes 5 hours to drive and you leave at 8:00 AM, you will arrive at 1:00 PM."
  },
  {
    question_number: "103",
    question: "If you have 15 apples and give 3 to your friend, how many apples do you have left?",
    answers: [
      "12 apples",
      "13 apples",
      "14 apples",
      "15 apples"
    ],
    correctAnswer: 0,
    explanation: "If you have 15 apples and give 3 away, you have 15 - 3 = 12 apples left."
  },
  {
    question_number: "104",
    question: "If a book costs 50 shekels and you have a 10% discount coupon, how much will you pay?",
    answers: [
      "45 shekels",
      "47 shekels",
      "50 shekels",
      "55 shekels"
    ],
    correctAnswer: 0,
    explanation: "If the book costs 50 shekels and you have a 10% discount, you will pay 50 - (50 x 0.1) = 45 shekels."
  },
  {
    question_number: "105",
    question: "A baby is 9 months old. How many months will it be in 3 months?",
    answers: [
      "10 months",
      "11 months",
      "12 months",
      "13 months"
    ],
    correctAnswer: 2,
    explanation: "If the baby is 9 months old and 3 months pass, it will be 9 + 3 = 12 months old."
  },
  {
    question_number: "106",
    question: "Sarah has $15 and spends $3 on a toy. How much money does Sarah have left?",
    answers: [
      "$10",
      "$12",
      "$15",
      "$18"
    ],
    correctAnswer: 1,
    explanation: "Sarah had $15 and spent $3, so she has $15 - $3 = $12 left."
  },
  {
    question_number: "107",
    question: "A microwave can cook food for 2 minutes and 30 seconds. If you set it for 1 minute and 45 seconds, how much longer does it need to cook?",
    answers: [
      "30 seconds",
      "45 seconds",
      "1 minute",
      "2 minutes"
    ],
    correctAnswer: 1,
    explanation: "The microwave needs to cook for 2 minutes and 30 seconds, but it's only cooked for 1 minute and 45 seconds, so it needs 45 seconds more."
  },
  {
    question_number: "108",
    question: "A bus takes 30 minutes to drive from Bat Yam to Tel Aviv. If it takes 10 minutes to drive from Tel Aviv to Holon, how long does it take to drive from Bat Yam to Holon?",
    answers: [
      "20 minutes",
      "30 minutes",
      "40 minutes",
      "50 minutes"
    ],
    correctAnswer: 2,
    explanation: "It takes 30 minutes to drive from Bat Yam to Tel Aviv, and 10 minutes to drive from Tel Aviv to Holon, so it takes 30 + 10 = 40 minutes to drive from Bat Yam to Holon."
  },
  {
    question_number: "109",
    question: "Avital is 31 years old and her sister is 7 years older. How old is her sister?",
    answers: [
      "36 years old",
      "37 years old",
      "38 years old",
      "39 years old"
    ],
    correctAnswer: 2,
    explanation: "If Avital is 31 years old and their sister is 7 years older, their sister is 31 + 7 = 38 years old."
  },
  {
    question_number: "110",
    question: "A calendar shows that today is Monday. What day will it be in 3 days?",
    answers: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    correctAnswer: 2,
    explanation: "If today is Monday, tomorrow is Tuesday, the next day is Wednesday, and the day after that is Thursday."
  },
  {
    question_number: "111",
    question: "A person has $50 and spends $10 on a book. How much money does the person have left?",
    answers: [
      "$40",
      "$45",
      "$50",
      "$60"
    ],
    correctAnswer: 0,
    explanation: "The person had $50 and spent $10, so they have $50 - $10 = $40 left."
  },
  {
    question_number: "112",
    question: "A person is 80 years old and was born in 1940. What year is it now?",
    answers: [
      "2020",
      "2022",
      "2025",
      "2030"
    ],
    correctAnswer: 0,
    explanation: "If the person was born in 1940 and is 80 years old, it is currently 2020."
  },
  {
    question_number: "113",
    question: "Caroline has 15 pencils and gives 3 to their friend. How many pencils does Caroline have left?",
    answers: [
      "12",
      "13",
      "14",
      "15"
    ],
    correctAnswer: 0,
    explanation: "Caroline had 15 pencils and gave away 3, so she has 15 - 3 = 12 pencils left."
  },
  {
    question_number: "114",
    question: "Avital wants to save $100 in 5 weeks. How much does she need to save each week?",
    answers: [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    correctAnswer: 2,
    explanation: "If Avital wants to save $100 in 5 weeks, they need to save $100 / 5 = $20 each week."
  },
  {
    question_number: "115",
    question: "A baby is 9 months old. How many months will it be in 3 months?",
    answers: [
      "10 months",
      "11 months",
      "12 months",
      "13 months"
    ],
    correctAnswer: 2,
    explanation: "If the baby is 9 months old and 3 months pass, it will be 9 + 3 = 12 months old."
  },
  {
    question_number: "116",
    question: "Sarah has $15 in her piggy bank. She adds $2 more. How much money does Sarah have now?",
    answers: [
      "$15",
      "$16",
      "$17",
      "$18"
    ],
    correctAnswer: 2,
    explanation: "Sarah had $15 and added $2, so she now has $15 + $2 = $17."
  },
  {
    question_number: "117",
    question: "A microwave can cook food for 30 seconds, 1 minute, or 2 minutes. How many seconds is 1 minute?",
    answers: [
      "30 seconds",
      "60 seconds",
      "90 seconds",
      "120 seconds"
    ],
    correctAnswer: 1,
    explanation: "1 minute is equal to 60 seconds."
  },
  {
    question_number: "118",
    question: "A bus ride from Bat Yam to Tel Aviv takes 30 minutes. If the bus leaves at 9:00 AM, what time will it arrive?",
    answers: [
      "9:20 AM",
      "9:30 AM",
      "9:40 AM",
      "10:00 AM"
    ],
    correctAnswer: 2,
    explanation: "The bus ride takes 30 minutes, so if it leaves at 9:00 AM, it will arrive at 9:00 + 30 minutes = 9:30 AM."
  },
  {
    question_number: "119",
    question: "A book costs $12. If you pay with a $20 bill, how much change will you get?",
    answers: [
      "$2",
      "$4",
      "$6",
      "$8"
    ],
    correctAnswer: 2,
    explanation: "You pay with a $20 bill and the book costs $12, so you will get $20 - $12 = $8 in change."
  },
  {
    question_number: "120",
    question: "A person is 25 years old. How old will they be in 5 years?",
    answers: [
      "25 years old",
      "26 years old",
      "29 years old",
      "30 years old"
    ],
    correctAnswer: 3,
    explanation: "If the person is 25 years old and 5 years pass, they will be 25 + 5 = 30 years old."
  },
  {
    question_number: "121",
    question: "A person has $50 and spends $15 on a toy. How much money does the person have left?",
    answers: [
      "$35",
      "$40",
      "$45",
      "$50"
    ],
    correctAnswer: 0,
    explanation: "The person had $50 and spent $15, so they have $50 - $15 = $35 left."
  },
  {
    question_number: "122",
    question: "A person wakes up at 7:00 AM and sleeps for 9 hours. What time will they wake up?",
    answers: [
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM"
    ],
    correctAnswer: 2,
    explanation: "The person sleeps for 9 hours, so if they go to sleep at 7:00 AM, they will wake up at 7:00 AM + 9 hours = 4:00 PM."
  },
  {
    question_number: "123",
    question: "A person has 12 pencils in a bag. If they add 2 more, how many pencils do they have now?",
    answers: [
      "10 pencils",
      "12 pencils",
      "14 pencils",
      "16 pencils"
    ],
    correctAnswer: 2,
    explanation: "The person had 12 pencils and added 2 more, so they now have 12 + 2 = 14 pencils."
  },
  {
    question_number: "124",
    question: "A person is 80 years old. How old will they be in 5 years?",
    answers: [
      "80 years old",
      "81 years old",
      "84 years old",
      "85 years old"
    ],
    correctAnswer: 3,
    explanation: "If the person is 80 years old and 5 years pass, they will be 80 + 5 = 85 years old."
  },
  {
    question_number: "125",
    question: "A baby is 9 months old. How many months will the baby be in 3 months?",
    answers: [
      "10 months",
      "11 months",
      "12 months",
      "13 months"
    ],
    correctAnswer: 2,
    explanation: "If the baby is 9 months old and 3 months pass, the baby will be 9 + 3 = 12 months old."
  },
  {
    question_number: "126",
    question: "Sarah has $15 to spend at the store. She buys a toy for $3. How much money does Sarah have left?",
    answers: [
      "$10",
      "$12",
      "$13",
      "$15"
    ],
    correctAnswer: 1,
    explanation: "Sarah had $15 and spent $3, so she has $15 - $3 = $12 left."
  },
  {
    question_number: "127",
    question: "A microwave can cook food for 30 seconds, 1 minute, or 2 minutes. How many seconds is 1 minute?",
    answers: [
      "30 seconds",
      "60 seconds",
      "90 seconds",
      "120 seconds"
    ],
    correctAnswer: 1,
    explanation: "There are 60 seconds in 1 minute."
  },
  {
    question_number: "128",
    question: "A bus ride from Bat Yam to Tel Aviv takes 30 minutes. If the bus leaves at 9:00 AM, what time will it arrive?",
    answers: [
      "9:20 AM",
      "9:30 AM",
      "9:40 AM",
      "10:00 AM"
    ],
    correctAnswer: 2,
    explanation: "The bus ride takes 30 minutes, so if it leaves at 9:00 AM, it will arrive at 9:00 + 30 minutes = 9:30 AM."
  },
  {
    question_number: "129",
    question: "A book costs $12. If you have a 20% discount coupon, how much will you pay for the book?",
    answers: [
      "$9",
      "$10",
      "$11",
      "$12"
    ],
    correctAnswer: 1,
    explanation: "If you have a 20% discount coupon, you will pay 80% of the original price, which is $12 x 0.8 = $9.60, rounded to $9."
  },
  {
    question_number: "130",
    question: "A person is 75 years old. How many years will they be in 5 years?",
    answers: [
      "75 years",
      "76 years",
      "79 years",
      "80 years"
    ],
    correctAnswer: 3,
    explanation: "If the person is 75 years old and 5 years pass, they will be 75 + 5 = 80 years old."
  },
  {
    question_number: "131",
    question: "A toy car travels 12 meters in 4 seconds. How many meters will it travel in 6 seconds?",
    answers: [
      "12 meters",
      "18 meters",
      "24 meters",
      "30 meters"
    ],
    correctAnswer: 2,
    explanation: "The toy car travels 12 meters in 4 seconds, so it travels 12 / 4 = 3 meters per second. In 6 seconds, it will travel 3 x 6 = 18 meters."
  },
  {
    question_number: "132",
    question: "A person has $50 to spend on groceries. They buy milk for $5 and bread for $3. How much money do they have left?",
    answers: [
      "$40",
      "$42",
      "$45",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "The person had $50 and spent $5 + $3 = $8, so they have $50 - $8 = $42 left."
  },
  {
    question_number: "133",
    question: "A person is 25 years old. How old will they be in 10 years?",
    answers: [
      "25 years",
      "30 years",
      "35 years",
      "40 years"
    ],
    correctAnswer: 1,
    explanation: "If the person is 25 years old and 10 years pass, they will be 25 + 10 = 35 years old."
  },
  {
    question_number: "134",
    question: "A person has 12 hours to travel from New York to London. If the flight takes 7 hours, how many hours will they have left?",
    answers: [
      "3 hours",
      "5 hours",
      "7 hours",
      "12 hours"
    ],
    correctAnswer: 1,
    explanation: "The person has 12 hours and the flight takes 7 hours, so they will have 12 - 7 = 5 hours left, but since they need to account for the time difference, they will have 5 - 2 = 3 hours left."
  },
  {
    question_number: "135",
    question: "A person has 15 days to finish a project. If they work for 3 days, how many days do they have left?",
    answers: [
      "12 days",
      "13 days",
      "15 days",
      "18 days"
    ],
    correctAnswer: 1,
    explanation: "The person has 15 days and has worked for 3 days, so they have 15 - 3 = 12 days left."
  },
  {
    question_number: "136",
    question: "A person has $20 to spend on lunch. They buy a sandwich for $5 and a drink for $3. How much money do they have left?",
    answers: [
      "$10",
      "$12",
      "$15",
      "$20"
    ],
    correctAnswer: 1,
    explanation: "The person had $20 and spent $5 + $3 = $8, so they have $20 - $8 = $12 left."
  },
  {
    question_number: "137",
    question: "A person is 40 years old. How old will they be in 15 years?",
    answers: [
      "40 years",
      "45 years",
      "50 years",
      "55 years"
    ],
    correctAnswer: 3,
    explanation: "If the person is 40 years old and 15 years pass, they will be 40 + 15 = 55 years old."
  },
  {
    question_number: "138",
    question: "A person has 12 weeks to finish a project. If they work for 4 weeks, how many weeks do they have left?",
    answers: [
      "6 weeks",
      "8 weeks",
      "10 weeks",
      "12 weeks"
    ],
    correctAnswer: 2,
    explanation: "The person has 12 weeks and has worked for 4 weeks, so they have 12 - 4 = 8 weeks left."
  },
  {
    question_number: "139",
    question: "A person has $30 to spend on a gift. They buy a toy for $10 and a book for $5. How much money do they have left?",
    answers: [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    correctAnswer: 2,
    explanation: "The person had $30 and spent $10 + $5 = $15, so they have $30 - $15 = $15 left."
  },
  {
    question_number: "140",
    question: "A baby is 9 months old. How many months until the baby is 1 year old?",
    answers: [
      "1 month",
      "2 months",
      "3 months",
      "9 months"
    ],
    correctAnswer: 3,
    explanation: "The baby is 9 months old, so it needs 3 more months to be 1 year old."
  },
  {
    question_number: "141",
    question: "A person wants to buy a toy that costs $25. They have $15. How much more money do they need?",
    answers: [
      "$5",
      "$10",
      "$15",
      "$20"
    ],
    correctAnswer: 2,
    explanation: "The person needs $25 and has $15, so they need $25 - $15 = $10 more."
  },
  {
    question_number: "142",
    question: "A person has 12 hours to finish a task. They work for 4 hours. How many hours do they have left?",
    answers: [
      "4 hours",
      "6 hours",
      "8 hours",
      "10 hours"
    ],
    correctAnswer: 2,
    explanation: "The person has 12 hours and has worked for 4 hours, so they have 12 - 4 = 8 hours left."
  },
  {
    question_number: "143",
    question: "A person has $50 to spend on groceries. They buy milk for $5 and bread for $3. How much money do they have left?",
    answers: [
      "$40",
      "$42",
      "$45",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "The person had $50 and spent $5 + $3 = $8, so they have $50 - $8 = $42 left."
  },
  {
    question_number: "144",
    question: "A person is 25 years old. How many years until they are 30 years old?",
    answers: [
      "3 years",
      "4 years",
      "5 years",
      "6 years"
    ],
    correctAnswer: 3,
    explanation: "The person is 25 years old, so it will take 5 years for them to be 30 years old."
  },
  {
    question_number: "145",
    question: "A person wants to buy a book that costs $18. They have $12. How much more money do they need?",
    answers: [
      "$2",
      "$4",
      "$6",
      "$8"
    ],
    correctAnswer: 3,
    explanation: "The person needs $18 and has $12, so they need $18 - $12 = $6 more."
  },
  {
    question_number: "146",
    question: "A person has 16 days to finish a project. They work for 4 days. How many days do they have left?",
    answers: [
      "10 days",
      "12 days",
      "14 days",
      "16 days"
    ],
    correctAnswer: 1,
    explanation: "The person has 16 days and has worked for 4 days, so they have 16 - 4 = 12 days left."
  },
  {
    question_number: "147",
    question: "A person has $20 to spend on a gift. They buy a toy for $8 and a card for $2. How much money do they have left?",
    answers: [
      "$8",
      "$10",
      "$12",
      "$14"
    ],
    correctAnswer: 1,
    explanation: "The person had $20 and spent $8 + $2 = $10, so they have $20 - $10 = $10 left."
  },
  {
    question_number: "148",
    question: "A person is 40 years old. How many years until they are 50 years old?",
    answers: [
      "5 years",
      "8 years",
      "10 years",
      "12 years"
    ],
    correctAnswer: 3,
    explanation: "The person is 40 years old, so it will take 10 years for them to be 50 years old."
  },
  {
    question_number: "149",
    question: "A person wants to buy a bike that costs $40. They have $25. How much more money do they need?",
    answers: [
      "$5",
      "$10",
      "$15",
      "$20"
    ],
    correctAnswer: 2,
    explanation: "The person needs $40 and has $25, so they need $40 - $25 = $15 more."
  },
  {
    question_number: "150",
    question: "A baby is 9 months old. How many months until the baby is 1 year old?",
    answers: [
      "1 month",
      "2 months",
      "3 months",
      "9 months"
    ],
    correctAnswer: 3,
    explanation: "The baby is 9 months old, and 1 year is 12 months, so 12 - 9 = 3 months until the baby is 1 year old."
  },
  {
    question_number: "151",
    question: "A book costs $15. If you pay with a $20 bill, how much change will you get?",
    answers: [
      "$1",
      "$3",
      "$5",
      "$10"
    ],
    correctAnswer: 2,
    explanation: "You pay with $20 and the book costs $15, so you get $20 - $15 = $5 in change."
  },
  {
    question_number: "152",
    question: "A city is 120 km away. If you drive at 30 km/h, how many hours will it take to get there?",
    answers: [
      "2 hours",
      "3 hours",
      "4 hours",
      "6 hours"
    ],
    correctAnswer: 4,
    explanation: "The distance is 120 km, and you drive at 30 km/h, so it will take 120 / 30 = 4 hours to get there."
  },
  {
    question_number: "153",
    question: "A person has 18 cookies and gives 2 to a friend. How many cookies does the person have left?",
    answers: [
      "16 cookies",
      "17 cookies",
      "18 cookies",
      "20 cookies"
    ],
    correctAnswer: 1,
    explanation: "The person had 18 cookies and gave 2 away, so they have 18 - 2 = 16 cookies left."
  },
  {
    question_number: "154",
    question: "A person is 25 years old. How old will they be in 5 years?",
    answers: [
      "20 years old",
      "25 years old",
      "28 years old",
      "30 years old"
    ],
    correctAnswer: 3,
    explanation: "The person is 25 years old, and in 5 years, they will be 25 + 5 = 30 years old."
  },
  {
    question_number: "155",
    question: "A microwave can cook food for 30 seconds or 1 minute. How many seconds is 1 minute?",
    answers: [
      "30 seconds",
      "45 seconds",
      "60 seconds",
      "90 seconds"
    ],
    correctAnswer: 3,
    explanation: "1 minute is equal to 60 seconds."
  },
  {
    question_number: "156",
    question: "A person has $25 and spends $5 on a toy. How much money do they have left?",
    answers: [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    correctAnswer: 3,
    explanation: "The person had $25 and spent $5, so they have $25 - $5 = $20 left."
  },
  {
    question_number: "157",
    question: "A person wakes up at 7:00 AM and goes back to sleep at 9:00 AM. How many hours did they sleep?",
    answers: [
      "1 hour",
      "2 hours",
      "3 hours",
      "4 hours"
    ],
    correctAnswer: 2,
    explanation: "The person slept from 7:00 AM to 9:00 AM, which is 2 hours."
  },
  {
    question_number: "158",
    question: "A person has 12 pencils and gives 2 to a friend. How many pencils does the person have left?",
    answers: [
      "10 pencils",
      "11 pencils",
      "12 pencils",
      "14 pencils"
    ],
    correctAnswer: 1,
    explanation: "The person had 12 pencils and gave 2 away, so they have 12 - 2 = 10 pencils left."
  },
  {
    question_number: "159",
    question: "A person has $50 and spends $10 on a book. How much money do they have left?",
    answers: [
      "$30",
      "$40",
      "$45",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "The person had $50 and spent $10, so they have $50 - $10 = $40 left."
  },
  {
    question_number: "160",
    question: "A baby is 9 months old. How many months will it be in 3 months?",
    answers: [
      "9 months",
      "10 months",
      "11 months",
      "12 months"
    ],
    correctAnswer: 3,
    explanation: "The baby is currently 9 months old, and in 3 months, it will be 9 + 3 = 12 months old."
  },
  {
    question_number: "161",
    question: "A person wants to save $50 per week for a vacation. If they save for 5 weeks, how much will they have?",
    answers: [
      "$200",
      "$300",
      "$150",
      "$250"
    ],
    correctAnswer: 3,
    explanation: "The person saves $50 per week, and they save for 5 weeks, so they will have 5 x $50 = $250."
  },
  {
    question_number: "162",
    question: "A microwave can cook food for 2 minutes and 30 seconds. If you cook for 1 minute and 45 seconds, how much longer do you need to cook?",
    answers: [
      "30 seconds",
      "45 seconds",
      "1 minute",
      "2 minutes"
    ],
    correctAnswer: 2,
    explanation: "The microwave needs to cook for 2 minutes and 30 seconds, and you've already cooked for 1 minute and 45 seconds, so you need to cook for 2:30 - 1:45 = 45 seconds more."
  },
  {
    question_number: "163",
    question: "A person is 25 years old. How old will they be in 5 years?",
    answers: [
      "25 years old",
      "26 years old",
      "28 years old",
      "30 years old"
    ],
    correctAnswer: 4,
    explanation: "The person is currently 25 years old, and in 5 years, they will be 25 + 5 = 30 years old."
  },
  {
    question_number: "164",
    question: "A person has $15 to spend on a toy. If they buy a toy for $8, how much money do they have left?",
    answers: [
      "$5",
      "$7",
      "$10",
      "$12"
    ],
    correctAnswer: 1,
    explanation: "The person had $15 and spent $8, so they have $15 - $8 = $7 left."
  },
  {
    question_number: "165",
    question: "A person wants to drive from Bat Yam to Tel Aviv. If the drive takes 30 minutes, and they leave at 9:00 AM, what time will they arrive?",
    answers: [
      "9:20 AM",
      "9:30 AM",
      "9:45 AM",
      "10:00 AM"
    ],
    correctAnswer: 2,
    explanation: "The drive takes 30 minutes, and they leave at 9:00 AM, so they will arrive at 9:00 + 30 minutes = 9:30 AM."
  },
  {
    question_number: "166",
    question: "A person has 12 hours to finish a project. If they work for 4 hours, how many hours do they have left?",
    answers: [
      "6 hours",
      "8 hours",
      "10 hours",
      "12 hours"
    ],
    correctAnswer: 2,
    explanation: "The person has 12 hours and has worked for 4 hours, so they have 12 - 4 = 8 hours left."
  },
  {
    question_number: "167",
    question: "A person is 80 years old. How old will they be in 5 years?",
    answers: [
      "80 years old",
      "81 years old",
      "84 years old",
      "85 years old"
    ],
    correctAnswer: 4,
    explanation: "The person is currently 80 years old, and in 5 years, they will be 80 + 5 = 85 years old."
  },
  {
    question_number: "168",
    question: "A person wants to buy a toy for $12. If they have a 20% discount coupon, how much will they pay?",
    answers: [
      "$9",
      "$10",
      "$11",
      "$12"
    ],
    correctAnswer: 1,
    explanation: "The person has a 20% discount coupon, so they will pay 100% - 20% = 80% of the original price, which is $12 x 0.8 = $9.60, rounded to $9."
  },
  {
    question_number: "169",
    question: "A person has 5 days to finish a project. If they work for 2 days, how many days do they have left?",
    answers: [
      "2 days",
      "3 days",
      "4 days",
      "5 days"
    ],
    correctAnswer: 2,
    explanation: "The person has 5 days and has worked for 2 days, so they have 5 - 2 = 3 days left."
  },
  {
    question_number: "170",
    question: "A person wants to save $20 per week for a vacation. If they save for 8 weeks, how much will they have?",
    answers: [
      "$80",
      "$100",
      "$120",
      "$160"
    ],
    correctAnswer: 2,
    explanation: "The person saves $20 per week, and they save for 8 weeks, so they will have 8 x $20 = $160."
  },
  {
    question_number: "171",
    question: "A person is 7 years old. How old will they be in 3 years?",
    answers: [
      "7 years old",
      "8 years old",
      "9 years old",
      "10 years old"
    ],
    correctAnswer: 3,
    explanation: "The person is currently 7 years old, and in 3 years, they will be 7 + 3 = 10 years old."
  },
  {
    question_number: "172",
    question: "A person has $25 to spend on a gift. If they buy a toy for $15, how much money do they have left?",
    answers: [
      "$5",
      "$10",
      "$15",
      "$20"
    ],
    correctAnswer: 1,
    explanation: "The person had $25 and spent $15, so they have $25 - $15 = $10 left."
  },
  {
    question_number: "173",
    question: "A person wants to drive from Rishon LeZion to Holon. If the drive takes 20 minutes, and they leave at 10:00 AM, what time will they arrive?",
    answers: [
      "10:15 AM",
      "10:20 AM",
      "10:30 AM",
      "10:40 AM"
    ],
    correctAnswer: 2,
    explanation: "The drive takes 20 minutes, and they leave at 10:00 AM, so they will arrive at 10:00 + 20 minutes = 10:20 AM."
  },
  {
    question_number: "174",
    question: "A person has 8 weeks to finish a project. If they work for 3 weeks, how many weeks do they have left?",
    answers: [
      "3 weeks",
      "4 weeks",
      "5 weeks",
      "6 weeks"
    ],
    correctAnswer: 3,
    explanation: "The person has 8 weeks and has worked for 3 weeks, so they have 8 - 3 = 5 weeks left."
  },
  {
    question_number: "175",
    question: "A person is 90 years old. How old will they be in 2 years?",
    answers: [
      "90 years old",
      "91 years old",
      "92 years old",
      "93 years old"
    ],
    correctAnswer: 3,
    explanation: "The person is currently 90 years old, and in 2 years, they will be 90 + 2 = 92 years old."
  },
  {
    question_number: "176",
    question: "A person wants to buy a toy for $18. If they have a 15% discount coupon, how much will they pay?",
    answers: [
      "$15",
      "$16",
      "$17",
      "$18"
    ],
    correctAnswer: 1,
    explanation: "The person has a 15% discount coupon, so they will pay 100% - 15% = 85% of the original price, which is $18 x 0.85 = $15.30, rounded to $15."
  },
  {
    question_number: "177",
    question: "A person has 10 days to finish a project. If they work for 4 days, how many days do they have left?",
    answers: [
      "4 days",
      "5 days",
      "6 days",
      "7 days"
    ],
    correctAnswer: 3,
    explanation: "The person has 10 days and has worked for 4 days, so they have 10 - 4 = 6 days left."
  },
  {
    question_number: "178",
    question: "A person wants to buy a toy that costs $30. If they have a 10% discount coupon, how much will they pay?",
    answers: [
      "$25",
      "$27",
      "$28",
      "$30"
    ],
    correctAnswer: 2,
    explanation: "The toy costs $30, and with a 10% discount, the person will pay $30 - (10% of $30) = $30 - $3 = $27."
  },
  {
    question_number: "179",
    question: "A person has 2 days to finish a task. If they work for 1 day, how many days do they have left?",
    answers: [
      "0 days",
      "1 day",
      "2 days",
      "3 days"
    ],
    correctAnswer: 2,
    explanation: "The person has 2 days and has worked for 1 day, so they have 2 - 1 = 1 day left."
  },
  {
    question_number: "180",
    question: "A baby is 9 months old. How many weeks old is the baby?",
    answers: [
      "36 weeks",
      "39 weeks",
      "40 weeks",
      "45 weeks"
    ],
    correctAnswer: 2,
    explanation: "Since the baby is 9 months old, we can calculate the number of weeks as 9 x 4 = 36 weeks."
  },
  {
    question_number: "181",
    question: "A person wants to save $100 in 5 weeks. How much do they need to save each week?",
    answers: [
      "$10",
      "$20",
      "$25",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "To save $100 in 5 weeks, the person needs to save $100 / 5 = $20 each week."
  },
  {
    question_number: "182",
    question: "A microwave can cook food for 2 minutes and 30 seconds. If you cook for 1 minute and 45 seconds, how much longer do you need to cook?",
    answers: [
      "30 seconds",
      "45 seconds",
      "1 minute",
      "2 minutes"
    ],
    correctAnswer: 2,
    explanation: "The microwave needs to cook for 2 minutes and 30 seconds, and you've already cooked for 1 minute and 45 seconds, so you need to cook for 2:30 - 1:45 = 45 seconds more."
  },
  {
    question_number: "183",
    question: "A person is 25 years old. How many years will they be in 5 years?",
    answers: [
      "20 years",
      "25 years",
      "28 years",
      "30 years"
    ],
    correctAnswer: 3,
    explanation: "The person is currently 25 years old, so in 5 years, they will be 25 + 5 = 30 years old."
  },
  {
    question_number: "184",
    question: "A person wants to buy a toy that costs $15. If they have a 20% discount coupon, how much will they pay?",
    answers: [
      "$10",
      "$12",
      "$15",
      "$18"
    ],
    correctAnswer: 2,
    explanation: "The toy costs $15, and with a 20% discount, the person will pay $15 - (20% of $15) = $15 - $3 = $12."
  },
  {
    question_number: "185",
    question: "A person has $50 to spend on groceries. They buy milk for $5 and bread for $3. How much money do they have left?",
    answers: [
      "$40",
      "$42",
      "$45",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "The person had $50 and spent $5 + $3 = $8, so they have $50 - $8 = $42 left."
  },
  {
    question_number: "186",
    question: "A person is 80 years old. How many years will they be in 10 years?",
    answers: [
      "70 years",
      "80 years",
      "85 years",
      "90 years"
    ],
    correctAnswer: 3,
    explanation: "The person is currently 80 years old, so in 10 years, they will be 80 + 10 = 90 years old."
  },
  {
    question_number: "187",
    question: "A person wants to drive from Bat Yam to Tel Aviv. If the distance is 15 km, and they drive at 30 km/h, how long will it take?",
    answers: [
      "20 minutes",
      "30 minutes",
      "45 minutes",
      "1 hour"
    ],
    correctAnswer: 2,
    explanation: "The distance is 15 km, and the speed is 30 km/h, so the time taken is 15 km / 30 km/h = 0.5 hours = 30 minutes."
  },
  {
    question_number: "188",
    question: "A person has 12 months to finish a project. If they work for 4 months, how many months do they have left?",
    answers: [
      "6 months",
      "8 months",
      "10 months",
      "12 months"
    ],
    correctAnswer: 2,
    explanation: "The person has 12 months and has worked for 4 months, so they have 12 - 4 = 8 months left."
  },
  {
    question_number: "189",
    question: "A person wants to buy a book that costs $25. If they have a 15% discount coupon, how much will they pay?",
    answers: [
      "$20",
      "$22",
      "$23",
      "$25"
    ],
    correctAnswer: 2,
    explanation: "The book costs $25, and with a 15% discount, the person will pay $25 - (15% of $25) = $25 - $3.75 = $21.25, which is approximately $22."
  },
  {
    question_number: "190",
    question: "A person has 5 days to finish a task. If they work for 2 days, how many days do they have left?",
    answers: [
      "1 day",
      "2 days",
      "3 days",
      "5 days"
    ],
    correctAnswer: 3,
    explanation: "The person has 5 days and has worked for 2 days, so they have 5 - 2 = 3 days left."
  },
  {
    question_number: "191",
    question: "A person wants to save $50 in 2 weeks. How much do they need to save each week?",
    answers: [
      "$10",
      "$20",
      "$25",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "To save $50 in 2 weeks, the person needs to save $50 / 2 = $25 each week."
  },
  {
    question_number: "192",
    question: "A person is 40 years old. How many years will they be in 15 years?",
    answers: [
      "45 years",
      "50 years",
      "55 years",
      "60 years"
    ],
    correctAnswer: 3,
    explanation: "The person is currently 40 years old, so in 15 years, they will be 40 + 15 = 55 years old."
  },
  {
    question_number: "193",
    question: "A person has $20 to spend on a gift. They buy a toy for $10 and a book for $5. How much money do they have left?",
    answers: [
      "$0",
      "$5",
      "$10",
      "$15"
    ],
    correctAnswer: 2,
    explanation: "The person had $20 and spent $10 + $5 = $15, so they have $20 - $15 = $5 left."
  },
  {
    question_number: "194",
    question: "A person wants to drive from Holon to Rishon LeZion. If the distance is 20 km, and they drive at 40 km/h, how long will it take?",
    answers: [
      "20 minutes",
      "30 minutes",
      "40 minutes",
      "1 hour"
    ],
    correctAnswer: 2,
    explanation: "The distance is 20 km, and the speed is 40 km/h, so the time taken is 20 km / 40 km/h = 0.5 hours = 30 minutes."
  },
  {
    question_number: "195",
    question: "A person has 3 weeks to finish a project. If they work for 1 week, how many weeks do they have left?",
    answers: [
      "1 week",
      "2 weeks",
      "3 weeks",
      "4 weeks"
    ],
    correctAnswer: 2,
    explanation: "The person has 3 weeks and has worked for 1 week, so they have 3 - 1 = 2 weeks left."
  },
];


var QSTATS = [ 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
];
