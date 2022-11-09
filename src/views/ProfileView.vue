<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row mt-5">
        <h1 class="display-4 text-primary text-center">Profile Page</h1>
        <div class="col-3 mt-3">
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active my-3"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Username
            </button>
            <button
              class="nav-link my-3"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Password
            </button>
            <button
              class="nav-link my-3"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Blog Lists
            </button>
            <button
              class="nav-link my-3"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Settings
            </button>
          </div>
        </div>
        <div class="col-6 mt-3">
          <div class="tab-content" id="v-pills-tabContent">
            <UserName />

            <PasswordTab />

            <div
              class="tab-pane fade mt-3"
              id="v-pills-disabled"
              role="tabpanel"
              aria-labelledby="v-pills-disabled-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade mt-3"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade mt-3"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import UserName from "@/components/UserName.vue";
import PasswordTab from "@/components/PasswordTab.vue";

export default {
  name: "ProfileView",
  components: {
    NavBar,
    UserName,
    PasswordTab,
  },
};
</script>
