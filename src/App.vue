<template>
<div id="app">

	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<nav>
					<ul class="nav d-flex justify-content-center">
						<li class="nav-item">
							<router-link :to="{name: 'home'}" class="nav-link" >Home</router-link>
						</li>
						<li class="nav-item">
							<router-link :to="{name: 'addpost'}" class="nav-link" >Add Post</router-link>
						</li>
						<li class="nav-item">
							<router-link :to="{name: 'adminpage'}" class="nav-link" >Admin</router-link>
						</li>
					</ul>
				</nav>
				<img alt="Vue logo" src="./assets/logo.png">
			</div>
		</div>
	</div>
<router-view />

</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
