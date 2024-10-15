const express = require('express');
const cors = require('cors');



const app = express();
const port = 3000;
const companyData = {
  "company": {
    "id": 1,
    "name": "TechCorp",
    "employees_per_year": {
      "2019": [
        {
          "id": 1,
          "name": "John Doe",
          "experience": 5,
          "skills": [
            "JavaScript",
            "Node.js",
            "React",
            "HTML",
            "CSS"
          ]
        },
        {
          "id": 2,
          "name": "Jane Doe",
          "experience": 3,
          "skills": [
            "Python",
            "Django",
            "PostgreSQL",
            "Docker",
            "AWS"
          ]
        },
        {
          "id": 3,
          "name": "Tom Green",
          "experience": 4,
          "skills": [
            "C++",
            "Qt",
            "OpenGL",
            "Linux",
            "Bash"
          ]
        },
        {
          "id": 4,
          "name": "Lucy Brown",
          "experience": 2,
          "skills": [
            "Java",
            "Spring",
            "Hibernate",
            "JPA",
            "REST APIs"
          ]
        },
        {
          "id": 5,
          "name": "Michael Smith",
          "experience": 6,
          "skills": [
            "PHP",
            "Laravel",
            "JavaScript",
            "Vue.js",
            "MySQL"
          ]
        },
        {
          "id": 6,
          "name": "Emma Wilson",
          "experience": 1,
          "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "SASS"
          ]
        }
      ],
      "2020": [
        {
          "id": 7,
          "name": "Alice Smith",
          "experience": 8,
          "skills": [
            "Java",
            "Spring Boot",
            "MySQL",
            "Kubernetes",
            "Microservices"
          ]
        },
        {
          "id": 8,
          "name": "Bob Johnson",
          "experience": 7,
          "skills": [
            "PHP",
            "Laravel",
            "JavaScript",
            "Vue.js",
            "MySQL"
          ]
        },
        {
          "id": 9,
          "name": "Kevin Lee",
          "experience": 5,
          "skills": [
            "Python",
            "Flask",
            "MongoDB",
            "Docker",
            "AWS"
          ]
        },
        {
          "id": 10,
          "name": "Diana Miller",
          "experience": 4,
          "skills": [
            "Ruby",
            "Rails",
            "PostgreSQL",
            "Redis",
            "Heroku"
          ]
        },
        {
          "id": 11,
          "name": "Chris Evans",
          "experience": 6,
          "skills": [
            "JavaScript",
            "Angular",
            "TypeScript",
            "SASS",
            "Node.js"
          ]
        },
        {
          "id": 12,
          "name": "Sophia Taylor",
          "experience": 2,
          "skills": [
            "React",
            "Redux",
            "JavaScript",
            "HTML",
            "CSS"
          ]
        }
      ],
      "2021": [
        {
          "id": 13,
          "name": "Charlie Brown",
          "experience": 10,
          "skills": [
            "C#",
            ".NET",
            "SQL Server",
            "Azure",
            "WPF"
          ]
        },
        {
          "id": 14,
          "name": "Eve Davis",
          "experience": 4,
          "skills": [
            "Ruby",
            "Rails",
            "JavaScript",
            "React",
            "MongoDB"
          ]
        },
        {
          "id": 15,
          "name": "Jack Harris",
          "experience": 7,
          "skills": [
            "Go",
            "Docker",
            "Kubernetes",
            "AWS",
            "CI/CD"
          ]
        },
        {
          "id": 16,
          "name": "Olivia Martin",
          "experience": 5,
          "skills": [
            "Java",
            "Spring",
            "MySQL",
            "Hibernate",
            "Maven"
          ]
        },
        {
          "id": 17,
          "name": "Lucas Moore",
          "experience": 6,
          "skills": [
            "React",
            "Redux",
            "JavaScript",
            "HTML",
            "CSS"
          ]
        },
        {
          "id": 18,
          "name": "Lily Thompson",
          "experience": 3,
          "skills": [
            "Angular",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "MongoDB"
          ]
        }
      ],
      "2022": [
        {
          "id": 19,
          "name": "Frank White",
          "experience": 6,
          "skills": [
            "Go",
            "Kubernetes",
            "Docker",
            "CI/CD",
            "Cloud"
          ]
        },
        {
          "id": 20,
          "name": "Grace Lee",
          "experience": 9,
          "skills": [
            "Swift",
            "iOS",
            "Objective-C",
            "Xcode",
            "Core Data"
          ]
        },
        {
          "id": 21,
          "name": "Isaac Wright",
          "experience": 4,
          "skills": [
            "Java",
            "Spring Boot",
            "MongoDB",
            "Redis",
            "Kafka"
          ]
        },
        {
          "id": 22,
          "name": "Mia Scott",
          "experience": 7,
          "skills": [
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Vue.js"
          ]
        },
        {
          "id": 23,
          "name": "Oliver King",
          "experience": 5,
          "skills": [
            "Python",
            "Django",
            "PostgreSQL",
            "AWS",
            "Docker"
          ]
        },
        {
          "id": 24,
          "name": "Sophia Adams",
          "experience": 3,
          "skills": [
            "React",
            "Next.js",
            "JavaScript",
            "HTML",
            "CSS"
          ]
        }
      ],
      "2023": [
        {
          "id": 25,
          "name": "Henry Moore",
          "experience": 12,
          "skills": [
            "Java",
            "Angular",
            "TypeScript",
            "Spring",
            "Kafka"
          ]
        },
        {
          "id": 26,
          "name": "Ivy Patel",
          "experience": 2,
          "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "React"
          ]
        },
        {
          "id": 27,
          "name": "Ethan Brown",
          "experience": 6,
          "skills": [
            "JavaScript",
            "Vue.js",
            "Node.js",
            "MongoDB",
            "Express"
          ]
        },
        {
          "id": 28,
          "name": "Sophia Green",
          "experience": 4,
          "skills": [
            "React",
            "Redux",
            "JavaScript",
            "TypeScript",
            "SASS"
          ]
        },
        {
          "id": 29,
          "name": "Mason Hall",
          "experience": 8,
          "skills": [
            "Java",
            "Spring Boot",
            "MySQL",
            "Microservices",
            "Kafka"
          ]
        },
        {
          "id": 30,
          "name": "Ella Lewis",
          "experience": 3,
          "skills": [
            "PHP",
            "Laravel",
            "JavaScript",
            "Vue.js",
            "MySQL"
          ]
        }
      ]
    }
  }
};

app.use(express.json());
app.use(cors());

app.get('/api/company', (req, res) => {
    console.log(companyData);
    res.json(companyData);
});


app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});