import { useEffect, useState } from "react";
import shortid from "shortid";
import ContactForm from "./Components/Form";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

export default function App() {
  const [contacts, useContacts] = useState([]);
  const [filter, useFilter] = useState("");

  function addContact(data) {
    console.log(data);

    const repeatName = contacts.some((el) => el.name === data.name);
    if (repeatName) {
      alert(`${data.name} is alreadi in contacts`);
      return;
    }

    if (data.name === "") {
      alert("Enter  name please");
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    console.log(contact);
    // useContacts((state) => [...state, contact]);
  }

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={this.filterContacts} /> */}
      {/* <ContactList
        contacts={visibleContact}
        onDeleteContact={this.deleteContact}
      /> */}
    </>
  );
}
