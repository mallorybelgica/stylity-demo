import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #f5f3fd;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaLink = styled.a`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
`;

export const Name = styled.h5`
  text-transform: uppercase;
  text-align: center;
  margin: 15px 0;
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 5px;
  font-style: italic;
`;
