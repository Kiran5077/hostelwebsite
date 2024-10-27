import React from 'react'
import './MenuList.css'
import Footer from '../Footer/Footer'




const MenuList = () => {
  return (
  <>
    <div className='Menu'>
      <h1>Monday</h1>
      </div>
      <div className='Menuitem'>
      <div className='pic'>
      <img src="/assets/puri.jpeg"alt="breakfast" />
        <h3>Breakfast</h3>
        <p>7.30am</p>
        <p>puri,aludum,tea</p>
        <button className='btn'>Add to Cart </button>
      </div>
      <div className='pic'>
      <img src="https://i2-prod.examinerlive.co.uk/incoming/article26257830.ece/ALTERNATES/s810/1_IMG_5278.jpg" alt="Lunch"/>
        <h3>Lunch</h3>
        <p>12.00pm</p>
        <p>Rice,Dalma,Seasonal chips</p>
        <button className='btn'>Add to Cart </button>
      </div>
      <div className='pic'>
      <img src="/assets/snacks.jpeg" alt="Snacks"/>
        <h3>Snacks</h3>
        <p>5.00pm</p>
        <p>Biscuits</p>
        <button className='btn'>Add to Cart </button>
      </div>
      <div className='pic'>
      <img src="/assets/dinner.jpeg" alt="Dinner"/>
        <h3>Dinner</h3>
        <p>9.00pm</p>
          <p>Rice,roti aloo gobi Masala</p>
          <button className='btn'>Add to Cart </button>
      </div>
      </div>
    
      <div className='Menu'>
      <h1>Tuesday</h1>
      </div>
      <div className='Menuitem'>
      <div className='pic'>
      <img src='https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>7.30am</p>
        <p>chakuli,alucurry,tea</p>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.W6IejzA6bqhTAR5YlG6twQHaE8?w=700&h=467&rs=1&pid=ImgDetMain' alt="Lunch"/>
        <h3>Lunch</h3>
        <p>12.00pm</p>
        <p>Rice,Dal,alu Gobi sabji,mango khata</p>
      </div>
      <div className='pic'>
      <img src="https://i.pinimg.com/originals/fc/ba/39/fcba39c12efe85f2f764e386b16e6fd7.jpg" alt="Snacks"/>
        <h3>Snacks</h3>
        <p>6.00pm</p>
        <p>matar chat/Besan pakoda</p>
      </div>
      <div className='pic'>
      <img src='https://product-assets.faasos.io/production/product/image_1677242223532_Dal_Chawal_Bowl.jpg' alt="Dinner"/>
        <h3>Dinner</h3>
        <p>9.30pm</p>
        <p>Rice,Roti,Dal,Egg curry/baby corn</p>
      </div>
      </div>

      <div className='Menu'>
      <h1>Wednesday</h1>
      </div>
      <div className='Menuitem'>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.DcRUzqU7M6aIUnOzRX_bhQHaFj?rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src="https://i0.wp.com/kinaraindiancuisine.ca/wp-content/uploads/2020/05/Lunch-Thali_Kinaraindiancuisine-scaled.jpg?fit=2560%2C2048&ssl=1" alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://www.rd.com/wp-content/uploads/2016/05/12-healthy-snacks-cherry-tomato-goat-cheese.jpg' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.1SO6OgofkG2Y-Hc1KAEPbAHaE7?rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      </div>
      <div className='Menu'>
      <h1>Thushday</h1>
      </div>
      <div className='Menuitem'>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.bjpTLW2E7QMuXzlIe2JsrwHaGs?rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://d1ralsognjng37.cloudfront.net/0b31722a-5966-4b13-9049-cdea73e9cc34.jpeg' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/R.cf38015b3a7a6d90855b47771d1ba0c4?rik=ADI3IJXNiAe9wg&riu=http%3a%2f%2fnidhirecipes.com%2fwp-content%2fuploads%2faloo-paratha.jpg&ehk=D3FCDU7D6YQ1bKv5ObH6YWZ0dq6Yp4zOQgoLWJv5vX0%3d&risl=&pid=ImgRaw&r=0' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.YImciIkXQMY13glDR3w31AHaE6?rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      </div>

      <div className='Menu'>
      <h1>Saturday</h1>
      </div>
      <div className='Menuitem'>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.P13hIX9w9Apt04zskDD69QHaFb?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
        <button className='btn'>Read More</button>
      </div>
      
      <div className='pic'>
      <img src="https://rs-menus-api.roocdn.com/images/6057f228-a77a-4a94-a2e2-cd4b1bbbcea0/image.jpeg?width=1200&height=630&fit=crop" alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://www.bitesbee.com/wp-content/uploads/2021/08/maggi.jpg' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.W56_DkMzdeNq8olyI5jkxgHaFj?w=960&h=720&rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
      </div>
      </div>

      <div className='Menu'>
      <h1>Sunday</h1>
      </div>
      <div className='Menuitem'>
      <div className='pic'>
      <img src='https://i1.wp.com/www.evergreendishes.com/wp-content/uploads/2019/10/Dosa-1.jpg?fit=4288%2C2848&ssl=1' alt="breakfast"/>
        <h3>Breakfast</h3>
        <p>puri,aludum,tea</p>
        <button className='btn'>Add to Cart </button>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.db2vBknKgCIqAhUQaR49TwHaE8?w=3811&h=2541&rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Lunch</h3>
        <p>puri,aludum,tea</p>
        <button className='btn'>Add to Cart </button>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/R.5e9d914158f20abde43751bc56170aff?rik=IVjPf86fA0ExdQ&riu=http%3a%2f%2fwww.zedamagazine.com%2fwp-content%2fuploads%2f2018%2f06%2fIndian-Food-Samosa-Dish-HD-Wallpapers.jpg&ehk=CIZsxVe5CLA%2fpZXkiCdJuoTdrhucm2fgYqo%2fkXVfHls%3d&risl=&pid=ImgRaw&r=0' alt="breakfast"/>
        <h3>Snack</h3>
        <p>puri,aludum,tea</p>
        <button className='btn'>Add to Cart </button>
      </div>
      <div className='pic'>
      <img src='https://th.bing.com/th/id/OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7?rs=1&pid=ImgDetMain' alt="breakfast"/>
        <h3>Dinner</h3>
        <p>puri,aludum,tea</p>
        <button className='btn'>Add to Cart </button>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default MenuList
