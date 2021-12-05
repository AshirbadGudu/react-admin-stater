import { Done } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, CardActionArea, Grid } from "@mui/material";
import { TextInput } from "components/core";
import { Form, Formik } from "formik";
import { ProfileSchema } from "schemas";
import * as Yup from "yup";
const Profile = () => {
  const initialValues = ProfileSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.initialValue;
    return accumulator;
  }, {});
  const validationSchema = ProfileSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {});
  const handleProfileUpdate = async (values, submitProps) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
      submitProps.setSubmitting(false);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CardActionArea
            sx={{
              width: 160,
              height: 160,
              borderRadius: "50%",
            }}
          >
            <Avatar
              src={``}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={9}>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={handleProfileUpdate}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                {ProfileSchema.map((inputItem) => (
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
                    Update Changes
                  </LoadingButton>
                </div>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
