import {List, Contact} from './ContactList.styled'
import { ContactItems } from '../ContactItems/ContactItems';
import {GiRotaryPhone} from 'react-icons/gi'
import {useSelector} from 'react-redux'
import {getFilteredContacts} from '../../redux/selectors';



export const ContactList = () => {
const items = useSelector(getFilteredContacts);

   return <List>
        {items.map(({id, name, number}) => (
          <Contact key={id}><GiRotaryPhone/>
            <ContactItems id={id} name = {name} number={number}/>
          </Contact>
        ))}
      </List>
  
}


