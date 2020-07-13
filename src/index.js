import './style/style.sass'
import Anima from './animation'



window.addEventListener('scroll', ()=>{
    const bigW = new Anima('hero', 'opacity')
    const underW = new Anima ('under-hero', 'translateY')
    const listSvg = new Anima('svg-wrapper','left-right')
    const worckSpaceWhite = new Anima('black-space','wks-b')
    const worckSpaceBlack = new Anima('white-space','wks-w')
    const blogList = new Anima('blogers','left-right')
    const phonInfo = new Anima('phon-info','phon-text')
    const phone =new Anima('phone','iphon')
})

function placeholder(){
    const name = document.getElementById('name');
    const mail = document.getElementById('email')
    const tel = document.getElementById('tel')
    const message = document.getElementById('area')
    if(window.outerWidth < 769){
    name.placeholder = 'Name'
    mail.placeholder = 'Email'
    tel.placeholder = 'Phone'
    message.placeholder = 'Message'
    }
}
placeholder()


