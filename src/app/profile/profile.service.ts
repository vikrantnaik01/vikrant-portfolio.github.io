import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with 8.5+ years of experience .
  Having expertise in Frontend technologies like Angular, Typescript, Javascript, HTML5, CSS3, RxJS, NgRx, React and Tailwind Basics .
  Also, have experience working on Full Stack technologies like DotNet Core, Web API, C#, Node JS, SQL, Mongo DB .
  Current Role : Technical Lead + Scrum Master + SME + People Manager`

  about = `People tag me as a "NATURAL LEADER" as I have been handed the Technical Lead and People's Manager responsbilities much earlier as compared to my counter parts.  `
  resumeurl = "https://docs.google.com/document/d/1ez1aQK-mbRv0vD8oWr6DwNHbhoDexnbw/edit?usp=sharing&ouid=112068594256921219055&rtpof=true&sd=true"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 13+',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'NgRX, RxJS, FxFlex',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'TYPESCRIPT, JAVASCRIPT, JQUERY',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'Git, Bit Bucket, Jira, IDE',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'C#, .Net Core, Web API',
      'progress': '60%'
    },
    {
      'id': '6',
      'skill': 'SQL, MONGO DB, FIREBASE',
      'progress': '60%'
    },
    {
      'id': '7',
      'skill': 'Azure Devops, Team City',
      'progress': '60%'
    },
    {
      'id': '8',
      'skill': 'REACT JS, TAILWIND CSS',
      'progress': '30%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Merit Group Pvt. Ltd. (Lexis Nexis)',
      location: 'Chennai / Pune',
      timeline: 'Aug 2021 to Present',
      role: 'Technical Lead',
      work: `Technologies : Angular 14.x, Typescript, C#, Dot Net Core, Web-API, NgRx, RxJS, FxFlex, Azure Storage .
      Working as a Technical Lead, managing deliveries for a team of 10-11 resources .Responsible for End to End deliveries for my team . Also handling the team as a Scrum Master and SME .
      Complete ownership in terms of deliveries for a functional area path called EF Screens by co-ordinating with Architect and Product Owner`
    },
    {
      id: 3,
      company: 'Fidelity Information Services',
      location: 'Pune',
      timeline: 'Sept 2018 to July 2021',
      role: 'Lead Engineer - Product Development',
      work: `Technologies : Angular 8.x, Typescript, C#, Dot Net Core, WebAPI, NgRx, RxJS, FxFlex, SQL Server 2012, Veracode .
      Dev responsibilities include Analysis of requirements, preparation of the detailed Design, Technical
      design and implementation, maintenance, and support .
      Part of the Code review team. Actively taking technical sessions for teammates.
      Scrum Process: Sprint planning & estimation, Implementation, Testing, Deploying, DOD, Retrospective .
      After release cycle completion, work on tracking Security related issues using VERACODE.`
    },
    {
      id: 2,
      company: 'Johnson Controls India',
      location: 'Pune',
      timeline: 'Nov 2017 - Aug 2018',
      role: 'Senior Software Engineer (Pegasus Info Corp Pvt. Ltd.)',
      work: `Technologies : Angular 5.x, Typescript, C#, .Net Core, LINQ, SQL Server .
      Responsible for software design and coding .
      Migrating our application from Angular 1.x to Angular 5.x. Was 1 of the only two members working on the migration. Alone with migration, working on product backlog items as a Full stack developer .
      Co-ordinating with onsite product owner (US), for requirement gathering and implementation.`
    },
      {
      id: 1,
      company: 'Wipro Technologies Pvt Ltd.',
      location: 'Pune',
      timeline: 'April 2014 - Nov 2017',
      role: 'Senior Sofware Engineer',
      work: `Technologies : Angular 2.x, C#, ASP.NET,  Web API, jQuery, SQL Server, CSS3, Accessibility .
      Working as part of SAC team, handling deliveries for the team as one of the senior resources in the team and getting new resources and freshers involved and up to the mark asap .
      My role was to understand the requirement, raise ambiguities and queries to business in quick time so that deliverables don’t get affected by it, develop the code for User Stories as a part of the development team, followed by Unit Testing, Mobile Testing, Jaws Testing and then deploy it to server within the allocated timeline .
      Checking the server if the environment fails and fix it after analyzing the problem by checking error logs.      `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'People Manager',
      description: '',
      img: 'assets/images/People Manager Certificate.jpg',
      // url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Star Performer - Q2 2022',
      description: '',
      img: 'assets/images/Laurel Award.jpg',
      // url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Key Contributor Award',
      description: '',
      img: 'assets/images/Laurel Award.jpg',
      // url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
