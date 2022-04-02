import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

/* Running from server side & regenerated this when have request from server */
// no need revalidate!
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from APIs
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

/* --- SSG --- */
/* Static site generation & Not regenerated new when have request from server */
export async function getStaticProps() {
  // fetch data from APIs
  const client = await MongoClient.connect(
    "mongodb+srv://chachchai:dhvd6gdiupo@node-complete-cluster.dq9dg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // .find() without arguments will findAll
  // .toArray() set documents to be array
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    /* Incremental static generation with second unit for request and regenerated this page frequently */
    revalidate: 1,
  };
}

export default HomePage;
