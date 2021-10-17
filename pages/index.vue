<template>
  <div id="content" class="flex flex-col mt-20 pl-10 pr-10">
    <h2 data-aos="fade-right" data-aos-duration="400">
      For the past two decades we’ve specialized in creating
      <a href="#" class="underline">engaging</a> and
      <a href="#" class="underline">accessible</a> experiences on web and mobile
      devices.
    </h2>

    <div class="secondary mt-20" data-aos="fade-left" data-aos-duration="7500">
      <NuxtLink to="/work" class="btn">
        <span>See our work</span>
        <svg
          width="9"
          height="11"
          viewBox="0 0 9 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5.5L0.75 10.2631L0.75 0.73686L9 5.5Z" fill="#F8F8F8" />
        </svg>
      </NuxtLink>
      <div class="bolt">
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.3886 15.1045C31.3886 23.4465 24.4289 30.209 15.8436 30.209C7.25833 30.209 0.298584 23.4465 0.298584 15.1045C0.298584 6.76252 7.25833 0 15.8436 0C24.4289 0 31.3886 6.76252 31.3886 15.1045Z"
            fill="#FFEABD"
          />
          <path
            d="M14.5907 14.3496H10.6611L19.8301 6.03484L17.5378 14.3496H21.4674L10.6611 24.0348L14.5907 14.3496Z"
            fill="#ffcc33"
          />
        </svg>
        <span>We're currently accepting new clients!</span>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

#content h2 {
  font-family: "DM Sans", sans-serif;
  font-size: 60pt;
  line-height: 1.3;
  color: rgb(58, 58, 58);
}
.underline {
  text-decoration: none;
  position: relative;
}
.underline:before {
  position: absolute;
  content: " ";
  height: 6px;
  /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
  bottom: 10px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffcc33;
  z-index: -1;
}
.btn {
  background-color: #ffcc33;
  padding: 15px 30px;
  color: rgb(248, 248, 248);
  font-size: 12pt;
  letter-spacing: 1px;
  float: left;
  display: block;
  border-radius: 100px;
  transition: all 1s ease;
}
.btn span {
  font-family: "Inter", sans-serif;
  float: left;
}
.btn svg {
  float: left;
  margin-left: 1rem;
  margin-top: 8px;
}
.btn:hover {
  background-color: #ffcc66;
}
.bolt {
  float: left;
  margin-left: 3rem;
  display: block;
}
.bolt svg {
  float: left;
  margin-left: 1rem;
  margin-top: 10px;
}
.bolt span {
  float: left;
  font-family: "Inter", sans-serif;
  display: block;
  color: #ffcc33;
  font-size: 12pt;
  margin-left: 0.8rem;
  margin-top: 12px;
}
</style>
