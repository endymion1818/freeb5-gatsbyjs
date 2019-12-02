import { navigate } from "gatsby";
import React, { FC, SyntheticEvent } from "react";
import styled from "styled-components";
import ButtonStyles from "../Atoms/ButtonStyles";
import { SForm as BaseForm } from "../Molecules/Form";

export interface ISearchfFormProps {
  query?: string;
}

export interface IInputProps {
  onEnter?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = styled.input<IInputProps>`
  padding: 0.2rem;
  border-radius: 0.4rem;
`;

const Form = styled(BaseForm)`
  margin: 1rem 0 1rem 1rem;
`;

const Label = styled.label`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const SearchForm: FC<ISearchfFormProps> = ({ query }) => {
  return (
    <Form role="search" method="GET">
      <Label htmlFor="search-input">Search sites</Label>
      <Input
        tabIndex={0}
        type="search"
        id="search-input"
        name="keywords"
        onEnter={(e: SyntheticEvent) =>
          navigate(
            `/search?keywords=${encodeURIComponent(
              (e.target as HTMLTextAreaElement).value
            )}`
          )
        }
        value={query}
      />
      <button type="submit">Search</button>
    </Form>
  );
};
export default SearchForm;
