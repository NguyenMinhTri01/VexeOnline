<template>
  <div class="container ">
    <h2 class="mb-3" style="color : #34ad00; font-weight: 700">Bến Xe Khách</h2>
    <div class="row containerStation mb-3">
      <div class="col-sm-3 mb-2">
        <a href="#">
          <img class="img-thumbnail" src="https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg" alt="Snow" style="width:100%; height : 100%">
          <div class="centered">Bến Xe Miền Đông</div>
        </a>
      </div>
      <div class="col-sm-3 mb-2">
        <a href="#">
          <img class="img-thumbnail" src="https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg" alt="Snow" style="width:100%; height : 100%">
          <div class="centered">Bến Xe Miền Đông</div>
        </a>
      </div>
      <div class="col-sm-3 mb-2">
        <a href="#">
          <img class="img-thumbnail" src="https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg" alt="Snow" style="width:100%; height : 100%">
          <div class="centered">Bến Xe Miền Đông</div>
        </a>
      </div>
      <div class="col-sm-3 mb-2">
        <a href="#">
          <img class="img-thumbnail" src="https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg" alt="Snow" style="width:100%; height : 100%">
          <div class="centered">Bến Xe Miền Đông</div>
        </a>
      </div>

      
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.containerStation {
  position: relative;
  text-align: center;
  
}

image {
  border-radius: 3px !important;
}
a .centered {
  color: white;
}

.centered {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  width: 100%;
  z-index: 1;
}

</style>