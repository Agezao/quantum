import PropTypes from 'prop-types';
import styled from 'styled-components';
import Radio from './Radio';

const RadioGroup = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 20px;
  }

  ${props => props.inline && `
    align-items: unset;
    display: inline-block;
    flex-direction: unset;
  `}
`;

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: Radio,
    }),
    PropTypes.arrayOf(PropTypes.shape({ type: Radio })),
  ]).isRequired,
};

export default RadioGroup;