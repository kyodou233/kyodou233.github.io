<template>
    <span class="hero-text"></span>
</template>

<script>
import Typed from 'typed.js';

export default {
    mounted() {
        const textList = [
            '喵喵喵',
            '山，快马加鞭未下鞍。惊回首，离天三尺三。',
            '昼短苦夜长，何不秉烛游？',
        ];

    function getRandomText() {
        const randomIndex = Math.floor(Math.random() * textList.length);
        return textList[randomIndex];
    }

    const typed = new Typed(".hero-text", 
    {
        strings: [
            getRandomText(),
        ],
        typeSpeed: 100,
        loop: false,      
        showCursor: false,   
    });
  }
};

</script>