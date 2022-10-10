import {
  Wrapper,
  Headline,
  SubHeadline,
  ButtonWrapper,
  Title,
  DemoButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Wrapper>
      <Title>S T Y L I T Y</Title>
      <Headline>Express yourself and get inspired with Stylity</Headline>
      <SubHeadline>
        Download the Stylity demo, a personal project inspired by Polyvore.
      </SubHeadline>
      <ButtonWrapper>
        <a href="https://expo.dev/artifacts/eas/Ew98qLz5vScTM6phmxaHD.tar.gz">
          <DemoButton>Download the IOS Demo</DemoButton>
        </a>
        {/* <a href="https://expo.dev/artifacts/eas/wMFDtS2mEjtVbL5XEt6UKT.apk">
          <button>Download the Android demo</button>
        </a> */}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Hero;
