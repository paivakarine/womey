import { Alert, Form } from "react-bootstrap";
import { Button } from "../../components/Button";
import { FormField } from "../../components/FormField";
import AutocompleteField from "../../components/AutocompleteField";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { createEstimative } from "../../services/order";
import {
  clearEstimate,
  setCurrentEstimate,
} from "../../store/slice/orderSlice";
import { useState } from "react";

export const EstimateForm = () => {
  const [msg, setMsg] = useState("");
  const currentEstimate = useSelector((state) => state.order.currentEstimate);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      pickupAddress: "",
      deliveryAddress: "",
      comments: "",
    },
    validationSchema: yup.object().shape({
      pickupAddress: yup.object().required("Selecione um endereço"),
      deliveryAddress: yup.object().required("Selecione um endereço"),
      comments: yup.string().required("Informe algum comentário"),
    }),
    onSubmit: async (values, { setErrors }) => {
      setErrors({});

      if (!!currentEstimate) {
        dispatch(clearEstimate());
      }

      try {
        const result = await createEstimative(values);
        dispatch(setCurrentEstimate(result.data));
        setMsg("Estimativa feita com sucesso");

        setTimeout(() => setMsg(""), 4000);
      } catch (error) {}
    },
  });

  const getFieldProps = (fieldName) => ({
    ...formik.getFieldProps(fieldName),
    isValid: formik.touched[fieldName] && !formik.errors[fieldName],
    isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
    error: formik.errors[fieldName],
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {msg && <Alert variant="success"> {msg}</Alert>}

      <AutocompleteField
        {...getFieldProps("pickupAddress")}
        label="Endereço de retirada"
        placeholder="Informe o endereço completo"
        onChange={(address) => formik.setFieldValue("pickupAddress", address)}
      />

      <AutocompleteField
        {...getFieldProps("deliveryAddress")}
        label="Endereço de entrega"
        placeholder="Informe o endereço completo"
        onChange={(address) => formik.setFieldValue("deliveryAddress", address)}
      />
      <FormField
        {...getFieldProps("comments")}
        label="Instruções para a entregadora"
        as="textarea"
        placeholder="Informe o que quer que a entregadora saiba ou que ela faça!"
      />
      <Button
        type="submit"
        className="mb-4"
        loading={formik.isValidating || formik.isSubmitting}
        disabled={!formik.isValid || formik.isSubmitting}
      >
        Calcular
      </Button>
    </Form>
  );
};
