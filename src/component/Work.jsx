import andya from '../assets/img/anindya-ss.png'
import Webilu from '../assets/img/webilu-ss.png'


const Work = () => {
    return (
        <>
            <div class="container py-5 work-warp" id="work">
                <div class="row">
                    <div class="col col-12">
                        <h2 class="heading-work">My___<br></br>Work :</h2>
                    </div>
                    <div class="col col-12">
                        <div data-aos="fade-right" data-aos-duration="950" class="gallery-warp">
                            <div class="card">
                                <a href="https://anindya-uas-2023.vercel.app/">
                                    <img src={andya}></img>
                                    <div class="card__head">Anindya Batik Store</div>
                                </a>
                            </div>
                            <div class="card">
                                <a href="https://webilu-git-main-lycorissss.vercel.app/?vercelToolbarCode=vavL6LdCuxpfKTP">
                                    <img src={Webilu}></img>
                                    <div class="card__head">Webilu Pemilu</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work