import React from 'react'
import './Student.css'
import harold from '../../images/harold.jpg'

const Student = () => {
    return(
        <section className="student section" id="student">
        <h2 className="section__title">Студент</h2>
        <div className="student__info">
            <div className="student-wrapper">

                <p className="student__name">Рамиль</p>
                <p className="student__adout">Фронтенд-разработчик, 31 год</p>
                <p className="student__text">
                    Я живу в Москве. После долгих лет работы в нелюбимой профессии я наконец нашел дело,
                    которое доставляет мне удовольствие. Практикум дал мне все необходимое для того, чтобы начать долгий и
                    весьма интересный путь во фронтенд разработке. Совсем скоро я выхожу на новую работу и чувствую огромное воодушевление
                    и благодарность ребятам из Практикума, моим менторам и другим студентам, которые со мной учатся :)
                </p>
                <div className="student__links">
                    <a href="#" className="student__link">Facebook</a>
                    <a href="#" className="student__link">Github</a>
                </div>
            </div>
            <img className="student__photo" src={harold} alt="Harold" />
        </div>
    </section>
    )
}

export default Student;
