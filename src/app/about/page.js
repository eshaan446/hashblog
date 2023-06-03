import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "HashBlog About Information",
  description: "This is About Page",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Unleash Your Voice:</h1>
          <h2 className={styles.imgDesc}>
          Discover, Share, and Connect on our Blogging Platform
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            A complete end-to-end blogging platform, where ideas come alive and stories find their voice. We are a passionate community of writers, thinkers, and storytellers who have come together to create a platform that celebrates the art of blogging. At our core, we believe that everyone has a story to tell and a unique perspective to share. Whether you are a seasoned writer or just starting your blogging journey, our platform is designed to provide you with a supportive and engaging space to express yourself. We offer a wide range of topics and categories to explore, from technology and innovation to lifestyle and personal growth. Join our vibrant community of bloggers and let your words resonate with readers from around the world. It&apos;s time to unleash your creativity, inspire others, and make your mark in the blogosphere. Start writing and be part of the conversation today.
            <br />
            <br />
            We are a community-driven platform that believes in the power of ideas and the beauty of expression through the written word. Whether you&apos;re a seasoned writer or a novice blogger, our platform provides the perfect canvas for you to unleash your creativity and share your insights with the world. Dive into a myriad of topics, spanning from technology trends to personal development, from cultural critiques to creative storytelling. Connect with like-minded individuals, engage in thoughtful discussions, and discover new perspectives that expand your horizons. With a user-friendly interface and a supportive community, we strive to create an environment where your voice can flourish. So, pick up your metaphorical pen and embark on a journey of self-discovery, enlightenment, and connection. Together, let&apos;s inspire, educate, and entertain through the power of words.
          </p>
          <p className={styles.desc}>
          Welcome to our thriving community of passionate writers and avid readers, where the art of storytelling takes center stage. We are dedicated to fostering an inclusive platform that celebrates the diversity of voices and perspectives. Whether you&apos;re an experienced wordsmith or a budding writer, our platform provides a nurturing space for you to unleash your creativity and share your unique insights with the world. Explore a vast array of topics, ranging from science and technology to lifestyle and beyond, and delve into a world of thought-provoking ideas and engaging narratives.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Our platform is a vibrant hub for writers and readers alike, dedicated to nurturing creativity, fostering intellectual growth, and fostering meaningful connections. Here&apos;s an overview of what we do:

            <br/><br/>●Inspire and Empower:
            We believe in the transformative power of words. Our platform inspires writers to unleash their creative potential and empowers them to share their unique perspectives with a global audience. Through a supportive and inclusive environment, we encourage individuals to explore their passions, find their voice, and make a lasting impact through their writing.

            <br/><br/>●Curate Diverse Content:
            We curate a vast array of topics and genres to cater to the diverse interests of our readers. From technology and science to arts and culture, from personal development to societal issues, our content covers a wide spectrum of subjects. Our goal is to provide a rich tapestry of knowledge and entertainment that fuels curiosity, sparks conversations, and broadens horizons.

            <br/><br/>●Community Building:
            We understand the importance of building connections in the digital age. Our platform fosters a thriving community of writers and readers, where individuals can engage in thoughtful discussions, share feedback, and form meaningful relationships. Through comments, likes, and shares, we encourage interaction and create a sense of belonging, cultivating a dynamic ecosystem where ideas flourish.

            <br/><br/>●Collaboration Opportunities:
            We believe in the power of collaboration. Our platform facilitates connections between writers, opening doors for collaborative projects, guest blogging, and creative partnerships. By connecting talented individuals, we foster a culture of collaboration that leads to the creation of innovative and impactful content.

            Whether you&apos;re a writer looking for a platform to share your ideas or a reader seeking engaging and thought-provoking content, our platform is your digital oasis. Join us as we celebrate the written word, inspire meaningful discussions, and build a community that cherishes knowledge, creativity, and the joy of reading and writing.

          </p>
          {<Button url="/contact" text="Contact Us" />}
        </div>
      </div>
    </div>
  );
};

export default About;