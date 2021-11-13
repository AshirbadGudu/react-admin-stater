import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CardContent,
  TextField,
  InputAdornment,
  CardHeader,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { LoginSchema } from "schemas";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppContext } from "contexts";
import { withAuthLayout } from "layouts";

const Login = () => {
  const { setUser } = useAppContext();
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
      setUser(values);
    } catch (error) {
      console.log(error);
    } finally {
      submitProps.setSubmitting(false);
    }
  };
  return (
    <>
      <>
        <>
          <CardHeader
            title="Sign In To Access Panel"
            subheader="Please enter your credentials to sign in"
            titleTypographyProps={{
              gutterBottom: true,
            }}
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
                  <div className="place-content-center">
                    <LoadingButton
                      className="mt-1vh"
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
                  </div>
                </CardContent>
              </Form>
            )}
          </Formik>
        </>
      </>
    </>
  );
};

export default withAuthLayout(Login);
