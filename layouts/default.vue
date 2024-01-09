<template>
    <div>
        <Navbar />
        <main>
            <div class="container">
               
                <nuxt />
                 
            </div>

        </main>
        <Footer />
    </div>
   </template>
   
   <script>
   import Navbar from '@/components/Navbar'
   import Footer from '@/components/Footer'
   export default {
     components: {
        Navbar,
        Footer
     }
   }
   </script>
   <style>
   
   </style>