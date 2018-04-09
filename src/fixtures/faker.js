import HomePageData from './home/home.json'

  const  slider_images = require.context('../assets/sliders' , false , /\.(png|jpg|gif|svg)$/)
  const  cover_images = require.context('../assets/covers' , false , /\.(png|jpg|gif|svg)$/)
  
  debugger
  HomePageData.sliders.forEach((x)=> {
    x.img_url = slider_images('./' + x.img_url)
  })

  HomePageData.latestupdated.forEach((x)=> {
      x.img_url = cover_images('./' + x.img_url)
  })

  HomePageData.recommended.forEach((x)=>{
    x.img_url = cover_images('./'+x.img_url)
  })

  export default{
    getHomeData(){
      return HomePageData
    }
  }