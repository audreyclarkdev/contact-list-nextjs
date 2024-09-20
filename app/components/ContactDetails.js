import PropTypes from "prop-types";
import Link from "next/link";

const ContactDetails = ({ image, name, email, phoneNum }) => {
  {
    allContacts.map((c) => (
      <li key={c.id}>
        <Link href={`/contacts/${c.id}`}>{p.name}</Link>
      </li>
    ));
  }

  return (
    <div className="flex flex-col justify-center">
      <h1>Contact Details</h1>
      <p>Image: {image}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNum}</p>
    </div>
  );
};
ContactDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNum: PropTypes.number,
};

export default ContactDetails;
