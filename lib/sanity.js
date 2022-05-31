import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "ja62ktf8",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "skHRUtjh41awusReakbVX9SL94RMy1Wr7eNTXrYEecABN09gWPSDyCY34OmYT7xbUk3vjyMSfD2ZB5RRcUb0mYdsO4RHkvfbxCuCa1BnCAgIlxJDUt3BHrgNTepGa0aNFw4cL8d0KAA9v9ykKYRt2ZKYqMprXlHQBzRZARrKI02uV97CtVKM", // or leave blank for unauthenticated usage
  useCdn: false // `false` if you want to ensure fresh data
});
