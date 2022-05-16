import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
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
    ButtonContainer,
    SubmitText
} from './ContactElements'

const Contact = () => {
  const formRef = useRef()
  const [isSent, setSent] = useState(false)
  const [isValid, setValid] = useState(true)
  const [formData, setFormData] = useState({
      user_name: "",
      user_email: "",
      user_subject: "",
      message: ""
  })

  const handleChange = (e) => {
      setFormData({
          ...formData,
         [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let isSubmitValid = true
    for (const data in formData) {
        if (formData[data] === "") {
            isSubmitValid = false
        }
    }

    if (isSubmitValid) {
        emailjs.sendForm('service_0sd1hwv', 'template_d9mpkcn', formRef.current, 'QxOOcszgK8UxwmM-h')
        .then((result) => {
            setValid(true)
            setSent(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    } 
    else {
        setValid(false)
        setSent(false)
    }

  }

  return (
    <ContactContainer id="contact">
        <ContactWrapper>
            <ContactLeft>
                <ContactInfo>
                    <ContactInfoWrapper primary>
                        <MapIcon /> 
                        Queens, New York
                    </ContactInfoWrapper>
                    <ContactInfoWrapper primary>
                        <MailIcon /> 
                        guerrk83z@gmail.com
                    </ContactInfoWrapper>
                    <ContactInfoWrapper primary>
                        <PhoneIcon /> 
                        +1 516 784 7791
                    </ContactInfoWrapper>
                </ContactInfo>
                <ContactSocialMedia primary>
                    <ContactSocialMediaLink href="https://www.linkedin.com/in/kevin-guerrero-184511b5"><LinkedInIcon /></ContactSocialMediaLink>
                    <ContactSocialMediaLink href="https://github.com/keguerrero8"><GithubIcon /></ContactSocialMediaLink>
                </ContactSocialMedia>
            </ContactLeft>
            <ContactRight>
                <ContactTitle>Contact Me</ContactTitle>
                <ContactInfoWrapper>
                        <MailIcon /> 
                        guerrk83z@gmail.com
                </ContactInfoWrapper>
                <ContactText>
                    Want to get in touch or discuss opportunities? Just shoot me a message 
                    and I'll get back to you as soon as I can!
                </ContactText>
                <FormContainer ref={formRef} onSubmit={handleSubmit}>
                    <InputContainer>
                        <InputSmall placeholder="Name" name="user_name" onChange={handleChange}/>
                        <InputSmall placeholder="Email" name="user_email" onChange={handleChange}/>
                    </InputContainer>
                    <InputContainer>
                        <InputLarge placeholder="Subject" name="user_subject" onChange={handleChange}/>
                    </InputContainer>
                    <TextArea placeholder="Enter Message here..." name="message" onChange={handleChange}/>
                    <ButtonContainer>
                        <SubmitText>
                            {isSent? "Thank you for the message." : ""}
                            {isValid? "" : "Oops, seems like your missing something"}
                        </SubmitText>
                        <Button type="submit">Send</Button>
                    </ButtonContainer>
                </FormContainer>
                <ContactSocialMedia >
                    <ContactSocialMediaLink href="https://www.linkedin.com/in/kevin-guerrero-184511b5"><LinkedInIcon /></ContactSocialMediaLink>
                    <ContactSocialMediaLink href="https://github.com/keguerrero8"><GithubIcon /></ContactSocialMediaLink>
                </ContactSocialMedia>
            </ContactRight>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
