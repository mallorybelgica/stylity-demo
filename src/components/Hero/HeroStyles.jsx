import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1591178761188-885caa0b4fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2958&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
  ::before {
    background: linear-gradient(to top, #5c57d1 0%, #f5f3fd 100%);
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.8;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  color: #89d9d0;
  font-size: 65px;
  font-family: "Bebas Neue", sans-serif;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25); ;
`;

export const Headline = styled.h2`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 550px;
  margin: 0;
  font-size: 45px;
  font-weight: 600;
  line-height: 1.2;
`;

export const SubHeadline = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

export const ButtonWrapper = styled.div``;

export const DemoButton = styled.button`
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 240px;
  height: 60px;
  border-radius: 15px;
  border: none;
  margin: 20px 0;
  cursor: pointer;
`;
