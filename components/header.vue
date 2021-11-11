<template>
  <div class="flex flex-row pt-10 pl-10">
    <div id="header">
      <div
        id="logo"
        class="pl-5"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <NuxtLink to="/"
          ><img src="../static/logo.svg" alt="digitalpanda logo" />
          <h1>digitalpanda</h1></NuxtLink
        >
      </div>
      <label data-aos="fade-in" data-aos-duration="400" data-aos-delay="300">
        <input type="checkbox" id="resetCheckbox" />
        <span class="menu">
          <span class="hamburger"></span>
        </span>
        <ul id="nav">
          <li>
            <NuxtLink to="/" onclick="resetCheckbox.click()">home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" onclick="resetCheckbox.click()"
              >about</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/work" onclick="resetCheckbox.click()">work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" onclick="resetCheckbox.click()"
              >contact</NuxtLink
            >
          </li>
        </ul>
      </label>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#header {
  margin-left: -2rem;
  position: relative;
  width: 100%;
}
#logo img {
  float: left;
  transition: all 0.5s ease;
}
#logo h1 {
  float: left;
  font-size: 45px;
  letter-spacing: -2px;
  font-weight: bold;
  margin-left: 2rem;
  font-family: "DM Sans", sans-serif;
  color: rgb(58, 58, 58);
}
#menu {
  font-size: 32px;
  color: rgb(58, 58, 58);
  position: absolute;
  right: 0;
  margin-top: -5px;
  font-size: 36pt;
}
label .hamburger {
  position: absolute;
  top: 50%;
  right: 35%;
  width: 30px;
  height: 3px;
  background: #373737;
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
label .hamburger:after,
label .hamburger:before {
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #373737;
}
label .hamburger:before {
  top: -10px;
}
label .hamburger:after {
  bottom: -10px;
}
label input {
  display: none;
}
label input:checked + .menu {
  box-shadow: 0 0 0 100vw #373535, 0 0 0 100vh #373535;
  border-radius: 0;
}
label input:checked + .menu .hamburger {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background: #fff;
}
label input:checked + .menu .hamburger:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: 0;
  background: #fff;
}
label input:checked + .menu .hamburger:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
  background: #fff;
}
label input:checked + .menu + ul {
  opacity: 1;
}
label .menu {
  position: absolute;
  right: 0;
  top: -20px;
  z-index: 100;
  width: 100px;
  height: 100px;
  background: transparent;
  border-radius: 100%;
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
  cursor: pointer;
}
label input:checked + .menu {
  background: #373535;
}
label ul {
  z-index: 200;
  position: absolute;
  top: 350px;
  right: -120px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: 0.15s 0s ease-in-out;
  transition: 0.15s 0s ease-in-out;
}
#nav {
  opacity: 0;
  -webkit-transition: 0.5s 0s ease;
  transition: 0.5s 0s ease;
  z-index: -5;
}
label input:checked ~ #nav {
  opacity: 1;
  z-index: 999;
}

#nav a {
  color: rgb(248, 248, 248);
  font-size: 75px;
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  text-decoration: none;
  text-align: right;
  transition: all 0.4s ease;
  border-bottom: 6px solid transparent;
  text-align: right;
  float: right;
}
#nav a:hover {
  color: rgb(248, 248, 248);
  border-bottom: 6px solid #ffcc33;
}

#nav a.nuxt-link-exact-active {
  color: #ffcc33;
}

@media screen and (max-width: 1400px) {
  #logo img {
    margin-left: 3rem;
  }
}
</style>
