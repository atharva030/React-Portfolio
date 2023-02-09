import React from 'react'
import "../Styles/Education.css"
const Education = () => {
  return (
    
    <section className="education" id="education">

    <h1 className="heading"> My <span>Education</span> </h1>

    <div className="box-container"> 

        <div className="box">

            <div className="box">

                <span>2018</span>
                <h3>Secondary Schooling</h3>
                <p> Upto 2018 | K.S.K. New City High School, Dhule. </p>
                <p>10th Std. Examinations | Percentage : 86%</p>
            </div>


            <div className="box">

                <span>2018-20</span>
                <h3>Higher Secondary Schooling</h3>
                <p>2018-20 | Z.B. Patil Junior College, Dhule. </p>
                <p> 12th Std. Examinations | Percentage : 81.08%</p>

            </div>

            <div className="box">

                <span>2020-24</span>
                <h3>2020-24 | 3rd Year B.Tech in Electronics and Telecommunication Engineering
                </h3>
                <p>Current CGPA : 8.56 / 10 (5th Semester)</p>
            </div>

        </div>
        </div>
</section>
  )
}

export default Education