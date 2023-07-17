import Sunsine from '../assets/img/sunsine.png'

const Header = () => {
    return (
        <>
            <div class="container py-5">
                <div class="row pb-5 ">
                    <div class="col col-12 col-sm-12 col-md-6 col-lg-6 warp-heading ">
                        <div class="wrap-info">
                            <h2 data-aos="fade-right" data-aos-duration="950">Creative</h2>
                            <h1 data-aos="fade-right" data-aos-duration="950" class="heading-main">DESIGNER</h1>
                            <h1 data-aos="fade-right" data-aos-duration="950" class="heading-main sec-head">DEVELOPER</h1>
                        </div>
                    </div>
                    <div class="col text-center">
                        <img class="image-warp" src={Sunsine}></img>
                    </div>
                </div>
                <div class="row about-header-warp">
                    <div class="col col-12 col-sm-12 col-md-6 col-lg-6 mt-5"></div>
                    <div class="col d-lg-flex justify-content-lg-end align-items-lg-end col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                        <p data-aos="fade-left" data-aos-duration="950" class="d-lg-flex justify-content-lg-end p-aboutme">I am a developer and UX/UI designer based inIndonesia. Customers rely on me for design, implementation, and management of their digital products. As a student from Multimedia Nusantara University, I also do freelance work regarding web developer and UI/UX design<br></br></p>
                    </div>
                    <div class="col col-12 text-end"><a class="btn btn--stripe" href="#">Contact Me</a></div>
                </div>
            </div>
        </>
    )
}

export default Header