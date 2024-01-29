<!-- components/CreateWalletTab.vue -->
<template>
  <section id="steps">
   <div class="block steps">
     <div class="container">
       <div class=''>
         <div class='text-4xl mt-10 mb-10'>Invite a friend</div>
   <div class='text-lg'>By clicking the ”Invite Friend” button, you perform a private transfer of 30% of your available ROC from your Incognitee wallet to another wallet with an invite link. You can share this with your friends and let them participate. ​​</div>
    <div class="flex flex-cols-2 ">
     <div class='mt-10 mr-8'>
      <NuxtLink to="https://docs.incognitee.io/2.-get-started/2.2-get-started-with-incognitee-test-net" target="blank" class="btn btn_gradient">Invite Friend</NuxtLink> </div>
   <div class='mt-10'>
    <div class="flex items-center">
      <input type="text" ref="copyInput" class="dynamic-width border-2 border-gray-300 p-2" value="Incognitee.io/campaign1/privatetransfer?privatekey=XXX">
        <button @click="copyToClipboard" class="button ml-10">
            Copy
        </button>
    </div>

 </div>
 </div>

 
 
 </div></div></div></section>
</template>




<script>
export default {
    methods: {
        copyToClipboard() {
            const input = this.$refs.copyInput;
            input.select();
            input.setSelectionRange(0, 99999); // Für mobile Geräte
            document.execCommand("copy");

            alert("Kopiert: " + input.value); // Optional: Bestätigungsnachricht

            // Aktualisieren Sie die Breite des Input-Feldes
            this.updateInputWidth();
        },
        updateInputWidth() {
            // Logik, um die Breite basierend auf dem Inhalt zu berechnen
        }
    }
}
</script>

<style>
.button {
  display: flex;
padding: 14px 24px;
align-items: flex-start;
gap: 10px;
border-radius: 12px;
border: 2px solid var(--Transparent-White-20, rgba(255, 255, 255, 0.20));
backdrop-filter: blur(30px);
}

.dynamic-width::after {
  width: 500px;
    border-radius: 8px;
    border-color: #24ad7c;
    height: 55px;
}


  .dynamic-width {
    width: 500px;
    border-radius: 8px;
    border-color: #24ad7c;
    height: 55px;
}

</style>
