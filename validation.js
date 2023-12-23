import * as yup from 'yup';

const validationSchema = yup.object().shape({
  url: yup.string().url('Введите корректную ссылку.').required('Введите URL.'),
});

export default validationSchema;
