// import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactItems.styled';
// import {useSelector} from 'react-redux'
// import {getFilteredContacts} from '../../redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItems = (id, name, number) => {

  const dispatch = useDispatch();

  return (
    <>
      <Item>
        {name}: {number}
      </Item>
      <DeleteBtn 
      onClick={() => {
        dispatch(deleteContacts(id))
      }}
      >Delete</DeleteBtn>
    </>
  );
};



// ContactItems.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.number.isRequired,
// }.isRequired
