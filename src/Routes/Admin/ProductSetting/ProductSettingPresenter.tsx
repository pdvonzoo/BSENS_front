import React, { FunctionComponent } from "react";
import styled from "../../../Utils/typed-styledCom";

const Form = styled.form`
  width: 500rem;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input``;

interface InputValue {
  value: string;
  setValue: any;
  onChange: any;
}

const ProductSettingPresenter: FunctionComponent<{
  productname: InputValue;
  productimage: InputValue;
  handleSubmit: any;
}> = ({ productname, productimage, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Id
        <Input
          defaultValue={productname.value}
          onChange={productname.onChange}
        />
      </Label>
      <Label>
        Password
        <Input
          defaultValue={productimage.value}
          onChange={productimage.onChange}
        />
      </Label>
      <button type="button" onClick={handleSubmit}>
        Sign in
      </button>
    </Form>
  );
};

export default ProductSettingPresenter;
