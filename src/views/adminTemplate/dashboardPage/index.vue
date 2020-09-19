<template>
  <div>
    <Loader v-if="loadingTrip && loadingUser && loadingTicket && loadingContact" />
    <div v-if="tickets && trips && users && contacts" class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Trang quản trị hệ thống</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                  >Tổng số vé đã đặt</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{tickets.length}}
                    <router-link to="/admin/tickets"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-shopping-cart fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Thành viên</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{users.length}}
                    <router-link to="/admin/users"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Chuyến đi</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{trips.length}}
                    <router-link to="/admin/trips"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-bus-alt fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Liên hệ</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{contacts.length}}
                    <router-link to="/admin/contacts"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-fw fa-address-card fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/loader";
export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchListContacts");
    this.$store.dispatch("fetchListTickets");
    this.$store.dispatch("fetchListUsers");
    this.$store.dispatch("fetchListTrips");
  },
  computed: {
    trips() {
      return this.$store.state.trip.data;
    },
    contacts() {
      return this.$store.state.contact.data;
    },
    tickets() {
      return this.$store.state.ticket.data;
    },
    users() {
      return this.$store.state.user.data;
    },
    loadingTrip() {
      return this.$store.state.trip.loading;
    },
    loadingTicket() {
      return this.$store.state.ticket.loading;
    },
    loadingUser() {
      return this.$store.state.user.loading;
    },
    loadingContact() {
      return this.$store.state.contact.loading;
    }
  }
};
</script>

<style>
</style>