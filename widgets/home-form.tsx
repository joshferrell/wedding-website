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
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { object, string } from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import Uploader from "./image-uploader";
import SendAMessage from "../media/send-message.svg";

type FormProps = {
  name: string;
  note?: string;
};

const HomeForm = () => {
  return (
    <Box sx={{ position: "relative", pb: [0, 0, "50px"] }}>
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: [0, 0, 16],
          marginTop: "-350px",
          bg: "white",
          mx: "auto",
          boxShadow: "2xl",
          zIndex: 20,
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
          <Formik<FormProps>
            initialValues={{
              name: "",
            }}
            onSubmit={console.log}
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
                      <Input {...field} id="name" />
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
