import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;
`;

export const SliderButton = styled.span`
  cursor: pointer;
`;

export const Slider = styled.div`
  width: 100vw;
  height: 490px;
  position: absolute;
  top: -200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
`;

export const Image = styled.img`
  width: 225px;
  left: 9px;
  border-radius: 30px;
  position: absolute;
  z-index: 9;
`;

export const MockPhoneWrapper = styled.div`
  height: 100%;
  width: 242px;
  position: relative;
`;

export const Iphone = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 10;
`;
