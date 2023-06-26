import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 
  chart:any;

  // options:any = {
  //   Chart:{
  //     type:"bar"
  //   },
  //   title: {
  //     text: "SKILLS"
  //   },
  //   xAxis: {
  //     categories: ["2018-19", "2019-20", "2020-21"],
  //     title: {
  //       text: "skills to show"
  //     }
  //   },
  // }
  options:any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'My Skills Chart'
    },
    xAxis: {
      categories: ['Java', 'Python','Django','MySQL', 'Angular_12', `SpringBoot (RestApi's)`,'HTML5_BootStrap4_CSS3_JS(ES6)']
    },
    yAxis: {
      title: {
        text: 'Ratings Out Of 10'
      }
    },
    series: [{
      name: 'skills',
      data: [
        { y:8.5, color:'#FF0000' },
        { y:7, color:'#FF7F00' },
        { y:8, color:'#FFFF00' }, 
        { y:8.2, color:'#00FF00' },
        { y:7.6, color:'#0000FF' },
        { y:8.8, color:'#2E2B5F' },
        { y:6.8, color:'#8B00FF' },
      ]
    }]
  };
  ngOnInit(): void {
    Highcharts.chart("chartContainer",this.options);
  }


}

