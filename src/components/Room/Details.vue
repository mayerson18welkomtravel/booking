<template>
  <div id="roomView">
	
	<div id="preloader">
		<div data-loader="circle-side"></div>
	</div><!-- /Preload -->
	
	<div id="loader_form">
		<div data-loader="circle-side-2"></div>
	</div><!-- /loader_form -->
	
	<nav>
		<ul class="cd-primary-nav">
			<li><a href="index.html" class="animated_link">Home</a></li>
			<li><a href="about-hotel.html" class="animated_link">View Rooms</a></li>
			<li><a href="contact-hotel.html" class="animated_link">Contact Us</a></li>
			<!-- <li><a href="index-2.html" class="animated_link">Restaurant Version</a></li>
			<li><a href="index-3.html" class="animated_link">Spa Version</a></li> -->
		</ul>
	</nav>
	<!-- /menu -->
	
	<div class="container-fluid full-height">
		<div class="row row-height">
			<div class="col-lg-6 content-left">
				<div class="content-left-wrapper bg_hotel">
					<div class="wrapper">
						<a href="index.html" id="logo"><img src="../../img/logo.svg" alt="" width="45" height="40"></a>
						<div id="social">
							<ul>
								<li><a href="#0"><i class="social_facebook"></i></a></li>
								<li><a href="#0"><i class="social_twitter"></i></a></li>
								<li><a href="#0"><i class="social_instagram"></i></a></li>
							</ul>
						</div>
						<!-- /social -->
						<div class="left_title">
							<h3>Discover a Beatiful Contest</h3>
							<p>Rooms Starting from 70$ per night</p>
						</div>
					</div>
				</div>
				<!--/content-left-wrapper -->
			</div>
			<!-- /content-left -->

			<div class="col-lg-6 content-right" id="start">
				<div id="wizard_container">
					<div id="top-wizard">
							<div id="progressbar"></div>
						</div>
						<!-- /top-wizard -->
						<form id="wrapped" method="POST">
							<input id="website" name="website" type="text" value="">
							<!-- Leave for security protection, read docs for details -->
							
							<div id="middle-wizard">
								<div class="step">
									<h3 class="main_question"><strong>1/3</strong>Enter your Booking details</h3>
									<div class="form-group">
										<input type="text" name="dates" class="form-control required" placeholder="Check in - Check out">
										<i class="icon-hotel-calendar_3"></i>
									</div>
									<div class="form-group">
										<div class="styled-select clearfix">
                                            <select class="required ddslick" name="room_type">
												<option value="" data-imagesrc="../../img/icons_select/add_bed.svg">Select Room type</option>
												<option value="Classic single" data-imagesrc="../../img/icons_select/single_bed.svg">Classic single</option>
												<option value="Luxury single" data-imagesrc="../../img/icons_select/single_bed_lux.svg">Luxury single</option>
												<option value="Classic Double" data-imagesrc="../../img/icons_select/double_bed.svg">Classic Double</option>
												<option value="Luxury Double" data-imagesrc="../../img/icons_select/double_bed_lux.svg">Luxury Double</option>
											</select>
										</div>
									</div>
									<div class="row no-gutters pb-1">
										<div class="col-6 pr-2">
											<div class="form-group">
												<div class="qty-buttons">
													<input @click="increment('adults')" type="button" value="+" class="qtyplus" name="adults">
													<input v-model="adults" type="text" name="adults" id="adults" value="0" class="qty form-control required" placeholder="Adults">
													<input @click="decrement('adults')" type="button" value="-" class="qtyminus" name="adults">
												</div>
											</div>
										</div>
										<div class="col-6 pl-2">
											<div class="form-group">
												<div class="qty-buttons">
													<input @click="increment('children')" type="button" value="+" class="qtyplus" name="child">
													<input v-model="children" type="text" name="child" id="child" value="" class="qty form-control required" placeholder="Child">
													<input @click="decrement('children')" type="button" value="-" class="qtyminus" name="child">
												</div>
											</div>
										</div>
									</div>
									<!-- <div class="form-group">
										<textarea class="form-control notes" placeholder="Special notes"></textarea>
									</div> -->
								</div>
								<!-- /step-->
								
								<div class="step">
									<h3 class="main_question"><strong>2/3</strong>Select Booking Options</h3>
									<div class="form-group options clearfix">
										<i class="icon-hotel-bottle"></i><em>Welcome drink <strong>+$24</strong></em>
										<label class="switch-light switch-ios float-right">
											<input type="checkbox" value="Welcome drink" name="options[]">
											<span><span>No</span><span>Yes</span></span>
											<a></a>
										</label>
									</div>
									<div class="form-group options clearfix">
										<i class="icon-hotel-coffee"></i><em>Breakfast <strong>+$14</strong></em>
										<label class="switch-light switch-ios float-right">
											<input type="checkbox" value="Breakfast included" name="options[]">
											<span><span>No</span><span>Yes</span></span>
											<a></a>
										</label>
									</div>
									<div class="form-group options clearfix">
										<i class="icon-hotel-restaurant"></i><em>Dinner <strong>+$18</strong></em>
										<label class="switch-light switch-ios float-right">
											<input type="checkbox" value="Dinner included" name="options[]">
											<span><span>No</span><span>Yes</span></span>
											<a></a>
										</label>
									</div>
									<div class="form-group options clearfix">
										<i class="icon-hotel-car"></i><em>Pick up <strong>+$50</strong></em>
										<label class="switch-light switch-ios float-right">
											<input type="checkbox" value="Pick up service" name="options[]">
											<span><span>No</span><span>Yes</span></span>
											<a></a>
										</label>
									</div>
								</div>
								<!-- /step-->
								
								<div class="submit step">
									<h3 class="main_question"><strong>3/3</strong>Please fill with your details</h3>
									<div class="form-group">
										<input type="text" name="first_name" class="form-control required" placeholder="First Name">
										<i class="icon-user"></i>
									</div>
									<div class="form-group">
										<input type="text" name="last_name" class="form-control required" placeholder="Last Name">
										<i class="icon-user"></i>
									</div>
									<div class="form-group">
										<input type="email" name="email" class="form-control required" placeholder="Email">
										<i class="icon-envelope"></i>
									</div>
									<div class="form-group">
										<input type="text" name="telephone" class="form-control" placeholder="Telephone">
										<i class="icon-phone"></i>
									</div>
									<div class="form-group terms">
										<label class="container_check">Please accept our <a href="#" data-toggle="modal" data-target="#terms-txt">Terms and conditions</a>
											<input type="checkbox" name="terms" value="Yes" class="required">
											<span class="checkmark"></span>
										</label>
									</div>
								</div>
								<!-- /step-->
								
							</div>
							<!-- /middle-wizard -->
							<div id="bottom-wizard">
								<button type="button" name="backward" class="backward">Prev</button>
								<button type="button" name="forward" class="forward">Next</button>
								<button type="submit" name="process" class="submit">Submit</button>
							</div>
							<!-- /bottom-wizard -->
						</form>
					</div>
					<!-- /Wizard container -->
				
					<div class="footer">
						<ul>
							<li><a href="about-hotel.html" class="animated_link">Rooms</a></li>
							<li><a href="contact-hotel.html" class="animated_link">Contact Us</a></li>
							<li><a href="#0" class="animated_link" target="_parent">Buy this Template</a></li>
						</ul>
						<em>© 2019 Melkin</em>
					</div>
					<!-- Footer -->
			</div>
			<!-- /content-right-->
		</div>
		<!-- /row-->
	</div>
	<!-- /container-fluid -->

	<div class="cd-overlay-nav">
		<span></span>
	</div>
	<!-- /cd-overlay-nav -->

	<div class="cd-overlay-content">
		<span></span>
	</div>
	<!-- /cd-overlay-content -->

	<a href="#0" class="cd-nav-trigger">Menu<span class="cd-icon"></span></a>
	<!-- /menu button -->
	
	<!-- Modal terms -->
	<div class="modal fade" id="terms-txt" tabindex="-1" role="dialog" aria-labelledby="termsLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="termsLabel">Terms and conditions</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">
					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in <strong>nec quod novum accumsan</strong>, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus. Lorem ipsum dolor sit amet, <strong>in porro albucius qui</strong>, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn_1" data-dismiss="modal">Close</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->
	

  </div>
</template>

<script>
export default {
  name: 'Details',
  props: [''],
  data () {
    return {
      adults: 0,
      children: 0
    }
  },
  methods: {
    increment(type) {
        this[type]++;
    },
    decrement(type) {
        if (this[type] > 0) {
            this[type]--;
        }
    }
  },
  mounted() {
    //$('.styled-select select').niceSelect();
  }
}
</script>

<style scoped>
#wizard_container {
    height: 500px!important;
}

</style>>
