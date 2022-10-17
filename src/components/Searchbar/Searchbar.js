import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Header, Button } from './Searchbar.styled';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      {props => (
        <Header>
          <Form className={css.form}>
            <Button type="submit" disabled={props.isSubmitting}>
              <BiSearchAlt2 size={24} />
            </Button>
            <Field
              className={css.input}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

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
