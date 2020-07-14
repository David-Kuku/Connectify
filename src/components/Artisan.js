import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './Artisans.css' //considers app.css in the same dir

class Artisan extends Component{

componentDidMount(){
this.swiper=new Swiper('.swiper-container',{
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
})
//add necessary parameters required by checking the offical docs of swiper
}
render(){
    return(
        <div className="swiper-container">
            <div className="swiper-button-prev" id='swiped'></div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className='imgBx'>
                    <img src='image1 (1).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                    <p><b>Kuku David</b> <br/>
                        Fashion Designer</p>
                    </div>
                </div>
                <div className="swiper-slide">
                <div className='imgBx'>
                    <img src='image1 (2).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                    <p><b>Jane Doe</b> <br/>
                        Designer</p>
                    </div>
                </div>
                <div className="swiper-slide">
                <div className='imgBx'>
                    <img src='images (5).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                    <p><b>Lewis Davie</b> <br/>
                        Leather works</p>
                    </div>
                </div>
                <div className="swiper-slide">
                <div className='imgBx'>
                    <img src='images (6).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                        <p><b>Ayo Banks</b> <br/>
                        Plumber</p>
                    </div>
                </div>
                <div className="swiper-slide">
                <div className='imgBx'>
                    <img src='images (7).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                    <p><b>Kiki Lawal</b> <br/>
                        Graphics Designer</p>
                    </div>
                </div>
                <div className="swiper-slide">
                <div className='imgBx'>
                    <img src='images (13).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                    <p><b>Babalola Kile</b> <br/>
                        Automobile repairer</p>
                    </div>
                </div>
                <div className="swiper-slide">
                <div className='imgBx'>
                    <img src='images (5).jpg' alt='img'/>
                    </div>
                    <div className='details'>
                    <p><b>Barra Jesus</b> <br/>
                        Caterer</p>
                    </div>
                </div>
            </div>
            <div className="swiper-button-next" id='swiped'></div>
            <div className= "swiper-pagination mt4"></div>
        </div>)
}
}

export default Artisan;