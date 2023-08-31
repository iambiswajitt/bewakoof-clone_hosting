import React from 'react'

function Body() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Men Home Page</title>
          <link rel="stylesheet" href="./style/navbar.css" />
          <link rel="stylesheet" href="./styles/index.css" />
          <link rel="stylesheet" href="./styles/footerstyles.css" />
          <link rel="stylesheet" href="./style/spinner.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
          {/* Main Content */}
          <div id="main">
            {/* Carousel 1 */}
            <div id="slider1" style={{    "display": "flex","justify-content": "space-evenly","transition": "all 0.5s ease-out"}}>
        <div id="slider1_img1"><img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-anime-men-1693235121.jpg"/></div>
        <div id="slider1_img2"><img src="https://images.bewakoof.com/uploads/grid/app/oof-sale-22-1642179919.gif"/></div>
        <div id="slider1_img3"><img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-chandyaan-common-1693312967.jpg"/></div>
      </div>
            <div className="popup" id="popup-1">
              <div className="overlay" />
              <div className="spinner" />
            </div>
            {/* banner1 */}
            <div id="banner1">
              <img src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-sid-fatima-1638780595.jpg" />
            </div>
            {/* offers-bestseller */}
            <div id="main-offers">
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-discount-1637307127-1640757473.jpg" alt="" />
                <a href>
                  <h3>Offers</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-collab-store-1637307127.jpg" alt="" />
                <a href>
                  <h3>Pop Culture</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg" alt="" />
                <a href>
                  <h3>BestSeller</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/vote-for-design-1641715844.jpg" alt="" />
                <a href>
                  <h3>Vote For Designs</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg" alt="" />
                <a href>
                  <h3>New Arrivals</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-tod-thumbnail-cosmos-1--1--1640666014.jpg" alt="" />
                <a href>
                  <h3>Cosmos</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg" alt="" />
                <a href>
                  <h3>Plus Size</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg" alt="" />
                <a href>
                  <h3>Last Sizes Left</h3>
                </a>
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-essentials-1637307130.jpg" alt="" />
                <a href>
                  <h3>Essentials</h3>
                </a>
              </div>
            </div>
            {/* main-banner2 */}
            <div id="main-banner2">
              <h2>EXCLUSIVE FOR YOU</h2>
              <img src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" alt="" />
              <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-banner-Half-Refer-And-Chill-1630929040.png" alt="" />
            </div>
            {/* Popular-categories */}
            <h2 id="main-popular-h2">POPULAR CATEGORIES</h2>
            <div id="main-categories">
              <div id="main-categories-jackets">
                <img src="https://images.bewakoof.com/uploads/grid/app/Jackets-1636468734.jpg" alt="" />
                <a href>
                  <h3>Jackets</h3>
                </a>
              </div>
              <div id="main-categories-sweaters">
                <img src="https://images.bewakoof.com/uploads/grid/app/Sweaters-1637224277.jpg" alt="" />
                <a href>
                  <h3>Sweaters</h3>
                </a>
              </div>
              <div id="main-categories-sweatShirts">
                <img src="https://images.bewakoof.com/uploads/grid/app/Sweatshirt-1636468735.jpg" alt="" />
                <a href>
                  <h3>SweatShirts</h3>
                </a>
              </div>
              <div id="main-categories-halfSleeveTshirts">
                <img src="https://images.bewakoof.com/uploads/grid/app/Printed-Tshirts-1636468735.jpg" alt="" />
                <a href>
                  <h3>Half Sleeve Tshirts</h3>
                </a>
              </div>
              <div id="main-categories-vests">
                <img src="https://images.bewakoof.com/uploads/grid/app/Vests-1636468736.jpg" alt="" />
                <a href>
                  <h3>Vests</h3>
                </a>
              </div>
              <div id="main-categories-fullSleeves">
                <img src="https://images.bewakoof.com/uploads/grid/app/Full-Sleeves-1637224277.jpg" alt="" />
                <a href>
                  <h3>Full Sleeves</h3>
                </a>
              </div>
              <div id="main-categories-denims">
                <img src="https://images.bewakoof.com/uploads/grid/app/bottom-nav-bootm-wear--0008-jeans-1636468734.jpg" alt="" />
                <a href>
                  <h3>Denims</h3>
                </a>
              </div>
              <div id="main-categories-joggers">
                <img src="https://images.bewakoof.com/uploads/grid/app/bottom-nav-bootm-wear--0006-joggers-1636468734.jpg" alt="" />
                <a href>
                  <h3>Joggers</h3>
                </a>
              </div>
              <div id="main-categories-shorts">
                <img src="https://images.bewakoof.com/uploads/grid/app/bottom-nav-bootm-wear--0001-shorts-1637224311.jpg" alt="" />
                <a href>
                  <h3>Shorts</h3>
                </a>
              </div>
              <div id="main-categories-pyjamas">
                <img src="https://images.bewakoof.com/uploads/grid/app/bottom-nav-bootm-wear--0003-pyjama-1636468733.jpg" alt="" />
                <a href>
                  <h3>Pyjamas</h3>
                </a>
              </div>
              <div id="main-categories-pants">
                <img src="https://images.bewakoof.com/uploads/grid/app/bottom-nav-bootm-wear--0004-pants-1636468733.jpg" alt="" />
                <a href>
                  <h3>Pants</h3>
                </a>
              </div>
              <div id="main-categories-flipFlops">
                <img src="https://images.bewakoof.com/uploads/grid/app/tod-refresh-accessories-bottom-navigation-0005-slipper-1636468736.jpg" alt="" />
                <a href>
                  <h3>Flip Flops</h3>
                </a>
              </div>
            </div>
            {/* Discount */}
            <div id="main-discount">
              <h2>DISCOUNT PE DISCOUNT</h2>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/buy-3-men-oof-1641996155.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/b2g1-mid-banner-oof-1641996154.jpg" alt="" />
              </div>
              <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/style-promotion-puffer-jacket-mid-size-banner-men-1641552781.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/cosmos-oof-banner-2-1642430265.jpg" alt="" />
              </div>
            </div>
            {/* Best Seller for man */}
            <h3 className="main-h3">BESTSELLER FOR MEN</h3>
            <div id="main-best-seller-men">
              <div>
                <img src="https://images.bewakoof.com/t320/jet-black-henley-hoodie-full-sleeve-t-shirt-308345-1638511839-1.jpg" alt="" />
                <h4>₹ 499<span>899</span></h4>
              </div>
              <div>
                <img src="https://images.bewakoof.com/t320/hope-inevitable-half-sleeve-t-shirt-463470-1641457091-1.jpg" alt="" />
                <h4>₹ 299<span>799</span></h4>
              </div>
              <div>
                <img src="https://images.bewakoof.com/t320/slate-rose-full-sleeve-t-shirt-346161-1641471288-1.jpg" alt="" />
                <h4>₹ 399<span>699</span></h4>
              </div>
              <div>
                <img src="https://images.bewakoof.com/t320/black-purple-oppulance-colorblock-sweatshirt-hoodie-aw-21-369813-1641471571-1.jpg" alt="" />
                <h4>₹ 899<span>2399</span></h4>
              </div>
              <div>
                <img src="https://images.bewakoof.com/t320/normal-is-boring-garfield-half-sleeve-t-shirt-459630-1640954443-1.jpg" alt="" />
                <h4>₹ 299<span>799</span></h4>
              </div>
            </div>
            <a href id="main-view-all">
              <h3 className="main-h3">VIEW ALL</h3>
            </a>
          </div>
          {/* carousel 2 */}
          <div id="slider2">
      <div id="slider2_img1"><img src="https://images.bewakoof.com/uploads/grid/app/go-nuts-banner-1-1640180260.jpg"/></div>
      <div id="slider2_img2"><img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Loungewear-Men-1641564558.jpg"/></div>
      <div id="slider2_img3"><img src="https://images.bewakoof.com/uploads/grid/app/men-pyjama-joggers-oof-1641996155.jpg"/></div>
    </div>
          {/* New Arrivals for men */}
          <h3 className="main-h3">NEW ARRIVALS FOR MEN</h3>
          <div id="main-best-seller-men">
            <div>
              <img src="https://images.bewakoof.com/t320/deadpool-screwed-half-sleeve-t-shirt-463977-1641892306-1.jpg" alt="" />
              <h4>₹ 275<span>799</span></h4>
            </div>
            <div>
              <img src="https://images.bewakoof.com/t320/motor-spirit-half-sleeve-t-shirt-461422-1640945213-1.jpg" alt="" />
              <h4>₹ 399<span>799</span></h4>
            </div>
            <div>
              <img src="https://images.bewakoof.com/t320/black-purple-oppulance-colorblock-sweatshirt-hoodie-aw-21-369813-1641471571-1.jpg" alt="" />
              <h4>₹ 899<span>2399</span></h4>
            </div>
            <div>
              <img src="https://images.bewakoof.com/t320/adventure-on-full-sleeve-t-shirt-461451-1640945633-1.jpg" alt="" />
              <h4>₹ 449<span>999</span></h4>
            </div>
            <div>
              <img src="https://images.bewakoof.com/t320/jet-black-henley-hoodie-full-sleeve-t-shirt-308345-1638511839-1.jpg" alt="" />
              <h4>₹ 499<span>899</span></h4>
            </div>
          </div>
          <a href id="main-view-all">
            <h3 className="main-h3">VIEW ALL</h3>
          </a>
          {/* POSTER */}
          <h3 className="main-h3">NEW ARRIVALS FOR MEN</h3>
          <div id="banner1">
            <img src="https://images.bewakoof.com/uploads/grid/app/OOFsale-Landing-desktop-men-customisation-noprice-1642501282.jpg" />
          </div>
          {/* footer-part div start */}
        </div>
      );
    }
  export default Body;