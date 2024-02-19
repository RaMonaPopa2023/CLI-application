const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  try {
    const data = fs.readFileSync(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    console.table(contacts);
  } catch (err) {
    console.error("Error reading contacts file:", err);
  }
}

function getContactById(contactId) {
  try {
    const data = fs.readFileSync(contactsPath, "utf8");
    const contacts = JSON.parse(data);

    const contact = contacts.find((c) => c.id === contactId.toString());

    if (contact) {
      console.log("Contact found:", contact);
    } else {
      console.log("Contact not found");
    }
  } catch (err) {
    console.error("Error reading contacts file:", err);
  }
}

function removeContact(contactId) {
  try {
    let data = fs.readFileSync(contactsPath, "utf8");
    let contacts = JSON.parse(data);
    const updatedContacts = contacts.filter(
      (c) => c.id !== contactId.toString()
    );

    fs.writeFileSync(
      contactsPath,
      JSON.stringify(updatedContacts, null, 2),
      "utf8"
    );

    console.log(`Contact with ID ${contactId} removed successfully`);
  } catch (err) {
    console.error("Error updating contacts file:", err);
  }
}

function addContact(name, email, phone) {
  try {
    let data = fs.readFileSync(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const newContact = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2), "utf8");

    console.log(`Contact with ID ${newContact.id} added successfully`);
  } catch (err) {
    console.error("Error updating contacts file:", err);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
