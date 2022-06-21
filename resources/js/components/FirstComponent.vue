<template>
    <div>
        <example-component title="Cheap Villa" content="very cheap" v-bind:price="1000"> </example-component>
 <example-component title="Cheap Villa 2" content="very cheap 2" v-bind:price="200"> </example-component>
    </div>
</template>
 
<script>
import  ExampleComponent from "./ExampleComponent.vue";

export default {
   components: {
    ExampleComponent,
   }
};
</script>
