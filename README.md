# Lawsy: Lawful Fun in Every Run

- [Lawsy: Lawful Fun in Every Run](#lawsy-lawful-fun-in-every-run)
    - [Steps to run the project](#steps-to-run-the-project)
    - [Teaser](#teaser)
    - [Problem](#problem)
    - [Solution](#solution)
    - [Use Case Diagram](#use-case-diagram)
    - [Architecture of the website](#architecture-of-the-website)
        - [How data is send to the server:](#how-data-is-send-to-the-server)
        - [How response is received from the server:](#how-response-is-received-from-the-server)
      - [Website Testing Resource](#website-testing-resource)
    - [Disclaimer](#disclaimer)


### Steps to run the project

* You must have npm installed on your system. If you don't have npm installed, you can install it from [here](https://nodejs.org/en/download).

* ```npm install``` to install all the required packages.

* On terminal, execute `npm run start` and it will open the website at  `http://localhost:port/`

* Congratulations! The website is successfully running.
### Teaser
https://github.com/anujkkarmakar/lawsy-website/assets/80219364/bbee9a3f-b5a3-41c7-a268-e19aaadccdb8

### Problem
With the advancement of technology at a breathtaking speed, India desperately needs an effective platform that <i> <strong>aims to increase legal literacy and awareness among the youth to empower children to stand up for their rights and the rights of others</strong></i>, and connect them to law and order organizations.

### Solution
[Lawsy](https://anujk.co) is a web-cum-mobile application that helps you learn the Indian law in an engaging (gamified) way and seek expert opinions on your questions from Govt. organizations, legal experts and NGOs. 
<br>The app will solve the problem through below three avenue:
<ul>
<li>
<strong>Quiz:</strong> Interactive audio-visual questions focused on laws applicable in daily life; presented to you on demand and through daily notifications. Performance in the quizzes decides your rating, i.e. expertise  level.  The  higher  the  rating,  the  more  difficult  questions  you  will  get  next. Area(city/state/country) based leaderboards will be displayed to motivate in learning more.
</li>
<li>
<strong>Learning module:</strong> Interactive courses serving you knowledge on various types of law, i.e. civil, criminal etc. Completion of the courses gives you more rating points. Artificial intelligence (AI) based recommendation system that will suggest specific courses focused on your areas of weaknesses in understanding.
</li>
<li>
<strong>Forums:</strong> Post your questions and engage in discussions with your peers, or seek expert advice on your questions by requesting expert help. Additional option to create a query report from your question and send to concerned law and order government body or to NGOs registered on our platform. Large Language Model (LLM/Generative AI) based automatic answer bot which will suggest answers to your questions immediately.
</li>
</ul>

### Use Case Diagram
![USE CASE DIAGRAM SIH 2023](https://github.com/anujkkarmakar/lawsy-website/assets/80219364/490ee6cc-cc64-49d9-bbae-76f05037c84a)

### Architecture of the website

##### How data is send to the server:
Website ----> API Gateway ---> AWS Lambda --> AWS RDS
##### How response is received from the server:
AWS RDS ----> AWS Lambda ---> API Gateway --> Website

#### Website Testing Resource
You find the GitHub repository link for the testing of website [here](https://github.com/anujkkarmakar/lawsy-website-test).

### Disclaimer
> This project is developed as part of a solution to Smart India Hackathon, a nationwide initiative to provide students with a platform to solve some of the pressing problems faced by our country. The project is intended for educational and demonstration purposes only and does not represent any official endorsement or guarantee from the organizers, sponsors, or partners of the hackathon. The project is open source and licensed under the GPL-3.0. The developers of this project are not liable for any damages or losses arising from the use or misuse of this project. Use this project at your own risk.