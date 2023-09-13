import { Component } from "react";
import DetailHolder from "../shared/detail-holder/DetailHolder";
import "./Education.scss";

export default class Education extends Component {
  education = [
    {
      name: "Artificial Intelligence Design and Implementation",
      type: "Graduate Certificate",
      institution: "Durham College",
      location: "Oshawa, ON, Canada",
      duration: "Sept 2023 - Present",
      load: "Full-Time",
      favorites: [
        {
          name: "Neural Networks",
          skills: []
        },
        {
          name: "Deep Learning",
          skills: []
        },
        {
          name: "AI Applications",
          skills: []
        }
      ],
      grade: "",
      logo: "/images/DCLogo.jpg",
      altText: "Durham College"
    },
    {
      name: "Data Analytics for Business Decision Making",
      type: "Graduate Certificate",
      institution: "Durham College",
      location: "Oshawa, ON, Canada",
      duration: "Sept 2022 - April 2023",
      load: "Full-Time",
      favorites: [
        {
          name: "Data Analysis Tools",
          skills: ["Hadoop", "Spark", "Scala"]
        },
        {
          name: "Visualization and Leadership",
          skills: ["Tableau", "Power BI"]
        },
        {
          name: "Predictive Modeling",
          skills: ["Python", "R"]
        }
      ],
      grade: "4.61/5 (President's Honour Roll)",
      logo: "/images/DCLogo.jpg",
      altText: "Durham College"
    },
    {
      name: "Electronics & Telecommunication Engineering",
      type: "Bachelor of Engineering",
      institution: "Mumbai University",
      location: "Navi Mumbai, MH, India",
      duration: "May 2013 - May 2017",
      load: "Full-Time",
      favorites: [
        {
          name: "Data Compression and Encryption",
          skills: ["Compression Techniques", "Encryption Techniques"]
        },
        {
          name: "Image Processing",
          skills: ["MATLAB", "Image Segmentation"]
        },
        {
          name: "Structured Programming",
          skills: ["C", "Algorithms", "Programming"]
        },
        {
          name: "Object Oriented Programming",
          skills: ["Java", "Algorithms", "Programming"]
        }
      ],
      grade: "7.19 CGPA on a scale of 10",
      logo: "/images/MUImage.jpg",
      altText: "Mumbai University"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="education-container">
        <div className="education-caption">KNOWLEDGE IS WEALTH</div>
        <div className="credential-section">
          {this.education.map((credential) => {
            return (
              <DetailHolder
                key={credential.name}
                item={credential}
              ></DetailHolder>
            );
          })}
        </div>
      </div>
    );
  }
}
