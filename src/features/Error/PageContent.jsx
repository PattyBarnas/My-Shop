import styled from "styled-components";

const Error = styled.div`
  text-align: center;
  font-size: 2.4rem;
`;

function PageContent({ title, children }) {
  return (
    <Error>
      <h1>{title}</h1>
      {children}
    </Error>
  );
}

export default PageContent;
