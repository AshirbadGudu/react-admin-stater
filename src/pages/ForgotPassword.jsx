import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CardContent,
  TextField,
  InputAdornment,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Email, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { withAuthLayout } from "layouts";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = {
    email: Yup.string()
      .required("Email is Required")
      .email("Please enter a valid email"),
  };
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
      <>
        <>
          <CardHeader
            title="Forgot your password?"
            subheader="Please enter the email address associated with your account and We will email you a link to reset your password."
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
                  <Field name={"email"}>
                    {(props) => (
                      <TextField
                        fullWidth
                        margin="normal"
                        label={"Enter your email address"}
                        type={"email"}
                        error={Boolean(props.meta.touched && props.meta.error)}
                        helperText={props.meta.touched && props.meta.error}
                        {...props.field}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </Field>
                  <LoadingButton
                    className="mt-1vh"
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    loading={isSubmitting}
                    loadingPosition="start"
                    startIcon={<Send />}
                    fullWidth
                  >
                    Reset Password
                  </LoadingButton>
                </CardContent>
                <CardActions className="place-content-center">
                  <Button component={Link} to="/login">
                    Back to Login
                  </Button>
                </CardActions>
              </Form>
            )}
          </Formik>
        </>
      </>
    </>
  );
};

export default withAuthLayout(ForgotPassword);
