import * as Yup from "yup";
import { Form, Formik } from "formik";
import { CardContent, CardHeader, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { LoginSchema } from "schemas";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppContext } from "contexts";
import { withAuthLayout } from "layouts";
import { TextInput } from "components/core";

const Login = () => {
  const { login } = useAppContext();
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
      login(values);
    } catch (error) {
      console.log(error);
      submitProps.setSubmitting(false);
    }
  };
  return (
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
                <TextInput
                  key={inputItem.key}
                  name={inputItem?.name}
                  label={inputItem?.label}
                  type={inputItem?.type}
                  startIcon={inputItem?.startIcon}
                />
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
  );
};

export default withAuthLayout(Login);
