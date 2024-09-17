import PropTypes from 'prop-types';

const ContactDetails = ({ image, name, email, phoneNum }) => {
  return (
    <div className="contact justify-center">
      <h1>Contact Details</h1>
      <p>Image: {image}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNum}</p>
    </div>
  )
}
ContactDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNum: PropTypes.number,
}

export default ContactDetails;