import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
  Box,
  Button,
  Textarea,
  VisuallyHidden,
  Link,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { object, string } from "yup";
import { Formik, Form, Field, FieldProps, FormikHelpers } from "formik";
import Uploader from "./image-uploader";
import SendAMessage from "../media/send-message.svg";
import { useState } from "react";

type FormProps = {
  name: string;
  note?: string;
};

const HomeForm = () => {
  const [status, setStatus] = useState({ error: false, success: false });

  const handleSubmit = (
    pending: FormProps,
    helpers: FormikHelpers<FormProps>
  ) => {
    setStatus({ error: false, success: false });
    fetch(
      "https://api.sheety.co/4c24160bcee10740d98a2293c9f511fc/noteStorage/pending",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pending }),
      }
    )
      .then(() => {
        setStatus({ error: false, success: true });
      })
      .catch((err) => {
        console.warn(err);
        setStatus({ error: true, success: false });
      })
      .finally(() => helpers.setSubmitting(false));
  };

  return (
    <Box
      sx={{
        position: "absolute",
        pb: [0, 0, "50px"],
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        "@media (max-width: 1200px)": {
          position: "relative",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: [0, 0, 16],
          marginTop: "-350px",
          bg: "white",
          mx: "auto",
          boxShadow: "2xl",
          zIndex: 900,
          position: "relative",
        }}
      >
        <Box
          bg="green.100"
          sx={{ padding: 4, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        >
          Looking for the old site?{" "}
          <Link
            href="https://www.zola.com/wedding/stein-ferrell"
            isExternal
            sx={{
              display: "inline-flex",
              textDecoration: "underline",
              alignItems: "center",
            }}
          >
            Visit old site <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
        <Box sx={{ padding: 10 }}>
          <Heading variant="h2" sx={{ mb: 4 }}>
            <SendAMessage width={350} height={62} aria-hidden />
            <VisuallyHidden>Send a message</VisuallyHidden>
          </Heading>
          {status.success && (
            <Alert mb={4} status="success">
              <AlertIcon />
              Successfully sent message to Alana and Josh!
            </Alert>
          )}
          {status.error && (
            <Alert mb={4} status="error">
              <AlertIcon />
              Something went wrong on our end. You can try refreshing and
              submitting one more time or coming back to the page later.
            </Alert>
          )}
          <Formik<FormProps>
            initialValues={{
              name: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={object({
              name: string().required("Enter your name"),
              note: string().nullable().notRequired(),
            })}
          >
            {(props) => (
              <Form
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  gap: "24px",
                }}
              >
                <Field name="name">
                  {({ field, form }: FieldProps<string, FormProps>) => (
                    <FormControl
                      isInvalid={Boolean(form.errors.name && form.touched.name)}
                    >
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input id="name" {...field} />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="note">
                  {({ field, form }: FieldProps<string, FormProps>) => (
                    <FormControl
                      isInvalid={Boolean(form.errors.note && form.touched.note)}
                    >
                      <FormLabel htmlFor="note">Note (optional)</FormLabel>
                      <FormHelperText sx={{ mb: 2 }}>
                        Write a brief message for Alana and Josh to read after
                        their honeymoon.
                      </FormHelperText>
                      <Textarea {...field} id="note" />
                      <FormErrorMessage>{form.errors.note}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  colorScheme="green"
                  variant="solid"
                  type="submit"
                  isLoading={props.isSubmitting}
                  loadingText="Submitting note"
                  sx={{ width: "fit-content" }}
                >
                  Submit
                </Button>
                <FormControl>
                  <FormLabel>Photos</FormLabel>
                  <FormHelperText sx={{ mb: "-14px" }}>
                    Add some photos of the bride and groom or of your favorite
                    moments on their wedding day!
                  </FormHelperText>
                </FormControl>
                <Uploader />
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeForm;
