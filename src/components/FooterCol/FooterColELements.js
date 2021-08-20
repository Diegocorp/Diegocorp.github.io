import styled from "styled-components";

export const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    .heading {
      font-size: 2rem;
    }
    a {
      font-size: 1.6rem;
    }
  }
`;
