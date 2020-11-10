import styled from 'styled-components';

export const StyledLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding: 6rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    /* This trick allows me to zoom in into the image without distort it with the width of 100% */
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const StyledHide = styled.div`
  overflow: hidden;
`;
