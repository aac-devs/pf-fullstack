import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
`;

const Footer = () => {
  const {
    profile: { data: profile },
  } = useSelector((state) => state.data);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (profile?.length > 0) {
      setEmail(profile[0].email);
    }
  }, [profile]);

  return (
    <Container>
      <div>&copy; Andrés Arana Castillo - 2021</div>
      <div>{email}</div>
    </Container>
  );
};

export default Footer;
