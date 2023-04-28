<template>
   
    bonjour jocelin
   <div class="courses" v-for="course in courses" :key="course.id">
    {{ course.title }}
   </div>
</template>
<script>
import {ref} from 'vue'
import env from '@/env.js'

export default {
    setup (){
        // fetching courses from the data base
        const courses = ref([])
        const DbCourses  = fetch(`${env.elearning_url}courses`).then(
            response => response.json()).then(
                data => {
                courses.value = data.data
               
                }
            )
        return {
            courses
        }
        
        
        
    }
}



</script>
