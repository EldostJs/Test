import SF from '../Form/Form.module.css';
import { Formik, Form } from 'formik';
import { initialValues, schemas } from './Helper';
import { Input } from '../Input/Input';
import Button from '../Button/Button';

export const CustomForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schemas.custom}
            onSubmit={() => console.log('Success')}
        >
            <Form
                className={SF.form}
            >
                <Input
                    label='Name'
                    name='firstName'
                    id='firstName'
                    placeholder='Write Name'
                />
                <Input
                    label='SurName'
                    name='lastName'
                    id='lastName'
                    placeholder='Write SurName'
                />
                <Input
                    label='Email'
                    name='email'
                    id='email'
                    placeholder='Write Email'
                />
                <Input
                    label='Password'
                    name='password'
                    id='password'
                    placeholder='Write Password'
                />
                <Button>Send</Button>
            </Form>
        </Formik>
    );
};
