import React from "react";
import "./slug.css"
import "../home/home.css"
import Itemcard from "@/components/itemcard";

const data = {
  type: "Phones",
  id: 1234,
  url: "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png",
  title: "Nothing 3A silk 128gb Phone",
  description: "it is cool phone",
  price: 12000,
  rating: 4.8,
  iswishlist: false,
  iscart: false,
  isordered: false
}



export default async function Itempage({ params }) {
  return (


    <div className="iipage">

      <div className="iimg">
        <img className="iphoto" src={data.url} alt="Product photo" />
      </div>
      <div className="iprice">{data.price}</div>
      <div className="ititle">{data.title}</div>
      <div className="idescription">{data.description}</div>
      <div className="ibtns">
        <button className="ibtn iwish pointer">Add to Wishlist</button>
        <button className="ibtn ibuy pointer">Buy Now</button>
        <button className="ibtn iadd pointer">Add to Cart</button>
      </div>

      <div className="iextra">
        <div className="iextitle ititle">
          specifications
        </div>
        <div className="iexdes">
          very premium phone in this budget
        </div>
      </div>

      <div className="iexplore">
        <div className="iexploremoretitle">Explore more {data.type}</div>
        <div className="ilist">
          <section id="phones">
            <div className="phonessec sec">
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
              <Itemcard type="phone" url="https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/314521_0_v6eqtj.png" title="Nothing 3A silk" description="it is cool phone" price={1000} />
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}


