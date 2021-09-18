<template>
  <form @submit.prevent="submitForm">
    <div>
      <div class="form-control" :class="{ invalid: !dName.isValid }">
        <label for="d-Name">Give your dashboard a name</label>
        <input
          type="text"
          id="d-Name"
          v-model.trim="dName.val"
          @blur="clearValidity('dName')"
          placeholder="Hint: It should be Easy to Understand"
        />
        <p v-if="!dName.isValid">This must not be empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !description.isValid }">
        <label for="description">Description of your dashboard</label>
        <input
          type="text"
          id="description"
          v-model.trim="description.val"
          @blur="clearValidity('description')"
          placeholder="Hint: Use easy to Understand terms"
        />
        <p v-if="!description.isValid">This must not be empty.</p>
      <div style="display: inline; padding-left: 20%">
        <input type="file" />
      </div>
      </div>
    </div>
    <!-- <input type="file" name="" id=""> -->
    <slot></slot>
    <div>
      <button>SELECT INDIVIDUAL DATA</button>
      <span>I know the exact data I want.</span>
      <span>I will choose just the ones I need.</span>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dName: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.dName.val === "") {
        this.dName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        dashboardName: this.dName,
        description: this.description,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-bottom: 5px;
}

form {
  margin-left: 50px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 20%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 14px;
  background-color: #bcbcbc;
  color: white;
  margin-bottom: 39px;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #004a61;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  margin: 6px;
  width: 20%;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

</style>
