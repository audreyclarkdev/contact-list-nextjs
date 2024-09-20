export const ContactAPI = {
  contacts: [
    {
      id: 70319577,
      name: "Patrick Star",
      imageURL:
        "https://nickelodeonuniverse.com/wp-content/uploads/Patrick.png",
      email: "patrickstar@gmail.com",
      phoneNum: "555-555-5555",
    },
    {
      id: 70219578,
      name: "Spongebob Squarepants",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExEElDVdEs45aOnvpkuLanJ1sRvohztVDz7UGA_oVzIcYOIh1uvTJM3t7nT20FjxSWG0&usqp=CAU",
      email: "sbsq@email.com",
      phoneNum: "555-555-5555",
    },
  ],
  all: function () {
    return this.contacts;
  },
  addContact: function ({ id, name, email, phoneNum, imageURL }) {
    this.contacts.push({ name, email, phoneNum, imageURL });
    
  },
  get: function (name) {
    const isContact = (c) => c.name === name;
    return this.contacts.find(isContact);
  },
};
