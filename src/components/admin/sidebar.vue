<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/admin/dashboard">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-bus"></i>
        </div>
        <div class="sidebar-brand-text mx-3">VexeOnline</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="/admin/dashboard">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <!-- <div class="sidebar-heading">
        Interface
      </div> -->

      <!-- Nav Item - Pages Collapse Menu -->
      <!-- <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" href="buttons.html">Buttons</a>
            <a class="collapse-item" href="cards.html">Cards</a>
          </div>
        </div>
      </li> -->

      <!-- Nav Item - Utilities Collapse Menu -->
      <!-- <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">Colors</a>
            <a class="collapse-item" href="utilities-border.html">Borders</a>
            <a class="collapse-item" href="utilities-animation.html">Animations</a>
            <a class="collapse-item" href="utilities-other.html">Other</a>
          </div>
        </div>
      </li> -->

      <!-- Divider -->
      <!-- <hr class="sidebar-divider"> -->

      <!-- Heading -->
      <div class="sidebar-heading">
        Function
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <!-- <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li> -->

      <li class="nav-item">
         <router-link to="/admin/stations" class="nav-link">
            <i class="fas fa-bus"></i>
            <span>Bến xe</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/vehicles" class="nav-link">
            <i class="fas fa-shuttle-van"></i>
            <span>Xe</span>
          </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/garages" class="nav-link">
            <i class="fas fa-home"></i>
            <span>Nhà xe</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/routes" class="nav-link">
            <i class="fas fa-route"></i>
            <span>Tuyến đường</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/trips" class="nav-link">
            <i class="fas fa-bus-alt"></i>
            <span>Chuyến đi</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/tickets" class="nav-link">
            <i class="fas fa-ticket-alt"></i>
            <span>Quản lý vé</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/blogs" class="nav-link">
            <i class="fas fa-fw fa-newspaper"></i>
            <span>Blog</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/users" class="nav-link">
            <i class="fas fa-fw fa-user"></i>
            <span>User</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/pagestatics" class="nav-link">
            <i class="fas fa-fw fa-file"></i>
            <span>Page Static</span>
         </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/admin/contacts" class="nav-link">
            <i class="fas fa-fw fa-address-card"></i>
            <span>Contact</span>
         </router-link>
      </li>
      <!-- Nav Item - Tables -->
      <!-- <li class="nav-item">
        <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span></a>
      </li> -->

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
</template>

<script>
export default {

}


</script>

<style>

</style>