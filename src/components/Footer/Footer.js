import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
// import {Contact} from '../contact/Contact'
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider />
      <br />
      <SectionTitle id='contact'>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91-7004871356">+91-7004871356</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:faizan8t8@gmail.com">
          faizan8t8@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="">
          Patna, Bihar
          </LinkItem>
        </LinkColumn>
      </LinkList>
  {/*<Contact />*/}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Credit: Pavan Kumar</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/faazah" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/faaz/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons
            href="https://twitter.com/AjayKum01055409"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
