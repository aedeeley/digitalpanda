<template>
  <div id="content" class="flex flex-col mt-40 pl-10 pr-10">
    <div id="about">
      <img src="../static/about.jpg" class="headerImg" />
      <h2
        class="txt1"
        data-aos="fade-left"
        data-aos-duration="400"
        data-aos-delay="400"
      >
        let's talk
      </h2>
      <h2
        class="txt2"
        data-aos="fade-right"
        data-aos-duration="200"
        data-aos-delay="200"
      >
        design
      </h2>
      <div
        class="txt3"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="600"
      >
        <p class="mb-10">
          Design is about envoking emotion, it's about conveying an idea
          <em>precisely</em>. It's about showing your value and fluently
          defining the optimal way to accomplish a task. Here at
          <span class="underline">digitalpanda</span>, we eat, breathe and sleep
          design.
        </p>
        <p>We <em>live</em> design!</p>
        <p>
          We understand the intricacies between taking inspiration and
          re-inventing the wheel. We believe in the adage - function
          <em>over</em> form.
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.headerImg {
  border-radius: 40px 0 0 0;
  z-index: -2;
  -webkit-animation: smooth 10s ease-in;
  -moz-animation: smooth 10s ease-in;
  -o-animation: smooth 10s ease-in;
  -ms-animation: smooth 10s ease-in;
  animation: smooth 10s ease-in;
  animation-iteration-count: infinite;
}
@-webkit-keyframes smooth {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
}
#about {
  position: relative;
}
#about h2 {
  position: absolute;
  font-family: "DM Sans", sans-serif;
  font-size: 165px;
}
#about .txt1 {
  top: -141px;
  left: 30%;
  color: #3a3a3a;
  letter-spacing: -10px;
}
#about .txt2 {
  top: 20px;
  left: 50%;
  color: #f4f4f4;
  text-shadow: 0 0 45px rgba(0, 0, 0, 0.35);
  letter-spacing: -10px;
}
#about .txt3 {
  position: absolute;
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  width: 400px;
  top: 180px;
  left: 80px;
  z-index: 1;
}

#about .txt3 p {
  margin-bottom: 15px;
}

.underline:before {
  position: absolute;
  content: " ";
  height: 3px;
  /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffcc33;
  z-index: 0;
}
</style>
