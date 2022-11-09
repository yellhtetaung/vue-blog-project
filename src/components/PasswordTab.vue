<template>
  <div
    class="tab-pane fade"
    id="v-pills-profile"
    role="tabpanel"
    aria-labelledby="v-pills-profile-tab"
    tabindex="0"
  >
    <div class="input-group my-3">
      <label for="oldpassword" class="input-group-text"
        >Enter Old password</label
      >
      <input type="password" class="form-control" />
    </div>

    <div class="input-group my-3">
      <label for="newpassword" class="input-group-text"
        >Enter New password</label
      >
      <input type="password" class="form-control" />
    </div>

    <div class="input-group my-3">
      <label for="confirmpassword" class="input-group-text"
        >Confirm password</label
      >
      <input type="password" class="form-control" />
    </div>

    <button type="button" class="btn btn-primary float-end mt-3">
      Save Change
    </button>
  </div>
</template>

<script>
export default {
  name: "PasswordTab",
};
</script>
