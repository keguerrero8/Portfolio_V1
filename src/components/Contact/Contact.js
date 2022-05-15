import React, {useRef} from 'react'
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
    GithubIcon,
    ContactText,
    FormContainer,
    InputContainer,
    InputSmall,
    InputLarge,
    TextArea,
    Button,
    ButtonContainer
} from './ContactElements'

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <ContactContainer id="contact">
        <ContactWrapper>
            <ContactLeft>
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
                <ContactTitle>Contact Me</ContactTitle>
                <ContactText>
                    I am actively seeking opportunities in software engineering but if you want to just get in touch my inbox is always open. Just shoot me a message 
                    and I'll get back to you as soon as I can!
                </ContactText>
                <FormContainer ref={formRef} onSubmit={handleSubmit}>
                    <InputContainer>
                        <InputSmall placeholder="Name" name="user_name"/>
                        <InputSmall placeholder="Email" name="user_email"/>
                    </InputContainer>
                    <InputContainer>
                        <InputLarge placeholder="Subject" name="user_subject"/>
                    </InputContainer>
                    <TextArea placeholder="Enter Message here..." name="message"/>
                    <ButtonContainer>
                        <Button>Send</Button>
                    </ButtonContainer>
                </FormContainer>
            </ContactRight>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
