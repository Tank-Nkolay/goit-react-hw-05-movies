// import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { BiSearchAlt2 } from 'react-icons/bi';
// import { Header } from './Searchbar.styled';
// import { Header, SearchForm, Button, Input } from './Searchbar.styled';
import { Header, Button } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Header>
          <Form>
            <Button type="submit" disabled={isSubmitting}>
              <BiSearchAlt2 size={24} />
            </Button>
            <Field
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Header>
      )}
    </Formik>
  );
}

export default Searchbar;

// SearchBar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

// ==================================================================
// ==================================================================
// function Searchbar({ onSubmit }) {
//   const handleSubmit = async (values, actions) => {
//     await onSubmit(values);

//     actions.setSubmitting(false);
//     // actions.resetForm();
//   };

//   return (
//     <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
//       {props => (
//         <Header>
//           <SearchForm>
//             <Button type="submit" disabled={props.isSubmitting}>
//               <BiSearchAlt2 size={24} />
//               {/* <Span>Search</Span> */}
//             </Button>

//             <Input
//               type="text"
//               autocomplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//             />
//           </SearchForm>
//         </Header>
//       )}
//     </Formik>
//   );
// }
