import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "jkl30cwv",
  dataset: "production",
  apiVersion: "2022-10-10",
  useCdn: true,
});
