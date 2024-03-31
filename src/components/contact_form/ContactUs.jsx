import React from "react";
import Navbar from "../navbar/Navbar";
import Divider from "../common/divider/Divider";
import FaqSection from "../common/faq/FaqSection";
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div>
      <Navbar></Navbar>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Email Address"
              placeholder="your@gmail.com"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Mobile Number"
              placeholder="1234567890"
              required
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Your City"
              placeholder="Indore"
              required
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Message/Query"
              placeholder="Remarks"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control}>Submit</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
      <div className="mt-5">
        <Divider title={"Frequently Asked Questions"} />
        <p style={{ textAlign: "center", fontWeight: "500" }}>
          Quick Answers to Your Queries
        </p>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
}

export default ContactUs;
