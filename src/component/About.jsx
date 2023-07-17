import Itsmee from '../assets/img/itsmee.png'

const About = () => {
    return (
        <>
            <div class="container" id="about">
                <div class="row">
                    <div class="col py-5 col-12 col-md-6 col-sm-12 col-lg-6">
                        <h1 data-aos="fade-right" data-aos-duration="950" class="About-me">Hello. <br></br>I Am Septyo<br></br></h1>
                        <h2 data-aos="fade-right" data-aos-duration="950" class="About-me-sub">I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND EXPERIENCE. CUSTOMERS RELY ON ME FOR DESIGNS.<br></br></h2>
                    </div>
                    <div class="col col-12 col-md-6 col-sm-12 col-lg-6 text-center">
                        <img class="img-me" src={Itsmee}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About