<template>
  <div id="roomView">

	<header>
		<div class="container-fluid">
      <div class="row">
              <div class="col-3">
                  <a href="index.html" id="logo"><img src="../../img/logo.svg" alt="" width="45" height="40"></a>
              </div>
              <div class="col-9">
        <div id="social">
          <ul>
            <li><a href="#0"><i class="social_facebook"></i></a></li>
            <li><a href="#0"><i class="social_twitter"></i></a></li>
            <li><a href="#0"><i class="social_instagram"></i></a></li>
          </ul>
        </div>
        <!-- /social -->
        <a href="#0" class="cd-nav-trigger">Menu<span class="cd-icon"></span></a>
        <!-- /menu button -->
                  <nav>
          <ul class="cd-primary-nav">
            <li><a href="index.html" class="animated_link">Home</a></li>
            <li><a href="about-hotel.html" class="animated_link">View Rooms</a></li>
            <li><a href="contact-hotel.html" class="animated_link">Contact Us</a></li>
            <!-- <li><a href="index-2.html" class="animated_link">Restaurant Version</a></li> -->
            <!-- <li><a href="index-3.html" class="animated_link">Spa Version</a></li> -->
          </ul>
        </nav>
        <!-- /menu -->
              </div>
          </div>
		</div>
		<!-- /container -->
	</header>
	<!-- /Header -->
	
	<section class="parallax_window_in" data-parallax="scroll" data-image-src="../../img/sub_header_hotel.jpg" data-natural-width="1400" data-natural-height="800">
		<div id="sub_content_in">
			<h1>Nuestras habitaciones</h1>
			<p>Descripción de sección de habitaciones</p>
		</div>
	</section>
	<!-- /section -->

	<!-- <pre>{{rateByDate}}</pre> -->

	<main id="general_page">
		<div class="container margin_60_35">
			<div class="row" v-for="(item, index) in rateByDate" :key="index">
				<div class="col-lg-6 pr-lg-4">
					<div class="owl-carousel owl-theme carousel_pic" v-if="item.room.gallerys">
						<div class="item" v-for="(image, index2) in item.room.gallerys" :key="index2">
							<img :src="image.url" alt="habitaciones">
						</div>
						<!-- <div class="item">
							<img src="../../img/room_1_2.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_3.jpg" alt="">
						</div> -->
					</div>
					<div class="owl-carousel owl-theme carousel_pic" v-else>
						<div class="item">
							<img src="../../img/room_1_1.jpg" alt="habitaciones">
						</div>
					</div>
				</div>
				<div class="col-lg-6 pl-lg-4">
					<h4 class="styled">{{item.room.customName}} <strong>${{numberWithCommas(item.rate.ratePerNight)}}</strong><sup> (from)</sup><span> {{item.room.description}}</span></h4>
					<p>
						
					</p>
					<ul class="additional_info">
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Single Bed"><i class=" icon-hotel-double_bed"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Wifi"><i class="icon-hotel-wifi"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Cable TV"><i class="icon-hotel-tv"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Shower"><i class="icon-hotel-shower"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Hairdryer"><i class="icon-hotel-hairdryer"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Air Condition"><i class="icon-hotel-condition"></i></a></li>
					</ul>
					<a @click="Reservar(item)" class="btn_1 add_bottom_10" >Reservar</a>
					<sweet-modal ref="modal">

						<form-wizard
							ref="wizzard"
							back-button-text="Atras"
							next-button-text="Continuar"
							finish-button-text="Reservar"
							color="#2abfaa"
							@on-complete="sendToPayu"
						>
							<tab-content
								title="Habitación"
								:before-change="beforeTabSwitch"
							>
								<div class="step">

									<h3 class="main_question">Detalles de la reserva</h3>
									<div class="form-group">

										<date-range-picker
											ref="picker"
											v-model="range"
											:ranges="false"
											
										>
										</date-range-picker>
										<i class="icon-hotel-calendar_3"></i>
									</div>

									<!-- <date-range-picker v-model="range" /> -->
									<!-- <DateRange v-if="isShowCalendar" class="calendar" :sync-range.sync="range" :lang="lang" @change="onChange"></DateRange>
									<button v-if="isShowCalendar" @click="isShowCalendar = false" type="button" name="forward" class="forward">Aplicar</button> -->
									<!-- <div class="form-group">
										<div class="styled-select clearfix">
                                            <select class="required ddslick" name="room_type">
												<option value="" data-imagesrc="../../img/icons_select/add_bed.svg">Select Room type</option>
												<option value="Classic single" data-imagesrc="../../img/icons_select/single_bed.svg">Classic single</option>
												<option value="Luxury single" data-imagesrc="../../img/icons_select/single_bed_lux.svg">Luxury single</option>
												<option value="Classic Double" data-imagesrc="../../img/icons_select/double_bed.svg">Classic Double</option>
												<option value="Luxury Double" data-imagesrc="../../img/icons_select/double_bed_lux.svg">Luxury Double</option>
											</select>
										</div>
									</div> -->
									<div class="row no-gutters pb-1">
										<div class="col-6 pr-2">
											<div class="form-group">
												<label >Adultos</label>
												<div class="qty-buttons">
													<input @click="increment('adults')" type="button" value="+" class="qtyplus" name="adults">
													<input v-model="adults" type="text" name="adults" id="adults" value="0" class="qty form-control required" placeholder="Adults">
													<input @click="decrement('adults')" type="button" value="-" class="qtyminus" name="adults">
												</div>
											</div>
										</div>
										<div class="col-6 pl-2">
											<div class="form-group">
												<label >Niños</label>
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
								<!-- <button @click="Next()" type="button" name="forward" class="forward">Continuar</button> -->
							</tab-content>
							<tab-content 
								title="Información"
								
							>
								<div class="step">
									<h3 class="main_question">Costos de la reserva</h3>
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
							</tab-content>
							<tab-content title="Datos personales">
								
								<div class="submit step">
									<h3 class="main_question">Datos Personales</h3>
									<div class="form-group">
										<input v-model="name" type="text" name="first_name" class="form-control required" placeholder="First Name">
										<i class="icon-user"></i>
									</div>
									<div class="form-group">
										<input v-model="lastname" type="text" name="last_name" class="form-control required" placeholder="Last Name">
										<i class="icon-user"></i>
									</div>
									<div class="form-group">
										<input v-model="email" type="email" name="email" class="form-control required" placeholder="Email">
										<i class="icon-envelope"></i>
									</div>
									<div class="form-group">
										<input v-model="phone" type="text" name="telephone" class="form-control" placeholder="Telephone">
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
								<!-- <button @click="sendToPayu()" type="button" name="forward" class="forward">Reservar</button> -->
							</tab-content>
							</form-wizard>

							<div id="middle-wizard">

								
							</div>
						
					</sweet-modal>
				</div>
			</div>
			<!-- /row -->
			<hr class="add_bottom_45">
			<!-- <div class="row">
				<div class="col-lg-6 pr-lg-4">
					<div class="owl-carousel owl-theme carousel_pic">
						<div class="item">
							<img src="../../img/room_2_1.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_2.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_3.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="col-lg-6 pl-lg-4">
					<h4 class="styled">Classic Double Room <strong>$150</strong><sup> (from)</sup><span> Pellentesque amet adipiscing scelerisque</span></h4>
					<p>
						Lorem ipsum dolor sit amet, pellentesque amet adipiscing scelerisque, vitae urna aenean, justo malesuada at eu, orci varius risus luctus enim a malesuada. Erat in tempor magna, eget porttitor posuere.
					</p>
					<ul class="additional_info">
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Double bed"><i class="icon-hotel-double_bed_2"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Wifi"><i class="icon-hotel-wifi"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Cable TV"><i class="icon-hotel-tv"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Shower"><i class="icon-hotel-shower"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Hairdryer"><i class="icon-hotel-hairdryer"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Air Condition"><i class="icon-hotel-condition"></i></a></li>
					</ul>
					<a href="index.html" class="btn_1 add_bottom_10">Book now</a>
				</div>
			</div> -->
			<!-- /row -->
			<!-- <hr class="add_bottom_45">
			<div class="row"> -->
				<!-- <div class="col-lg-6 pr-lg-4">
					<div class="owl-carousel owl-theme carousel_pic">
						<div class="item">
							<img src="../../img/room_3_1.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_2.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_3.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="col-lg-6 pl-lg-4">
					<h4 class="styled">Luxury Single Room <strong>$180</strong><sup> (from)</sup><span> Pellentesque amet adipiscing scelerisque</span></h4>
					<p>
						Lorem ipsum dolor sit amet, pellentesque amet adipiscing scelerisque, vitae urna aenean, justo malesuada at eu, orci varius risus luctus enim a malesuada. Erat in tempor magna, eget porttitor posuere.
					</p>
					<ul class="additional_info">
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Single Bed"><i class=" icon-hotel-double_bed"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Wifi"><i class="icon-hotel-wifi"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Cable TV"><i class="icon-hotel-tv"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Bathtub"><i class="icon-hotel-bath"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Hairdryer"><i class="icon-hotel-hairdryer"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Safety box"><i class="icon-hotel-safety_box"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Loundry"><i class="icon-hotel-loundry"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Air condition"><i class="icon-hotel-condition"></i></a></li>
					</ul>
					<a href="index.html" class="btn_1 add_bottom_10">Book now</a>
				</div> -->
			<!-- </div> -->
			<!-- /row -->
			<!-- <hr class="add_bottom_45"> -->
			<!-- <div class="row">
				<div class="col-lg-6 pr-lg-4">
					<div class="owl-carousel owl-theme carousel_pic">
						<div class="item">
							<img src="../../img/room_4_1.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_2.jpg" alt="">
						</div>
						<div class="item">
							<img src="../../img/room_1_3.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="col-lg-6 pl-lg-4">
					<h4 class="styled">Luxury Double Room <strong>$190</strong><sup> (from)</sup><span> Pellentesque amet adipiscing scelerisque</span></h4>
					<p>
						Lorem ipsum dolor sit amet, pellentesque amet adipiscing scelerisque, vitae urna aenean, justo malesuada at eu, orci varius risus luctus enim a malesuada. Erat in tempor magna, eget porttitor posuere.
					</p>
					<ul class="additional_info">
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Double bed"><i class="icon-hotel-double_bed_2"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Wifi"><i class="icon-hotel-wifi"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Cable TV"><i class="icon-hotel-tv"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Bathtub"><i class="icon-hotel-bath"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Hairdryer"><i class="icon-hotel-hairdryer"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Safety box"><i class="icon-hotel-safety_box"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Loundry"><i class="icon-hotel-loundry"></i></a></li>
						<li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Air condition"><i class="icon-hotel-condition"></i></a></li>
					</ul>
					<a href="index.html" class="btn_1 add_bottom_10">Book now</a>
				</div>
			</div> -->
			<!-- /row -->
		</div>
		<!-- 7container -->
	</main>

	<div class="form">
		<form ref="form" method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">
		<input name="merchantId"    type="hidden"  :value="merchantId">
		<input name="accountId"     type="hidden"  :value="accountId">
		<input name="description"   type="hidden"  value="Reserva Habitacion">
		<input name="referenceCode" type="hidden"  :value="referenceCode" >
		<input name="amount"        type="hidden"  :value="rate.ratePerNight ? rate.ratePerNight : 0">
		<input name="tax"           type="hidden"  value="0">
		<input name="taxReturnBase" type="hidden"  value="0">
		<input name="currency"      type="hidden"  value="COP">
		<input name="signature"     type="hidden"  :value="signature">
		<input name="test"          type="hidden"  value="0">
		<input name="buyerEmail"    type="hidden"  :value="email">
		<input name="responseUrl"    type="hidden"  value="http://www.test.com/response">
		<input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation">
		<input name="Submit"        type="submit"  value="Enviar">
		</form>
	</div>

  </div>
</template>

<script>
const md5 = require('md5');
import {GET_RATES_BY_DATE, RATE_BY_DISTRIBUTION} from '../../graphql/queries/rates'
import {ADD_RESERVATION} from '../../graphql/queries/reservation'
import {numberWithCommas} from '../../helpers/withCommas'
import {getParamsUrl} from '../../helpers/getParamsUrl'
import {formatDate} from '../../helpers/formatDate'
import DateRangePicker from 'vue2-daterange-picker'

export default {
  components: { DateRangePicker },
  name: 'Room',
  props: ['apollo'],
  apollo: {
    // Simple query that will update the 'hello' vue property
	rateByDate: {
		query: GET_RATES_BY_DATE,
		variables () {
			return {
				date: this.date,
				categoryId: 0,
				mipymeId: this.mipymeId
			}
		}
	},
	$client: 'apolloClient2'
  },
  data () {
    return {
		msgChildren: '',
		msgAdults: '',
		range: '',
		mipymeId: '123',
		referenceCode: '',
		email: '',
		name: '',
		lastname: '',
		phone: '',
		merchantId: process.env.VUE_APP_PAYU_MERCHANT_ID,
		accountId: process.env.VUE_APP_PAYU_ACCOUNT_ID,
		apiLogin: process.env.VUE_APP_PAYU_API_LOGIN,
		apiKey: process.env.VUE_APP_PAYU_API_KEY,
		signature: '',
		room: {},
		rate: {},
		adjustments: [],
		adults: 0,
		children: 0
    }
  },
  methods: {
	numberWithCommas: numberWithCommas,
	getParamsUrl: getParamsUrl,
	formatDate: formatDate,
	beforeTabSwitch () {
		this.getCosts()
		return true
	},
	Focus() {
		/* eslint-disable no-console */
		// console.log(this.$refs.picker)
		document.getElementsByClassName("reportrange-text")[0].click()
	},
	async generateReservation(room) {
		const res = await this.$apollo.mutate({
			mutation: ADD_RESERVATION,
			// Parameters
			variables: {
				"input": {
					"distribution": [
						{
							"roomId": room.id,
							"adults": room.children ? room.capacity - 1 : room.capacity,
							"children": room.children ? 1 : 0
						}
					],
					"from": this.range.startDate,
					"to": this.range.endDate,
					"isTaxes": true,
					"mipymeId": this.mipymeId,
					"customerId": 1,
					"status": 0,
					"reservationType": 0,
					"categoryId": 0
				}
			}
		})
		/* eslint-disable no-console */
		console.log('res :', res);
	},
	async getCosts() {
		const res = await this.$apollo.mutate({
			mutation: RATE_BY_DISTRIBUTION,
			// Parameters
			variables: {
				
					"distribution": [
						{
							"roomId": this.room.id,
							"adults": this.adults,
							"children": this.children
						}
					],
					"from": this.range.startDate,
					"to": this.range.endDate,
					"isTaxes": true
				
			}
		})
		/* eslint-disable no-console */
		console.log('res :', res);
	},
	generateSignature() {
		this.referenceCode = (this.room.id)
		const str = `${this.apiKey}~${this.merchantId}~${this.referenceCode}~${this.rate.ratePerNight}~${'COP'}`
		this.signature = md5(str);
	},
	async sendToPayu() {
		this.generateSignature()
		await this.generateReservation(this.room)
		// console.log('this.$refs.form :', this.$refs.form);
		setTimeout(() => {
			// this.$refs.form.submit()	
			/* eslint-disable no-console */
			console.log('send form :');
		}, 1000);
	},
	Reservar(item) {
		this.room = item.room
		this.rate = item.rate
		this.adjs = item.adjs
		this.$refs.modal[0].open()
	},
    increment(type) {
		if (type === 'children' &&  this[type] === 1) {
			this.msgChildren = 'No se permiten mas de 1 niño';
		} else {
			this[type]++;
		}
    },
    decrement(type) {
        if (this[type] > 0) {
            this[type]--;
        }
    },
    getRatesByDate() {
      
    }
  },
  mounted() {
	/* eslint-disable no-console */
	this.date = this.formatDate(new Date("2019-12-15"));
	const params = this.getParamsUrl()
	if (params.mipymeId) {
		this.mipymeId = params.mipymeId
	}

	// setTimeout(() => {
	// 	this.$apollo.queries.rateByDate.fetchMore({
	// 		variables: {
	// 			date: '2019-12-18',
	// 			categoryId: 0,
	// 			mipymeId: this.mipymeId,
	// 		},
	// 		updateQuery: (previousResult, { fetchMoreResult }) => {
	// 			return fetchMoreResult
	// 		}
	// 	})
	// 	console.log(this.$apollo.queries.rateByDate)
	// }, 1000);
  }
}
</script>

<style scoped>
 .form {
	display: none;
 }
</style>
