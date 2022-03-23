import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    address: "Some address 5, 12345 Some city",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1510428571240-8a7a15ade3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    address: "Some address 10, 67890 Some city",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Some address 15, 23456 Some city",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    /* Incremental static generation with second unit for request and regenerated this page frequently */
    revalidate: 1,
  };
}

export default HomePage;
