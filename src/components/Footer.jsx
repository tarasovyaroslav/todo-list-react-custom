import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const FooterStyled = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ClearButton = styled(Button)`
  min-width: 8px;
  padding: 0 8px;
`;

const Footer = ({ clear }) => {
  return (
    <FooterStyled>
      <ClearButton onClick={() => clear()}>
        Clear completed
      </ClearButton>
    </FooterStyled>
  );
};

export default Footer;
