<template>
  <div class="row mt-2 justify-content-center">
    <div class="col-10">
      <form @submit.prevent="searchAPOD()" action="">
        <div class="form-group d-flex">
          <input type="date" class="form-control" v-model="editable" />
          <button btn btn-secondary>Search</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { apodService } from "../services/ApodService";
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
export default {
  setup() {
    const editable = ref("");

    return {
      async searchAPOD() {
        try {
          await apodService.searchAPOD(editable.value);
        } catch (error) {
          Pop(error.message, "error");
        }
      },
      editable,
    };
  },
};
</script>

<style>
</style>