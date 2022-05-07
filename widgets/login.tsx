import { object, string } from "yup";
import cookie from "js-cookie";

import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Box,
  Heading,
  FormErrorMessage,
  Alert,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormikHelpers, Formik, Form, Field, FieldProps } from "formik";

type FormInput = {
  username: string;
  password: string;
};

type PropTypes = {
  handleRevalidate: () => void;
};

const Login: React.FC<PropTypes> = ({ handleRevalidate }) => {
  const [systemError, setError] = useState<string>();
  const [show, setShow] = useState(false);

  const schema = object({
    username: string().required("Enter your username"),
    password: string().required("Enter your password"),
  });

  const handleSubmit = async (
    value: FormInput,
    helpers: FormikHelpers<FormInput>
  ) => {
    setError(undefined);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const body = await res.json();
      if (body.code === "invalid-user") {
        helpers.setErrors({ username: body.message });
        return;
      }

      if (body.code === "invalid-pass") {
        helpers.setErrors({ password: body.message });
        return;
      }

      if (body.token) {
        cookie.set("token", body.token, { expires: 20 });
        handleRevalidate();
      }
    } catch (err) {
      console.error(err);
      setError(
        `There's a technical problem that has prevented login. Try reloading this page. If that doesn't work, contact josh or try again later.`
      );
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        padding: "32px",
        borderRadius: 8,
        mx: "auto",
        mt: "50px",
        boxShadow: "lg",
      }}
    >
      <Heading size="lg" as="h2" mb={5}>
        Login
      </Heading>
      <Formik<FormInput>
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form
          style={{ display: "flex", flexFlow: "column nowrap", gap: "24px" }}
        >
          {systemError && <Alert status="error">{systemError}</Alert>}
          <Field name="username">
            {({ field, form }: FieldProps<string, FormInput>) => (
              <FormControl
                isInvalid={Boolean(
                  form.errors.username && form.touched.username
                )}
              >
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input {...field} id="username" />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }: FieldProps<string, FormInput>) => (
              <FormControl
                isInvalid={Boolean(
                  form.errors.password && form.touched.password
                )}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    {...field}
                    id="password"
                    type={show ? "text" : "password"}
                    pr="4.25em"
                  />
                  <InputRightElement width="4.25em">
                    <Button h="1.75em" size="sm" onClick={() => setShow(!show)}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            colorScheme="green"
            type="submit"
            style={{ width: "fit-content" }}
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Login;
