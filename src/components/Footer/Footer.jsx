import {
  Name,
  Wrapper,
  Copyright,
  SocialMediaWrapper,
  SocialMediaLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Wrapper>
      <SocialMediaWrapper>
        <SocialMediaLink
          href="https://github.com/mallorybelgica"
          target="_blank"
        >
          github
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.linkedin.com/in/mallorybelgica"
          target="_blank"
        >
          linkedin
        </SocialMediaLink>
      </SocialMediaWrapper>
      <Name>Mallory Belgica</Name>
      <Copyright>© Copyright 2022</Copyright>
      <Copyright>All Rights Reserved.</Copyright>
    </Wrapper>
  );
};

export default Footer;
