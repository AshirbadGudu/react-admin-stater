import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { LoginSchema } from "schemas";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
      <Container
        maxWidth="md"
        className="d-flex h-75vh place-content-center place-items-center"
      >
        <Card>
          <CardHeader
            title="Sign In To Access Panel"
            subheader="Please enter your credentials to sign in"
          />
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={handleLogin}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <CardContent>
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
                  <div className="d-flex place-content-end">
                    <Button component={Link} to="/forgot-password">
                      Forgot Password?
                    </Button>
                  </div>
                </CardContent>
                <CardActions className="place-content-center">
                  <LoadingButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    loading={isSubmitting}
                    loadingPosition="start"
                    startIcon={<LoginOutlined />}
                  >
                    Access Panel
                  </LoadingButton>
                </CardActions>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
};

export default Login;
