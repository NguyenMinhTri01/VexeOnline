<template>
<div>
    <div class="banner-3">
	<div class="container">
		<h1 class="wow zoomIn animated animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Green Wheels - Best in Class for Travel &amp; Hotels</h1>
	</div>
</div>
<div class="agent">
    <div class="container">
      <div class="row">
          <div
        class="col-md-6 agent-left wow fadeInDown animated animated"
        data-wow-delay=".5s"
        style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown;"
      >
        
        <p>Gửi tin nhắn cho chúng tôi</p>
        <form @submit.prevent="handleContact">
          <input type="text" v-model="name" placeholder="Tên của bạn" />
          <input type="email" v-model="email" placeholder="Email của bạn" />
          <input type="number" v-model="phone" placeholder="Số điện thoại của bạn" />
          <textarea v-model="content" placeholder="Tin nhắn của bạn"></textarea>
          <div class="sub">
            <input type="submit" value="Gửi" />
          </div>
        </form>
      </div>
      <div
        class="room-map animated wow fadeInUp animated col-md-6 agent-left wow fadeInDown"
        data-wow-duration="1200ms"
        data-wow-delay="500ms"
        style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2322904530342!2d106.80298197692936!3d10.869928928595794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiDEkEhRRyBUUC5IQ00!5e0!3m2!1svi!2s!4v1598884017153!5m2!1svi!2s"
          width="100%"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
      </div>
      
      <div class="clearfix"></div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone:"",
      content:""
    };
  },
  methods: {
    handleContact() {
      const fromData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        content: this.content,
      };
      this.$store.dispatch("fetchCreateContact", fromData);
    }
  },
  computed: {
    contact(){
      return this.$store.state.contact.data;
    }
  },
  watch:{
    contact(value){
      if(value){
        this.$toast.success('Gửi liên hệ thành công');
      }
    }
  }
};
</script>

<style>
</style>