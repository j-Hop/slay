import { SpinnerDotted } from 'spinners-react';
import styled from 'styled-components';

const LoaderPosition = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  block-size: 100vh;
  inline-size: 100vw;
`;

export const Loader = () => {
  return (
    <LoaderPosition>
      <SpinnerDotted
        color="rgb(16, 57, 49)"
        size={90}
        speed={100}
        thickness={180}
      />
    </LoaderPosition>
  );
};
