const argv = require("yargs").argv;

const contactsModule = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsModule.listContacts();
      break;

    case "get":
      contactsModule.getContactById(id);
      break;
    case "add":
      contactsModule.addContact(name, email, phone);
      break;

    case "remove":
      contactsModule.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
