import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [
            {name: "cybersecurity", price: "400", image: "https://st3.depositphotos.com/5943742/12827/i/600/depositphotos_128276930-stock-photo-abstract-cybersecurity-concept-in-blue.jpg"},
            {name: "AI", price: "500", image: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg" },
            {name: "ML", price: "600", image: "https://miro.medium.com/max/1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg" },
            {name: "Data Science", price: "1000", image: "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/06/iStock-1221293664-1.jpg"}
          ],
          trending: [
            {name: "Front-End", price: "200", image: "https://www.datocms-assets.com/14946/1590690690-front-end.jpg"},
            {name: "Back-End", price: "300", image: "https://image.shutterstock.com/image-vector/backend-development-vector-illustration-260nw-625884368.jpg"},
            {name: "Full-Stack", price: "550", image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" },
            {name: "Network", price: "100", image: "https://www.solarwindsmsp.com/sites/solarwindsmsp/files/blog/2019/01/whatis.jpg"}
          ],
          is_visible: false,
          count: 0,
          selectedProduct: [],
          totalPrice: 0
        };
      }

      componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
      }

      toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
      }

      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      

      // countDown = () => {
      //   let id = Math.floor(Math.random() * 3) + 1485619;
      //   this.setState ({
      //     count: id + this.state.count
      //   });
        
      // }

      capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
   
   
    
      

    render() {
        const { is_visible } = this.state;
        return (
            <div className="home">
               
                <div className="post">
                <h3 className="login">Hi, {localStorage.getItem('nme')}</h3>
                <Link to="/" className="logout"><button className="logout">Logout</button></Link>
                <div id="main"   >
                <button class="material-icons" > shopping_cart</button> Cart
                </div>
                </div>


                
                
             
                <div className="timer">
                    <div className="clock">
                      1 4 5 8 6 9
                    </div>
                
                    <p>Students enrolled so-far</p> 
                    <Link to="/signup" className="live"><button className="book">Book a Free Live Coding Class Now !</button></Link>
                </div>
                <div className="trend">
                    <h3>Trending courses</h3><br />
                    <div className="box">

                    {this.state.products.map((product) => {
                return <div className="content" key={product.name}>
                <img src={product.image} alt="" />
                <div className="detail">
                <h4>{this.capitalize(product.name)}</h4>
                <p>₹ {product.price}</p>
                </div>
                <div className="count">
                <button onClick={this.addFood} value={product.name} className="addItems">+</button> <h5 className="cart-wording">Add to cart</h5>
                </div>
                </div>
              })} 
                    </div>
                    
                </div>
                <div id="self">
                    <h3>Top self paced courses</h3><br />

                    <div className="box">

                    {this.state.trending.map((product) => {
                return <div className="content" key={product.name}>
                <img src={product.image} alt="" />
                <div className="detail">
                <h4>{this.capitalize(product.name)}</h4>
                <p>₹ {product.price}</p>
                </div>
                <div className="count">
                <button onClick={this.addFood} value={product.name} className="addItems">+</button> <h5 className="cart-wording">Add to cart</h5>
                </div>
                </div>
              })} 
                    </div>
                </div>

                <div className="contest">
                    <h2>Stand a chance to win welcome Kit*</h2><h4> (includes Laptop) </h4>
                    <h3 className="enroll">Enroll in our <Link to="/signup" className="bootcamp">Bootcamp</Link> </h3>
                </div>
                <div id="contact">
                    <h4>Have any queries? Fill in your details..</h4> <h4>We will get back shortly</h4><br />
                    <form action="submit">
                        <strong> Full Name: </strong> <input type="text" className="name" /> <br /><br />
                        <strong> Mobile Number: </strong> <input type="number" className="mobl" /> <br /> <br />
                        <strong> Email Id: </strong> <input type="text" className="email" /> <br /> <br />
                        <strong> Message: </strong> <input type="text" className="name" /><br /><br />
                        <button className="submit">Submit</button><br /><br /><br />
                    </form>
                    </div>

                    <div className="scroll-to-top">
                      {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                     <button className="back-to-top"><span class="material-icons">
                    arrow_circle_up
                    </span></button> <br />
                      Back to Top
                       </div>
                      )}
                      </div>
                      </div>
                
        )
    }
}
