export const numberMixin = {
  methods: {
    checkNumber: function(value) {
      return /^\d+$/.test(value)
    }
  }
};