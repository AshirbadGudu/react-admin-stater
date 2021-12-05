import { Done } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TextInput } from "components/core";
import { Form, Formik } from "formik";
import { ChangePasswordSchema } from "schemas";
import * as Yup from "yup";
const ChangePassword = () => {
  const initialValues = ChangePasswordSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.initialValue;
      return accumulator;
    },
    {}
  );
  const validationSchema = ChangePasswordSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {}
  );
  const handleChangePassword = async (values, submitProps) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
      submitProps.setSubmitting(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={handleChangePassword}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            {ChangePasswordSchema.map((inputItem) => (
              <TextInput
                key={inputItem.key}
                name={inputItem?.name}
                label={inputItem?.label}
                type={inputItem?.type}
                startIcon={inputItem?.startIcon}
              />
            ))}
            <div className="d-flex place-content-end">
              <LoadingButton
                className="mt-1vh"
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting || !isValid}
                loading={isSubmitting}
                loadingPosition="start"
                startIcon={<Done />}
              >
                Update Password
              </LoadingButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePassword;
