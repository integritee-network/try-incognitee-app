<template>
  <div>

    <section id="home_section" class="pt-5 mt-5 pb-5 mb-5">
      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-6 col-lg-6 col-xl-6 pt-5 mt-5">
        <h1> Transfer digital assets privately </h1>
        <p> Welcome to Incognitee - an exclusive and discreet hub in the heart of Web3. We enable private transfers and unlink-able voting, so you can play away from the crowd's eyes. Your transactions? - Secret handshakes between you and your chosen peers. </p>
        <div class="main__button"> <a href="#">Test Now</a></div>
      </div>

      <div class="desktop-only col-md-4 col-lg-4 col-xl-4">
        <img class="image-wrapper" src="../assets/lock-header.svg" height="400px" alt="Incognitee Logo">
        <div class="radial-gradient"></div>
      </div>
    </div>
    </section>


    <section id="work" class="pt-5 pb-5 mt-5 mb-5">
      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-6 col-lg-6 col-xl-6">
     
        <h2> How does it work </h2>
        <p> Alice would like to transfer funds to Bob privately or participate in on-chain
          Governance without revealing her pseudonym. She uses Incognitee to obtain a privacy shield without traces
          back to her account. Our TEE technology keeps sensitive data away from the chain and provides full privacy
          without security concerns.</p>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4">
        <img class="image-wrapper" src="../assets/how-does-it-work.png" height="300px" alt="How does it work">
      </div>
    </div>
    </section>

    <section id="validator" class="pt-5 pb-5 mt-5 mb-5">
      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-6 col-lg-6 col-xl-6">
        <h2> Become a validator </h2>
        <p> Earn from Transactions: Validators receive a proportional amount of every transaction they validate, creating an opportunity for continual rewards in line with Incognitee’s activity.
<br>
Join the Validator Program: Aspiring validators have to participate in the Testnet phase to be eligible for the main net launch to become a part of Incognitee’s backbone.</p>
        <div href="#" class=" main__button">Become a Validator</div>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4 mt-3">
        <img class="image-wrapper" src="../assets/become-a-validator-picture.png" height="300px" alt="Validator">
      </div>
    </div>
    </section>

    <section id="delegator" class="pt-5 pb-5 mt-5 mb-5">

      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-6 col-lg-6 col-xl-6">
        <h2> Become a delegator </h2>
        <p>  Earn from locking your TEER: Validators receive transaction fees and can share them with TEER holders via
          Delegation. <br>
          Join the Delegator Program: TEER holders can delegate their TEER tokens to existing
          Validators to help securing Incognitee’s backbone. </p>
        <div href="#" class="main__button">Become a Delegator</div>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4 ">
        <img class="image-wrapper" src="../assets/become-a-delegator-picture.png" height="300px" alt="delegator">
      </div>
    </div>
    </section>

    <section id="partner" class="pt-5 pb-5 mt-5 mb-5">

      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-6 col-lg-6 col-xl-6">
        <h2> Become a partner </h2>
        <p> If you are a wallet provider, an exchange or an vaildator operator, get in touch with
          us. </p>
        <div href="#" class="main__button">Contact</div>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4">
        <img class="image-wrapper" src="../assets/become-a-partner-picture.png" height="300px" alt="partner">
      </div>
    </div>
    </section>

    <section id="hunter" class="pt-5 pb-5 mt-5 mb-5">

      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-6 col-lg-6 col-xl-6">
        <h2> Are you a bounty hunter? </h2>
            <p> We want to make our platform as secure as possible, that's why we will launch a bug bounty to attract the best talents to battle test our solution. </p>
        <div href="#" class="main__button">Start Hunting</div>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4">
        <img class="image-wrapper" src="../assets/become-a-partner-picture.png" height="300px" alt="hunter">
      </div>
    </div>
    </section>

    <section id="use_cases" class="pt-5 pb-5 mt-5 mb-5">

      <div class="row d-flex justify-content-between text-md-left">
      <div class="col-md-12 col-lg-12 col-xl-12 justify-content-between">
  <h2> Use cases that matter </h2>
        <p>
        <ul>
          <li>Vote without a show of hands: Cast your vote in a black ballot box without being doxxed.</li>
          <li>Transfer in confidence: Keep your transaction history private for sensitive actions – you dont want your
            neighbor to know what you are buying right?</li>
        </ul><br>
        Unlike other platforms, our privacy sidechain is built for responsible concealment. Selective disclosure, compliance adherence, auditable yet confidential transactions, and a governance that includes you — it's privacy designed with accountability at its core. </p>
</div>
</div>
</section>

    <div class="image-wrap-bottom">
      <div class="container"><img src="../assets/bg-lines.png" class="" alt="Lines"></div>
    </div>
    <div class="image-wrap">
      <div class="container"><img src="../assets/bg-lines.png" alt="Lines"></div>
    </div>

  </div>
</template>


<script>
export default {

}
</script>
<style>
html {
  height: -webkit-fill-available;
}

body {
  background-color: #11111A;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  height: -webkit-fill-available;
  color: white;
  margin-bottom: 2.3rem;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 1.125rem;
  /* 18px */
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

  h1 {
  font-family: 'WhyteInktrap', serif;
  font-size: 4rem;
  /* 64px */
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  background: var(--Linear, linear-gradient(270deg, #24AD7C 9.13%, #1845B9 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  color: var(--text-icons-text, #FFF);
  font-family: 'WhyteInktrap', serif;
  font-size: 4rem;
  /* 64px */
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

}

.main__button {
  padding: 0.875rem 1.5rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  background: var(--Linear, linear-gradient(270deg, #24AD7C 9.13%, #1845B9 100%));
  backdrop-filter: blur(30px);
  font-family: 'Inter-Regular', sans-serif;
  margin-top: 30px;
width: fit-content;
}

.main__button:hover {
  box-shadow: 0px 0px 20px 0px rgba(36, 173, 124, 0.65);
}

.block {
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 250px;
  justify-content: space-between;
  position: relative;
}

.home {
  margin-top: 150px;
  margin-bottom: 120px;
}

.container {
  padding: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 250px;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
}

.gap {
  gap: 30px;
}

.column {
  flex-shrink: 0;
}

.column_medium {
  flex-shrink: 0;
  width: 600px;
}

.image-gradient {
  width: 381.982px;
  height: 347.256px;
  transform: rotate(-20.313deg);
  left: 50%;
  top: 50%;
  transform: translate(-50%) translateY(-50%);
}

.radial-gradient {
  opacity: 0.5;
  position: absolute;
  z-index: 1;
  border-radius: 381.982px;
  background: #30A8FF;
  filter: blur(200px);
}

.image-wrapper {
  position: relative;
  z-index: 2;
}

.margin_large {
  margin-bottom: 48px;
}

.margin_medium {
  margin-bottom: 24px;
}

.header {
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background: linear-gradient(180deg, #0a0a0f, rgba(10, 10, 15, 0));
  left: 0;
  padding: 25px 0;
  position: fixed;
  top: 0;
  transition: .3s ease;
  width: 100%;
  z-index: 10;
}

.socials {
  align-items: center;
  display: flex;
  gap: 12px;
}

.socials__list-item {
  display: flex;
padding: 40px;
flex-direction: column;
align-items: center;
gap: 24px;
flex: 1 0 0;
border-radius: 24px;
background: rgba(120, 120, 120, 0.24);
backdrop-filter: blur(12px);
width: 10.625rem;
}

.socials__list {
  display: flex;
  gap: 20px;
}

.socials__list-item-icon {
  display: block;
  height: 48px;
  width: 48px;
}

.socials__list-item-name {
  font-size: 16px;
}

.socials__row {
  gap: 60px;
}

.row.jcsb {
  justify-content: space-between;
}

.footer__row {
  display: flex;
  gap: 48px;
}

.footer {
  margin-bottom: 50px;
}

.footer__column_about {
  flex-shrink: 0;
  font-size: 16px;
  max-width: 255px;
}

.footer__logo {
  display: block;
  height: 40px;
  margin-bottom: 19px;
  width: 191px;
}

.footer__description {
  line-height: 150%;
  margin-bottom: 20px;
  margin-top: 15px;
}

.footer__columns-row {
  display: flex;
  gap: 82px;
}

.footer__column-title {
  color: #88888c;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 15px;
}

.footer__column-link {
  display: block;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 14px;
}

.socials svg {
  display: inline-block;
  transition: .3s ease;
  width: 24px;
}

.footer__bottom {
  border-top: 2px solid hsla(0, 0%, 100%, .2);
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
}

.paragraph_medium {
  font-size: 16px;
}

.footer__bottom a {
  transition: .3s ease;
}

a.blue,
a.text-link:hover {
  color: #5b92ff;
  text-decoration: none;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.image-wrap {
  top: 334px;
  overflow: hidden;
  position: absolute;
  z-index: -2;
}

.image-wrap-bottom {
  position: absolute;
  left: -238px;
  top: 2044px;
  transform: rotate(.444turn) scaleX(-1);
  z-index: -2;
}

.top-lines {
  position: relative;
  right: -258px;
  top: 334px;

}

.bottom-lines {
  left: -280px;
  position: absolute;
  top: -1062px;
  transform: rotate(.444turn) scaleX(-1);
  width: 1060px;
  z-index: -2;
}

.radial-gradient {
  opacity: 0.3;
  background: #30A8FF;
  filter: blur(200px);
  width: 300px;
  height: 300px;
}

/* Desktop-spezifische Stile */
@media screen and (max-width: 1366px) {
  body {
    font-size: 1rem;
    /* Adjust font size */
  }

  h1 {
    font-size: 3.5rem;
    /* Adjust h1 font size */
  }

  h2 {
    font-size: 3.5rem;
    /* Adjust h2 font size */
  }

  .container {
    gap: 18.75rem;
    /* 300px to rem */
  }

  .column_medium {
    width: 37.5rem;
    /* 600px to rem */
  }

  .image-gradient {
    width: 23.874rem;
    /* 381.982px to rem */
    height: 21.703rem;
    /* 347.256px to rem */
  }
}

/* Tablet-spezifische Stile */
@media screen and (max-width: 1200px) {
  .container {
    gap: 15rem;
    /* Adjust gap */
  }

  .column_medium {
    width: 30rem;
    /* Adjust column width */
  }
}

/* Mobile-spezifische Stile */
@media screen and (max-width: 768px) {
  body {
    font-size: 1.2rem;
    /* Adjust font size */
  }

  .home {
    margin-top: 120px;
    margin-bottom: 100px;
  }

  .block {
    margin-top: 40px;
    margin-bottom: 120px;
    gap: 10rem;
  }

  .main__button {
    width: 100%;
    padding: 0.875rem 1.5rem;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.75rem;
    background: var(--Linear, linear-gradient(270deg, #24AD7C 9.13%, #1845B9 100%));
    backdrop-filter: blur(30px);
    font-family: 'Inter-Regular', sans-serif;
  }

  h1 {
    font-size: 2.5rem;
    /* Adjust h1 font size */
  }

  h2 {
    font-size: 2.5rem;
    /* Adjust h2 font size */
  }

  .container {
    gap: 10rem;
    /* Adjust container gap */
  }

  .column_medium {
    width: 25rem;
    /* Adjust column width */
  }

  .desktop-only {
    display: none;
  }
}
</style>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.column_medium,
.image-wrapper {
  flex: 1 1 100%;
  /* Beide Elemente nehmen auf kleinen Bildschirmen 100% der Breite ein */
}

@media (min-width: 768px) {

  /* Tablet und Desktop */
  .container {
    flex-wrap: nowrap;
    /* Kein Umbruch, damit Elemente nebeneinander bleiben */
  }

  .desktop-only {
    display: block;
    /* oder 'flex', 'inline-block', etc., je nach Bedarf */
    /* Weitere Stilregeln hier hinzufügen, falls nötig */
  }

  .image-wrapper {
    order: 2;
    /* Bild danach */
    flex: 1 1 50%;
    /* 50% der Containerbreite */
  }
}

</style>