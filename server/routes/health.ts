export default defineEventHandler((event) => {
  setResponseHeader(event, "content-type", "text/plain");
  return "ok\n";
});
