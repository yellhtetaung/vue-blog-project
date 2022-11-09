<template>
  <div
    class="tab-pane fade show active mt-3"
    id="v-pills-home"
    role="tabpanel"
    aria-labelledby="v-pills-home-tab"
    tabindex="0"
  >
    <div class="input-group my-3">
      <label for="firstname" class="input-group-text">First Name</label>
      <input type="text" name="firstname" id="firstname" class="form-control" />
    </div>

    <div class="input-group my-3">
      <label for="middlename" class="input-group-text">Middle Name</label>
      <input
        type="text"
        name="middlename"
        id="middlename"
        class="form-control"
      />
    </div>

    <div class="input-group my-3">
      <label for="lastname" class="input-group-text">Last Name</label>
      <input type="text" name="lastname" id="lastname" class="form-control" />
    </div>

    <button type="button" class="btn btn-primary float-end mt-3">
      Save Change
    </button>
  </div>
</template>

<script>
export default {
  name: "UserName",
};
</script>
