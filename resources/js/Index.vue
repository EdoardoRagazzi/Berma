<template>

    <div>
        <nav class="navbar bg-black border-bottom navbar-light ">
        <router-link class="navbar-brand mr-auto text-white" v-bind:to="{name: 'home'}">Home</router-link>
        <router-link class="btn  nav-button text-white" v-bind:to="{name: 'first'}">First</router-link>
        </nav>

        <div class="container mt-4 mb-4 pr-4 pl-4">
        <router-view> </router-view>
        </div>
        
    </div>

</template>
