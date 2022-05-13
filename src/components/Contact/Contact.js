import React from 'react'
import { 
    ContactContainer,
    ContactTitle,
    ContactWrapper,
    ContactLeft,
    ContactRight,
    ContactInfo,
    ContactSocialMedia,
    ContactSocialMediaLink,
    ContactInfoWrapper,
    PhoneIcon,
    MapIcon,
    MailIcon,
    LinkedInIcon,
    GithubIcon
} from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <ContactWrapper>
            <ContactLeft>
                <ContactTitle>Contact Me</ContactTitle>
                <ContactInfo>
                    <ContactInfoWrapper>
                        <MapIcon /> 
                        Queens, New York
                    </ContactInfoWrapper>
                    <ContactInfoWrapper>
                        <MailIcon /> 
                        guerrk83z@gmail.com
                    </ContactInfoWrapper>
                    <ContactInfoWrapper>
                        <PhoneIcon /> 
                        +1 516 784 7791
                    </ContactInfoWrapper>
                </ContactInfo>
                <ContactSocialMedia>
                    <ContactSocialMediaLink href="https://www.linkedin.com/in/kevin-guerrero-184511b5"><LinkedInIcon /></ContactSocialMediaLink>
                    <ContactSocialMediaLink href="https://github.com/keguerrero8"><GithubIcon /></ContactSocialMediaLink>
                </ContactSocialMedia>
            </ContactLeft>
            <ContactRight>
            </ContactRight>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
