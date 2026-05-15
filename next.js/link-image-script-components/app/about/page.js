import React from "react";
import Script from "next/script";

const About = () => {
  return (
    <div>
        i am about page
      <Script>
        {`alert("welcome to about page")`}
      </Script>
    </div>
  )
}

export default About