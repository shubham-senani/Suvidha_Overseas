import React from "react";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./faqsection.module.css";

const placeholder1 =
  "We offer a comprehensive range of services to assist students in pursuing their education abroad. This includes personalized counseling, assistance with university selection and application, visa guidance, and post-acceptance support.";
const placeholder2 =
  "Our consultancy provides expert guidance and support at every step of the process, from choosing the right university and program to navigating the application process and securing necessary documentation. We strive to make the study abroad journey as smooth and stress-free as possible for our clients.";
const placeholder3 =
  "We specialize in study abroad programs in a wide range of countries, including but not limited to the United States, the United Kingdom, Canada, Australia, New Zealand, Germany, and many more. Our experienced team can provide valuable insights and assistance for studying in various destinations around the globe.";
const placeholder4 =
  "Yes, we offer comprehensive assistance with visa applications and documentation. Our experienced consultants will guide you through the process, help you gather the required documents, and provide support in filling out the necessary forms to increase your chances of a successful visa application.";
const placeholder5 =
  "The requirements for studying abroad vary depending on the country, university, and program you are interested in. Generally, you will need to meet academic qualifications, provide proof of English language proficiency (such as TOEFL or IELTS scores), submit letters of recommendation, and complete any additional requirements specified by the university or program. Our consultants will help you understand and fulfill these requirements to ensure a smooth application process.";

function FaqWithImage() {
  return (
    <div className="p-5">
      <Container size="" className="">
        <Grid id="faq-grid" gutter={50} className="">
          <Grid.Col className="">
            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="query1">
                <Accordion.Control
                  className="p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  What services do you offer?
                </Accordion.Control>
                <Accordion.Panel>{placeholder1}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="query2">
                <Accordion.Control
                  className="p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  How can your consultancy help me in studying abroad?
                </Accordion.Control>
                <Accordion.Panel>{placeholder2}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="query3">
                <Accordion.Control
                  className="p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  What countries do you specialize in for study abroad programs?
                </Accordion.Control>
                <Accordion.Panel>{placeholder3}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="query4">
                <Accordion.Control
                  className="p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  Do you assist with visa applications and documentation?
                </Accordion.Control>
                <Accordion.Panel>{placeholder4}</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item className={classes.item} value="query5">
                <Accordion.Control
                  className="p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  What are the requirements for studying abroad?
                </Accordion.Control>
                <Accordion.Panel>{placeholder5}</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control
                  className="p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder5}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default FaqWithImage;
