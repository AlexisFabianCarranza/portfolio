const constrainsContactForm = {
  email: {
    presence: {
      allowEmpty: false,
      message: "^contact.validation.email.presence",
    },
    email: {
      message: "^contact.validation.email.format",
    },
  },
  subject: {
    presence: {
      allowEmpty: false,
      message: "^contact.validation.name.presence",
    },
  },
  name: {
    presence: {
      allowEmpty: false,
      message: "^contact.validation.name.presence",
    },
  },
  message: {
    presence: {
      allowEmpty: false,
      message: "^contact.validation.message.presence",
    },
  },
};

export default constrainsContactForm;
