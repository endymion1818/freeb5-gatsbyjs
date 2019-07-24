import { navigate } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import { ButtonStyles } from "../Atoms/Link";
import { SForm } from "../Molecules/Form";

export interface ISearchfFormProps {
  query?: string;
}

const Button = styled.button`
  ${ButtonStyles}
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
    <SForm role="search" method="GET">
      <div className="form-group">
        <Label htmlFor="search-input">Search sites</Label>
        <input
          className="form-control"
          type="search"
          id="search-input"
          name="keywords"
          onChange={e =>
            navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
          }
          value={query}
        />
        <Button type="submit">Search</Button>
      </div>
    </SForm>
  );
};
export default SearchForm;
