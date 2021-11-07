import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { LoginSchema } from "schemas";
import { LoginOutlined } from "@mui/icons-material";

const Login = () => {
  const initialValues = LoginSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.initialValue;
    return accumulator;
  }, {});
  const validationSchema = LoginSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {});
  const handleLogin = async (values, submitProps) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      submitProps.setSubmitting(false);
    }
  };
  return (
    <>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5">Login</Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object(validationSchema)}
              onSubmit={handleLogin}
            >
              {({ isSubmitting, isValid }) => (
                <Form>
                  {LoginSchema.map((inputItem) => (
                    <Field name={inputItem.name} key={inputItem.key}>
                      {(props) => (
                        <TextField
                          fullWidth
                          margin="normal"
                          label={inputItem.label}
                          type={inputItem.type}
                          error={Boolean(
                            props.meta.touched && props.meta.error
                          )}
                          helperText={props.meta.touched && props.meta.error}
                          {...props.field}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {inputItem.startIcon}
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    </Field>
                  ))}
                  <LoadingButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    loading={isSubmitting}
                    loadingPosition="start"
                    startIcon={<LoginOutlined />}
                    fullWidth
                  >
                    Access Panel
                  </LoadingButton>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Login;
