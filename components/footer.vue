<template>
  <div
    id="footer"
    class="pt-20 pb-10 pl-10 pr-10"
    data-aos="fade"
    data-aos-duration="300"
    data-aos-delay="200"
  >
    <div id="copyright">
      &copy; copyright 2021 digital panda limited. all rights reserved.
    </div>
    <div id="links">
      <NuxtLink to="/policy">privacy policy</NuxtLink>
      <NuxtLink to="/terms">terms &amp; conditions</NuxtLink>
      <NuxtLink to="/contact">contact</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#footer #copyright {
  float: left;
  font-family: "Inter", sans-serif;
  color: #c0c0c0;
  font-size: 11pt;
}
#footer #links {
  float: right;
  margin-top: -5px;
}
#footer #links a {
  font-family: "Inter", sans-serif;
  color: #c0c0c0;
  font-size: 11pt;
  text-decoration: underline;
  margin-left: 1.5rem;
}
</style>
