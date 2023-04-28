<template>
   
    bonjour jocelin
   
</template>
<script>

    const courses = fetch('http://127.0.0.1:8000/api/courses').then(response => response.json()).then(data => {
        console.log(data);
    })
</script>
