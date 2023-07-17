const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-dark navbar-expand-md sticky-top bg-dark py-3">
                <div class="container"><a class="navbar-brand d-flex align-items-center" href="#"><span>Septyo</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-5"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-5">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link a-effect-nav" href="#about">AboutMe</a></li>
                            <li class="nav-item"><a class="nav-link a-effect-nav" href="#work">MyWork</a></li>
                            <li class="nav-item"><a class="nav-link a-effect-nav" href="https://api.whatsapp.com/send?phone=6285746674052&text=Halo%20admin%20Properti.id,%20bisa%20saya%20tanya%20tentang%20jasa%20aerial%20ini?">ContactMe</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar