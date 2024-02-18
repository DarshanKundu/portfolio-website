import { Injectable } from '@angular/core';
import { ProfessionalExperience } from '../interfaces/professional-experience';
import { Projects } from '../interfaces/projects';
import { Awards } from '../interfaces/awards';
import { TooltipPosition } from '@angular/material/tooltip';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  personalData:any={
      "personal_info": {
        "name":"Er. Darshan Kundu",
        "profession":"Full Stack Developer"
      },
      "about_me":{
        "profile":"../../../assets/DK.jpg",
        "about":`Focused Coder with exceptional problem solving and troubleshooting skills. Resourceful to thrive in challenging, fast-paced
        environments.
        Also I work with dedication and commitment where I could utilize my skills and abilities in an organization where
        I could enhance myself as an IT professional for the growth of my self.`
      }
  }

  
  professionalExpColumns:string[]=["duration","companyName","position","certificate"]
  
  professionalExp:ProfessionalExperience[]=[
    {
      duration: 'Dec 2022 - Present',
      companyName: 'Cloudtara Technologies Pvt.Ltd.',
      position:'Full Stack Developer',
      certificate: ''
    },
    {
      duration: 'Dec 2021',
      companyName: 'Kreartors Pvt.Ltd.',
      position: 'Full Stack Developer',
      certificate: 'https://drive.google.com/file/d/18kCUYG1LHOjtiUbfZ6pIC3w3xv6atNLD/view?usp=sharing'
    },{
      duration: '15th May 2019 - 26th June 2019',
      companyName: 'Zunaweb Pvt.Ltd.',
      position: 'Angular Developer',
      certificate: 'https://drive.google.com/file/d/1TrPw-1ZpJ71xBTHlMmolUP4Lp7H3GkPJ/view?usp=drive_link'
    }
  ]

  projectColumns:string[]=["topic","description"]

  projects:Projects[]=[
    {
      "topic":"IdCard Generator with QRCode",
      "description":"A Web Application built with Java, JSP & Servlets. DataBase used is MySql."
    },{
      "topic":"Indian Vendors",
      "description" : `A Responsive Website built using Angular 12 Framework. For frontend we have used HTML5, CSS3, Bootstrap 4 for responsiveness. \n The Realtime DataBase used is Firebase Console.`
    },{
      "topic":"Telemedico",
      "description":`Telemedico is an online consultation Website where patients and doctors can take online consultation from wherever they want. \n Zoom Api is used for implementing the Audio or Video consultation. \n Built on Django Framework & the DataBase used is PostgreSql.`
    }
  ]

  awardsColumns:string[]=["date","competition","prize"]

  awards:Awards[]=[
    {
      "date":"2022",
      "competition":"VCET Hackathon",
      "prize":"3rd Prize"
    },{
      "date":"2022",
      "competition":"Web Application Development",
      "prize":"1st Prize"
    },{
      "date":"2019",
      "competition":"State Level Paper Presentation",
      "prize":"Participation"
    },{
      "date":"2018",
      "competition":"Mini Project Competition",
      "prize":"1st Prize"
    }
  ]

  toolTipPosition:TooltipPosition[]=[
    'below','right','above','left'
  ]
  toolTipTexts={
    "about_me":"Click to view about me!",
    "skills":"Click to view my skills!",
    "certificate":"click to view certificate",
    "disabled":"disabled"
  }
}
