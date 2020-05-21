import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default { playerShape };
